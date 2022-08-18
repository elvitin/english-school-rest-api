const { Router } = require('express');
const PersonController = require('../controller/PersonController');

const router = Router();

router.get('/people', PersonController.getPeople);
router.get('/person/:id', PersonController.getPerson);
router.post('/person', PersonController.createPerson);
router.put('/person/:id', PersonController.updatePerson);
router.delete('/person/:id', PersonController.deletePerson);

//Enrollment routes
router.get('/person/:student_id/enrollment/:id', PersonController.getStudentEnrollment);
router.post('/person/:student_id/enrollment', PersonController.createStudentEnrollment);
router.put('/person/:student_id/enrollment/:id', PersonController.updateStudentEnrollment);
router.delete('/person/:student_id/enrollment/:id', PersonController.deleteStudentEnrollment);

module.exports = router;