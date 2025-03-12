const mongoose = require("mongoose");

const matDetails = mongoose.Schema({
    type:{
        type:String
    },
    subject:{
        type:String
    },
    team :{
        type:String
        
    },
    department:{
        type:String

    }
})
 

const MatDetails = mongoose.model("MatDetails", matDetails)

module.exports = MatDetails