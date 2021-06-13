const router = require('express').Router();
const {Customer} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newCustomer = await Customer.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newCustomer);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {

    try {
      
      const custData = await Customer.findOne({ where: { email: req.body.email } });
      if (!custData) {
        res
          .status(400)
          .json({ message: 'Incorrect email/password, please try again' });
        return;
      }
  
      const validPassword = await custData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect username/password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.cust_id = custData.id;
        req.session.logged_in = true;
        req.session.staff = false;
        
        res.json({ customer: custData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

module.exports = router;