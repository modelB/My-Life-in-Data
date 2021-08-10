const express = require('express');

const personController = require('../controllers/personController');

const router = express.Router();

router.get('/users', personController.getUsers, (req, res) => {
    // console.log('ID', req.query.id);
    // console.log('species', res.locals.species[0]);
    return res.status(200).json(res.locals.users);
    
  });

router.get('/userData', (req,res,next)=> {
  console.log('req in api router');
  return next();
}, personController.getUserData,
  (req, res) => res.status(200).json(res.locals.userData)
);

router.post('/addData', (req, res, next) => {
    console.log('made in api router');
    return next();
}, personController.addData,
  (req, res) => res.status(200).json('success')
);



module.exports = router;
