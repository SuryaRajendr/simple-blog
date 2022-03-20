

const {Blog,sequelize} = require('../models')
const { logMsg } = require('../services/logger.js');




 /* This API Endpoint for - list blogs 
  I introduce is_active field. if is_active 1 means the blog is active, if is_active 0 means the blog is inactive.
  */
  
exports.BlogsList = async (req, res) => {

	try 
	{
        // const Msg = "Welcome....!";
        // console.log(Msg);
        // logMsg.info("Api Call Success");
		
            await Blog.findAll({where: { is_active: 1 }})
            .then(data => 
            {
                res.send({'status':200,'message':"success",'data':data});
                logMsg.info("Success -controller");
            })
            .catch(err => 
            {
                res.status({'status':404,
                message: err.message || "Some error occurred while retrieving statements." ,'data': "No data" });
            });
		
	} 
    catch(err) 
    {
         res.status(500).send({'status':404,
         message: err.message || "Some error occurred while inserting statements." ,'data': "No data"
         }); 
    } //end of try catch
          
};


 //This API Endpoint for - Insert blogs 

exports.Insertblog = async (req, res) => {

    try 
	{
        // CREATE TABLE IF NOT EXISTS "users" (
        //     "id" SERIAL,
        //     "username" VARCHAR(255),
        //     "created_at" TIMESTAMP WITH TIME ZONE NOT NULL,
        //     "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL,
        //     PRIMARY KEY ("id")
        //   );
        // Create a blog
        const blog = 
        {
            title: req.body.title,
            body: req.body.body,
            is_active: req.body.is_active,
            createdby: req.body.createdby,
            updatedby: req.body.updatedby,
        };

        // Save blog in the database
        await Blog.create(blog)
        .then(data => 
        {
                res.send({'status':200,'message':"success",'data':data});
                logMsg.info("Success :"(data));
        })
        .catch(err => 
         {
                 res.status(500).send({'status':404,
                 message: err.message || "Some error occurred while inserting statements." ,'data': "No data"});
        });
    } 
    catch(err) 
    {
            res.status(500).send({'status':404,
            message: err.message || "Some error occurred while inserting statements." ,'data': "No data"
            }); 
    } //end of try catch
     

};

 //This API Endpoint for - update blogs 

exports.Updateblog =  async (req, res) => {
    try 
	{
      
        const id = req.params.id;

        await Blog.update(req.body, {
            where: { id: id }
        })
            .then(data => 
            {   
                res.send({'status':200,'message':"success",'data':data});
                logMsg.info("Success :"(data));    
            })
            .catch(err =>
            {
                 res.status({'status':404,
                message: err.message || "Some error occurred while updating statements." ,'data': "No data"});
             });
        } 
        catch(err) 
        {
                res.status(500).send({'status':404,
                message: err.message || "Some error occurred while inserting statements." ,'data': "No data"}); 
        } //end of try catch
};  



 //This API Endpoint for - delete blogs(completely delete)
exports.Deleteblog = async (req, res) =>
 {

    try 
	{
        const id = req.params.id;

        await Blog.destroy({where: { id: id }})
        .then(data => 
        {   
            res.send({'status':200,'message':"success",'data':data});
            logMsg.info("Success :"(data));    
        })
        .catch(err => 
        {
            res.status({'status':404,
            message: err.message || "Some error occurred while deleting statements." ,'data': "No data" });
        });
    } 
    catch(err) 
    {
            res.status(500).send({'status':404,
            message: err.message || "Some error occurred while inserting statements." ,'data': "No data"}); 
    } //end of try catch
};




//This API Endpoint for - delete blogs; Here i done notdeleting from db set is_active =0 
// exports.Deletesblog = async (req, res) =>
//  {

//     try 
// 	{
//         const id = req.params.id;

//         await Blog.update({ is_active : 0 },{
//             where: { id: id }
//         })
//         .then(data => 
//         {   
//             res.send({'status':200,'message':"success",'data':data});
//             logMsg.info("Success :"(data));    
//         })
//         .catch(err => 
//         {
//             res.status({'status':404,
//             message: err.message || "Some error occurred while deleting statements." ,'data': "No data" });
//         });
//     } 
//     catch(err) 
//     {
//             res.status(500).send({'status':404,
//             message: err.message || "Some error occurred while inserting statements." ,'data': "No data"}); 
//     } //end of try catch
// };