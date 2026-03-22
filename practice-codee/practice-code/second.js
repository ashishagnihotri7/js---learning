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

          // practice day 3 start 
//Q1 Print Numbers 1 to 10
// for(let i= 0; i<=10; i ++)
// {
//     console.log(i)
// }
// Q2  PRINT EVEN NUMBER FROM 1 TO 10 
// for(let i= 1; i<=20 ; i++){
//     if(i % 2 ==0 ){
//      console.log(i)
//     }
// }

// Q3  PRINT NUMBER 1 TO 10 USINFG WHILE LOOP
// let i = 10 ;
// while(i>= 1){
//     console.log(i);
//     i--;
// }

// Q4 sum of number add 1 to 5
// let sum = 0;
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     sum = sum + i;
// }

// console.log(sum);

// Q5 multiplication table 

// let table = prompt("entwe a table which you want ");
// for(i =0 ; i<= 10 ; i++)
// {
//     console.log(table + " * " + i + "  =  "+( table * i ))
// }

// Q6 print number using do while loop print 1 to 5
// let a = 0;
// do{
//     console.log(a);
//     a++;
// }while(a<=5);

// Q9  Count Digits in Number let num = 12345; 
// let number = 1234;
// count = 0 ;
// while(number >0){
//     number = Math.floor(number /10);
//     count ++;
// }
// console.log(count + " digit ");

// Q10 print ashish using for of string 
// let a = "ashish ";
// size = 0;
// for ( val of a ){
//      size++;
//     console.log(a ," size of ",size);
// }

// Q11 for in loop

// let student ={
//     fname: "ashish",
//     class : "it_a",
//     age : 21
// };
// for( key in student ){
//     console.log(" key =", key , "value =",student[key]) 
// }

// Q12 Template Literals
//  let student = {
//     name: "ashish",
//     age: 22,
// };

// console.log("name is ", student.name, " age is ", student.age);
// console.log(`name is ${student.ashish} age is ${student.age}`);

            //  DAY 3 COMPLETE
            // day 4   statrt 
// Q 1 print arry element
//  let a = [ 1,2,3,4,5,6 ];         
//  console.log(a);

 // Q2 PRENT 1 AND LAST ELEMENT 
//   let a = [ 1,2,3,4,5,6 ];          
//  console.log(a[0],a[5]);  

// PRINT SUM OF ARRY 
//   let a = [ 1,2,3,4,5,6 ];          
//  let sum = 0;
//  for(val of a )
//  {
//    sum += val ;
   
   
//  }
//  console.log(sum)

// Q3 find maximum number
// let a = [ 1,2,3,4,5,6 ];  
// let max = [0];
// for(val of a ){
//     if(val>max)
//         max = val ;

// }
// console.log(`maximum number is ${max}`);

// let arr = [10, 25, 5, 40, 15];
// let max = Math.max(...arr);

// console.log(max);

// Q3 ask user to enter a number 
// let arr = [];
// for (let i = 0; i < 5; i++) {
//     let num = Number(prompt("enter a number"));
//     arr.push(num);
// }
// let max = arr[0];  //   after filling array
// for (let val of arr) {
//     if (val > max) {
//         max = val;
//     }
// }
// console.log(max);

 //4 COUNT HOW MANY NUMBER ARE EVEN 

// let arr = [2, 5, 6, 7, 8];
// for(val of arr){
//     if( val %2 == 0);
//     console.log(`number is  even ${val}`)
// }

 //Q5  REVERSE THE  ARRY 

//  let arr = [1, 2, 3, 4];
// let rev = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     rev.push(arr[i]);
// }

// Q6 // push element 

//  let arr = [1, 2, 3, 4];
//  arr.push(4);
//  console.log(arr)

//  Q7 pop element 

// let arr = [1,2,3,4]
// arr.pop();
// console.log(arr)

// Q9 shift remove first element  and unshift add element at start

// let arr = [1,2,3,4]
// arr.unshift(3);
// console.log(arr);

// arr.shift();
// console.log(arr);

// Q 10 slise and splice
// let a = ["ashish", "agnihotri", "class", "second year"];
// let b = a.slice(1, 3);
// console.log(b);

// let c = a.splice(1, 2 , "ashu","kshu"); // 1 starting index 2 jaha  se value change ker na means 2 index (0,1) "ashu","kshu"replace the agnihotri and class
// console.log(c);
// console.log(a);

// Q11 //calculate bill
// let price = [100,200,30];
// let sum = 0;
// for(val of price ){
//     sum += val ;
//     sum ++;
    
// }
// console.log(sum);

