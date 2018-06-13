'use strict';

// Import de mongoose
var mongoose = require('mongoose');
// Import du modèle Users
var Users = mongoose.model('Users');

// ====================================================
// ======================  CRUD  ======================
// ====================================================

// Créer et retourn un User
exports.createUser = function (req, res) {
    let new_user = new Users(req.body);
    new_user.save(function (err, new_user) {
        if (err) {
            res.send(err);
        }
        res.json(new_user);
    });
};

// Retourne tous les utilisateurs
exports.getAllUsers = function (req, res) {
    Users.find({}, function (err, users) {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
};

// Retourne tous les utilisateurs
exports.findByName = function (req, res) {
    Users.findOne({name:req.params.name}, function (err, users) {
        if (err) {
            res.send(err);
        }
        console.log(users);
        res.json(users);
    });
};

exports.getUserById = function (req, res) {
    Users.findById(req.params.userId, function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

