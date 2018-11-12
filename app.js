//使用express构建web服务器
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
//2.1:加载处理跨域模块
var cors = require("cors");

var app = express();
var server = app.listen(3000);
//托管静态资源到public目录下
app.use(express.static(__dirname+"/public"));
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//允许哪个地址跨域访问
app.use(cors({
  origin:["http://127.0.0.1:3001","http://localhost:3001"],
  credentials:true
}))
app.use(session({
  secret: '128位随机字符串',
  resave: false,
  saveUninitialized: true,
}))
//req.session
/*使用路由器来管理路由*/
app.use("/user",require("./routes/user.js"));
app.use("/info",require("./routes/info.js"));
app.use("/goods",require("./routes/goods.js"));
app.use("/comment",require("./routes/comment.js"));


