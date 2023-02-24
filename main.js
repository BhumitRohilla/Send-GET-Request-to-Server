const express = require('express');
const fs = require('fs');
const port = 5555;
const app = express()
const hostname = '127.0.0.1';

app.use(express.static(__dirname));

app.get("/getData",function(req,res){
    console.log(req.url);
    // res.send(__dirname+"/data.json");
    let data = fs.readFile("data.js","utf-8",function(){
        res.end(data);
    })
})

app.listen(port,hostname);