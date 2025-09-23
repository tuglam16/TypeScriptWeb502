//1.1
function sumNoParam(): number {
  let a = 5;
  let b = 10;
  return a + b;
}

console.log("Sum function:", sumNoParam());
//1.2
const sumNoParamArrow = (): number => {
  let a = 7;
  let b = 3;
  return a + b;
};

console.log("Sum arrow:", sumNoParamArrow());
//2.1
//Default value:
const sumDefault = (a: number = 5, b: number = 10): number => a + b;

console.log("Sum default:", sumDefault());     
console.log("Sum default:", sumDefault(20));    
//Optional parameter:
const sumOptional = (a: number, b?: number): number => {
  return a + (b ?? 0);   // nếu b không có thì = 0
};

console.log("Sum optional:", sumOptional(10));     
console.log("Sum optional:", sumOptional(10, 5)); 
//Rest parameter:
const sumRest = (...numbers: number[]): number => {
  return numbers.reduce((total, num) => total + num, 0);
};

console.log("Sum rest:", sumRest(1, 2, 3, 4, 5));  
//3
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

// Thêm toàn bộ phần tử từ hobbies vào activeHobbies
activeHobbies.push(hobbies);
activeHobbies.push(hobbies[0],hobbies[1]);
activeHobbies.push(...hobbies)
console.log(activeHobbies); 


