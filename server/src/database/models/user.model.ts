import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../index';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  prefix: {
    type: DataTypes.INTEGER
  },
  phone: {
    type: DataTypes.INTEGER
  },
  role: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
  createdAt: 'user_created_at',
  updatedAt: 'user_updated_At'
});

export default User
