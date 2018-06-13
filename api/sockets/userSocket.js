'use strict';

var io = require('../../server');
// Import de mongoose
var mongoose = require('mongoose');
// Import du modèle Users
var Users = mongoose.model('Users');


io.on('connection', function(socket){
    var userId = socket.request._query['userId'];
    if(userId){
        var socketId = socket.id;
        Users.findById(userId, function(err, user){
            if(err){
                socket.emit("cnx_etat", {success:false});
            }else{
                user.socketId = socketId;
                user.save(user);
                socket.emit("cnx_etat", {success:true});
            }
        });
        
    }
});
