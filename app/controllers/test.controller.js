const { sequelize,Test} = require('../models')
const { logMsg } = require('../services/logger.js');

exports.Welcome = (req, res) =>
{
	try 
	{
		const Msg = "Welcome....!";
        console.log(Msg);
        logMsg.info("Api Call Success");
		res.send({'status':200 , message:"Success." ,'data': Msg});
		
	} catch(err) {
         res.status(500).send({'status':404,
         message: err.message || "Some error occurred while inserting statements." ,'data': "No data"
         }); } //end of try catch
          
};