"use strict";
 var async=require('async');
  var redis = require("redis"),
    client = redis.createClient(),
    _     = require('underscore');
  var app, socket;
  var io = require('socket.io');
  var c;

  var initSocket = function() {
    socket  = io.listen(app);
    socket.on('connection', function(client) {
      c = client;
   });
  }

var storeDetail = function(req, res){
	var hardware_data = req.body;
	var uuid = hardware_data.system_details['uuid'];
	// console.log(hardware_data);
  var old = client.get(uuid);
  console.log(hardware_data);
  console.log('-------------------------------------------------------------------');
  var old;
  console.log(old);
  if(!_.isEqual(old, hardware_data)) {
    // TRIGGER NOTIFICATION
    console.log("CHANGED");
     client.emit("message","HARDWARE CHANGED");
  }
  client.set(uuid, JSON.stringify(hardware_data));
  res.status(200);
  res.send({status:"Success"});

};

var getDetail = function(req, res){
	var uuid = req.params.uuid;
	var string_data = client.get(uuid);
	var json_data = JSON.parse(string_data);
	res.status(200);
	res.send(json_data);
};

var getAll = function(req, res){
	var jobs = [];
    client.keys('*', function (err, keys) {
        if (err) return console.log(err);
        if(keys){
            async.map(keys, function(key, cb) {
               client.get(key, function (error, value) {
                    if (error) return cb(error);
                    jobs.push(JSON.parse(value));
                    cb(null, jobs);
                });
            }, function (error, results) {
               if (error) return console.log(error);
               res.json(results);
            });
        }
    });
};

module.exports = function(server) {
  app = server;
  initSocket();
  return {
    getAll  : getAll,
    getDetail :   getDetail,
    storeDetail : storeDetail
  }
}
