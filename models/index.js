const Vehicle = require('./Vehicle');
const Customer = require('./Customer');
const Service = require('./Service');

Customer.hasMany(Vehicle, {
  foreignKey: 'vehicle_id',
  onDelete: 'CASCADE',
});

Vehicle.hasMany(Service, {
    foreignKey: 'required_service',
    onDelete: 'CASCADE',
  });

module.exports = { Vehicle, Customer, Service };