const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our model
class Staff extends Model {
  checkPassword(loginPW) {
    return bcrypt.compareSync(loginPW, this.password);
  }
}

// create fields/columns for model
Staff.init(
  {
    id: {      
        type: DataTypes.INTEGER,      
        allowNull: false,      
        primaryKey: true,      
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [6,20],
      }
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        default: 0,
    },
  },
  {
hooks: {
  beforeCreate: async(newStaffData) => {
    newStaffData.password = await bcrypt.hash(newStaffData.password, 10);
    return newStaffData;
  },
  beforeUpdate: async (updatedStaffData) => {
    updatedStaffData.password = await bcrypt.hash(updatedStaffData.password, 10);
    return updatedStaffData;
  },

  },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'staff'
  }
);

module.exports = Staff;