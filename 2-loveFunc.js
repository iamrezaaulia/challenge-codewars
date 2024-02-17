// Day 2/365
// 8 kyu
// https://www.codewars.com/kata/555086d53eac039a2a000083

// function loveFunc(flower1, flower2){
//     return (flower1+flower2) % 2 === 1
// }

const loveFunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2 ? true : false

console.log(loveFunc(3,3))