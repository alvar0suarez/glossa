// Glossa · almacenamiento local (IndexedDB, con localStorage de reserva).
// Cada «documento» es un objeto JSON con su hora de cambio (_t): así se podrá sincronizar más adelante.
(function (root) {
  'use strict';
  const DB_NAME = 'glossa', OS = 'kv', LS = 'glossa:';

  function openIdb() {
    return new Promise((resolve, reject) => {
      if (!root.indexedDB) { reject(new Error('sin IndexedDB')); return; }
      let req;
      try { req = root.indexedDB.open(DB_NAME, 1); } catch (e) { reject(e); return; }
      req.onupgradeneeded = () => { req.result.createObjectStore(OS); };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
      req.onblocked = () => reject(new Error('bloqueada'));
    });
  }
  function fill(def, obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return def;
    const out = Object.assign({}, obj);
    for (const k of Object.keys(def)) {
      if (!(k in out)) out[k] = def[k];
      else if (def[k] && typeof def[k] === 'object' && !Array.isArray(def[k])) out[k] = fill(def[k], out[k]);
    }
    return out;
  }
  const clone = o => JSON.parse(JSON.stringify(o));

  const Store = {
    data: {}, def: null, db: null, mode: '', error: '', dirty: new Set(), timer: null, saving: false,
    async init(defaultFor) {
      this.def = defaultFor;
      let raw = {};
      try {
        this.db = await openIdb();
        this.mode = 'idb';
        raw = await this._readAll();
      } catch (e) {
        this.db = null;
        try {
          localStorage.setItem(LS + '_', '1'); localStorage.removeItem(LS + '_');
          this.mode = 'ls';
          for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (k && k.indexOf(LS) === 0) { try { raw[k.slice(LS.length)] = JSON.parse(localStorage.getItem(k)); } catch (err) { /* ignora */ } }
          }
        } catch (e2) {
          this.mode = 'mem';
          this.error = 'Este navegador no deja guardar datos: tu progreso se perderá al cerrar la app.';
        }
      }
      for (const k of Object.keys(raw)) this.data[k] = fill(defaultFor(k), raw[k]);
    },
    _readAll() {
      return new Promise((resolve, reject) => {
        const out = {};
        const tx = this.db.transaction(OS, 'readonly');
        const req = tx.objectStore(OS).openCursor();
        req.onsuccess = () => { const c = req.result; if (c) { out[c.key] = c.value; c.continue(); } else resolve(out); };
        req.onerror = () => reject(req.error);
      });
    },
    doc(k) {
      if (!this.data[k]) this.data[k] = fill(this.def(k), null);
      return this.data[k];
    },
    keys() { return Object.keys(this.data); },
    mark(k) {
      this.doc(k)._t = Date.now();
      this.dirty.add(k);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => this.flush(), 400);
    },
    async flush() {
      clearTimeout(this.timer);
      if (!this.dirty.size || this.mode === 'mem') return;
      if (this.saving) { this.timer = setTimeout(() => this.flush(), 300); return; }
      const keys = Array.from(this.dirty); this.dirty.clear(); this.saving = true;
      try {
        if (this.mode === 'idb') {
          await new Promise((resolve, reject) => {
            const tx = this.db.transaction(OS, 'readwrite');
            const os = tx.objectStore(OS);
            for (const k of keys) os.put(clone(this.data[k]), k);
            tx.oncomplete = () => resolve();
            tx.onerror = () => reject(tx.error);
            tx.onabort = () => reject(tx.error);
          });
        } else {
          for (const k of keys) localStorage.setItem(LS + k, JSON.stringify(this.data[k]));
        }
        if (this.error && this.mode !== 'mem') this.error = '';
      } catch (e) {
        keys.forEach(k => this.dirty.add(k));
        this.error = 'No se ha podido guardar tu progreso (' + ((e && e.name) || 'error') + '). Lo vuelvo a intentar.';
        this.timer = setTimeout(() => this.flush(), 5000);
        if (this.onerror) this.onerror(this.error);
      } finally { this.saving = false; }
    },
    exportData() {
      const data = clone(this.data);
      const aj = data.perfil && data.perfil.ajustes;
      // Las claves (Claude y voces premium) no salen nunca en las copias.
      if (aj && aj.ia) aj.ia.key = '';
      if (aj && aj.vozpro && typeof aj.vozpro === 'object') aj.vozpro.clave = '';
      return { app: 'glossa', version: 1, fecha: new Date().toISOString(), data };
    },
    importData(obj) {
      const data = obj && obj.app === 'glossa' && obj.data ? obj.data : null;
      if (!data || typeof data !== 'object' || !data.perfil) return false;
      const aj0 = this.data.perfil && this.data.perfil.ajustes;
      const key = aj0 && aj0.ia ? aj0.ia.key : '';
      const vp = aj0 && aj0.vozpro && typeof aj0.vozpro === 'object' && aj0.vozpro.clave ? clone(aj0.vozpro) : null;
      for (const k of Object.keys(data)) {
        if (!/^[\w-]{1,40}$/.test(k)) continue;
        this.data[k] = fill(this.def(k), data[k]);
        this.mark(k);
      }
      const aj = this.data.perfil.ajustes;
      if (key && aj && aj.ia && !aj.ia.key) aj.ia.key = key;
      // Voces premium: se conserva la clave de este móvil. Si la copia usa otro servicio (sin su clave), sigue el de aquí.
      if (vp && aj) {
        const nv = aj.vozpro;
        if (!nv || typeof nv !== 'object') aj.vozpro = vp;
        else if (!nv.clave) {
          if (!nv.proveedor || nv.proveedor === vp.proveedor) {
            nv.proveedor = vp.proveedor; nv.clave = vp.clave; nv.claveDe = vp.claveDe || vp.proveedor;
            if (!nv.region) nv.region = vp.region || '';
          } else aj.vozpro = vp;
        }
      }
      return true;
    },
    async persist() {
      try { if (navigator.storage && navigator.storage.persist) return await navigator.storage.persist(); } catch (e) { /* nada */ }
      return false;
    },
    async persisted() {
      try { if (navigator.storage && navigator.storage.persisted) return await navigator.storage.persisted(); } catch (e) { /* nada */ }
      return false;
    }
  };
  root.Store = Store;
  root.fillDefaults = fill;
})(window);
