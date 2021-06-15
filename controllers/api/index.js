const router = require('express').Router();
const vehicleRoutes = require('./vehicleRoutes');
const staffRoutes = require('./staffRoutes');
const customerRoutes = require('./customerRoutes');


router.use('/vehicle', vehicleRoutes);
router.use('/staff', staffRoutes);
router.use('/customer', customerRoutes);
//router.use('/job', customerRoutes);
router.use('/jobs', customerRoutes);
router.use('/vehicle', customerRoutes);
router.use('/service', customerRoutes);

module.exports = router;
