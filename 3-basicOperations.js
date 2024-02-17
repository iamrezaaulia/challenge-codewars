// 3 of Day 1/365
// 8 kyu
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7

// function basicOp(operation, value1, value2){
//     if (operation === "+"){
//         return value1 + value2
//     }
//     if (operation === "-"){
//         return value1 - value2
//     }
//     if (operation === "*"){
//         return value1 * value2
//     }
//     if (operation === "/"){
//         return value1 / value2
//     }
// }

// const basicOp = (operation, value1, value2) => {
//     switch (operation) {
//         case "+":
//             return value1 + value2
//         case "-":
//             return value1 - value2
//         case "*":
//             return value1 * value2
//         case "/":
//             return value1 / value2
//         default:
//             return 0;
//     }
// }
        
// const basicOp = (operation, value1, value2) => eval(value1+operation+value2);

const basicOp = (operation, value1, value2) => operation === "+" ? value1 + value2 : operation === "-" ? value1 - value2 : operation === "*" ? value1 * value2 : value1 / value2;

console.log(basicOp("+", 4, 7));