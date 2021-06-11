const router = require('express').Router();
const { Staff, Customer } = require('../models');


router.get('/', async (req, res) => {
    try {
      // Pass serialized data and session flag into template
      res.render('homepage');
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/staffLogin', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/staffDash');
      return;
    }
  
    res.render('staffLogin');
  });

  router.get('/customerLogin', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/customerDash');
      return;
    }
  
    res.render('customerLogin');
  });


module.exports = router;