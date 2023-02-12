// for loop exercise
// Q. 1 PRINT 1 - 100

// for (var a = 1; a <= 100; a++) {
//   console.log(a);
// }

// // Q. 2

// for (var a = 0; a <= 100; a++) {
//   if (a % 2 === 0) {
//     console.log(a);
//   }
// }

// Q.3

// for (var a = 0; a <= 100; a++) {
//   if (a % 2 === 1) {
//     console.log(a);
//   }
// }

// Q. 4

// for (var a = 1; a <= 100; a++) {
//   if (a % 5 === 0) {
//     console.log(a);
//   }
// }

// Q 5

// for (var a = 1; a <= 100; a++) {
//   if (a % 5 === 0 && a % 15 === 0) {
//     console.log(a);
//   }
// }

// q. 6  orint 2's table

// for (var a = 2; a <= 20; a = a + 2){
//     console.log(a);
// }

// Q.7

// let ans = Number(prompt("how many time do you want to print hello world?"));
// for (let i = 1; i <= ans; i++) {
//   console.log(i +"hello world");
// }

// Q. 8

// var sum = 0;
// for (var a = 1; a <= 100; a++) {
//   sum = sum + a;
// }
// console.log(sum);

// Q. 9 1 - 100 sum all odd number?

// var sum = 0;
// for (var a = 1; a <= 100; a++) {
//   if (a % 2 === 1) {
//     sum = sum + a;
//   }
// }
// console.log(sum);

// // Q. 10    1 - 100 sum all even number?

// var sum = 0;
// for (var a = 1; a <= 100; a++) {
//   if (a % 2 === 0) {
//     sum = sum + a;
//   }
// }
// console.log(sum);

// Q. 11

// for (var a = 1; a <= 2048; a = a * 2) {
//   console.log(a);
// }

// Q. 12

// for (var a = 1; a <= 100; a++) {
//   document.write(a);
//   if (a % 10 === 0) {
//     document.write("<br>");
//   }
// }

// Q. 13

// for (var a = 1; a <= 100; a++) {
//   console.log(a);
//   if (a % 3 === 0 && a % 5 === 0) {
//     console.log("fizzbuzz");
//   }
// }

// Q.  14  10 table ?

// var x = 10;
// for (var i = 1; i <= 10; i++) {
//   console.log(x + "*" + i + "=" + x * i);
// }

//   Q.  15

// for (let i = 1; i <= 50; i++) {
//   if (i <= 10) {
//     console.log(i + " A");
//   } else if (i <= 20) {
//     console.log(i + " B");
//   } else if (i <= 30) {
//     console.log(i + " C");
//   } else if (i <= 40) {
//     console.log(i + " D");
//   } else if (i <= 50) {
//     console.log(i + " E");
//   }
// }

//  Q. 16

// for (let i = 50; i >= 1; i--) {
//   if (i <= 10) {
//     console.log(i + " E");
//   } else if (i <= 20) {
//     console.log(i + " D");
//   } else if (i <= 30) {
//     console.log(i + " C");
//   } else if (i <= 40) {
//     console.log(i + " B");
//   } else if (i <= 50) {
//     console.log(i + " A");
//   }
// }

// Q. 17                                                       unsolve"""""

// for (let a = 5; a <= 10000; a = a * 5) {
//   console.log(a);
// }

// Q. 18

// for (let a = 3; a <= 500; a = a + 3) {
//   console.log(a);
// }

// Q. 19

// for (let a = 120; a <= 1048; a = a + 101) {
//   console.log(a);
// }

// Q. 20

// for (let a = 100; a >= 0; a = a - 5) {
//   console.log(a);
// }

// Q. 21

// for (let a = 1; a <= 70; a++) {
//   if (70 % a === 0) {
//     console.log(a);
//   }
// }

// whileloop  .............................

// Q. 1

// let a = 1;
// while (a <= 10) {
//   console.log(a);
//   a++;
// }

