const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id: {type: number},
    username: {type: String},
    email: {type: String},
    password: {type: String},
    favouriteStations: [{
        id: {type: number},
        title: {type: String},
        link: {type: String}
    }]
});

module.exports = mongoose.model('User', UserSchema);
