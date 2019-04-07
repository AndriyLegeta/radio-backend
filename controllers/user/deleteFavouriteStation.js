const Station = require('../models/Station');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const token = req.get('Authorization');
        if (!token) throw new Error('No token');
        const {id} = tokenVerificator(token, secret);

        await Station.updateOne({
            _id: id
        }, {
            $pull: {
                stations: {
                    title: req.params.title
                }
            }
        });
        res.json({success: true, message: 'user deleted'});
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        });
    }
};
