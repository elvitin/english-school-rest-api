const database = require('../models');

class ClassController {
  constructor() {}

  static async getClass(_, res) {
    try {
      const _class = await database?.Class.findAll();
      return res.status(200).json(_class);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }

  //get class
  //create class
  //update class
  //delete class
}

module.exports = ClassController;
