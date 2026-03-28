// DAY 1 CODE//////
// console.log("hi i am ashish");
// console.log("my first js code");
// console.log("nice to meet you ");


// fullname = "ashish";
// age =21;
// isfollow = true;
// console.log(fullname);
// console.log(age);
// console.log(isfollow);

//rules of variable

// hi ="ashish";
// HI="hellow";
// console.log(hi);
// console.log(HI);
// Console = "java ";
// console.log(Console);

//  LET $ CONST $ VAR 

// let ashu = "ashish";
// console.log(ashu);
// let hey ="be"
// console.log(hey);
// var age = 21;
// var age = 22;
// console.log(age);
// ashu = "ashish agnihotri";
// console.log(ashu);
//redefine 
// {
//     let b= 34;
//     b = 45;
//     console.log(b);
// }
// {let b = 34;
// console.log(b);}

//  DATA TYPES IN JS 
// let age = 44;
// let price = 99.990;
// let name ="tony stark";
// isFollow = true;
// let x= null;
// let a = BigInt("1234567890123456789012345678901234567890");
// let z = Symbol("hello");


// OBJEST IN JS

// const student = {
//     fullName : "ashish agnihotri",
//     age : 21,
//     pass : true,
//     marks : [34,45,56,67]
// };
// student["age"]= student["age"] +1;
// student["name"] = "ashu";
// console.log(student);
// console.log(student["age"]);
// console.log(student.marks);
// console.log("ashu");




                // DAY  2 OF LACTURE 
                // ABOUT COMMENT IN JS 
            // FOR SINGLE LINE USE // AND FOR MULTI LINE USE /* */


            // ARTHIMATIC OPERATOR IN JS 

// let a = 5 ;
// let b = 10;
// console.log("value of a " ,a, " value od b ",b);
// console.log("sum of a and b is ", a+b );
// console.log ("subtraction of a and b is ",a-b);
// console.log("multiplication of 2 number is ",a*b);
// console.log("division of 2 number is ", a/b);
//             //   MODULUS OPERATOR IN JS
// console.log("modulus of 2 number is ",a%b); //reminder 
            // EXPONENTIATION OPERATOR IN JS
// console.log("exponentiation of 2 number is ",a**b);//power
            // UNARY OPERATOR IN JS
// a++;
// console.log("increment of a is " ,a++);
// a--;
// console.log("decrement of a is ",a--);

            //   POST AND PRE INCREMENT AND DECREMENT OPERATOR IN JS

// console.log("post increment of a is ",a++);
// console.log(a);
// console.log("pre increment of a is ",++a);
// console.log(a);
// console.log("post decrement of a is ",a--);
// console.log(a);
// console.log("pre deecrement of a is ",--a);
// console.log(a);
      
            // ASSIGEMENT OPERATOR IN JS 

// let a = 5;
// a += 5 ; // it means a = a + 5;
// console.log(a);
// a -=5; // it means a= a-5;
// console.log(a);
// a *=5; //it means a = a*5;
// console.log (a);
// a /=5; // it means a = a/5;
// console.log(a);
// a **=5 ; // it is an exponential a= a^5;
// console.log(a);
// a %=5;// it is an modulo and it mean s a = a %5;
// console.log(a);

            //COMPARISON OPERATOR IN JS
    
// let a = 5;
// let b =10;
// FOE EQUAL TO 
// console.log(" a= b", a=b); // retuen boolean value fals 
// FOR NOT EQUAL TO
// console.log("a !=b", a!=b); // return boolean value true
// //for string 
// let c = 3;
// let d="3"; // it will return true because it only check value not data type ( implisit data conversion )
// console.log("c == d", c==d); // return true
//  // for more strict comparison we use === it will check value as well as data type
// FOR EQUAL TO TYPE AND VALUE
//  console.log("c===d", c===d); // return false
//FOR NOT EQUAL TO TYPE AND VALUE
//  console.log("c !==d",c!==d); //return true
// console.log("a>b",a>b); //false
// console.log("a<b",a<b); //true
// console.log("a>=b",a>=b); //false
// console.log("a<=b",a<=b); //true
  
             //LOGICAL OPERATOR IN JS
