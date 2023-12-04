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

app.use(express.static("../shadowinfinity"));

app.get("/game",function(req,res){
    res.redirect("index.html")
});

app.get("/*",function(req,res){
    res.redirect(404)
});

app.listen(3000,function() {
    console.log("Server is running on Port 3000...")
});

//   throw err;
//   ^

//   Error: Cannot find module '/Users/shadow.infinity/Desktop/Programmieren3/shadowinfinity/server.js'
//       at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
//       at Function.Module._load (node:internal/modules/cjs/loader:778:27)
//       at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//       at node:internal/main/run_main_module:17:47 {
//     code: 'MODULE_NOT_FOUND',
//     requireStack: []
//   }
  
//   Node.js v17.2.0

// funktioniert noch nicht
  