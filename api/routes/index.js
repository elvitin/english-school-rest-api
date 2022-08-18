const { json } = require('express');
const people =  require('./PeopleRoute');
const level = require('./LevelRoute');
const _class = require('./ClassRoute');

module.exports = app => {
  app.use(json());
  app.use(people);
  app.use(level);
  app.use(_class);
  // app.get('/', (req, res) => {
  //   res.status(200).json({ msg: 'New point' });
  // });
};
