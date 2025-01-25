const express = require('express');
const myController = require('../controllers')
const router = express.Router();

router.get('/', myController.awesomeFunction)
router.get('/dora', myController.dora)
router.get('/ale', myController.ale)
router.use('/contacts', require('./contacts'))

module.exports = router;