const request = require('request');


 function convertdata(data)
 {
     try
     {
        console.log('helper')
        let result = [];
      
       return new Promise((resolve, reject) => {
        for (let x of data)
         {
             body_trunc =  x.dataValues.body.substring(0, 100)
             obj_data = {id:x.dataValues.id, title:x.dataValues.title,body:body_trunc,Date:x.dataValues.createdAt}
             result.push(obj_data);
             
         }
         console.log(result)
          
         resolve(result); 
          });
     }
     catch (error)
     {
         console.log(error);
     }
 }

 module.exports = { 
    convertdata : convertdata,

      }