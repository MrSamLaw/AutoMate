const router = require('express').Router();
const vehicleRoutes = require('./vehicleRoutes');
const staffRoutes = require('./staffRoutes');
const customerRoutes = require('./customerRoutes');
const jobRoutes = require('./jobRoutes');


router.use('/vehicle', vehicleRoutes);
router.use('/staff', staffRoutes);
router.use('/customer', customerRoutes);
router.use('/job', jobRoutes);
//router.use('/jobs', jobRoutes);

module.exports = router;
