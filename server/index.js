// var express = require('express')
// const http = require("http");
//
// http.createServer(function (req, res) {
//     res.end("Hello from server started by Electron app!");
//
//
//     }
// }).listen(9000);
//
//
// module.exports = function(app){
//   app.post('/hw', detailsController.hw)
// }
"use strict"

const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

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

app.post('/getDetails',function(req,res){
  console.log(req.body);
  res.status(200);
  res.send({status:"Success"});
})

app.get('/isAdmin', function(req,res){
	res.status(200);
	res.send({status:"Success",admin: true});
});


app.listen(3012, '0.0.0.0', function(){
	console.log('Server listening on port 3012');
});
