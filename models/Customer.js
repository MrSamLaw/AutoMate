const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our model
class Customer extends Model {}

// create fields/columns for model
Customer.init(
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
    dob: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
            isDate: true
        }
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    suburb: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postcode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [10]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    car_rego: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'vehicle',
            key: 'rego',
            unique: true
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'customer'
  }
);

module.exports = Customer;