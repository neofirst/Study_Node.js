var express = require('express');
var router = express.Router();

var {connectionPool} = require('../db/db.config');

router.get('/', async (req, res, next) => {
  const [data] = await connectionPool.query(`select id,email,nick from users`);
  res.send(data);
});

router.post('/paramsSelect', async (req, res, next) => {  
  const reqData = req.body;
  const [data] = await connectionPool.query(`select id,email,nick from nodejs.users where id = ? and nick = ?`, 
                                            [reqData.id,reqData.nick])
   res.send(data);
});

router.post('/paramsInsert', async (req, res, next) => {  
  const reqData = req.body;
  const [data] = await connectionPool.query(`insert into nodejs.users (id, email, nick, createdAt, updatedAt) values (?,?,?, sysdate(), sysdate())`,
                                            [reqData.id, reqData.email, reqData.nick]);  
   res.send(data);
});

router.post('/paramsUpdate', async (req, res, next) => {  
  const reqData = req.body;
  const [data] = await connectionPool.query(`update nodejs.users set nick = ? where id = ?`,
                                            [reqData.nick, reqData.id]);
   res.send(data);
});

router.post('/paramsDelete', async (req, res, next) => {  
  const reqData = req.body;
  const [data] = await connectionPool.query(`delete from nodejs.users where id = ?`,
                                            [reqData.id])
   res.send(data);
});

router.post('/procedureTest', async (req, res, next) => {  
  const reqData = req.body;
  const [data] = await connectionPool.query(`call test(?)`,
                                            [reqData.id])
   res.send(data[0]);
});

module.exports = router;
