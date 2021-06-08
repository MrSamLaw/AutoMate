const sequelize = require('../config/connection');
const { Customer, Service, Vehicle, Job, User } = require('../models');

const serviceSeedData = require('./serviceSeedData.json');
const vehicleSeedData = require('./vehicleSeedData.json');
const customerSeedData = require('./customerSeedData.json');
const userSeedData = require('./userSeedData.json');
const jobSeedData = require('./jobSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData);
  const customers = await Customer.bulkCreate(customerSeedData);
  const services = await Service.bulkCreate(serviceSeedData); /*, {
    individualHooks: true,
    returning: true,
  });*/
  i=0;

  for (const vehicle of vehicleSeedData) {
    const newVehicles = await Vehicle.create({
      ...vehicle,
      //service_id: services[Math.floor(Math.random() * services.length)].id,
      customer_id: customers[Math.floor(Math.random() * customers.length)].id,
    });
    i++;
  }

  for (const job of jobSeedData) {
    const newJobs = await Job.create({
      ...job,
      //vehicle_id: vehicle[Math.floor(Math.random() * vehicle.length)].id,
      service_id: services[Math.floor(Math.random() * services.length)].id,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  /*
  await Job.create({
    vehicle_id: newVehicles[Math.floor(Math.random() * newVehicles.length)].id,
    service_id: services[Math.floor(Math.random() * services.length)].id,
  }).catch((err) => {
    console.log(err);
  });
*/

  process.exit(0);
};

seedDatabase();