const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our model
class Vehicle extends Model {}

// create fields/columns for model
Vehicle.init(
  {
    id: {      
        type: DataTypes.INTEGER,      
        allowNull: false,      
        primaryKey: true,      
        autoIncrement: true
    },
    rego: {
        type: DataTypes.STRING,
        allowNull: false
    },
    make: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    kilometers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    /*service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'service',
            key: 'id',
            unique: false
        }
    },*/
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'id',
        unique: false,
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vehicle'
  }
);

module.exports = Vehicle;