// LOGIC AND COMPAIR BOTH CONDITION AND RETURN TRUE IF BOTH CONDITION ARE TRUE OTHERWISE FALSE
// let a = 54;
// let b =30;
// let c= 20;
// let condition1 = a>b; //true 
// let condition2 = a>=b; //true
// let condition3 = a<c; //false
// console.log("condition1 && condition2", condition1 && condition2);//true
// // LOGIC OR  if any cond true so return T orther wise F
// console.log("condition1 || condition3", condition1 || condition3); //true
// // LOGIC NOT  it will return opposite of condition
// console.log("!condition1", !(condition1||condition2)); // return apposit false


            //   CONDITIONAL STATEMENT IN JS
            // IF ELSE STATEMENT IN JS

// IF YOUR AGE IS 18 THEN VOTE OTHER WISE NOT VOTE 
// let age = 19;
// if(age > 18){
//     console.log("you can vote");
//     }
// else{
//     console.log("you can not vote");}
// let mode ="dark";
// let colour;
// if(mode =="dark"){
//     colour = "black";
// }
// else{
//     colour = "white";
// }
// console.log(colour);
// let a =4;
// if (a%2==0){
//     console.log("a is an even number ", a)
//     }
// else{
//     console.log("a is not an even number ", a);
// }

//  //    ELSE IF STATEMENT IN JS

// let age = 40;
// if (age < 18){
//     console.log("you are a child");
// }
// else if( age >=50  ){
//     console.log("you are an adult");
// }
// else{
//     console.log("you age is 40");
// }
// if (age == 40)console.log("you are 40 years old");

// TERNARY OPERATOR IN JS  simple and compact if else statement


// let age= 18;
// let result = age>=18? " you are adult ": " you are not adult";
// console.log(result);
// let age2 = 3;
// age2>=18? console.log("you are adult "): console.log("you are not adult");
  
            // DAY 2 FINISH 
            // DAY 3 START

      //LOOP & STRING IN JS

// 1. For Loop in JS
// for(let i= 1; i<=5; i++){
//     console.log(" ashu");
//     }
//     console.log("loop end");

// CALCULATE SUM FROM 1 TO 5
// let sum = 0;
// let n =20;
// for(let i =0 ; i<=n ; i++){
//     sum = sum +i;
// }
// console.log("sum is ",sum);

// PRINT 1 TO 5 
// for(let i =1 ; i<= 5 ; i ++){
//     console.log("value of i is ", i );
// }


// WHILE LOOP IN JS 

// let i = 1;
// while(i<=5){
//     console.log("ashu",i);
//     i++;
// }

// DO WHILE LOOP 

// let a =20 ;
// do {
//     console.log("ashu")
//     i++;
// }while(i<=10);

// let i= 5;
// do{
//     console.log("i =",i)
//     i++;
// }while(i<=5);

// FOR OF LOOP  // use for special data type use in arry and string ( not use for obj) 

// let str = "ashishAgnihotri"; //camel case
// let size =0;
// for(let val of str) // itrater li under character ;
// {
//     console.log("val =",val);
//     size++;
// }
// console.log("string size", size); // 15 

 // FOR IN OBJ // use in  obj and arry // print value of key

// let student = {
//     namee :"ashish" ,
//     class : "it_a" ,
//     sub : "maths",
//     cgpa: 9.5
// };

// for( key in student ){
//     console.log("key =",key, "value", student[key] )
// }


        //    PRACTICE QUACTION 
// Q1 print all even number from 0 to 100
// for(let i=0 ; i<=100; i++){
//     if(i % 2 == 0){
//         console.log("even number are",i);
//     }
// }

// // same code for odd number 
// for(let i=0 ; i<=100; i++){
//     if(i % 2 != 0){
//         console.log("even number are",i);
//     }
// }

// Q2 PRAACTICE QUACTION 2 A GAME CERATE A GAME WHWRW YOU START WITH ANY RANDOM GAME NUMBER  ASK THE USER TO KEEP GUSSEING
// THE GAME NUMBER UNTIL THE USER ENTER CORRECT VALUE  

// let userNumber = 25;
// let enter = prompt(" guss the number ")
// while(userNumber != enter){
//     enter = prompt("you guess wrong number enter again ")
// }
// console.log("congurational you enter a rignt number ")


                      // STRINg
