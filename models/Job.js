const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our model
class Job extends Model {}

// create fields/columns for model
Job.init(
  {
    id: {      
        type: DataTypes.INTEGER,      
        allowNull: false,      
        primaryKey: true,      
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            isDate: true
        }
    },
    k_travelled: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    vehicle_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'vehicle',
          key: 'id',
          unique: false
        }
    },
    service_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'service',
          key: 'id',
          unique: false
        }
    },
    staff_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'staff',
          key: 'id',
          unique: false
        }
    },  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'job'
  }
);

module.exports = Job;