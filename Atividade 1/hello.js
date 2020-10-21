// import express from 'express';
var express =require('express');
var app= express();

app.get('/',function (req,res){
    res.send("Ola Mundo")
});

app.listen(3000,function(){
    console.log("Listen 3000")
})
