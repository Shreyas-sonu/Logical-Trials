//! Convert letter of a given string in alphabetical order

// function sortArray(str) {
//   let strr = str.split("");
//   for (var i = 0; i < strr.length; i++) {
//     for (var j = 0; j < strr.length - i; j++) {
//       let temp;
//       if (strr[j] > strr[j + 1]) {
//         temp = strr[j];
//         strr[j] = strr[j + 1];
//         strr[j + 1] = temp;
//       }
//     }
//   }
//   return strr.join("");
// }

// //data set to sort
// let data = prompt("Enter any word or sentence")
// let result;
// let data1 = data.split(" ");
// data1.forEach(value => {
//   value = sortArray(value.toLowerCase());
//   if (result) {
//     result += " ";
//     result += value;
//   } else {
//     result = value;
//   }
// });
// console.log(result);

//! Trial in string asscii

// let a1 = "a";
// let a2 = "b";
// console.log(a1>a2);
// ! Armstrong number

// let num = prompt("enter a number");
// let sum = 0;
// for (i = 0; i < num.length; i++) {
//   sum += num[i] ** num.length;
// }
// console.log(sum);
// if (sum == num) {
//   console.log("it is a armstrong number");
// } else {
//   console.log("it is not a armstrong number");
// }

//! empty an array
// let arr = [1, 2, 3, 4];
// arr == null ? console.log(arr) : console.log("");

// ! array into object

// var arr = [1, 2, 3, 4];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//   obj[i] = arr[i];
// }
// console.log(obj);

// ! ascending array

// let arr = [20, 10, 30, 5];
// for (let i = 1; i < arr.length; i++) {
//   for (j = 0; j < i; j++) {
//     if (arr[i] < arr[j]) {
//       x = arr[i];
//       arr[i] = arr[j];
//       arr[j] = x;
//     }
//   }
// }
// console.log(arr);

// !average of n numbers

// let start = parseInt(prompt("enter starting number"));
// let end = parseInt(prompt("enter end number"));
// let count = (end - start) + 1;
// let total = 0;
// let avg = 0;
// for (i = start; i <= end; i++) {
//   total += i;
//   avg = total / count;
// }

// console.log(avg);

//! calculator

// const n1 = prompt("enter n1");
// const n2 = prompt("enter n2");
// const operator = "*";
// switch (operator) {
//   case "+": {
//     console.log(n1 + n2);
//     break;
//   }
//   case "-": {
//     console.log(n1 - n2);
//     break;
//   }
//   case "*": {
//     parseInt(console.log(n1 * n2));
//     break;
//   }
//   case "/": {
//     console.log(n1 / n2);
//     break;
//   }
//   default: {
//     console.log("enter valid number");
//   }
// }

// !celsius to fahrenheit

// let tempInCelsius = prompt("enter temperature in celcius");
// let tempInFahrenheit = tempInCelsius * (9 / 5) + 32;
// console.log(tempInFahrenheit);

// ! fibonacci series

// var n1 = 0;
// var n2 = 1;
// var result = 0;
// var number = 10;
// result = n1 + n2;

// while (result <= number) {
//   n1 = n2;
//   n2 = result;
//   result = n1 + n2;
// }
// console.log(result);

//! sort array in Ascending Order

// var array = [10, 98, 54, 23, 78, 45];
// for (let i = 1; i < array.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (array[i] < array[j]) {
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
//   }
// }
// console.log(array);

// ! ASCII value of a character

// const string = prompt("Enter a character: ");
// const result = string.charCodeAt(0);

// console.log(`The ASCII value is: ${result}`);

//! Find Average of given array

// var arr = [10, 20, 30];
// var sum = 0;
// var avg;
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// avg = sum / arr.length;
// console.log(avg);

//! celsius to fahrenheit

// const celsius = prompt("Enter a celsius value: ");
// const fahrenheit = celsius * 1.8 + 32;

// console.log(
//   `${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`
// );
//! Find the length of an string

// function charCount(string) {
//   var length = 0;
//   while (string[length]) {
//     length++;
//   }
//   return length;
// }
// document.write(charCount("Rupali"));

//! combine multiple into one array

// let x = ["java"];
// let y = ["java"];
// let z = ["java"];

// let combinearray = x.concat(y, z);
// console.log(combinearray);

// let combineWithSpread = [...x, ...y, ...z];
// console.log(combineWithSpread);

// ! Convert Decimal to Binary

// let number = prompt("Enter a decimal number: ");

