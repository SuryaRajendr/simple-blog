require('dotenv').config();
const express = require('express')
const app = express()
//it is used to clear cache  
app.use(function(req, res, next) {
  res.set("Cache-Control", "no-cache, no-store, must-revalidate, max-age=0")
  res.set("Pragma", "no-cache")
  res.set("Expires", 0)
  next()
})
const {logMsg}  = require('./app/services/logger.js');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');



const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Smc_cet_financials',
      version: '1.0.0',
    },
  },
  apis: ['./app/routes/routes.js'], // files containing annotations as above
};

const swaggerDocument = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */


app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application." });
   logMsg.info("Server Sent A Welcome to the application!");
  
});


app.use(express.json())  
app.use(express.urlencoded({ extended: true }));


require("./app/routes/routes.js")(app);

const PORT_NUMBER =  process.env.SERVER_PORT
app.listen({ port: PORT_NUMBER }, async () => {
  console.log('Server up on http://localhost:8080')
 
  //await sequelize.authenticate()
})