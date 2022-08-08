// let num1 = 10;
// let num2 = 20;
// let num3 = "10";
// let word1 = "Hello";
// let word2 = "hello";

//LOGICAL OPERATORS
// console.log(num1 < num2);
// console.log(num1 > num2);
// console.log(num1 <= num2);
// console.log(num1 >= num2);
// console.log(!true);
// console.log(!false);
// console.log(num1 == num3);
// console.log(num1=== num3); // equality check
// console.log(word1=== word2);
// console.log(word1 !== word2);

// CONTROL FLOW
// let item = "Gino";
// if(item === "Annapurna") {
// console.log( "Buy Annapurna");
// } else if( item === "U2") {
//     console.log ("Buy U2")
// } else if (item === "A1") {
// console.log("Buy A1");
// }
// //Grading System
// let score = 150;
// if (score >= 0 && score <= 100){
//     if (score >= 90) {
//         console.log ( "Excellent");
//     } else if (score >= 80) {
//         console.log ("Excellent");
//     } else if ( score >= 70) {
//         console.log ("Very Good");
//     } else if ( score >= 60) {
//         console.log ("Good");
//     } else if (score >= 50) {
//         console.log ("Credit");
//     }else if (score >= 40) {
//         console.log ("Pass");
//     }else if ( score >= 0){
//         console.log ("Fail");
//     }
           
// }else {
//     console.log ("Please enter a valid number")
// }
// FUNCTION
// function sum (a, b =0){
//     let total = a + b;
//     return total;
// }
// let eleven =sum(5, 6)

// let fifteen =sum (7, 8)
// let nineteen =sum (9, 10)

// function multiply (a, b =5){
   
//     let total = a * b;
//     return total;
// }

// console.log(multiply (12, 4));
// let Y = multiply (3, 8);
// let Z = multiply (4, 9);
// console.log (multiply(4))

// LOOPS
for (let i = 1; i <= 100; i ++) {
    console.log(i + ". I will not eat in class again");
}
// While loop
let num = 1;
while (num <= 10 ){
    console.log (num);
    num = num + 1
}
// do... while loop
let age = 1;
do {
    console.log(age +".You can't vote");
    age++;
} while ( age < 18);


// Array method
let ages = [ 19,26,24, 18, 22,35,30,33,31,19,29];

for ( let age of ages) {
    console.log(Math.pow (age,2));
}

let marriage = ages.filter ( (mark) => mark > 25);
console.log(marriage);

// map
let squares = ages. map ((age)=> age * age); 
console.log(squares);

    // find 
    let nineteen = ages.find((age)=> age === 19);
    console.log(nineteen);
