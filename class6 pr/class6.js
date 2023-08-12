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
// write a program that's calculate sum of two numbers 30,40 using function, and add number 10 after calculation 
function calculate(number1, number2) {
    var sum = number1 + number2;
    return sum;
}
var sumResult = calculate(30, 40);
sumResult = sumResult + 10;
console.log("sumResult", sumResult);
// write a program that's calculate sum of two numbers 40,40 using function, and add number 20 after calculation 
var addSum = calculate(40, 40);
addSum = addSum + 20;
console.log("addSum", addSum);
// Arrow function example without parameter
var arrowFunction = function () {
    var number1 = 60;
    var number2 = 5;
    var sum = number1 + number2;
    console.log("Arrow Function sum is", sum);
};
arrowFunction();
// Arrow function example with parameter
var arrowFunction1 = function (number1, number2) {
    var sum = number1 + number2;
    console.log("Arrow Function sum is", sum);
};
arrowFunction1(40, 5);
// Arrow function example with parameter and user return value and after calculation is add number 7; 
var arrowFunction2 = function (number1, number2) {
    var sum = number1 + number2;
    return sum;
};
var sumIs = arrowFunction2(40, 5);
sumIs = sumIs + 7;
console.log("Return sum is", sumIs);
// Arrow function your code is single line and get value without return keyword
var arrowFunction3 = function (number1, number2) { return number1 + number2; };
var tSum = arrowFunction3(70, 2);
console.log("tSum total is", tSum);
// Check your function type
console.log(typeof tSum);
