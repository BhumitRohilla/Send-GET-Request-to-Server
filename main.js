
const express = require('express');
const fs = require('fs');
const port = 5555;
const app = express()
const hostname = '127.0.0.1';

app.use(express.static(__dirname));
app.use(express.json());

app.get("/getData",function(req,res){
    console.log(req.url);
    // res.send(__dirname+"/data.json");
    let data = fs.readFile("./data.json","utf-8",function(error,data){
        console.log(data);
        res.end(data);
    })
})

app.listen(port,hostname);