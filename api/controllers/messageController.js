'use strict';
var mongoose = require("mongoose");
var Message = mongoose.model("Message");

//create a message
exports.postMessage = function(req, res){
    new_message = new Message(request.body);
    new_message.save(function(err, new_message){
        if(err){
            res.send(err);
        }
        res.json(new_message);
    })
}