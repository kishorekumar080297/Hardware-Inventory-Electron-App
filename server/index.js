"use strict"

const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

const storeDetailController = require('./app/controller/storeDetails');

//Configuring port
app.set('port',3012);


app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

//Enable CORS
app.use(cors());

app.get('/', function(req, res){
	res.send({ status: "Server up and running" });
});

//Get details from the client
app.post('/getDetails', storeDetailController(server).storeDetail);

app.get('/getDetails/:uuid', storeDetailController(server).getDetail);

app.get('/getAll', storeDetailController(server).getAll);

///Check if admin
app.get('/isAdmin', function(req,res){
	res.status(200);
	res.send({status:"Success",admin: true});
});

//Server launch
server.listen(3012, '0.0.0.0', function(){
	console.log('Server listening on port 3012');
});
