"use strict";

var redis = require("redis"),
    client = redis.createClient();
exports.storeDetail = function(req, res){
	var hardware_data = req.body;
	var uuid = hardware_data.system_details['uuid'];
	console.log(uuid);
	client.set(uuid, JSON.stringify(hardware_data));
    res.status(200);
    res.send({status:"Success"});
};
