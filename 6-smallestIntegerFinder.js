// 6 of Day 2/365
// 8 kyu
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
// }


const smallestIntegerFinder = array => array.sort((a,b)=> a - b)[0];

console.log(smallestIntegerFinder([78,56,232,412,228]));