// function convertToBinary(x) {
//   let bin = 0;
//   let rem,
//     i = 1,
//     step = 1;
//   while (x != 0) {
//     rem = x % 2;
//     console.log(
//       `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(
//         x / 2
//       )}`
//     );
//     x = parseInt(x / 2);
//     bin = bin + rem * i;
//     i = i * 10;
//   }
//   console.log(`Binary: ${bin}`);
// }
// convertToBinary(number);

// using toString() method
// const number = parseInt(prompt("Enter a decimal number: "));
// const result = number.toString(2);

// console.log("Binary:" + " " + result);

//! Program to sort array in Descending order

// var array1 = [10, 98, 54, 23, 78, 45];
// for (let i = 1; i < array1.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (array1[i] > array1[j]) {
//       let temp = array1[i];
//       array1[i] = array1[j];
//       array1[j] = temp;
//     }
//   }
// }
// console.log(array1);

//! program to validate an email address

// function validateEmail(email_id) {
//   const regex_pattern =
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   if (regex_pattern.test(email_id)) {
//     console.log("The email address is valid");
//   } else {
//     console.log("The email address is not valid");
//   }
// }

// validateEmail("abc123@gmail.com");

//!  Check Whether Array is Empty or Not

// var arr = [1, 2, 3, 4, 5, 6];
// if (arr.length === 0) {
//   alert("Array is Empty");
// } else {
//   alert("Array is Not Empty");
// }

//!  Check if the number is even or odd

// const number = prompt("Enter a number: ");
// if (number % 2 == 0) {
//   console.log("The number is even.");
// } else {
//   console.log("The number is odd.");
// }

//! Even index should be multiply by 2

// var arr = [10, 20, 30, 40, 50];
// let multi = arr.map((val, ind) => {
//   if (ind % 2 == 0) {
//     return val * 2;
//   } else {
//     return val;
//   }
// });
// console.log(multi);

//! factorial number

// function factorial() {
//     let i,
//         fact = 1;
//     let num = document.getElementById("num").value;
//     for (i = 1; i <= num; i++) {
//         fact = fact * i;
//     }
//     i = i - 1;
//     document.getElementById("res").innerHTML =
//         "The Factorial of the number " + i + " is " + fact;
// }

//! Find the factors of given number

// let value = prompt("Enter a positive number");
// console.log("factors of number: ");
// for (let i = 1; i <= value; i++) {
//   if (value % i == 0) {
//     console.log(i);
//   }
// }

//! Filtered data which is having length more than 6

// let array = ["rupali", "vasanti", "vasant", "shinde"];
// let filteredData = array.filter((value, index) => {
//   if (value.length > 6) {
//     return value;
//   }
// });
// console.log(filteredData);

//! Largest number among three number

// function LargestNumber(a, b, c) {
//   let max_val = 0;
//   if (a > b) {
//     max_val = a;
//   } else {
//     max_val = b;
//   }
//   if (c > max_val) {
//     max_val = c;
//   }
//   console.log(max_val);
// }
// LargestNumber(10, 50, 30);

//! program to find the LCM of two integers

// const num1 = prompt("Enter a first positive integer: ");
// const num2 = prompt("Enter a second positive integer: ");
// let min = num1 > num2 ? num1 : num2;
// while (true) {
//   if (min % num1 == 0 && min % num2 == 0) {
//     console.log(`The LCM of ${num1} and ${num2} is ${min}`);
//     break;
//   }
//   min++;
// }


//! Prime Number

// let number = parseInt(prompt("Enter a number"));
// let isPrime = true;
// if (number > 1) {
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     document.write(`${number} is a prime number`);
//   } else {
//     document.write(`${number} is a not prime number`);
//   }
// }

//! Remove Duplicates from an array

// const array = [1, 2, 3, 2, 3];
// function getUnique(arr) {
//   let uniqueArr = [];
//   for (let i of arr) {
//     if (uniqueArr.indexOf(i) === -1) {
//       uniqueArr.push(i);
//     }
//   }
//   console.log(uniqueArr);
// }
// getUnique(array);

//! Using set method
// function getUnique(arr) {
//   let uniqueArr = [...new Set(arr)];
//   console.log(uniqueArr);
// }
// const array = [1, 2, 3, 2, 3];
// getUnique(array);

//! Find Square root of Number

// const number = prompt("Enter the Number");

// const result = Math.sqrt(number);
// console.log(result);

// function srq(num) {

//     let res = ""
// }

//! Sum of Natural numbers

// const number = parseInt(prompt("Enter a positive integer: "));
// let sum = 0,
//   i = 1;
// while (i <= number) {
//   sum += i;
//   i++;
// }
// console.log("The sum of natural numbers:", sum);