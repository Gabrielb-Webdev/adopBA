// backend/config/db.config.js
module.exports = {
    HOST: 'localhost',
    USER: 'tu_usuario_de_mysql',
    PASSWORD: 'tu_contraseña_de_mysql',
    DB: 'nombre_de_tu_base_de_datos',
    dialect: 'mysql', // o 'postgres' si usas PostgreSQL
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  