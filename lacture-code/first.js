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