const exoress = require("express")
const handleMatDetails = require("../controllers/matDetailsController")
const router = exoress.Router()

router.post("/matDetails", handleMatDetails)

router.post("/test",(req,res)=>{
    res.status(200).json({
        message:"Working OK"
        
    })
})

module.exports = router