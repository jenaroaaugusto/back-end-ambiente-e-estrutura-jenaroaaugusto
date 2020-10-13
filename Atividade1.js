// import express from 'express';
var express =require('express');
var app= express();
const path = require('path');

app.get('/aplicativo', function(req,res){
    res.send("Aplicativo Exemplo!")

});
app.get('/html',function (req,res){
    res.send("<html><head><title>Meu mundo</title> </head><body><p>Lista 03 –Tecnologias Web</p></body></html>");
});

app.post('/imagens',function(req,res){
    res.send("Imagem 1 –Imagem 2 –Imagem 3")
});

app.delete('/clientes/10',function(req,res){
    res.send("Cliente  número  10  removido com sucesso")
});


app.listen(3000,function(){
    console.log("Aplicacao Web rodando na porta 3000!\n")
});


app.get('/web', function(req, res) {
    // const index = path.join(__dirname, '/', '/web', 'index.html' );
    res.render('web/index.html')
    
    // res.sendFile(index);
});

