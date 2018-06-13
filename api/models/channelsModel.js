'use strict';

// Création d'une instance de mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Création du modèle
var ChannelsSchema = new Schema({
    name: String
});

// Export du modèle
module.exports = mongoose.model('Channels', ChannelsSchema);