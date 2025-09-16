function hinhChuNhat(dai: number, rong: number) {
  const chuVi = 2 * (dai + rong);
  const dienTich = dai * rong;      
  return { chuVi, dienTich };
}
const kq = hinhChuNhat(10, 5);
console.log("Chu vi:", kq.chuVi);
console.log("Diện tích:", kq.dienTich);
