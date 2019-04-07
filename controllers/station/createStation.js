const Station = require('../models/Station');

module.exports = async (req, res) => {
    try {
        const stationInfo = req.body;
        if (!stationInfo) throw new Error('Body is empty');

        const {title, stream} = stationInfo;
        if (!title || !stream) throw new Error('Some station fields are empty');
        await Station.create({
            title,
            stream
        });

        res.json({
            success: true,
            message: 'Station successfully created'
        });
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        });
    }
};
