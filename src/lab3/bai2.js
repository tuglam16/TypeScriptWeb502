//function& void
var sum = function (x, y) {
    if (x === void 0) { x = 5; }
    return x + y;
};
var speech = function (output) {
    console.log("Result: " + output);
};
speech(sum(5, 12));
console.log(speech(sum(8, 5)));
//never&void
var something = undefined;
//lỗi: 'null' không thể gán cho kiểu 'never'
var nothing = null;
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
//function&callback
function AddandHandle(x, y, cb) {
    var result = x + y;
    cb(result);
}
AddandHandle(10, 20, function (result) { console.log(result); });
