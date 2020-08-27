const fs = require('fs');
//파일 복사
const readStream = fs.createReadStream('readme.txt');
const writeStream = fs.createWriteStream('writePipe.txt');
readStream.pipe(writeStream);