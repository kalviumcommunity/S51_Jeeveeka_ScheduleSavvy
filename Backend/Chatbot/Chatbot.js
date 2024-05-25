const express = require("express");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const ChatbotRouter = express.Router();

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY);

ChatbotRouter.post("/gemini", async (req, res) => {
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

module.exports = {ChatbotRouter};