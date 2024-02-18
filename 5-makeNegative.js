// 5 of Day 2/365
// 8 kyu
// https://www.codewars.com/kata/55685cd7ad70877c23000102

// function makeNegative(num) {
//     if (num <= 0) {
//         return num;
//     } else {
//         return -Math.abs(num);
//     }
// }

const makeNegative = num => num <= 0 ? num : -Math.abs(num);

console.log(makeNegative(-9));