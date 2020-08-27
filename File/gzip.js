const zlib = require('zlib');
const fs = require('fs');
//압축 파일 처리
const readStream = fs.createReadStream('./readme.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./readmeGz.gz');
readStream.pipe(zlibStream).pipe(writeStream);