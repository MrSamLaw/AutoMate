const router = require('express').Router();
const Client = require('../../models/Customer');
router.get('/', async (req, res) => {
    try {
        console.log("this data was passed from the form", req.body);
    //   const staffData = await Staff.findByPk(req.params.id);
    //   const staff = staffData.get({plain: true});
    //   res.render('staffDash', {
    //     ...staff,
    //     logged_in: req.session.logged_in,
    //     staff: req.session.staff
    //   });
    } catch(err) {
      res.status(500).json(err);
    }
});
module.exports = router;