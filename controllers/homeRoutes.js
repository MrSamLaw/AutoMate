const router = require('express').Router();
const { Staff, Customer } = require('../models');


router.get('/', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('homepage', { logged_in: req.session.logged_in, staff: req.session.staff, id: req.session.staff_id || req.session.cust_id });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/registration', async (req, res) => {
  try {
    res.render('registration');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/staffLogin', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect(`/api/staff/${req.session.staff_id}`);
    return;
  }

  res.render('staffLogin');
});

router.get('/customerLogin', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect(`/api/customer/${req.session.cust_id}`);
    return;
  }

  res.render('customerLogin');
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;