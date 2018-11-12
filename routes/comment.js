var express = require("express");
var pool = require("../pool.js");
var router = express.Router();

// 加载对应评论
router.get('/getComment',(req,res)=>{
    var nid = req.query.nid;
    pool.query(`select *from onmyoji_comment where nid = ? order by time desc`,nid,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }
        else{
            res.send("no comment");
        }
    })
});

// 评论
router.post("/postComment",(req,res)=>{
    var content = req.body.content;
    var nid = req.body.nid;
    var uname = req.body.uname;
    pool.query(`insert into onmyoji_comment values (null,?,now(),?,?)`,[content,uname,nid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({ok:1,msg:"comment success"})
        }
        else{
            res.send({ok:0,msg:"comment success"})
        }
    })
})


module.exports = router;