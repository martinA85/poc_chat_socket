'use strict';

// Création d'une instance de mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Création du modèle
var UsersSchema = new Schema({
    name: String,
    socketId : String
});

// Export du modèle
module.exports = mongoose.model('Users', UsersSchema);