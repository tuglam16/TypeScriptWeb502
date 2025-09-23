function hinhChuNhat(dai: number, rong: number) {
  const chuVi = 2 * (dai + rong);
  const dienTich = dai * rong;      
  return { chuVi, dienTich };
}
const kq = hinhChuNhat(10, 5);
console.log("Chu vi:", kq.chuVi);
console.log("Diện tích:", kq.dienTich);

//Hàm tính tổng nhiều số (dùng rest parameter)
function sumNumbers(...nums: number[]): number {
  return nums.reduce((total, n) => total + n, 0);
}

console.log(sumNumbers(1, 2, 3, 4, 5)); // 15
console.log(sumNumbers(10, 20));        // 30

//Hàm trả về số lượng xuất hiện của 1 ký tự trong chuỗi
function countChar(str: string, char: string): number {
  let count = 0;
  for (let c of str) {
    if (c === char) count++;
  }
  return count;
}

console.log(countChar("hello world", "l")); // 3
console.log(countChar("banana", "a"));      // 3

//Hàm kiểm tra số nguyên tố
function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(2));   // true
console.log(isPrime(15));  // false
console.log(isPrime(17));  // true

