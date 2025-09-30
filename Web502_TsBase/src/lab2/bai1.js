"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1.1
let number1 = 5;
let number2 = 2.8;
let phrase = "Result is ";
let permit = true;
const result = number1 + number2;
if (permit) {
    console.log(phrase + result);
}
else {
    console.log('Not show result');
}
//1.2
function add(x = 5) {
    let phrase = 'Result is ';
    phrase = 10;
    x = '2.8';
    return phrase + x;
}
let result = add();
// 1.3
var person;
person = {
    name: "Typescript",
    age: 11
};
console.log(person.name);
//# sourceMappingURL=bai1.js.map