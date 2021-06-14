const router = require('express').Router();
const { Staff, Job } = require('../../models');
const withAuth = require('../../utils/auth');

// router.post('/', async (req, res) => {
//   try {
//     const staffData = await Staff.create(req.body);

//     req.session.save(() => {
//       req.session.staff_id = staffData.id;
//       req.session.logged_in = true;

//       res.status(200).json(staffData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.post('/login', async (req, res) => {

  try {
    
    const staffData = await Staff.findOne({ where: { username: req.body.username } });
    if (!staffData) {
      res
        .status(400)
        .json({ message: 'Incorrect username/password, please try again' });
      return;
    }

    const validPassword = await staffData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username/password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.staff_id = staffData.id;
      req.session.logged_in = true;
      req.session.staff = true;
      
      res.json({ staff: staffData, staff_id: staffData.id, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/:id', withAuth, async (req, res) => {
  try {
    const staffData = await Staff.findByPk(req.params.id);
    const staff = staffData.get({plain: true});

    res.render('staffDash', {
      ...staff,
      logged_in: req.session.logged_in,
      staff: req.session.staff
    });
  } catch(err) {
    
    res.status(500).json(err);
  }
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
