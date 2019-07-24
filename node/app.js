var express= require("express")
var app = express()

app.listen(3000,function(){
  console.log("Server working");
})

//root route
app.get("/",function(req,res){
  // res.send("<h1>Hello. Welcome to root directory</h1>");
  res.render("welcome.ejs");
  // res.send only works for ejs file not html. ejs stands for "Embedded javascript code"
})

app.get("/:speak",function(req,res){
  var messageVar = req.params.speak;
  // console.log(message);
  res.render("echo.ejs",{message: messageVar})
  // message is the variable for echo.ejs where messageVar is the variable in app.js
})
