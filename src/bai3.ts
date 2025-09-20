function countChar(str: string, char: string): number {
const lowerStr = str.toLowerCase();
  const lowerChar = char.toLowerCase();

  let count = 0;
  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === lowerChar) {
      count++;
    }
  }
  return count;
}
console.log(countChar("Hello World", "l"));
console.log(countChar("Hello World", "L")); 
