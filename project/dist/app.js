"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logic_1 = require("./logic");
const app = (0, express_1.default)();
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
    const revisedString = (0, logic_1.splitWords)(word);
    res.json({ revisedString });
});
// Contact 2 words
app.get("/concatenate/:word1/:word2", (req, res) => {
    const word1 = req.params.word1;
    const word2 = req.params.word2;
    const concatenatedString = (0, logic_1.contactHelper)(word1, word2);
    res.json({ concatenatedString });
});
// Checking given year is  leap or not
app.get("/leap/:year", (req, res) => {
    const year = parseInt(req.params.year);
    const ans = (0, logic_1.checkLeap)(year);
    res.json({ ans });
});
// handshake code
app.get("/handshake/:code", (req, res) => {
    // Getting String from URl and Parsing it into Int
    const code = parseInt(req.params.code);
    const result = (0, logic_1.HandshakeHelp)(code);
    res.json({ result });
});
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
//# sourceMappingURL=app.js.map