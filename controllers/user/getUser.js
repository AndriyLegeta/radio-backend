const User = require('../models/User');
const tokenVerificator = require('../../helpers/tokenVerificator');
const secret = require('../../config/secret');

module.exports = async (req, res) => {
    try {
        const token = req.get('Authorization');
        if (!token) throw new Error('No token!');

        const {id} = tokenVerificator(token, secret);
        const isUserRegistered = await User.findById(id);

        if(!isUserRegistered) throw new Error('This user does not registered');
        const user = {
            id,
            name: isUserRegistered.name,
        };
        res.json({
            success: true,
            message: user
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
