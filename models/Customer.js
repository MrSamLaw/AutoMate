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
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
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
        type: DataTypes.STRING,
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
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6,20],
        }
    }
    /*
    vehicle_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'vehicle',
            key: 'id',
            unique: true
        }
    }*/
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