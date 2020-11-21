const { json } = require("body-parser");
var express = require("express");
var cors = require('cors');
var app = express();

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: 'jenaro',
    password:'9haVCkd^UCdA',
    database:"db_um_problema"
});
app.use(cors());
app.use(express.json());


app.get("/demanda", (req,resp) =>{
    var demanda = req.body;
    console.log("GET-Demandas");

    connection.query("SELECT * FROM demandas",(err,result) =>{
        if(err){
            console.log(err);
            resp.status(500).end();

        }else{
            resp.status(200);
            resp.json(result)
            
        }
    } );

});


// Rutes for Re
app.post("/demanda", (req,resp) =>{
    var demanda = req.body;
    console.log("POST-Demandas");
    // 
    connection.query("INSERT INTO demandas SET ?",[demanda],(err,result) =>{
        if(err){
            console.log(err);
            resp.status(500).end();

        }else{
            resp.status(200);
            
            resp.json(result.userId)
            
        }
    } );
    // console.log(JSON.stringify(demanda));
    // resp.send("OK")
});

app.get("/demanda/:demaId", (req,resp) =>{
    var demaId= req.params.demaId
    console.log("GET - Demanda ID: "+demaId);

    casa=connection.query("SELECT * FROM demandas WHERE iddemandas=?",[demaId], (err,result) => {
        
        if(err){
            console.log(err);
            resp.status(500).end();

        }else{
            resp.status(200);
            resp.json(result)
            
        }
    });


    // resp.send("Sucesso")
    // console.log("GET - Demanda ID: "+demaId);
});

app.put("/demanda/:demaId",(req,resp) => {
    var demaId= req.params.demaId
    // resp.send("Successful Operation")
    console.log("PUT - Demanda ID: "+demaId);
    var demanda = req.body;

    connection.query("UPDATE demandas SET ? WHARE iddemandas=?",[demanda,demaId],(err,result) =>{

        if(err){
            console.log(err);
            resp.status(500).end();

        }else{
            resp.status(200);
            resp.json(result)
            
        }
    } );

});

app.delete("/demanda/:demaId",(req,resp) => {
    var demaId= req.params.demaId

    resp.send("Successful Operation")
    console.log("DELETE - Demanda ID: "+demaId);

    connection.query("DELETE FROM demandas WHARE iddemandas=?",[demaId],(err,result) =>{

        if(err){
            console.log(err);
            resp.status(500).end();

        }else{
            resp.status(200);
            resp.json(result)
            
        }
    } );

});



// Gerecenciar demandas

app.post("/gerirdemandas", (req,resp) =>{
    var gerirdemandas = req.body;

    console.log(JSON.stringify(gerirdemandas));
    resp.send("OK")
});

app.get("/gerirdemandas:gerirId", (req,resp) =>{
    var gerirId= req.params.gerirId
    resp.send("Successful Operation");
    console.log("GET - Gerencair Demanda ID: "+gerirId);
});

app.path("/gerirdemandas:gerirId",(req,resp) =>{
    var gerirdemandas = req.params.gerirId
    resp.send("Successful Operation");
    console.log("PUT - Gerencair Demanda ID: "+gerirId);

});

app.put("/gerirdemandas:gerirId",(req,resp) => {
    var gerirId= req.params.gerirId
    resp.send("Successful Operation")
    console.log("PUT - Gerencair Demanda ID: "+gerirId);
});

app.delete("/gerirdemandas:gerirId",(req,resp) => {
    var gerirId= req.params.gerirId

    resp.send("Successful Operation")
    console.log("DELETE - Gerencair Demanda ID: "+gerirId);
});



// Gerenciar Usuario

app.post("/usuario", (req,resp) =>{
    var usuario = req.body;

    console.log(JSON.stringify(usuario));
    resp.send("OK")
});

app.get("/usuario/:userId", (req,resp) =>{
    var userId= req.params.userId
    resp.send("Successful Operation")
    console.log("GET - User ID: "+userId);
});

app.put("/usuario/:userId",(req,resp) => {
    var userId= req.params.userId
    resp.send("Successful Operation")
    console.log("PUT - User ID: "+userId);
});

app.path("/usuario/:userId",(req,resp) =>{
    var gerirdemandas = req.params.gerirId
    resp.send("Successful Operation");
    console.log("PUT - User ID: "+gerirId);

});

app.delete("/usuario/:userId",(req,resp) => {
    var userId= req.params.userId

    resp.send("Successful Operation")
    console.log("DELETE - User ID: "+userId);
});

app.listen(3000,() =>{
    console.log("Um problemaAPP - Port 3000")
});