const express = require('express');

const app = express();

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  // Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get('/list', (req, res) => {
  res.json({
    code:0,
    data: ["高考","区块链","三生三世","崔永元","vue","小程序","react","语文高考","数学高考","英语高考","茶点小说","萨沙讲史堂","夜幕下的地安们","擦亮你的眼睛","理财","PPT","微信小程序","高考作文","红楼梦","时间管理","雨落荒原","简书交友"],
  });
});

app.listen(8080);
console.log("服务开启啦");
