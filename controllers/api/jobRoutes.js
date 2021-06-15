const router = require('express').Router();
//const { job } = require('cron');
const { Job, Staff } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const jobData = await Job.findAll({
          where: {staff_id: req.params.id}
        //include: [
        //  {
        //    model: Staff,
        //    attributes: ['name'],
        //  },
        //],
      });

      console.log(jobData);
  
      // Serialize data so the template can read it
      //const jobs = jobData.map((job) => job.get({ plain: true }));
      const jobs = jobData.get({plain: true});
      console.log(jobs);
  
      // Pass serialized data and session flag into template
      res.render('staffDash', { 
        //jobs, 
        //...job,
        ...jobs,
        logged_in: req.session.logged_in,
        staff: req.session.staff
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;
