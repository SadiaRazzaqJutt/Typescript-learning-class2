// Assignement tasks
// Calculate your age based on the current year and your birth year.
var birthYear = 1996;
var currentYear = 2024;
var myAge = currentYear - birthYear;
console.log("My age based on current year =", myAge);  // var myAge = 2024 - 1996; My age based on current year = 28

// Write a program that calculates the area of a rectangle using length and width variables.
// lets find the area of rectangle, whose length (A)= 20 cm, width (B) = 4 cm.
var A = 20;
var B = 4;
var area = A*B;  
console.log("Area = ", area);  // Area = length*width = A*B = 20cm*4cm = 80cm2

// Write a program that calculates the area of a circle.
// lets find the area of circle: whose diameter (d) = 10m
// So, Radius (r) = d/2 = 10/2 = 5m
// pi = 3.14
var r = 5;
var areaofcircle = 3.14*r**2; 
console.log("Area of Circle = ", areaofcircle);  // Area of Circle = 3.14*5m**2 = 3.14*25 = 78.5m2

// Write a program that calculates the area of the cube.
// lets find the area of cube, we know that there are 6 faces or sides of cube.
// lets suppose, one side of cube (s) = 4inches 
var s = 4;
var areaofcube = 6*s**2;
console.log("Area of Cube = ", areaofcube);  // Area of Cube = 6*4**2 = 6*16 = 96inches2

// Create a program that converts a temperature from Fahrenheit to Celsius and vice versa using a variable.
// lets Convert 99°F to Celsius 
let Fahrenheit = 99;
var celsius = (Fahrenheit-32)*5/9;
console.log("Conversion of Fahrenheit to Celsius = ", celsius);  //  (99-32)*0.55 = 67*0.56 = 37.5°C 
// lets Convert Celsius to °F, celsius (C) = 40
let Celsius = 40;
var fehrenheit = (Celsius*9/5)+32;
console.log("Conversion of Celsius to Fahrenheit = ", fehrenheit);  // Celsius to Fahrenheit = (40*1.8)+32 = 72+32 = 104°F

// Convert a given number of seconds into minutes and seconds using variables.
// 1. Convert seconds to minutes,
// Formula: seconds/60 = minutes
// 2. Convert   minutes to seconds,
// Formula: minutes*60 = seconds
// lets convert 360 seconds into minutes,
var seconds = 370;
var minutes = seconds/60;
console.log("Conversion of Seconds into Minutes & seconds = ", minutes); // seconds to minutes = 370/60 = 6minutes & 17 seconds
// lets convert 3 minutes into seconds,
var minutes = 3;
var seconds = minutes*60;
console.log("Conversion of Minutes into Seconds = ", seconds); // minutes into seconds = 3*60 = 180seconds

// Write a program that calculates the percentage
// lets find the percentage of marks obtained in class test.
var obtainedMarks = 44;
var totalMarks = 50;
var percentage = obtainedMarks/totalMarks*100;
console.log("Percentage of marks obtained in class test = ", percentage);  // percentage = 44/50*100 = 88percent

// // Increment and Decrement Operator:
// //  - Q1:
// let a: number = 2; //a = a+1 = 3
// let b: number = ++a * 2; //b = 3*2 = 6 
// // b?
// console.log("b = ",b);  
// // (in preincrement both variables will be updated)

// // - Q2
// let x = 5;
// let y = x-- + 2;  
// console.log("x = ",x, "y = ",y); 
// // (in postdecrement variable x will be updated, but variable y remains same) So,x = 5-1 = 4, y = 5+2 =7

// // - Q3 
// let x = 3;
// let y = ++x + x++ + ++x;
// // y?
// console.log("y = ", y);
// // Explaination: x = 3 --> 4 --> 5 --> 6, y = 4 + 4 + 6 = 14

// // - Q4 
// let m = 2;
// let n = ++m * m++ * --m;
// // n?
// console.log("n = ", n);
// // Explaination: m = 2 -->3 --> 4 --> 3, n = 3*3*3 = 27 

// // - Q5
// let a = 3;
// let b = 5;
// let result = ++a + b-- - a++ + --b;
// // result?
// console.log("result = ", result);
// // Explaination: a = 3 -->4 -->5, b = 5 -->4 -->3, result = 4+5-4+3 = 12-4 = 8 

// // - Q6
// let m = 2;
// let n = 4;
// let p = m++ + ++n - --m + n--;
// // m?,n?,p?
// console.log("m = ",m, "n = ",n, "p = ",p);
// // Explaination: m = 2 -->3 -->2, n = 4 -->5 -->4, p = 2+5-2+5 = 12-2 = 10

// //- Q7
// let a = 5;
// let b = 3;
// let c = 2;
// let d = 7;
// let result = ++a * (b-- + c) / --d;
// // a?, b?, c?, d? ,result?
// console.log("a = ",a,"b = ",b, "c = ",c, "d = ",d, "Result = ",result);
// // Explaination: a = 5 --> 6
// // b = 3 --> 2
// // c = 2
// // d = 7 --> 6
// // result = 6*(3+2)/6 = 6*5/6 = 5

//- Q8
let m = 2;
let n = 3;
let o = 4;
let result = m++ * (--n + m) / (o-- - n);
// m?, o?, n?, result?
console.log("m = ",m, "n = ",n, "o = ", o, "Result = ",result);
// Explaination: m = 2 -->3
// n = 3 -->2
// o = 4 -->3
// result = 2*(2+3)/(4-2) = 2*5/2 = 5