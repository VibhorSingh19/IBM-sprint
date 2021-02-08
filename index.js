const express=require("express");
const app=express();
const knex = require('knex');
const db=knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'admin',
      database : 'postgres'
    }
  });
  
app.get("/session",(req,res)=>{
    db.select('*').from('sessionsection').then(data=>{
        res.send(data);
    });
    
});
app.get("/content/:id",(req,res)=>{
    const {id}=req.params;
    db.select('*').from('content').where({ss_id:id}).then(data=>{
        res.send(data);
    });
    
});


app.listen(8001,()=>{
    console.log("Connected to port 8001");
});