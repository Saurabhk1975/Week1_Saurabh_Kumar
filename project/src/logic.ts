export function splitWords(str: string): string {
  //console.log(str);
  return str.split("_").join(" ");
}

export function contactHelper(word1: string, word2: string): string {
  return word1 + word2;
}

export function checkLeap(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

export function HandshakeHelp(num: number): string[] {
  const result = [];
  if (num & 0b1) result.push("wink");
  if (num & 0b10) result.push("double blink");
  if (num & 0b100) result.push("close your eyes");
  if (num & 0b1000) result.push("jump");
  if (num & 0b10000) result.reverse();
  return result;
}

// using Named Export