//  ring string type 1
//  let a = "ashish";
//  type 2 ;
//  let b= 'ashish';
                    // CALCULATE LENGTH OF STRING 
// let a = "ashish";
// console.log(a[0]);
// console.log(a[2])


            //TEMPLATE LITERALS IN JS  SPECIAL STRING USER `` 
// let specialString= `ashis`;
// console.log("specialString");
// console.log(typeof specialString);

           // IN THIS WE CAN WRIGHT STING WITH VARIABLE USE IN OBJ 
// let student= {
//     name:"ashish",
//     class :12,
//     sub : "maths"
// };
// // withot template literals
// console.log("name is ",student.name, " class is ", student.class)
// let output = `name is ${student.ashish} class is ${student.class}`
// console.log(output);

// let a = `this is an template literal ${1+2+3}`;
// console.log(a);
//    // SPACE CHARACTER 
// let b = `ashish \n agnihotri`;
// console.log(b);
// console.log(a.length);

          //STRING METHOD

// let str = '      ashish  agni   '; //upper case // do not change original string // beacuse string are immutable
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());// remove space from starting and end 

//slice
// let str= "12345";
// console.log(str.slice(1,3));
// let str1= "67";
// console.log(str.concat(str1)); // used to add  2 string
// let add = str +str1;
// console.log(add)


// change string value
// let str = "hellow";
// console.log(str.replace("h","y"));

// to find spacific value 


// let str = "i love js ";
// console.log(str.charAt(0));
// console.log(str.charAt(4))

         //PRACTICE QUACTION 
//TAKE A NAME FORM USER AND OUTPUT SHOULD BE @NAME OF USER ANS 123 
// 
// let str=prompt(" enter a name ");
// let str2= "@";

// let str4 =  str2 +str +  str.length ;
// console.log(str4);
  


          // DAY 3 COMPLE
            // DAY 4
  
            ///// ARRY //////////
// PRINT MARKS OF 5 STUDENT 
// let ashu = [23,30,50,90,60];
// console.log(ashu);
// console.log(ashu.length);
// // for string 
// let hero=["ashu","ant men ","super men","hanumen"];
// console.log(hero); // and type of arry is object;

// print marks of student through indix 

// console.log(ashu[0]);
// console.log(ashu[1]);
// // console.log(ashu[2]);
// console.log(ashu[3]);
// console.log(ashu[4]);
// we can also change an index ex change an index of 50 with 20
// console.log(ashu[2]=20);

// ashu[3]=100;
// console.log(ashu);

//......................................//

// looping over an arry 

// let hero = ['ashu',"ashish","agnihotri","maths"];
// for(let idx = 0 ;idx<hero.length; idx++){
//       console.log(hero[idx])
// }

// we can user both for of and for in loop but we preffer for in loop //

//  FOR OF LOOP
// let hero = ["ashish","ashu","some","ansh"];let size=0;
// for(let index  of hero  ){
//       console.log("index",index, size);
//       size++
// }
// make arry of city print using for of loop and do upperCase
// let city =["bhopal","indore ", "reva ", "gud"]
// for(let index of city ){
//   console.log(index.toUpperCase());
// }

//  PRACTICE QUACTION 1 calculate everage marks of studentt 
// let student= [20,30,40,50,60,];
// let sum =0;
// for(val of student){
//       sum += val;
      
// }
// let avg = sum / student.length;
// console.log(`everage of student marks is = ${avg}`)

//  PRACTICE QUACTION 2
// give arry with price if 5 iteam [250,645,300,900,50]  all iteam have  an oofer 10 % off on them change the arry to store final price of applying offer

// let price =[250,645,300,900,50];
// let i = 0 ;
// for(let val of price){
//       console.log(` index is ${i} and value is ${val}`)
//       let offer = val /10 ;
//        price[i]= price[i]- offer ;
//       console.log(` after offer discoult is ${price[i]}`)
//       i++
// } // second way ;
// for(let i =0 ;i<price.length;i++){
//       let offer = price[i] /10 ;
//        price[i] -= offer ;
       
// }
// console.log(price);

           // ARRY METHOD 
//about push // if you have to add something at last 
// let food =[ "apple","mango "];
// food.push("tata")
// console.log(food)

// about pop delete from end & return 
// food.pop();
// console.log(food)

