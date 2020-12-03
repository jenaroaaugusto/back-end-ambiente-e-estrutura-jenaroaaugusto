const { json } = require("body-parser");
var express = require("express");
var jwt = require("jsonwebtoken");
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

app.post('/auth', (req,resp)  =>{
    var user = req.body;
    console.log(user)

    connection.query("SELECT * FROM usuario WHERE nome =? and senha = ?",[user.nome, user.senha], (err,result) =>{
        console.log(user.nome)
        var usuario = result[0];
        console.log(usuario)
        if (result.length == 0){
            resp.status(401);
            resp.send({token: null, usuario: usuario,success:false});
        }else{
            let token = jwt.sign({id: usuario.nome}, 'umproblema', {expiresIn:6000});
            console.log("Entro"+result.length )
            resp.status(200);
            resp.send({token:token,usuario:usuario,success:true});
        }
    });
});

verifica_token = (req, resp, next) =>{
    var token =  req.headers['x-access-token']; 

    if(!token){
        return resp.status(401).end();
    }

    jwt.verify(token,'umproblema',(err,decoded) => {
        if (err)
            return resp.status(401).end();

        req.usuario =decoded.id;
        next();
    });

}

app.get("/demanda",verifica_token,(req,resp) =>{
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
app.post("/demanda",verifica_token, (req,resp) =>{
    var demanda = req.body;
    console.log("POST-Demandas");
    // 
    connection.query("INSERT INTO demandas SET ?",[demanda],(err,result) =>{
        if(err){
            console.log(err);
            resp.status(500).end();

        }else{
            resp.status(200);
            
            resp.json(result.insertId)
            
        }
    } );
    // console.log(JSON.stringify(demanda));
    // resp.send("OK")
});

app.get("/demanda/:demaId",verifica_token, (req,resp) =>{
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

app.put("/demanda/:demaId",verifica_token,(req,resp) => {
    var demaId= req.params.demaId
    // resp.send("Successful Operation")
    console.log("PUT - Demanda ID: "+demaId);
    console.log(demaId)
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

app.delete("/demanda/:demaId",verifica_token,(req,resp) => {
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

app.post("/gerirdemandas", verifica_token,(req,resp) =>{
    var gerirdemandas = req.body;

    console.log(JSON.stringify(gerirdemandas));
    resp.send("OK")
});

app.get("/gerirdemandas:gerirId", verifica_token,(req,resp) =>{
    var gerirId= req.params.gerirId
    resp.send("Successful Operation");
    console.log("GET - Gerencair Demanda ID: "+gerirId);
});

app.path("/gerirdemandas:gerirId",verifica_token,(req,resp) =>{
    var gerirdemandas = req.params.gerirId
    resp.send("Successful Operation");
    console.log("PATH - Gerencair Demanda ID: "+gerirId);

});

app.put("/gerirdemandas:gerirId",verifica_token,(req,resp) => {
    var gerirId= req.params.gerirId
    resp.send("Successful Operation")
    console.log("PUT - Gerencair Demanda ID: "+gerirId);
});

app.delete("/gerirdemandas:gerirId",verifica_token,(req,resp) => {
    var gerirId= req.params.gerirId

    resp.send("Successful Operation")
    console.log("DELETE - Gerencair Demanda ID: "+gerirId);
});



// Gerenciar Usuario

app.post("/usuario",verifica_token, (req,resp) =>{
    var usuario = req.body;

    console.log(JSON.stringify(usuario));
    resp.send("OK")
});

app.get("/usuario/:userId",verifica_token, (req,resp) =>{
    var userId= req.params.userId
    resp.send("Successful Operation")
    console.log("GET - User ID: "+userId);
});

app.put("/usuario/:userId",verifica_token,(req,resp) => {
    var userId= req.params.userId
    resp.send("Successful Operation")
    console.log("PUT - User ID: "+userId);
});

app.path("/usuario/:userId",verifica_token,(req,resp) =>{
    var gerirdemandas = req.params.gerirId
    resp.send("Successful Operation");
    console.log("PUT - User ID: "+gerirId);

});

app.delete("/usuario/:userId",verifica_token,(req,resp) => {
    var userId= req.params.userId

    resp.send("Successful Operation")
    console.log("DELETE - User ID: "+userId);
});

app.listen(3000,() =>{
    console.log("Um problemaAPP - Port 3000")
});