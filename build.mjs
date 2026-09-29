import fs from 'fs';
fs.mkdirSync('www',{recursive:true});
if(!fs.existsSync('www/index.html')) throw new Error('www/index.html missing');
console.log('Lymbuu web bundle ready');
