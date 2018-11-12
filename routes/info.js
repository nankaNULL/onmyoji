var express = require("express");
var pool = require("../pool.js");
var router = express.Router();

// 式神录
router.get("/sikigami",(req,res)=>{
    var rare = req.query.rare;
    var ld = req.query.liandong;
    if(rare){
        pool.query(`select *from onmyoji_sikigami where rare=?`,[rare],(err,result)=>{
            if(err) throw err;
            if(result.length>0){
                res.send(result);
            }
        })
    }
    else{
        var sql = "select *from onmyoji_sikigami";
        if(ld) sql += " where liandong=1";
        pool.query(sql,(err,result)=>{
            if(err) throw err;
            if(result.length>0){
                res.send(result);
            }
        })
    }
});

// 新闻资讯，游戏攻略
router.get("/news",(req,res)=>{
    var type = req.query.type;
    pool.query(`select *from onmyoji_news where type=? order by time desc `,[type],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }
    })
})


module.exports = router;