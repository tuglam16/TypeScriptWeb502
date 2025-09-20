function countChar(str, char) {
    var count = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var c = str_1[_i];
        if (c === char)
            count++;
    }
    return count;
}
console.log(countChar("hello world", "o"));
console.log(countChar("typescript", "t"));
