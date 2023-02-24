const express = require('express');

const app=express();

app.get('/',(req,res)=>
{
    res.send("This is from Docker");
});

app.listen(100,()=>
{
    console.log("is listening on port 100");
})

