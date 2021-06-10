const router = require('express').Router();
const vehicleRoutes = require('./vehicleRoutes');
const staffRoutes = require('./staffRoutes');


router.use('/vehicles', vehicleRoutes);
router.use('/staff', staffRoutes);

module.exports = router;
