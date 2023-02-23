const express = require('express');
const req = require('express/lib/request');

const app=express();

app.get('/',(req,res)=>
{
    res.send("This is from Docker");
});

app.listen(6000,()=>
{
    console.log("is listening on port 5000");
})

