import { Sequelize } from 'sequelize';
import { config } from 'dotenv'
config()

const sequelize = new Sequelize(
  process.env.DB_NAME || 'financialland',
  process.env.DB_USER || 'username',
  process.env.DB_PASSWORD || '123456',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: false,
  }
);

export default sequelize
