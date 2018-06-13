'use strict';
module.exports = function(app){
    var users = require('../controllers/usersController');
    var channels = require('../controllers/channelsController');

    app.route('/users').post(users.createUser).get(users.getAllUsers);
    app.route('/users/:userId').get(users.getUserById).put(users.updateUsersById).delete(users.deleteUserById);

    app.route('/channels').post(channels.createUser).get(users.getAllChannels);
    app.route('/channels/:channelId').get(channels.getChannelById).put(updateChannelById).delete(channels.deleteChannelById);

}