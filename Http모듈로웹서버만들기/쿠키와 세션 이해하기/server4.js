const http = require('http')
const fs = require('fs')
const url = require('url')
const qs = require('querystring')

const parseCookies =(cookie='')=>
  cookie.split(';')
        .map(v=>v.split('='))
        .map(([k,...vs])=>[k, vs.join('=')])
        .reduce((acc,[k,v])=>{
          acc[k.trim()]=decodeURIComponent(v);
          return acc;
        },{});

http.createServer((req,res)=>{
  const cookies = parseCookies(req.headers.cookie);
  if(req.url.startsWith('/login')){
    const {query} = url.parse(req.url);
    const {name} = qs.parse(query);
    const exprires = new Date();
    exprires.setMinutes(exprires.getMinutes + 5);
    res.writeHead(302,{
      Location:'/',
      'Set-Cookie':`name=${encodeURIComponent(name)};Expires=${exprires.toGMTString()}; httpOnly; path=/`,      
    });
    res.end();
  } else if(cookies.name){
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
  }else{
    fs.readFile('./server4.html',(err,data)=>{
      if(err){
        throw err;
      }
      res.end(data);
    });
  }
})
.listen(8083,()=>{
  console.log('8083번 포트에서 서버 대기 중입니다!-server4.js')
})