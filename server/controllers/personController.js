const db = require('../models/personModels');

const personController = {};

personController.getUsers = (req, res, next) => {
  // write code here
  const query = 'SELECT DISTINCT full_name FROM user_data';
  db.query(query)
    .then(data => {
      res.locals.users = data.rows;
      return next();
    })
    .catch(err => next({
      log: 'starWarsController.getCharacters run into a problem',
      message: err.message
    }));
};

personController.getUserData = (req, res, next) => {
  // write code here
  console.log('locals name in controller', res.locals.name);
  const query = `SELECT * FROM user_data WHERE full_name = '${res.locals.name}'`;
  db.query(query)
    .then(data => {
      res.locals.userData = data.rows;
      console.log('userdata', data.rows)
      return next();
    })
    .catch(err => next({
      log: 'getusers run into a problem',
      message: err.message
    }));
};

personController.addData = (req, res, next) => {
  console.log('made it to addData')
  const query = `INSERT INTO user_data (full_name, record_date, body_fat, mental_score, weight, net_worth) VALUES ('${req.body.name}', '${req.body.record_date}', '${req.body.body_fat}', '${req.body.mental_score}', '${req.body.weight}', '${req.body.net_worth}')`;
  db.query(query)
    .then(data => {
      res.locals.userData = data;
      return next();
    })
    .catch(err => {
      console.log('err in add data');
      return next({
      log: 'addData run into a problem',
      message: err.message
      })
    });

};

personController.deleteUser = (req, res, next) => {
  // write code here
  const query = `DELETE FROM user_data * WHERE full_name = '${req.body.name}'`;
  db.query(query)
    .then(data => {
      res.locals.userData = data;
      res.status(200).json(data);
    })
    .catch(err => next({
      log: 'deleteData ran into a problem',
      message: err.message
    }));
};

personController.deleteData = (req, res, next) => {
  // write code here
  //console.log('name', req.body.name);
  const query = `DELETE FROM user_data * WHERE full_name = '${req.body.name}' AND record_date = '${req.body.record_date}'`;
  
  db.query(query)
    .then(data => {
      res.locals.oldData = data.rows;
      return next();
    })
    .catch(err => next({
      log: 'deleteData ran into a problem',
      message: err.message
    }));

};

module.exports = personController;
