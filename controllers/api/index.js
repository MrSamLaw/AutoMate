const router = require('express').Router();
const vehicleRoutes = require('./vehicleRoutes');
const staffRoutes = require('./staffRoutes');
const customerRoutes = require('./customerRoutes');


router.use('/vehicle', vehicleRoutes);
router.use('/staff', staffRoutes);
router.use('/customer', customerRoutes);

module.exports = router;
