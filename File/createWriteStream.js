const fs = require('fs');

const writeStream = fs.createWriteStream('./writeme.txt');
writeStream.on('finish', () =>{
    console.log('파일 쓰기 완료');
})

writeStream.write('1번쓰기\n');
writeStream.write('2번쓰기');
writeStream.end();