module.exports = app => {
  const request = require("request");
  const cors=require('cors');
  const Blogcontroller = require("../controllers/Admin.controller.js");
  const Clientcontroller = require("../controllers/Client.controller.js");
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
 //router.get("/demo", Mycontroller.Welcome);

 //Admin Routes

 router.get("/BlogsList", Blogcontroller.BlogsList); //listing blogs

 router.post("/Insertblog", Blogcontroller.Insertblog); //inserting blogs

 router.put("/Updateblog/:id", Blogcontroller.Updateblog); //update blog

 router.delete("/Deleteblog/:id", Blogcontroller.Deleteblog); //delete blog

 // Client Routes

 router.get("/singleBlog/:id", Clientcontroller.singleBlog); //single blog(whole body)

 router.get("/Blogshort", Clientcontroller.Blogshort); //top5 & latest 5 article

 router.get("/comments_orm/:id", Clientcontroller.comments_orm); //List comments with ORM

 router.get("/comments_rawquery/:id", Clientcontroller.comments_rawquery); //List comments with raw query

 router.get("/MasterDatas", Clientcontroller.MasterDatas); //join ORM

 router.get("/comments_rawquery_join", Clientcontroller.comments_rawquery_join); //join raw query
 
 // routes started here
  app.use('/api', router);
};


