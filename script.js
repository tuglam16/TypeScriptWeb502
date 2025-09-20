function hinhChuNhat(dai, rong) {
    var chuVi = 2 * (dai + rong);
    var dienTich = dai * rong;
    return { chuVi: chuVi, dienTich: dienTich };
}
var kq = hinhChuNhat(10, 5);
console.log("Chu vi:", kq.chuVi);
console.log("Diện tích:", kq.dienTich);
