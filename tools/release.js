// Prepara una versión: calcula la lista de archivos y su huella, y regenera sw.js y js/version.js.
// Uso: node tools/release.js
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const ROOT = path.resolve(__dirname, '..');
const INCLUDE = ['index.html', 'manifest.webmanifest', 'css', 'js', 'courses', 'fonts', 'icons'];
const SKIP = /(^|\/)(version\.js|LICENSE[^/]*)$/;

function walk(rel) {
  const abs = path.join(ROOT, rel);
  const st = fs.statSync(abs);
  if (st.isFile()) return [rel];
  return fs.readdirSync(abs).sort().flatMap(f => walk(path.posix.join(rel, f)));
}
const files = INCLUDE.flatMap(walk).filter(f => !SKIP.test(f));
const h = crypto.createHash('sha256');
for (const f of files) { h.update(f); h.update(fs.readFileSync(path.join(ROOT, f))); }
const hash = h.digest('hex').slice(0, 10);
const d = new Date();
const version = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}-${hash}`;
fs.writeFileSync(path.join(ROOT, 'js/version.js'), `window.GLOSSA_VERSION = '${version}';\n`);
const assets = ['./', 'js/version.js'].concat(files);
const tpl = fs.readFileSync(path.join(__dirname, 'sw.template.js'), 'utf8');
fs.writeFileSync(path.join(ROOT, 'sw.js'), tpl.replace('__VERSION__', version).replace('__ASSETS__', JSON.stringify(assets, null, 1)));
console.log('versión', version, '·', assets.length, 'archivos en caché');
