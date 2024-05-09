"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandshakeHelp = exports.checkLeap = exports.contactHelper = exports.splitWords = void 0;
function splitWords(str) {
    //console.log(str);
    return str.split("_").join(" ");
}
exports.splitWords = splitWords;
function contactHelper(word1, word2) {
    return word1 + word2;
}
exports.contactHelper = contactHelper;
function checkLeap(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
exports.checkLeap = checkLeap;
function HandshakeHelp(num) {
    const result = [];
    if (num & 0b1)
        result.push("wink");
    if (num & 0b10)
        result.push("double blink");
    if (num & 0b100)
        result.push("close your eyes");
    if (num & 0b1000)
        result.push("jump");
    if (num & 0b10000)
        result.reverse();
    return result;
}
exports.HandshakeHelp = HandshakeHelp;
// using Named Export
//# sourceMappingURL=logic.js.map