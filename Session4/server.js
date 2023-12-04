const express = require("express");

const app = express();

app.get("/",function(req,res) {
    res.send("Hello World! :)")
});

app.get("/name/:name",function(req,res){
    let name = req.params.name;
    res.send("<h1>Hello " + name + "</h1>");
});

app.get("/google",function(req,res){
    res.redirect("http://google.com")
});

app.get("/google/:search",function(req,res){
    let searchValue = req.params.search;
    res.redirect("http://google.com/search?q=" + searchValue)
});

app.get("/*",function(req,res){
    res.redirect(404)
});

app.use(express.static("/Users/shadow.infinity/Desktop/Programmieren3/shadowinfinity"));

app.get("/",function(req,res){
    res.redirect("")
});

app.listen(3000,function() {
    console.log("Server is running on Port 3000...")
});