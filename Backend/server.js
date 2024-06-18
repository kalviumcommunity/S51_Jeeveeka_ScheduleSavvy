require("dotenv").config();
const express = require("express")
const cors=require("cors")
const app = express()
const mongoose = require("mongoose");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const {connectdb, isConnectedNow}=require('./Config/dbConn.js')
const {getRouter, postRouter, deleteRouter, patchRouter} = require("./Routes/ScheduleSavvy.routes.js");
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

app.use("/",getRouter)
app.use("/",postRouter)
app.use("/",deleteRouter)
app.use("/",patchRouter)

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY);

app.post("/gemini", async (req, res) => {
  const { history, message } = req.body;
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: history,
  });
  const msg = message;

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  res.send(text);
});
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
