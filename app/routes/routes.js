module.exports = app => {
  const request = require("request");
  const cors=require('cors');
  const Mycontroller = require("../controllers/test.controller.js");
  const { logMsg } = require('../services/logger.js');
  var router = require("express").Router();


   
 

/**
* @swagger
* /api/demo:
*  get:
*   summary: Demo Api
*   description: Welcome Message
*   responses:
*    200:
*     description: success
*/
 router.get("/demo", Mycontroller.Welcome);




 
 // routes started here
  app.use('/api', router);
};


