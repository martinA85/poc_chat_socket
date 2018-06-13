'use strict';

// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//declaring message schema
var MessageSchema = new Schema({
    text : String,
    datePost : {
        type : Date,
        default : Date.now
    },
    channel : {
        type : Schema.Types.ObjectId,
        ref : 'Channel'
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
})

module.exports = mongoose.model('Message', MessageSchema);