// convert to string 
// console.log(food.toString())

      //CONCAT // basicly add to arry 
// let a = ["ashu", "kshu"]
// let b = [ " kdhu ", " ashu"]
// let e= [ " kshu ", " ashish"]

// let c = a.concat(b,e);
// console.log(c);
                //  unshift //user for puch
// let a = ["ashu", "kshu"];
//  a.unshift("kshu");

// console.log(a);
// // shift  //user for pop
// let val = a.shift(); 
// console.log("deleted val is " ,val );


        //slice();
// let a = ["ashu", "kshu", "ashisah", "agnihotri"];
// console.log(a.slice(1,3)) // not include 3 one 

      //splice;
// let arr = [ 1,2,3,4,5,];
// arr.splice(2,3,1,2,3);
// console.log(arr);
// add only value 
// //arr.splice(2,1)// deleteing element of 3 index
// console.log(arr);

//.....................................................//
                   //DAY 4 COMPLETE
                  
            //   DAY  5 START 
                // function 

// let a = "hellow";
// console.log(a.toUpperCase());
// let b = [1,2,3,]
// b.push(4);
// console.log(b); //() push() is function

                //  FUNCTION CALL 
// function myFunction(){
//       console.log("ashu is here ");
//       console.log("ashu is where ");
// }
// myFunction();

// function myFunction(msg) //parameter ;
// {
//       console.log(msg);
// }
// myFunction(" i love js ");
// myFunction(4);// argument 

// Q1 create a function to add 2 number 
// function sum(x,y){
//       console.log(x+y);
// }
// sum(4,5);
// sum(3,5);
// sum(3,4);
// sum(3,33);

// user of return
// function sum(x,y){
//       // x y behive local variable in function -> scope
//      s = x+y;
//      return s;
// }
// let val= sum(3,4);
// console.log(val);

                 // ARROW FUNCTION // IT IS WAY TO WRIGHT FUNCTION IN COMPACT FORM ;

// // arrow sum   //  part of modern JS 
// const sum =(a,b)=>{
//       console.log(a+b);
// };
// sum(3,4);

// for multiplycation
// const multi=(a,b)=>{
//       console.log(a*b);
//       }
// multi(2,3);
//     THROUGH RETURN 
// const multi=(a,b)=>{
// return a*b;      }

// console.log(multi(2,3));
// // know print heloow with this 
// const hellow=()=>{
//       console.log("hey my name is ashish agnihotri");
// }
// hellow();

//Q2  CREATE A FUNCTION USING THE FUNCTION KEYWORD THAT TAKES A STRING AS AN ARGUMENT & RETURN THE NUMBER OF VOWLES IN THE STRING 

// function countvoval(str){
//       let count =0;
//       for(const val of str){
//             if(val==="a" || val==="e" || val==="i" || val==="o" || val|| "u" );
//                   count ++ }
//      console.log(count);
// }
// countvoval("ashishagnihotri");

// Q3 create  a arrow function to perform same task
//     let countvoval =(str)=>{
//       let count= 0;
//          for(const val of str){
//             if(val==="a" || val==="e" || val==="i" || val==="o" || val|| "u" );
//                   count ++ }
//      console.log(count);
//     }
//     countvoval("ashishagnihotri");
             
             // FOR EWACH LOOP // arr.forEach(callbackFunction)
// callbackfun :here ,it is a function to execute for each element in the arry 
//*callback is a function passed as an argument to another function 

// let arr =[1,2,3,4,]
// arr.forEach(function ptintval(val){
//       console.log(val);
// });

 // WITH ARROW FUNCTION 
//  let arr =[1,2,3,4,]
// arr.forEach((val)=>{
//       console.log(val);
// });

// for upper case 

// let arr = ["ashu", "ashuuu", "kshu", "name"];

// arr.forEach((val,index,v) => {
//     console.log(val.toUpperCase(),index,arr);
// });

//         HIGHER ORDER FUNCTION ARE THOSE FUNCTION WHO CAN USER Aanoter  FUNCTION AS A PERAMETER OR RETURN FUNCTION       AND         THIS FUNCTION ARE (  FOR EACH  SUNCTION  )

// Q4 for a given arry number ,print the square of each val using the for each loop 
// let number =[1,2,3,4,]; // it run 4 time 
// number.forEach((val)=>{
//       for(int of number){
//             console.log(int * int )
//       }
// });

