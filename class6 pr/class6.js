// program that's calculate sum of two number using function without parameter
function sum() {
    var num1 = 30;
    var num2 = 130;
    var sum = num1 + num2;
    console.log("Sum Result is " + sum);
}
sum();
//program that's calculate sum of two numbers, 40 or 90 using function without parameter
function sum2() {
    var num1 = 40;
    var num2 = 90;
    var sum = num1 + num2;
    console.log("Sum2 Result is " + sum);
}
sum2();
// program that's calculate sum of two number using function with parameter
function sum3(num1, num2) {
    var sum = num1 + num2;
    console.log("Sum3 Result is " + sum);
}
sum3(30, 130);
sum3(40, 90);
//temperature CtoF convert using function
function temcheck() {
    var temp = 36;
    var formula = temp * (9 / 3) + 32;
    console.log("Temperature is " + formula);
}
temcheck();
//temperature CtoF convert using function
function temcheck1(_temp) {
    var formula = _temp * (9 / 3) + 32;
    console.log("Temperature is " + formula);
}
temcheck1(34);
