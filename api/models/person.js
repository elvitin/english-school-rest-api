'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Person.hasMany(models['Class'], {
        foreignKey: 'teacher_id'
      });
      Person.hasMany(models['Enrollment'], {
        foreignKey: 'student_id'
      });
    }
  }
  Person.init(
    {
      name: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      role: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Person'
    }
  );
  return Person;
};
