// program that's calculate sum of two number using function without parameter

function sum() {
  let num1: number = 30;
  let num2: number = 130;
  let sum: number = num1 + num2;

  console.log("Sum Result is " + sum);
}

sum();

//program that's calculate sum of two numbers, 40 or 90 using function without parameter

function sum2() {
  let num1: number = 40;
  let num2: number = 90;
  let sum: number = num1 + num2;

  console.log("Sum2 Result is " + sum);
}

sum2();

// program that's calculate sum of two number using function with parameter

function sum3(num1: number, num2: number) {
  let sum: number = num1 + num2;

  console.log("Sum3 Result is " + sum);
}

sum3(30, 130);

sum3(40, 90);

//temperature CtoF convert using function without parameter

function temcheck() {
  let temp: number = 36;
  let formula: number = temp * (9 / 3) + 32;
  console.log("Temperature is " + formula);
}

temcheck();

//temperature CtoF convert using function with parameter

function temcheck1(_temp: number) {
  let formula: number = _temp * (9 / 3) + 32;
  console.log("Temperature is 1 " + formula);
}

temcheck1(34);

// percentage calculate program without parameter using function

function percentage() {
  let obtainedMarks = 1010;
  let totalMarks = 1100;
  let result = (obtainedMarks / totalMarks) * 100;
  console.log("Total percentage is " + result);
}

percentage();

// percentage calculate program with parameter using function

function percentage1(obtainedMarks1, totalMarks1) {
  let result = (obtainedMarks1 / totalMarks1) * 100;
  console.log("Total percentage1 is " + result);
}

percentage1(470, 550);

// write a program that's calculate sum of two numbers 30,40 using function, and add number 10 after calculation

function calculate(number1: number, number2: number) {
  let sum: number = number1 + number2;

  return sum;
}

let sumResult: number = calculate(30, 40);
sumResult = sumResult + 10;
console.log("sumResult", sumResult);

// write a program that's calculate sum of two numbers 40,40 using function, and add number 20 after calculation

let addSum: number = calculate(40, 40);

addSum = addSum + 20;

console.log("addSum", addSum);

// Arrow function example without parameter

let arrowFunction = () => {
  let number1: number = 60;
  let number2: number = 5;
  let sum: number = number1 + number2;

  console.log("Arrow Function sum is", sum);
};

arrowFunction();

// Arrow function example with parameter

let arrowFunction1 = (number1: number, number2) => {
  let sum: number = number1 + number2;

  console.log("Arrow Function sum is", sum);
};

arrowFunction1(40, 5);

// Arrow function example with parameter and user return value and after calculation is add number 7;

let arrowFunction2 = (number1: number, number2) => {
  let sum: number = number1 + number2;
  return sum;
};

let sumIs: number = arrowFunction2(40, 5);

sumIs = sumIs + 7;

console.log("Return sum is", sumIs);

// Arrow function your code is single line and get value without return keyword

let arrowFunction3 = (number1: number, number2): number => number1 + number2;

let tSum: number = arrowFunction3(70, 2);

console.log("tSum total is", tSum);

// Check your function type

console.log(typeof tSum);
