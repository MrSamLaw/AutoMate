const Vehicle = require('./Vehicle');
const Customer = require('./Customer');
const Service = require('./Service');
const Job = require('./Job');
const User = require('./User');

Customer.hasMany(Vehicle, {
  foreignKey: 'customer_id',
  onDelete: 'CASCADE',
});

Vehicle.belongsTo(Customer, {
  foreignKey: 'customer_id'
})

Service.belongsToMany(Vehicle, {
  through: {
    model: Job,
    unique: false,
  },
  as: 'required_service'
});

Vehicle.belongsToMany(User, {
  through: {
    model: Job,
    unique: false,
  },
  as: 'required_user'
});

module.exports = { Vehicle, Customer, Service, Job, User };