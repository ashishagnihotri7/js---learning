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