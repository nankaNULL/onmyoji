var express = require("express");
var pool = require("../pool.js");
var router = express.Router();

router.post("/login",(req,res)=>{
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    var reg = /^\d{11}$/;
    var user = reg.test(uname)?"phone":"uname";
    console.log(uname);
    console.log(upwd);
    pool.query(`select *from onmyoji_user where ${user} = ? and upwd = ?`,[uname,upwd],(err,result)=>{
        if(err) throw err;
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        });
        if(result.length>0){
            req.session["id"] = result[0]["id"];
            res.write(JSON.stringify({
                ok:1
            }));
        }
        else{
            res.write(JSON.stringify({
                ok:0,
                msg:"uname or password is wrong"
            }));
        }
        res.end();
    })
});

module.exports = router;