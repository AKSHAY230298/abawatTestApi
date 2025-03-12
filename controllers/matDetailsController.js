const MatDetails = require("../models/matDetails");

async function handleMatDetails(req,res){
    try {
  const {type,subject,team,department} = req.body;
  const matData = new MatDetails({
    type:type,
    subject:subject,
    team:team,
    department:department
  })

 await matData.save()
 
      
        return res.status(200)
        .json({
            message:"data saved",
            success:true,
        })
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = handleMatDetails