// let number = [1, 2, 3, 4]; // for one time
// number.forEach((val) => {
//     console.log(val * val);
// });

// another way to right this 
// let number = [1, 2, 3, 4]; 
// let cal = (val) => {
//     console.log(val * val);
// }
// number.forEach(cal);

      //    ARRY METHOD
// 1 map  create a new arry with the results of some operation the value its callback returns are used to form new arry 

// let num =[1,2,3,4]
//   num.map((val)=>{
//       console.log(val);

// });


// let num =[1,2,3,4]
//  let newArry = num.map((val)=>{
//       return val * val ;
// });

// console.log(newArry);
// console.log(num);
              // filter  method
// create anew arry of element that give true foa a conditionfilter eg ; all event element

// let arry =[1,2,3,4,5];
// let even = arry.filter((val)=>{
//       return val % 2 == 0;
// });
// console.log(even);
// console.log(arry);

// reduce method 
// performs some operation & reduce the arry to a single value it returns the single value it returns the single val 

// let arr = [1,2,3,4,5];
// let c= arr.reduce((res,current) => {
//       return res + current
// });
// console.log(c);

// for large number 
// let q = [1,2,3,4,5,]
// let output = q.reduce((pre,cur)=>{
//       return pre > cur ? pre :cur ;
// })
// console.log(output);

// Q we are giving arr marks of student filter out whose markks is greater then 90;

// let marks =[40,50,99,89,98,945,93,2,5,677,6];
// let filter=marks.filter((val)=>{
//       return val > 90 ;
// });
// console.log(filter);

// Q create a number n as input from user create an arry of number from 1 to n user the reduce method to calculate product of all numbers in the arry ;

// let n = Number(prompt("enter a number"))
// let arr = [];
// for(let i = 1 ; i<=n ; i ++){
//       arr[i-1] = i ;// 1[0], 2[1],3[2]...
// }
// console.log(arr)
// let sum=arr.reduce((pre,result)=>{
//       return pre + result ;
// });

// console.log("sum =",sum)

// console.log(arr)
// let factorial=arr.reduce((pre,result)=>{
//       return pre *  result ;
// });

// console.log("factorial is ",factorial);

//              DAY 5 COMPLETE 
//    dom --> DOCUMENT OBJECT MODEL 
/* <STYL></STYL> TAG IS USED TO ATTARCH CSS TO HTML
<SCRIPT></SCRIPT> IS USE TO CONNECT JS TO HTML */

         // WINDO OBJ 
// the window obj represent an open windo in a browser it is browser object not java script & is automatically related by browser it is a global obj with lots of properties & method
// console.log("hellow")
// window.console.log("hellow")  // we can right in this way also 

//              SELECTING WITH ID 

// let heading1 = document.getElementById("heading");
// console.dir(heading1);
//              SELECTING WITH CLASS

// let heading2= document.getElementsByClassName("heading3");
// console.dir(heading2);
//              

// let heading = document.getElementById("Myid");
// console.dir(heading); 


                  // SELECTING WITH TAG

// let pera = document.getElementsByTagName("p");
// console.dir(pera);

               //  QUERY SELECTOR  FOR 1 VALUE
// let select = document.querySelector("P"); //for 1 element 
// console.dir(select);


               // QUEAY SELECTOR FOR ALL

// let select = document.querySelectorAll("P"); //for all element 
// console.dir(select);

              // QUEARY SELECTOR FOR CLASS FOR ALL ELEMENT
// let select1 = document.querySelectorAll(".heading3"); //for all element 
// console.dir(select1);

         // QURARY SLESCTOR FOR AN ID
         
// let select1 = document.querySelectorAll("#MYid"); //for all element 
// console.dir(select1);


            

            //   console.dir(document.body.firstChild); // return tag name 
// let c = document.querySelector("#name").children;
// console.dir(c);


                // PROPERTY 

                 // to find tag name 
// let el = document.querySelector("p");
// console.log(el.innerText);

// let div = document.querySelector("div");
// console.dir(div);
             // print inner text 
// console.dir(div.innerText); //return html text not tag
           // inner html 
// console.dir(div.innerHTML);// return hole html with tag 
            // change inner text 
