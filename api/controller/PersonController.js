const database = require('../models');

class PersonController {
  constructor() {}

  static async getPeople(_, res) {
    try {
      const people = await database?.Person.findAll();
      return res.status(200).json(people);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }

  static async getPerson(req, res) {
    try {
      const { id } = req.params;
      const person = await database?.Person.findOne({
        where: { id: Number(id) }
      });
      return res.status(200).json(person);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }

  static async createPerson(req, res) {
    try {
      const { body } = req;
      const person = await database?.Person.create(body);
      return res.status(201).json(person);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async updatePerson(req, res) {
    try {
      const { id } = req.params;
      const { body } = req;
      await database?.Person.update(body, {
        where: { id: Number(id) }
      });
      res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async deletePerson(req, res) {
    try {
      const { id } = req.params;
      await database?.Person.destroy({
        where: { id: Number(id) }
      });
      res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async createStudentEnrollment(req, res) {
    try {
      const { student_id = +student_id } = req.params;
      const newEnrollment = { ...req.body, student_id };
      const _newEnrollment = await database?.Enrollment.create(newEnrollment);
      return res.status(201).json(_newEnrollment);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async getStudentEnrollment(req, res) {
    try {
      let { student_id, id } = req.params;
      [student_id, id] = [student_id, id].map(Number);
      const enrollment = await database?.Enrollment.findOne({
        where: { id, student_id }
      });
      res.json(enrollment);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async updateStudentEnrollment(req, res) {
    try {
      const { student_id, id } = req.params;
      const { body } = req;
      await database?.Enrollment.update(body, {
        where: { id: +id, student_id: +student_id }
      });
      res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async deleteStudentEnrollment(req, res) {
    try {
      const { student_id = +student_id, id = +id } = req.params;
      await database?.Enrollment.destroy({
        where: { student_id, id }
      });
      res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PersonController;
