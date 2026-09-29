import fs from 'fs';

fs.mkdirSync('www', { recursive: true });
fs.copyFileSync('index.html', 'www/index.html');

console.log('Lymbuu web bundle ready');
