const fs = require('fs');
const writeData = '파일 쓰기 테스트';

fs.writeFile('./writeme.txt', writeData, (err, data)=>{
    if(err){
        throw err;
    }
    fs.readFile('./writeme.txt', (err, data)=>{
        if(err){
            throw err;
        }
        console.log(data.toString());
    });
});