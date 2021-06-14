const router = require('express').Router();
const vehicleRoutes = require('./vehicleRoutes');
const staffRoutes = require('./staffRoutes');
const customerRoutes = require('./customerRoutes');
const clientSearchRoute = require('./clientSearch');
router.use('/client', clientSearchRoute)
router.use('/vehicles', vehicleRoutes);
router.use('/staff', staffRoutes);
router.use('/customer', customerRoutes);
module.exports = router;