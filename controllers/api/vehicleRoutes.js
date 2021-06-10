const router = require('express').Router();
const {Vehicle} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newVehicle = await Vehicle.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newVehicle);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;