const router = require('express').Router();

const getAllStations = require('../controllers/station/getAllStations');
const createStation = require('../controllers/station/createStation');
const deleteStation = require('../controllers/station/deleteStation');

router.get('/', getAllStations);
router.post('/', createStation);
router.delete('/:id', deleteStation);
