const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const mockAPIResponse = require("./mockAPI.js");

const app = express();

const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("dist"));

console.log(__dirname);

// meaning cloud data Api and key Password

const sentimentKEY = process.env.API_KEY;
console.log(`Your API Key password is ${process.env.API_KEY}`);
let InputForm = [];

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// POST Route Method
app.post("/addUrl", async (req, res) => {
  const response = await fetch(
    `https://api.meaningcloud.com/sentiment-2.1?key=${sentimentKEY}&url=${req.body.url}&lang=en`
  );
  if (!response.ok) {
    throw new Error(` There is an Error :${response.status}`);
  }
  const Data = await response.json();
  console.log(Data);
  const sampleData = {
    text: Data.sentence_list[0].text,
    score_tag: Data.score_tag || "",
    agreement: Data.agreement,
    subjectivity: Data.subjectivity,
    confidence: Data.confidence,
    irony: Data.irony,
  };
  res.send(sampleData);
  console.log(sampleData);
});

app.listen(8081, (error) => {
  console.log("Sentiment Analysis App listening on port 8081!");
  if (error) throw new Error(error);
});
