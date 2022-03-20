
const {Blog,Comments,sequelize} = require('../models')
const { logMsg } = require('../services/logger.js');
const  shortblogHelper = require('../services/shortblog.helper.js');



 //This API Endpoint for - list One blog at a time (whole body)

exports.singleBlog  = async (req, res) => {

	try 
	{
            const id = req.params.id;
		
            await Blog.findOne({
                where: { id: id },
                attributes: ['title', 'body', 'createdAt']
            })
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




//This API Endpoint for - list blogs.... top 5 & latest 5 articles

exports.Blogshort  = async (req, res) => {

	try 
	{
            await Blog.findAll({ limit: 4, order: [['updatedAt', 'DESC']]})
            //sequelize.query("select  TOP 2 * from blogs where is_active = 1 ORDER BY createdAt desc")
            .then(data => 
            {
                //console.log(data)
                result = shortblogHelper.convertdata(data); 
                result.then(function(output){ 
                        console.log('back') 
                         console.log(output) 
                         res.send({'status':200,'message':"success",'data':output});
                    });
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


//This API Endpoint for - list comments.... ORM

  exports.comments_orm  = async (req, res) => {

	try 
	{
            const article_id = req.params.id;
            console.log(article_id)
            await Comments.findAll({where: { article_id: article_id }})
            .then(data => 
            {
                res.send({'status':200,'message':"success",'data':data});
                logMsg.info("Success -controller");
            })
		
	} 
    catch(err) 
    {
         res.status(500).send({'status':404,
         message: err.message || "Some error occurred while inserting statements." ,'data': "No data"
         }); 
    } //end of try catch
          
};


//This API Endpoint for - list comments.... Rawquery

exports.comments_rawquery  = async (req, res) => {

	try 
	{
            const article_id = req.params.id;
            console.log(article_id)
            sequelize.query(" select * from comments where article_id =  " + article_id)
            .then(data =>  
            {
                res.send({'status':200,'message':"success",'data':data});
                logMsg.info("Success -controller");
            })
		
	} 
    catch(err) 
    {
         res.status(500).send({'status':404,
         message: err.message || "Some error occurred while inserting statements." ,'data': "No data"
         }); 
    } //end of try catch
          
};



//join blog and comments table(ORM)

exports.MasterDatas = async (req, res) => {
                await Blog.findAll({
                                     where :{is_active : 1} ,
                                     attributes: ['id', 'title', 'body'],
                                     include :[{ 
                                                 association: 'commentsData',
                                                 attributes: ['id', 'article_id', 'comments']
                                                }],
                                                required :false 
                                                })
                .then(data => 
                            {
                                res.send({'status':200,'message':"success",'statementsmasterrData':data});
                                logMsg.info("Master Data List api call Success");
                            })
                            .catch(err => {
                                    res.status(404).send({'status':404,
                                    message: err.message || "Some error occurred while retrieving statements." ,'data': "No data" });
                            });

};


// raw query join
exports.comments_rawquery_join  = async (req, res) => {

	try 
	{
            sequelize.query(" SELECT * FROM blogs JOIN comments ON blogs.id=comments.article_id")
            .then(data =>  
            {
                res.send({'status':200,'message':"success",'data':data});
                logMsg.info("Success -controller");
            })
		
	} 
    catch(err) 
    {
         res.status(500).send({'status':404,
         message: err.message || "Some error occurred while inserting statements." ,'data': "No data"
         }); 
    } //end of try catch
          
};




// body_truncate = function(str) {
//     const length = 100;
//     if(str.length > length)
//     {
//         return str.substring(0, 100);
//     }
//     else 
//     {
//         return str;
//     }
//   }




// body_truncate = function(str, length, ending) {
//     console.log(length)
//      console.log(ending)
//     if (length == null) {
//       length = 100;
//     }
//     if (ending == null) {
//       ending = '...';
//     }
//     if (str.length > length) {
//       return str.substring(0, length - ending.length) + ending;
//     } else {
//       return str;
//     }
//   };
 