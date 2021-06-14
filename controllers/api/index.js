const router = require('express').Router();
const vehicleRoutes = require('./vehicleRoutes');
const staffRoutes = require('./staffRoutes');
const customerRoutes = require('./customerRoutes');
<<<<<<< HEAD
const clientSearchRoute = require('./clientSearch');
router.use('/client', clientSearchRoute)
router.use('/vehicles', vehicleRoutes);
=======


router.use('/vehicle', vehicleRoutes);
>>>>>>> 77dc9558d40c5dd9153a2a725b6cc801fff1a3a7
router.use('/staff', staffRoutes);
router.use('/customer', customerRoutes);
module.exports = router;