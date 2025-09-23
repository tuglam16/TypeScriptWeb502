//1.1
function sumNoParam() {
    var a = 5;
    var b = 10;
    return a + b;
}
console.log("Sum function:", sumNoParam());
//1.2
var sumNoParamArrow = function () {
    var a = 7;
    var b = 3;
    return a + b;
};
console.log("Sum arrow:", sumNoParamArrow());
//2.1
//Default value:
var sumDefault = function (a, b) {
    if (a === void 0) { a = 5; }
    if (b === void 0) { b = 10; }
    return a + b;
};
console.log("Sum default:", sumDefault());
console.log("Sum default:", sumDefault(20));
//Optional parameter:
var sumOptional = function (a, b) {
    return a + (b !== null && b !== void 0 ? b : 0); // nếu b không có thì = 0
};
console.log("Sum optional:", sumOptional(10));
console.log("Sum optional:", sumOptional(10, 5));
//Rest parameter:
var sumRest = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
};
console.log("Sum rest:", sumRest(1, 2, 3, 4, 5));
//3
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ['Hiking'];
// Thêm toàn bộ phần tử từ hobbies vào activeHobbies
activeHobbies.push(hobbies);
activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
