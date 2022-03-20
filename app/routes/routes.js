module.exports = app => {
  const request = require("request");
  const cors=require('cors');
  const Mycontroller = require("../controllers/test.controller.js");
  const Blogcontroller = require("../controllers/blog.controller.js");
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

 router.get("/BlogsList", Blogcontroller.BlogsList);

 router.post("/Insertblog", Blogcontroller.Insertblog);

 router.put("/Updateblog/:id", Blogcontroller.Updateblog);

 router.put("/Deletesblog/:id", Blogcontroller.Deletesblog);






 
 // routes started here
  app.use('/api', router);
};


