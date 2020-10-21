const { json } = require("body-parser");
var express = require("express");
var app = express();

app.use(express.json())

// Rutes for Re
app.post("/demanda", (req,resp) =>{
    var demanda = req.body;

    console.log(JSON.stringify(demanda));
    resp.send("OK")
});

app.get("/demanda/:demaId", (req,resp) =>{
    var demaId= req.params.demaId
    resp.send("Successful Operation")
    console.log("GET - Demanda ID: "+demaId);
});

app.put("/demanda/:demaId",(req,resp) => {
    var demaId= req.params.demaId
    resp.send("Successful Operation")
    console.log("PUT - Demanda ID: "+demaId);
});

app.delete("/demanda/:demaId",(req,resp) => {
    var demaId= req.params.demaId

    resp.send("Successful Operation")
    console.log("DELETE - Demanda ID: "+demaId);
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