// div.innerText = "<div> inner div</div>";//user to change text of html
// console.log(div.innerText);
               

// let heading = document.querySelector("h1");
// console.dir(heading);
//                // change text in html
// heading.innerText = "new heading";
// console.dir(heading.innerText);
//             // CHANGE IN HTML
// heading.innerHTML ="<i> ner heading</i>"
// console.dir(heading.innerHTML);

               // TEXT CONTACT ;

// let heading = document.querySelector("h1");
// console.dir(heading.innerHTML);
// console.dir(heading.innerText); // it can not print beacuse of hide thig so we have to right inner contaent 
// console.dir(heading.textContent);

            //  DAY 6 COMPLE
       
            // DAY 7 START 

             //  get attribute 
// let a = document.querySelector("div")
// console.dir(a);

// let id = a.getAttribute("id");
// console.dir(id); // printing id 

// let name = a.getAttribute("name");
// console.dir(name);

             // for class
// let it_a = document.querySelector("p");
// console.dir(it_a);
// let b = it_a.getAttribute("class")
// console.dir(b);

              //  FOR CHANGE ATTRIBUTE 
// let it_a = document.querySelector("p");
// console.dir(it_a);

// // change class
// it_a.setAttribute("class", "cse");

// // check result
// console.dir(it_a);

        // FOR STYLE OF CSS IN JS 
// let div = document.querySelector("div");
// console.dir(div);
// console.dir(div.style);
            //    changing colour in js 
// console.dir(div.style.backgroundColor ="green"); method 1
// let b = div.style.backgroundColor = "red";
// console.dir(b);

              // hide property 
// let div = document.querySelector("div");
// console.dir(div);
// div.style.visibility ="hidden";

         // INSERT ELEMENY ; // add element in last 
// let newBt = document.createElement("button");
// newBt.innerText = " click me ";

// console.dir(newBt);

// let div = document.querySelector("div");
// div.append(newBt);
     
                  //add element in first
// let newBt = document.createElement("button");
// newBt.innerText = " click me ";

// console.dir(newBt);

// let div = document.querySelector("div");
// div.prepend(newBt); // addd in first

                // ADD ELEMENT JUST BEFORE NODE 
// let newBt = document.createElement("button");
// newBt.innerText = " click me ";

// console.dir(newBt);

// let div = document.querySelector("div");
// div.before(newBt); // just before node 

            //     ADD ELEMENT JUST AFTER NODE 

// let newBt = document.createElement("button");
// newBt.innerText = " click me ";

// console.dir(newBt);

// let div = document.querySelector("div");
// div.after(newBt); // just after node 

            //  AFTER PERA 

// let newBt = document.createElement("button");
// newBt.innerText = " click me ";

// console.dir(newBt);

// let div = document.querySelector("p");
// div.after(newBt); // just after node/element 

             // CREATE NEW HEADING ADD IN TOP 
// let newHeading = document.createElement("h1");

// newHeading.innerHTML = "<i> hi i am new</i>";

// document.querySelector("body").prepend(newHeading);

//       // FOR DELETING NODE 
// let pera = document.querySelector("p");
// pera.remove();
  
        // DAY 7 COMPLETE ;
                  
        // DAY 8 start
 
// let b1 = document.querySelector("#b1")
// b1.onclick =() =>{
//       console.log("button is click");
//       let a = 25 ;
//       a++;
//       console.log(a);//26
      
// }
// let b1 = document.querySelector("#b1")
// b1.onclick =(e) =>{
//       console.log(e);
//       console.log(e.clientY);
//       console.log(e.type);
//       console.log(e.target);
     
      
// }
// let b1 = document.querySelector("#b1");

// handler 1
// b1.addEventListener("click", () => {
//     console.log("button one was click - handler 1");
// });

// // handler 2
// b1.addEventListener("click", () => {
//     console.log("button one was click - handler 2");
// });

// // handler 3 (defined outside)
// const handler3 = () => {
//     console.log("button one was click - handler 3");
// };

// b1.addEventListener("click", handler3);

// // handler 4
// b1.addEventListener("click", () => {
//     console.log("button one was click - handler 4");
// });

// // remove handler 3
// b1.removeEventListener("click", handler3);
// let box = document.querySelector("#click");

// let currentmod = "light"; // initial

