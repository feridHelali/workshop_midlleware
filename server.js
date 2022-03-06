const express = require('express');
const res = require('express/lib/response');

const app=express()



app.get('/',[m1,m2],function(req,res){
    console.log(req.passedValue);

    console.log('GET / request Handler is running');
    res.json({message:"API response on GET /"})
})

app.use(mlError);

app.listen(3000,function(){
    console.log('Server Listening on http://localhost:3000')
})

function m1(req,res,next){
    let passedValue={passport:'Ok'};
    req.passport=passedValue;
    throw Error('Hi i am an error')
    console.log('running th m1 middleware');
    next()
}

function m2(req,res,next){
    req.passedValue={message:":("}
    console.log('running th m2 middleware');
    next()
}

function mlError(error,req,res,next){
    console.log('Error middleware in action');
    res.json({error:'Error from the mlError midleware',error})
}