'use strict';

module.exports = function(app){
    var users = require('../controllers/usersController');
    var channels = require('../controllers/channelsController');

    app.route('/users').post(users.createUser).get(users.getAllUsers);
    app.route('/users/:userId').get(users.getUserById);

    app.route('/channels').post(channels.createChannel).get(channels.getAllChannels);
    app.route('/channels/:channelId').get(channels.getChannelById);

}