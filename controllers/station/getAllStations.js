const Station = require('../models/Station');

module.exports = async (req, res) => {
    try {
        const Stations = await Station.find({});
        if (!Stations) throw new Error('Stations do not exist');
        res.json({
            success: true,
            message: Stations
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
