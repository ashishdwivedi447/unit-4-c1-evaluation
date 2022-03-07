const express=require("express");

const app=express();

app.use(logger);


app.get("/books",(req,res)=>{

   return res.send({route:"/books"});
})


app.use(checkPermission);

app.get("/libraries",(req,res)=>{

   return res.send ({route:"/libraries"});
})

app.get("/authors",(req,res)=>{

   return res.send ({route:"/authors"});
})

 function logger(req,res,next){
     next();
 }

 function checkPermission(req,res,next){
     next();
 }

app.listen(5000,()=>{
    console.log("listening on port 5000");
})