const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our model
class Service extends Model {}

// create fields/columns for model
Service.init(
  {
    id: {      
        type: DataTypes.INTEGER,      
        allowNull: false,      
        primaryKey: true,      
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'service'
  }
);

module.exports = Service;