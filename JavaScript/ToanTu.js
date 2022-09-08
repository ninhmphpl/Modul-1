// toán tử trong js
//
// 1 Toán tử số học - Arithmetic
// 2 Toán tử gán - Assigment
// 3 Toán tử so sánh - Comparison
// 4 Toán tử logic - Logical

//
// // 1
// + : cộng
// - : Trừ
// * : nhân
// / : chia
// **: lũy thừa
// % : lấy số dư
// ++: tăng 1 giá trị số
// --: giảm 1 giá trị số
var a = 1 + 2;
var b = 4;
var c = 5;
console.log(a);
if (a>b) {
    alert("dung")
} else {
    alert("sai")
}
// 2 toán tử gán

// toán tử         Ví dụ           Tương đương
// =               x=y             x = y
// +=              x+=y            x = x + y
// -=              x-=y            x = x - y
// *=              x*=y            x = x * y
// /=              x/=y            x = x / y
// **=             x**=y           x = x ** y

// 3 toán tử chuỗi
console.log(1 + 3 + 4 + '5' + 6 + 7 + 8 + "ninh")

// 4 toán tử so sánh

// ==  bằng
// !=  không bằng
// >   lớn hơn
// <   nhỏ hơn
// >=  lớn hoặc bằng
// <=  nhỏ hoạc bằng


/**
 * toán tử logic
 * 1. && - and
 * 2. || - or
 * 3. ! - not
 */
if (a>3 && a<b && b<0){
    console.log("&&")

}
/**
 * toán tử so sánh phần 2
 * === so sánh kiểu dữ liệu và giá trị
 * !==
 */
var a1 =1
var b1 ='1'
var ketqua
ketqua = a1 == b1
// true
ketqua = a1 === b1
//false






