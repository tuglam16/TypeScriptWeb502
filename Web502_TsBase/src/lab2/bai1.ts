// 1.1
let number1: number = 5;
let number2: number = 2.8;
let phrase:string = "Result is ";
let permit: boolean = true;

const result = number1 +number2;
if(permit){
    console.log(phrase + result);
    
}else{
    console.log('Not show result');
    
}

//1.2
function add ( x=5){
    let phrase = 'Result is ';
    phrase = 10;
    x = '2.8';
    return phrase +x;
}
let result: number = add();

// 1.3
var person : {
    name:string,
    age:number
}

person = {
    name:"Typescript",
    age: 11
}
console.log(person.name);
