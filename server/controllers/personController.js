const pool = require('../models/personModels');
const { query } = require('../models/personModels.js');

const personController = {};

personController.getUsers = (req, res, next) => {
  // write code here
  const text = 'SELECT DISTINCT full_name FROM user_data';
  pool.query(text)
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
  console.log('req in personcontroller.getuserdata');
  const text = `SELECT * FROM user_data WHERE user_id = '${req.cookies.id}' ORDER BY record_date`;
  pool.query(text)
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
  const text = `INSERT INTO user_data (full_name, record_date, body_fat, mental_score, weight, net_worth) VALUES ('${req.body.name}', '${req.body.record_date}', '${req.body.body_fat}', '${req.body.mental_score}', '${req.body.weight}', '${req.body.net_worth}')`;
  pool.query(text)
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

personController.signIn = async (req, res, next) => {
  try {
    const { id, token, first_name, last_name } = req.body
    console.log(req.body);
    console.log('see req in sign in')
    // if don't exist, add user
    // if exist, update access token
    // place in db
    // await pool.query('SELECT * FROM currency_descriptions', (err, data) => {
    //   // if (err) return next(err);
    //   console.log('data on line 31', data);
    //   console.log('err', err);
    //   return next();
    // })
    // change fav_rates to string type 
    await pool.query(`INSERT INTO users(user_id, first_name, last_name, token)
      VALUES('${id}', '${first_name}', '${last_name}', '${token}') 
      ON CONFLICT (user_id) DO UPDATE SET token = '${token}'`)
      .catch(err => {
        console.log('err in setCookie psql query', err)
      })
    // send cookie back to user
    res.cookie('token', token, { maxAge: 1800000});
    // set cookie for id as well
    res.cookie('id', id); //goddamnit brian !
    return next();
  } catch (err) {
    return next('try catch Error found in setCookie', err)
  }
}

module.exports = personController;
