// Import des package
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var config = require('./config');

// Import des modèls
var Users = require('./api/models/usersModel');
var Channels = require('./api/models/channelsModel');
var Messages = require('./api/models/messageModel');

// Export des variables
module.exports.app = app;

// Configuration
var port = process.env.PORT || 3000;
mongoose.Promise = global.Promise;
mongoose.connect(config.database);
app.set('superSecret', config.secret);

// Initialisation de body-parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Initialisation de morgan
app.use(morgan('dev'));

// route de base
app.get('/', function (request, response) {
    response.send('vide');
});

// Import des routes
var routes = require('./api/routes/routes');
routes(app);

// Démarrage du serveur
app.listen(port);
console.log('server started on port : ' + port);