// box.addEventListener("click", () => {
//     if (currentmod === "light") {
//         currentmod = "dark";
//         document.body.style.backgroundColor = "black"; 
//     } else {
//         currentmod = "light";
//         document.body.style.backgroundColor = "white"; 
//     }

//     console.log(currentmod);
// });
          
        //    DAY 8 COMPLETE 
        // DAY  9 AND 10 WAS PROJECT WHICH IS COMPLETE
      
      
        // DAY 11 START 
      
      
        //    CLASS AND OBJECT PROTO TYPE  
// const student = {
//         fullName : "ashishAgnihotri",
//         marks :9.86,
//         printMarks: function(){
//                 console.log(this.marks) //this accesing marks
//         },
// };

// const employ={
//         calltex(){
//         console.log("10% is tex")
//         },
// };

// arjun ={
//         salary : 5000,
// };
// arjun1 ={
//         salary : 5000,
// };
// arjun2 ={
//         salary : 5000,
// };
// arjun3 ={
//         salary : 5000,
// };
// arjun4 ={
//         salary : 5000,
// };

// let b = arjun.__proto=employ;
// let b1 = arjun1.__proto=employ;
// let b2 = arjun2.__proto=employ;
// let b3 = arjun3.__proto=employ;
// let b4= arjun4.__proto=employ;
// console.log(b2.calltex());


        //    class's 
// class Toyota {
//         constructor(brand,mileage){
//                 console.log("creating new obj");
//                 this.brand=brand
//                 this.mileage= mileage;
//         }
//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("car stop");
//     }

//     setBrand(brand) {
//         this.brand = brand;
//     }
// }

// let fortuner = new Toyota("fortuner" ,10);
// let neno = new Toyota();
// neno.stop();

// fortuner.start();              // just call
// // fortuner.setBrand("Fortuner"); // set brand

// // console.log(fortuner.brand);   // print brand
// console.log(fortuner );

        //     INHERITANCE 
// class parent{
//         hellow(){
//                 console.log("hellow")
//         }
// }
// class child extends parent{}
// let obj = new child();
// obj.hellow();

        //     SECOND EXAMPLE OF INHEREITANCE
// class person{
//         constructor(){
//                 this.species = "homo, animal";
//         }
//         eat(){
//                 console.log("eat")
//         }
//         sleep(){
//                 console.log("sleep")
//         }
// }

// class enginer {
//         work(){
//                 console.log("it can work")
//         }
// }
// let ashuobj = new enginer;    for obj normal call bt obj
// ashuobj.work();

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// class enginer extends person{
//         work(){
//                 console.log("it can work")
//         }
// }
// let ashuobj =  new enginer ; 
// ashuobj.eat();
// let p1 = new person;
// let e1 = new enginer;

        //    SUPER KEY WORD IF YOU WANT TO CALL PARENT CONSTRUCTOR
// class Person {
//     constructor() {
//           console.log("enter parent constructor");
//         this.species = "homo, animal";
//     }

//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }
// }

// class Engineer extends Person {
      
        
//     constructor(branch) {
//           console.log("enter chind constructor");
//         super(); // call parent constructor first
//         this.branch = branch;
//          console.log("exit chind constructor");

//     }

//     work() {
//         console.log("it can work");
//     }
// } 

             // ONE MORE INTRESATING THING 
// class Person {
//     constructor(name) {
        
//         this.species = "homo, animal";
//         this.name = name ;
//     }

//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }
// }

// class Engineer extends Person {
      
        
//     constructor(name) {
       
//         super(name); // call parent constructor first
        
      

//     }

//     work() {
//         super.eat();
//         console.log("it can work");
//     }
// }

// let engobj = new Engineer("ashu");
// console.log(engobj);


          //LACTURE ERROW HEANDILING 
// let a = 2;
// let b= 5;
// console.log(a+b)
// console.log(a+b)
// // console.log(a+c)//error 
// try{
//        console.log(a+c) 
// }catch(err){
//         console.log(err)
// }
// console.log(a+b)
// console.log(a+b)

        //      DAY 12 
// SYNCHRONOUS PROGRAMIN WORK LINE BY LINE 
// console.log("one");  |
// console.log("2");    |   EX
// console.log("3");    |

