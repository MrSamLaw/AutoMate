const router = require('express').Router();
const vehicleRoutes = require('./vehicleRoutes');
const staffRoutes = require('./staffRoutes');
const customerRoutes = require('./customerRoutes');


router.use('/vehicles', vehicleRoutes);
router.use('/staff', staffRoutes);
router.use('/customers', customerRoutes);

module.exports = router;
