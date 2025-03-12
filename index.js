const express = require("express")
const port = 8000;
const cors = require("cors");
const dbConnect = require("./db/dbConnect");
const matDetailsRouter = require("./route/matDetailsRoute")
const app = express()


const corsOption = {
    origin: "*",
    methods: "GET,POST,DELETE,PUT,PATCH,HEAD",
    credentials: true,
  };

app.use(cors(corsOption));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));
app.use("/user/api/",matDetailsRouter)

app.listen(port,()=>{
    console.log(`Server is running`);
    
})

dbConnect()
