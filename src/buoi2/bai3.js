function countChar(str, char) {
    var lowerStr = str.toLowerCase();
    var lowerChar = char.toLowerCase();
    var count = 0;
    for (var i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === lowerChar) {
            count++;
        }
    }
    return count;
}
console.log(countChar("Hello World", "l"));
console.log(countChar("Hello World", "L"));
