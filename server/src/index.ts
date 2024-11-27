import app from './app';
import sequelize from './database/index';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    /**
     * Durante el desarrollo para dropear database 
     * se cambia temporalmente force a true
     * No olvidar volver a poner a false!!!
     */
    await sequelize.sync({ force: false });     
    console.log('Database connected successfully.');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
