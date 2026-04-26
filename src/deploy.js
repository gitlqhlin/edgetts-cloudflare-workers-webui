const fs = require('fs');
const path = require('path');

const workerSrc = fs.readFileSync(path.join(__dirname, 'worker.js'), 'utf8');
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

const escaped = html
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\$\{/g, '\\${');

const output = workerSrc.replace('__HTML_CONTENT__', escaped);

fs.writeFileSync(path.join(__dirname, '..', 'workers.js'), output, 'utf8');
console.log('workers.js built successfully.');
