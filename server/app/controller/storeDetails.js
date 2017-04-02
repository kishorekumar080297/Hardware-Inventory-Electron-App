"use strict";
 var async=require('async');
var redis = require("redis"),
    client = redis.createClient();
exports.storeDetail = function(req, res){
	var hardware_data = req.body;
	var uuid = hardware_data.system_details['uuid'];
	// console.log(hardware_data);
	client.set(uuid, JSON.stringify(hardware_data));
    res.status(200);
    res.send({status:"Success"});
};

exports.getDetail = function(req, res){
	var uuid = req.params.uuid;
	var string_data = client.get(uuid);
	var json_data = JSON.parse(string_data);
	res.status(200);
	res.send(json_data);
};

exports.getAll = function(req, res){
	var jobs = [];
    client.keys('*', function (err, keys) {
        if (err) return console.log(err);
        if(keys){
            async.map(keys, function(key, cb) {
               client.get(key, function (error, value) {
                    if (error) return cb(error);
                    jobs.push(value);
                    cb(null, jobs);
                });
            }, function (error, results) {
               if (error) return console.log(error);
               res.json(results);
            });
        }
    });
};
