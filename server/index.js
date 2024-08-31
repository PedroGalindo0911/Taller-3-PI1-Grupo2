const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const sequelize = require('./config/dbConnection');

app.use(cors({
  origin: 'http://localhost:5173',
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa'))
  .catch(err => console.error('No se pudo conectar a la base de datos:', err));

app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


dbConnection.js: const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  logging: false, 
});

sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa'))
  .catch(err => console.error('No se pudo conectar a la base de datos:', err));

module.exports = sequelize;