//          ASYNCHRONOUS METHOD   DON'T RUN LINE BY LINE IF ONE CODE TAKE TIME EX(API)THEN IT CAN RUN ANOTHER CODE

// console.log("1")
// console.log("2")

// setTimeout(()=>{
//         console.log("hellow")
// },2000) //2 second = 2000ms ;

// console.log("3")

              // CLASS BACK
// function sum(a, b) {
//     console.log(a + b);
// }

// function calculater(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculater(1, 2, sum);

// const hellow=() =>{
//         console.log('hellow')
// }
// setTimeout(hellow,3000)
 
              //CALL BACK HELL 

// function getData(data, getnext) {
//     setTimeout(() => {
//         console.log("data", data);
        
//         if (getnext) {  
//             getnext();   
//         }
        
//     }, 2000);
// }

// // function call  also call back hell 
// getData(5, () => {
//     getData(3, ()=>{
//         getData(4)
//     });
// });    
              //PROMISE
// it is here to resolve probleam of call back in js

// let promise = new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     // resolve(123);
//     // return;
//     reject("some error");
// });

// console.log(promise);

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");

//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

 //  FOR REJECT 

//  function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             reject("error");

//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

 //  after full fill promise after reject
          

            // PROMISE CHAIN 
// function asyncFunc1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some datail");
//             resolve("success");
//         }, 4000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some datai2");
//             resolve("success");
           
//         }, 4000);
//     });
// }

// console.log("featching detail");

//  asyncFunc1().then((res) => {
    
//     console.log("featch data2")
//      asyncFunc2().then((res)=>{
       
//     });
// }); 


           //PROMISE CHAIN 

//  function getData(dataId,) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("sucess");

//         }, 5000);
//     });
// }

//  getData(1).then((res)=>{
       
        // return getData(2)
// }).then((res)=>{
//          return getData(3)
// }).then((res)=>{
//         console.log(res);
// });

                // ASYNC ---- await

// async function hellow(){
//         console.log("hellow")
// }

// async function getWeatherData() {
//     await Api();//1stcall
//     await Api();//2stcall
// }

// function Api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

//     /ASYNC -AWAIT

//  function getData(dataId,) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("sucess");

//         }, 2000);
//     });
// }

//     /ASYNC -AWAIT
// async function getAllData() {
//         console.log("geeting datav 1")
//         await getData(1);
//          console.log("geeting datav 2")
//         await getData(2);
//          console.log("geeting datav 3")
//         await getData(3);
        
// }
 
//  DAY 12 COMPLETE 
 //                   DAY 13 START 


//       IIFE
// IT CAN BE WRITTEN IN THREE FORM 1) (FUNCTION(){});
//2)(()=>{}); ARROW FUNCTION 
//3) (ASYNC()=>{});

// (async function () {
//         console.log("geeting datav 1")
//         await getData(1);
//          console.log("geeting datav 2")
//         await getData(2);
//          console.log("geeting datav 3")
//         await getData(3);
        
// })();

                // API  //FETCH API      

// const URL = "https://catfact.ninja/fact";

// const getFacts = async () => {
//     console.log("getting data");
//     let response = await fetch(URL);
//     console.logog(response);  //json formet
// };

// now we have to make it into js object (and it is second step)

/* AKAX is Asynchronous JS & XMl
JSON is javascript object notation 
JSON() METHOD : returns a second promise that resolves with the result of parsing the response body text as Json >(input as JSON ,output is JS object)*/

const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector(".fact");
const button = document.querySelector("#button");


// const getFacts = async () => {
//     console.log("getting data");
//     let response = await fetch(URL);
//     console.log(response); // response object

//     let data = await response.json();
//         console.log(data); // JSON data
//       factPara.innerHTML  = data.text
// };

                /// who to do with promise /////
function getFacts() {
        fetch(URL).then((response) => {
                return response.json();
        }).then((data) => {
                console.log(data);
                 factPara.innerHTML  = data.text
        });
}                       
                
button.addEventListener("click", getFacts);

                                           //  DAY 13 END
                                        //DAY 14 STARTED 
// 14 day end 
// Completed 14 Days JavaScript Course 
// - Practiced core JS concepts (variables, functions, loops, DOM, async/await)
// - Built mini projects daily
// - Final project completed successfully
// - Improved problem solving and coding consistency                                
                        
                                               