const database = require('../models');

class LevelController {
  constructor() {}

  static async getLevel(_, res) {
    try {
      const lvls = await database?.Level.findAll();
      return res.status(200).json(lvls);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
}

module.exports = LevelController;