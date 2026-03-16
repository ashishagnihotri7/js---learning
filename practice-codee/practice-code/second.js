//  practice make a ofject for a pen which 
// is in amazon

// const pen = {
//     name : "ball pen",
//     price : 20,
//     discount : "10% of",
//     brand : "agnihotri"
// };
// console.log(pen);
// console.log(typeof pen.price);
// let price = 40 ;
// console.log(price);
// pen.price = pen.price + 3;
// console.log(pen.price);
// price =30;
// console.log(price);

    // DAY 1 PRACTICE  QUACTION'S
//  basic lev 1. Store and Print Information
// Create variables to store:
// your name
// your age
// your city
// Print them using console.log().    

// let fullName = "ashish agnihotri";
// let age = 21;
// let city = "bhopal";
// console.log(fullName);
// console.log(age);
// console.log(city);

//   2. Swap Two Numbers

// let a =5;
// let b=10;
// temp = a;
// a=b;
// b=temp;
// console.log(a," ",b)
//  second way
// [a, b] = [b, a];
// console.log(a,"  ",b)

//   3 CHECK DATA TYPE 

// let fname ="ashish";
// let age =21;
// let isStudent =true;
// console.log(typeof fname);
// console.log(typeof age);
// console.log(typeof isStudent);

//    min level 4.CALCULATE TOTAL AND AVERAGE OF 3 NUMBERS

// let maths =34;
// let science=34;
// let computer = 33;
// console.log("total marks is ",maths +science + computer +1);
// console.log("average marks is ",(maths + science +computer )/3);


//    5. TEMPERATURE CONVERSION OF CELSIUS TO FAHRENHEIT

// let c = 30;
// let f = (c * 9/5) + 35 ;
// console.log("temperature in f is ",f);

//     6.FULL NAME GENERATION 

// let fname ="ashish";
// let lastName ="agnihotri";
// let fullName =("full name is ") + fname + "  " +  lastName;
// console.log(fullName)


    // advance lev   7. DYNAMIC MASSAGE 

//  let fname ="ashish";
//  let age = 21;
//  let city = "bhopal";
// console.log("my name is " + fname ," my age is "+age ,"and my home town is " +city);

    //    8. TYPE CONVERSION 

//    let a ="10";
//    let num = Number(a);
//    console.log(num);

    // 9. VARIABLE UPDATE

    // let a =5 ;
    // let b= "score is " +a;
    // console.log(b);
    // let c= a+ 10;
    // console.log("updated score is " + c);


                 //  DAY 1 COMPLETE 
                 // day 2 start 

/*Q1 get user to input a number using prompt (" enter a number")and
chechk if the number is a multiple of 5 or not */

// let num = prompt(" enter a number :");
// if(num %5 === 0){
//     console.log("number is a numtiple of 5","num is ",num);

// }
// else{
//     console.log("number is not a multiple of 5","num is ",num);

// }


// Q2 write a code which can give grades to students according to their SCORE
// 1 90 -100 A
// 2 70-89 B
// 3 60-69 C
// 4 50-59 D
// 5 0-49 F

// let marks = prompt("enter your marks :");
// if (marks >= 90 && marks <=100){
//     console.log("your grade is A");
// }
// else if (marks >=70 && marks <=89){
//     console.log("your grade is B");
// }
// else if (marks >=60 && marks <=69){
//     console.log("your grade is C");
// }
// else if (marks >=50 && marks <=59){
//     console.log("your grade is D");
// }
// else{
//     console.log("your grade is F");
// }

// Q3 SIMPLE CALCULATION 
// addition
// subtraction
// multiplication
// division
// let a =10;
// let b=20;
// let add = a+b;
// let sub =a-b;
// let mul =a*b;
// let div = a /b ;
// console.log("addition is ",add);
// console.log("subtraction is ",sub);
// console.log("multiplication is ",mul);
// console.log("division is ",div);


        // 2️ Assignment Operator Practice
// Q4 Perform these operations:
// x += 10
// x -= 5
// x *= 2
// let a = 20;
// // a += 10; // ans is 30
// // a -=5;  // ans is 15
// // a *= 3; // ans is 60
// // a %=4 // ans is 0
// a**=2//  ans is 400
// console.log(a); //we can print one by one all of this


// Q4  AREA OF REACTANGLE
// let length = prompt("enter the length pf rectangle ;")
// let breath = prompt(" enter the breath of reactangle :")
// let area = length * breath ;
// console.log(" are of reactangle is ", area);

// let a = 10;
// let b=30;
// if(a >b ){
//     console.log(" a is greater then b ",a);
// }
// else {
//     console.log(" b is greater then a",b);
// }

// Q5 CHECK EVEN OR ODD NUMBER
// let num = prompt("enter a number : ");
// if(num % 2 == 0){
//     console.log("number is even", num);
// }

// else {
//     console.log("number is odd", num);
// }

// Q6  CHECK VOTING ABALITY 

// let age = prompt(" entere your age :");
// if (age >= 18 ){
//     console.log("you are eligibal for voting");
// }
// else {
//     console.log(" you are not eligibal for voting ");
// }

//  3  LOGICAL OPERATOR PRACTICE 

// Q7 7️ Login System

// Create variables:
// let username = "admin";
// let password = "1234";
// Check using logical AND (&&):
// If both correct → "Login Successful"
// Else → "Login Failed"

// let username = "admin";
// let passwoed = "1234";
// if (username === "admin" && passwoed === "1234"){
//     console.log("login sucessful");
// }

// Q8  CHECK PASS OF FAIL 

// let marks = prompt("enter the marks :");
// if (marks >= 33 && marks <=100 ){
//     console.log("you are pass");
// }
// else {
//     console.log("you are not pass");
// }

// 4 Conditional + Ternary Operator

// Q 9: Positive or Negative
// let num = prompt ("enter a number :");
// if (num>0){
//     console.log("number is positive ", num);
// }
// else if (num <0){
//     console.log("number is negative ", num);
// }
// else {
//     console.log("number is zero ", num);
// }

// Q 10: LARGEST OF 3 NUMBERS
// let a = prompt("enter first number :");
// let b = prompt("enter second number :");
// let c = prompt("enter third number :");

// if (a >= b && a >= c){
//     console.log("largest number is ", a);
// }
// else if (b >= a && b >= c){
//     console.log("largest number is ", b);
// }
// else {
//     console.log("largest number is ", c);
// }