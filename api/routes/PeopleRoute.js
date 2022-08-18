const { Router } = require('express');
const PersonController = require('../controller/PersonController');

const router = Router();

router.get('/people', PersonController.getPeople);
router.get('/person/:id', PersonController.getPerson);
router.post('/person', PersonController.createPerson);
router.put('/person/:id', PersonController.updatePerson);
router.delete('/person/:id', PersonController.deletePerson);
router.get('/person/:student_id/enrollment/:id', PersonController.getStudentEnrollment);

module.exports = router;