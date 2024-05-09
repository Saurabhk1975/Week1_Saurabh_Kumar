import express from "express";
import { splitWords, contactHelper, checkLeap, HandshakeHelp } from "./logic";

const app = express();

// Home Route
app.get("/", (req, res) => {
  res.send(`<h1>You are on home page Explore Different Route  <br>
  1. "/split/:word" <br> 
  2. "/leap/:year" <br>
  3. "/concatenate/:word1/:word2" <br> 
  4. "/handshake/:code"</h1>`);
});

// Split Word
app.get("/split/:word", (req, res) => {
  const word = req.params.word;
  const revisedString = splitWords(word);
  res.json({ revisedString });
});

// Contact 2 words
app.get("/concatenate/:word1/:word2", (req, res) => {
  const word1 = req.params.word1;
  const word2 = req.params.word2;
  const concatenatedString = contactHelper(word1, word2);
  res.json({ concatenatedString });
});

// Checking given year is  leap or not
app.get("/leap/:year", (req, res) => {
  const year = parseInt(req.params.year);
  const ans = checkLeap(year);
  res.json({ ans });
});

// handshake code
app.get("/handshake/:code", (req, res) => {
  // Getting String from URl and Parsing it into Int
  const code = parseInt(req.params.code);
  const result = HandshakeHelp(code);
  res.json({ result });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
