require('dotenv').config();

const { logMsg } = require('../services/logger');
module.exports = {
   
  "development": {
    "username": process.env.USER_NAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "port": process.env.PORT,
    "host": process.env.HOST,
    "dialect": "mssql",
    "logging": (message) =>(logMsg.info(message))

  }
  };