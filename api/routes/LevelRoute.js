const { Router } = require('express');
const LevelController = require('../controller/LevelController');

const router = Router();

router.get('/levels', LevelController.getLevel);

module.exports = router;
