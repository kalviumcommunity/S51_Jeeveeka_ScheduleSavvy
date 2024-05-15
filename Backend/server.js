require("dotenv").config();
const express = require("express")
const cors=require("cors")
const app = express()
const mongoose = require("mongoose");
const {connectdb, isConnectedNow}=require('./Config/dbConn.js')
const {getRouter, postRouter, deleteRouter, putRouter} = require("./Routes/ScheduleSavvy.routes.js");
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

app.use("/",getRouter)
app.use("/",postRouter)
app.use("/",deleteRouter)
app.use("/",putRouter)

app.get("/ping",(req,res)=>{
    res.send("Hello,This is Jeeveeka")
})

app.get("/home",(req,res)=>{
    res.json({
        message: isConnectedNow()? "Database is connected" : "Database is disconnected"
    })
})

app.listen(3000, async() => {
    await connectdb();
    console.log("Server is running on port 3000");
});
