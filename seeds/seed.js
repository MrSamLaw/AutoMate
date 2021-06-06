const sequelize = require('../config/connection');
const { Customer, Service, Vehicle } = require('../models');

const serviceSeedData = require('./serviceSeedData.json');
const vehicleSeedData = require('./vehicleSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const services = await Service.bulkCreate(serviceSeedData, {
    individualHooks: true,
    returning: true,
  });

  for (const { id } of services) {
    const newVehicle = await Vehicle.create({
      requried_service: id,
    });
  }

  for (const { id } of vehicles) {
    const newCustomer = await Customer.create({
      vehicle_id: id,
    });
  }

  process.exit(0);
};

seedDatabase();