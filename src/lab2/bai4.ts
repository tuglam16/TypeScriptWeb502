//4.1
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: string,
  roletuple: [number, string]
} = {
  name: 'Typescript',
  age: 11,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN, // Error
  roletuple: [2, 'author']
};

let favouriteActivites: any[];
favouriteActivites = [5, 'Sports', true];

if (person.role === Role.AUTHOR) {
  console.log('is author');
}

person.roletuple.push('admin');
person.roletuple[1] = 10;         // Error
person.roletuple = [0, 'admin', 'user']; // Error



//4.2
type Combinable = number | string;

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: 'as-number' | 'as-text'
) {
  let result;
  if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
    result = parseFloat(input1 as string) + parseFloat(input2 as string);
  } else {
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
console.log(typeof(a));

var b;
console.log(b);
console.log(typeof(a));
console.log(undeclaredVar);

//4.4
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Typescript';
userName = <string>userInput;
if (typeof userInput === 'string') {
  userName = userInput;
}
