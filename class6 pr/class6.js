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
//temperature CtoF convert using function without parameter
function temcheck() {
    var temp = 36;
    var formula = temp * (9 / 3) + 32;
    console.log("Temperature is " + formula);
}
temcheck();
//temperature CtoF convert using function with parameter
function temcheck1(_temp) {
    var formula = _temp * (9 / 3) + 32;
    console.log("Temperature is 1 " + formula);
}
temcheck1(34);
// percentage calculate program without parameter using function
function percentage() {
    var obtainedMarks = 1010;
    var totalMarks = 1100;
    var result = (obtainedMarks / totalMarks) * 100;
    console.log("Total percentage is " + result);
}
percentage();
// percentage calculate program with parameter using function
function percentage1(obtainedMarks1, totalMarks1) {
    var result = (obtainedMarks1 / totalMarks1) * 100;
    console.log("Total percentage1 is " + result);
}
percentage1(470, 550);
// create a program using function and return parameter
function addFun(number1, namber2) {
    var total = number1 + namber2;
    return total;
}
addFun(30, 40);
