const { Router } = require('express');
const ClassController = require('../controller/ClassController');

const router = Router();

router.get('/classes', ClassController.getClass);

module.exports = router;