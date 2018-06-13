'use strict';

// Import de mongoose
var mongoose = require('mongoose');
// Import du modèle Channels
var Channels = mongoose.model('Channels');

// ====================================================
// ======================  CRUD  ======================
// ====================================================

// Créer et retourn un Channel
exports.createChannel = function (req, res) {
    let new_channel = new Channels(req.body);
    new_channel.save(function (err, new_channel) {
        if (err) {
            res.send(err);
        }
        res.json(new_channel);
    });
};

// Retourne tous les utilisateurs
exports.getAllChannels = function (req, res) {
    Channels.find({}, function (err, channels) {
        if (err) {
            res.send(err);
        }
        res.json(channels);
    });
};

exports.getChannelById = function (req, res) {
    Channels.findById(req.params.channelId, function (err, channel) {
        if (err) {
            res.send(err);
        }
        res.json(channel);
    });
};