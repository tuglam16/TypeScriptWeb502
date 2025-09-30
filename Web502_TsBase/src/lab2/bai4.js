"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//4.1
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Typescript',
    age: 11,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN, // Error
    roletuple: [2, 'author']
};
let favouriteActivites;
favouriteActivites = [5, 'Sports', true];
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
person.roletuple.push('admin');
person.roletuple[1] = 10; // Error
person.roletuple = [0, 'admin', 'user']; // Error
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
        result = parseFloat(input1) + parseFloat(input2);
    }
    else {
        // concatenated
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineNumber = combine(30, 26, 'as-number');
console.log(combineNumber);
const combineStringNumber = combine('30', '26', 'as-number');
console.log(combineStringNumber);
const combineText = combine('Typescript Vs ', 'Javascript', 'as-text');
console.log(combineText);
//4.3
var a = null;
console.log(a);
console.log(typeof (a));
var b;
console.log(b);
console.log(typeof (a));
console.log(undeclaredVar);
//4.4
let userInput;
let userName;
userInput = 5;
userInput = 'Typescript';
userName = userInput;
if (typeof userInput === 'string') {
    userName = userInput;
}
//# sourceMappingURL=bai4.js.map