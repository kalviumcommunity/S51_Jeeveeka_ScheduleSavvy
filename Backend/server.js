const express = require("express")
const app = express()

app.get("/home",(req,res)=>{
    res.send("Hello,This is Jeeveeka")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});