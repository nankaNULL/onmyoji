var express = require("express");
var pool = require("../pool.js");
var router = express.Router();

// 商品列表
router.get("/",(req,res)=>{
    pool.query("select *from onmyoji_goods",(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }
    })
})


module.exports = router;