// Q. 2

// let a = 1;
// let sum = 0;
// while (a <= 10) {
//   sum = sum + a;
//   a++;
// }
// console.log(sum);

// Q . 3

// let a = 10;
// while (a >= 1) {
//   console.log(a);
//   a--;
// }

// Q. 4

// let a = 2;
// while (a <= 20) {
//   console.log(a);
//   a++;
//   a++;
// }

// Q. 5

// let a = 1;
// let sum = 0;
// while (a <= 100) {
//   if (a % 2 === 1) {
//     sum = sum + a;
//   }
//   a++;
// }
// console.log(sum);

// do whileloop.................

//Q. 1

// let a = 1;
// do {
//   console.log(a);
//   a++;
// } while (a <= 5);

// Q. 2

// let a = 10;
// do {
//   console.log(a);
//   a--;
// } while (a >= 1);

// Q. 3

// let a = 1;
// let sum = 0;
// do {
//   sum = sum + a;
//   a++;
// } while (a <= 10);
// console.log(sum);

// Q. 4

// let a = 2;
// do {
//   console.log(a);
//   a = a + 2;
// } while (a <= 20);

// Q. 5

// let ans = Number(prompt("How many times do you want to print Hello World"));
// let a = 1;
// do {
//   document.write("helloworld" + "<br>");
//   a++;
// } while (a <= ans);

// Q.6

// let a = 1;
// let sum = 0;
// do {
//   if (a % 2 === 0) {
//     sum = sum + a;
//   }
//   a++;
// } while (a <= 100);
// console.log(sum);

// pattern  loop  exercise...............

// for (let a = 1; a <= 5; a++) {
//   let ans = "";
//   for (let b = 1; b <= a; b++) {
//     ans = ans + 1;
//   }
//   console.log(ans);
// }

// for (var i = 5; i >= 1; i--) {
//   var ans = "";
//   for (var j = 1; j <= i; j++) {
//     ans = ans + "*";
//   }
//   console.log(ans);
// }

// for (var a = 1; a <= 5; a++) {
//   var ans = "";
//   for (var b = 1; b <= a; b++) {
//     ans = ans + "*";
//   }
//   console.log(ans);
// }

// for (var a = 5; a >= 1; a--) {
//   var ans = "";
//   for (var b = 1; b <= a; b++) {
//     ans = ans + b;
//   }
//   console.log(ans);
// }

// for (var a = 1; a <= 5; a++) {
//   let ans = "";
//   for (var b = 5; b >= a; b--) {
//     ans = ans + b;
//   }
//   console.log(ans);
// }

// for (var a = 1; a <= 5; a++) {
//   let ans = "";
//   for (var b = 6 - a; b >= 1; b--) {
//     ans = ans + b;
//   }
//   console.log(ans);
// }

// for (var a = 1; a <= 5; a++) {
//   var ans = "";
//   document.write("<br>");
//   for (var b = 1; b <= 5; b++) {
//     ans = ans + "*";
//   }
//   document.write(ans);
// }

// for (var a = 1; a <= 10; a++) {
//   var ans = "";
//   for (var b = 11 - a; b >= 1; b--) {
//     ans = ans + b;
//   }
//   console.log(ans);
// }

//// ** switch

let num = 8;
switch (num) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tues");
    break;
  case 3:
    console.log("wed");
    break;
  case 4:
    console.log("thu");
    break;
  case 5:
    console.log("fri");
    break;
  case 6:
    console.log("stu");
    break;
  case 7:
    console.log("san");
    break;
  default:
    console.log("default case runing");
}

switch ("") {
  case "Apti":
  case "Reasoning":
  case "Quant0":
  case "Tringo":
    console.log("match");
    break;
  case "kavita":
    console.log("hindi");
    break;
  case "poem":
    console.log("english");
    break;
  case 1997:
    console.log("history");
    break;
  default:
    console.log("science");
}
