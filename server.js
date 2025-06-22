// server.js
const express = require("express");
const WebSocket = require("ws");
require("dotenv").config();

const app = express();
const port = 3000;

const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

const wss = new WebSocket.Server({ server });

wss.on("connection", async (clientSocket) => {
  console.log("New WebSocket client connected");

  const deepgramSocket = new WebSocket(
    "wss://api.deepgram.com/v1/listen?punctuate=true&language=en",
    {
      headers: {
        Authorization: `Token ${process.env.DEEPGRAM_API_KEY}`,
      },
    }
  );

  deepgramSocket.on("open", () => {
    console.log("Connected to Deepgram");
  });

  deepgramSocket.on("error", (err) => {
    console.error("Deepgram error:", err);
  });

  deepgramSocket.on("message", (msg) => {
    clientSocket.send(msg); 
  });

  clientSocket.on("message", (msg) => {
    if (deepgramSocket.readyState === 1) {
      deepgramSocket.send(msg); 
    }
  });

  deepgramSocket.on("close", () => clientSocket.close());
  clientSocket.on("close", () => deepgramSocket.close());
});
