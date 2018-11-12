var express = require("express");
var pool = require("../pool.js");
var router = express.Router();

//注册
router.post("/register",(req,res)=>{
    var uname = req.body.uname,
        upwd = req.body.upwd,
        phone = req.body.phone;
    pool.query(`select *from onmyoji_user where uname=?`,[uname],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(JSON.stringify({
                ok:0,
                msg:"uname is already exist"
            }))
        }
        else{
            pool.query(`insert into onmyoji_user values(null,?,?,?,null)`,[uname,upwd,phone],(err,result)=>{
                if(err) throw err;
                if(result.affectedRows>0){
                    res.send(JSON.stringify({
                        ok:1,
                        msg:"register success"
                    }));
                }
                else{
                    res.send(JSON.stringify({
                        ok:-1,
                        msg:"register fail"
                    }))
                }
            })
        }
    })
   
})
// 登录
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
            // 这里不能用session["id"]，session.id估计是有特殊用处的
            req.session["uid"] = result[0].id;
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

// 用户是否已经登录
router.get("/islogin",(req,res)=>{
    res.writeHead(200,{
        "Content-Type":"application/json;charset=utf-8",
        "Access-Control-Allow-Origin":"*"
    });
    if(req.session["uid"] != undefined){
        var id = req.session["uid"];
        pool.query(`select *from onmyoji_user where id=?`,id,(err,result)=>{
            if(err) throw err;
            if(result.length>0){
                console.log(result);
                res.write(JSON.stringify({
                    ok:1,
                    msg:result[0].uname
                }));
                res.end();
            }
        });
    }
    else{
        res.write(JSON.stringify({
            ok:0,
            msg:"please login"
        }));
        res.end();
    }
})

// 退出登录
router.get("/signout",(req,res)=>{
    req.session["uid"] = undefined;
    console.log(req.session["uid"]);
    res.end();
});
module.exports = router;