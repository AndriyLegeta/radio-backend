const mongoose = require('mongoose');

const StationSchema = mongoose.Schema({
        id: {type: number},
        title: {type: String},
        stream: {type: String}
});

module.exports = mongoose.model('User', StationSchema);
