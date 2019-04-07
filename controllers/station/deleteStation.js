const Station = require('../models/Station');

module.exports = async (req, res) => {
    try {


        const id = req.params.id;
        if (!id) throw new Error('No id');
        await Station.delete({id});
        res.json({
            success: true,
            message: 'Employee successfully deleted'
        });
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        });
    }
};

