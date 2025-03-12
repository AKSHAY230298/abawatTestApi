const MatDetails = require("../models/matDetails");

async function handleMatDetails(req,res){
    try {
  const {type,subject,team,department} = req.body;
  const matData = MatDetails.find()

        if(!matData){
          return  res
           .status(400)
            . json({
                message:"Data is empty",
                success:false
            })

            
        }
        return res.status(200)
        .json({
            message:"ok",
            success:true,
            matData : matData
        })
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = handleMatDetails