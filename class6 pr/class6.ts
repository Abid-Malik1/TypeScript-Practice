// program that's calculate sum of two number using function without parameter

function sum(){
    let num1:number = 30;
    let num2:number = 130;
    let sum:number = num1 + num2;

    console.log("Sum Result is " +sum);
}

sum();

//program that's calculate sum of two numbers, 40 or 90 using function without parameter

function sum2(){
    let num1:number = 40;
    let num2:number = 90;
    let sum:number = num1 + num2;

    console.log("Sum2 Result is " +sum);
}

sum2();



// program that's calculate sum of two number using function with parameter

function sum3(num1:number, num2:number)
{
    let sum:number = num1 + num2;

    console.log("Sum3 Result is " +sum);
}

sum3(30,130);


sum3(40,90);


//temperature CtoF convert using function without parameter

function temcheck(){
    let temp:number = 36;
    let formula:number = temp * (9/3) +32;
    console.log("Temperature is " + formula);

}

temcheck();

//temperature CtoF convert using function with parameter


function temcheck1(_temp:number){
    let formula:number = _temp * (9/3) +32;
    console.log("Temperature is 1 " + formula);

}

temcheck1(34);