// Q12 merge to arry 
// let a =[1,2,];
// let b = [1,3,4,];
//  let c =a.concat(b);
// console.log(c);
  
            // DAY 4 COMPLETE
            // DAY 5 START
//Q1 write a program to add to number 
// function addfun(a,b){
//     console.log(a+b);
// }
// addfun(2,3);

// Q2  wrirte name with arrow function 

// const greet = (name) => {
//   return "Hello " + name;
// };

// console.log(greet("ashish"));

// Q3 check number is even or odd

// let arr =[1,2,3,4,5,6]
// const even = (val)=>{
  
//     return  val % 2==0;
// }
// console.log();
// let result = arr.filter(even);
// console.log(result);

//Q4 for odd function 

// let arr =[1,2,3,4,5,6]
// const even = (val)=>{
  
//     return  val % 2 !=0;
// }
// console.log();
// let result = arr.filter(even);
// console.log(result);

// Q5 with using for each looop
// let arr = [1,2,3,4,5,6];
// arr.forEach(function print(val){
//     console.log(val);
// });

// Q6 square of this 
// let arr = [1,2,3,4,5,6];
// arr.forEach(function print(val){
//     console.log(val*val);
// });

// Q7 call back function
// function greetUser(name) {
//     console.log("Hello " + name);
// }

// function processUser(name, callback) {
//     callback(name);
// }

// processUser("Ashish", greetUser); 

//Q8 use map and double number

// let num =[1,2,3,4,5];
// num.map((val)=>{
//     console.log( val*val);
// });

// Q9 filter even number filter
// let arr=[1,2,3,4,5];
// const even=(val)=>{
//     return val %2 ==0;
// }
// let result = arr.filter(even);
// console.log(result);

// Q10  use reduce of arry 

// let arr =[1,2,3,4,];
// let sum = arr.reduce((acc,val)=>{
//     return acc + val 

// });
// console.log(sum);

// Q11 print large number 
// let arr= [1,2,3,4,5,6];
// let sum = arr.reduce((acc,val)=>{
//     return acc> val ? acc : val 
// });
// console.log(sum);
 
               // DAY 5 COMPLETE
               // day 6 start

/*Q1 create h2 heading Element with "hellow java script ".append "from apna collage student " to this text using js*/

// let h1 = document.querySelector("h1")
// console.dir(h1.innerText);
// h1.innerText = h1.innerText + " from apan collage " //concatenate

// Q2  CREATE A 3 DIV USE SAME CLASS "BOX" ACCESS THEM ADD NRE TEXT IN REACH OF THEM

// ANS --> 
let div = document.querySelectorAll(".box");
// console.dir(div[0]);
// console.dir(div[1]);
// console.dir(div[2]);
// div[0].innerText = "unique value 1";
// div[1].innerText = "unique value 2";
// div[2].innerText = "unique value 3";
// console.dir(div[0].innerText);
// console.dir(div[1].innerText);
// console.dir(div[2].innerText);


//         // we can do with for of loop 
//         indx= 1;
// for(div of div ){
//  div.innerText = ` new value ${indx}`;
// indx++;
// console.dir(div.innerText);
// }

// Q3 // select all p tag

// let p = document.getElementsByTagName("p")
// console.dir(p); // through normal
// console.dir(p[2]); // through index

// Q4 select by all class 

// let box = document.getElementsByClassName("box");

// console.dir(box);      // full collection
// console.dir(box[0]);   // 3rd element

// Q5   Select by ID using querySelector 
// let gym = document.querySelector("#gym")
// console.dir(gym);

  //Q6   Select First Element with Class
//   let box=document.querySelector(".box")
//   console.dir(box)

  //Q7 for select all
  
//    let box=document.querySelectorAll(".box")
//   console.dir(box);

    //  Q9 loop through element 
// let paras = document.querySelectorAll("p");

// paras.forEach((p) => {
//   console.log(p.innerText);
// });

    //    Q10  CHANGE TEXT TO PERA GRAPH
    // let p = document.querySelector("p");
    // p.innerText="hey";
    // console.dir(p.innerText);
    
    // Q11 change html content
//     let a= document.querySelector("div");

// a.innerHTML = "<h1>New Heading</h1>"; 
// console.dir(a.innerText);

            //  DAY 6 COMPLETE 
            //  DAY 7 start
// Q1 create a new button element five it a text "click me ,backgroundcolour " red 7 text colour white 

// let button =document.createElement("button")
// button.innerText =" click me "

// button.style.color="white"
// button.style.background="red"

// let b = document.querySelector("body")
// b.prepend(button);

