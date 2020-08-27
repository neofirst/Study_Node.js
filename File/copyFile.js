const fs = require('fs');

fs.copyFile('readme.txt', 'copyReadme.txt', (err)=>{
    if(err){
        console.error(err);
    }
    console.log('파일 복사');
})