const Station = require('../models/Station');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const token = req.get('Authorization');
        if (!token) throw new Error('No token');
        const {id} = tokenVerificator(token, secret);

        if (!req.body.title || !req.body.stream) throw new Error('Some body fields are empty');
        await Station.updateOne({
            _id: id,
        }, {
            $push: {
                stations: {
                    title: req.body.title,
                    stream: req.body.stream
                }
            }
        });
        const user = await User.findById(req.body.id);
        res.json({success: true, message: 'Station added to favourites'});

    } catch (e) {
        res.json({
            success: false,
            message: e.message
        });
    }
};