// Q2  CREATE A P TAG IN HTML GIVE IT A CLASS & SOME STYLLING NOW CREATE A NEW CLASS IN CSS AND TRY TO APPEND THIS CLASS TO THE <P> ELEMENT 
//          DO YOU NOTICE HOW YOU OVERWRITE THE SAME CLASS NAME WHEN YOU ADD A NEW ONE ?
// SOLVE THIS PROBLEM USING CLASS LIST

// let pera = document.querySelector("p");

// get class
// let cls = pera.getAttribute("class");
// console.log(cls);

// set new class
// pera.setAttribute("class", "myclass");

// check again
// console.log(pera.getAttribute("class"));

// pera.classList.add("newclass")
// pera.classList.remove("newclass")


// Q3 Change the text of a paragraph to "Hello JavaScript

// let text = document.querySelector("#text")
// text.innerText = "hellow js"

// Q4 Question:Change a div:background → bluetext → white
// let box = document.querySelector(".box");

// box.style.backgroundColor = "blue";
// box.style.color = "white";

// Q5 Create a button using JS and add it to body 
// let but = document.createElement("button")
// but.innerText = "click me";
// document.body.append(but);

// Q6 Add a heading before a div.

// let pera = document.querySelector("#box")
// let heading = document.createElement("h1")
// heading.innerText="hellow my name "
// pera.before(heading);

// Q7 Remove a paragraph from page.
// let pera = document.querySelector("#box");
// pera.remove();

// Q8 Question:Add two elements: one at startone at end

// let cont = document.querySelector("#box")
// let up = document.createElement("h1")
// up.innerText ="upper side"
// let down = document.createElement("h1")
// down.innerText="down element "

// cont.append(up);
// cont.prepend(down);

// Q9 Change all .box elements:text → "Updated"color → green

// let boxes = document.querySelectorAll(".box")
// boxes.forEach((box)=>{
//     box.innerText = " upadte"
//     box.style.color="green"
//     box.style.backgroundColor="pink"
// })

// Q 10 Create a list dynamically with 3 items.
// let ul = document.querySelector("#list")
// let li1 = document.createElement("li")
// li1.innerText= " item 1";

// let li2 = document.createElement("li");
// li2.innerText = "item 2";

// let li3 = document.createElement("li")
// li3.innerText="item 3"

// ul.append(li1,li2,li3)

            // day 7 end 
            //DAY 8 START 
// Q1 click button print something
// function hellow(){
//     console.log("button click")
// }
// Q2 Handle Click using addEventListener
// let but = document.querySelector("#but");
// but.addEventListener("click",()=>{
//     console.log("button click");
// });

// Q3 print event details
// let but = document.querySelector("#but");
// but.addEventListener("click", (event) => {
//   console.log(event);
  
//   console.log(event.type);     // click
//   console.log(event.target);   // button

// });

// Q4 Remove Event 
// function sayHello() {
//       console.log("Button Clicked!");
//     }

//     function removeEvent() {
//       let btn = document.getElementById("btn");

//       // Remove onclick event
//       btn.onclick = null;

//       console.log("Event Removed!");
//     }

// Q5 Add multiple events
// let btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   console.log("Clicked");
// });

// btn.addEventListener("mouseover", () => {
//   console.log("Mouse Over");
// });

// Q6 change the text 
// function change(){
//     console.log(" don't click me");
// }
// function news(){
//     console.log(" click me");
// }
// let btn = document.querySelector("#btn");
// let text = document.querySelector("#text");
// // Q7 change inner text on click 
// btn.addEventListener("click", () => { 
//   text.innerText = "Changed!";
// });
// // Q8 change backgroundColor yrllow
// btn.addEventListener("click", () => {
//   document.body.style.backgroundColor = "yellow";
// });
// // Q9 change  text on dubble click
// btn.addEventListener("dblclick", () => {
//   console.log("Double Clicked!");
// });
// // Q9  mouse over effect hai ye 
// btn.addEventListener("mouseover", () => {
//   btn.style.backgroundColor = "red";
// });

// Q10 toggle colour 
// let btn = document.querySelector("button");
// let text = document.querySelector("p"); // select your text

// let mode = "light";

// btn.addEventListener("click", () => {

//     // change text
//     text.innerText = "Changed!";

//     if (mode === "light") {
//         mode = "dark";
//         document.body.style.backgroundColor = "black";
//         text.style.color = "white"; // text white on dark
//     } else {
//         mode = "light";
//         document.body.style.backgroundColor = "white";
//         text.style.color = "black"; // text black on light
//     }

// });

// Q 11 counter app 
// let count = 0;

// let btn = document.querySelector("#inc");
// let display = document.querySelector("#count");

// btn.addEventListener("click", () => {
//   count++;
//   display.innerText = count;
// });

            //  DAY 8 COMPLETE