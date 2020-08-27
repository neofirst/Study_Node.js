const mongoose = require('mongoose');

module.exports=()=>{
    const connect = ()=>{
        if(process.env.NODE_ENV !== 'production'){
            mongoose.set('debug',true);
        }
    mongoose.connect('mongodb://logiall:logiall@localhost:27017/admin',{
        dbName:'nodejs',
        }, (error) => {
            if(error){
                console.log('몽고디비 연결 에러 : ',  error);
            }
            else{
                console.log('몽고디비 연결 성공');
            }
        });
    };
    connect();
    mongoose.connection.on('error',(error)=>{
        console.log('몽고디비 연결 에러 : ',  error);
    });
    mongoose.connection.on('disconnected',()=>{
        console.log('몽고디비 연결 끊김. 재시도');
        connect();
    });
    require('./user');
    require('./comment');
}