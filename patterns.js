//! Solid Rectangle

// for (i = 1; i <= 4; i++){
//   for (j = 1; j <= 5; j++){
//     document.writeln("*");
//   }
//   document.write("</br>")
// }

//! Hallow Rectangle

// let n = Number(prompt("Enter the length of rectangle"));
// let m = Number(prompt("Enter the width  of  rectangle"));
// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= m; j++) {
//     if (j == 1 || j == m || i==1 || i==n) {
//           document.writeln("*");
//     }
//     else {
//           document.writeln("_");
//     }
//   }
//   document.write("</br>");
// }

//! Pyramid Number
// let a = Number(prompt("enter the number of pyramid size"));

// for (let i = 1; i <= a; i++) {
//   for (let j = 1; j <=i; j++) {
//     document.writeln(j)
//   }
//   document.write("</br>")
// }

//! Inverse Pyramid

// let a = Number(prompt("enter the number of pyramid size"));

// for (let i = 1; i <= a; i++){
//   for (let j = 1; j <= a - i; j++){
//     document.writeln("_");
//   }
//   for (let j = 1; j <= i; j++){
//     document.writeln("*");
//   }
// document.write("</br>");

// }

//! Reverse Number Pyramid

let a = Number(prompt("enter the number"));
for (let i = 0; i <= a; i++){
  for (let j = 1; j <= a - i + 1; j++){
    document.writeln(j);
  }
  document.write("</br>")
}
//! Pttern 2

// function alphabet_Soup(str) {
//   return str.split("").sort().join("");
// }

// // console.log(alphabet_Soup("Python"));
//! Circle

// function circleArea(radius) {
//   let area = Math.PI * (radius * radius);
//   console.log(area);
//   console.log(Math.round(area * 100) / 100);
// }
// circleArea(5);

// // console.log(alphabet_Soup(prompt("add any word to rearrange in APl order")));