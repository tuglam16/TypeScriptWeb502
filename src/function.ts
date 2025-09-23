function addNumber(num1: number, num2: number): number {
    return num1 + num2;
}
const addNumberArrow = (number2: number): void => { };
function showName(name: string = "lamnt" , age?: number): string {
    return `xin chao cac ban ${name}`;
}
const myName = showName();    
console.log(myName);
