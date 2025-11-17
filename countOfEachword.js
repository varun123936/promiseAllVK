 const word = "banana";
const charCount = {};

for (const char of word) {
  charCount[char] = (charCount[char] || 0) + 1;
}

console.log(charCount);
