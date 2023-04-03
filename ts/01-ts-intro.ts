// run as - 
// tsc 01-ts-intro.ts 
// node 01-ts-intro.js

// // JS function 
// const addNums = (a, b) => {
//     return a + b;
// };
// console.log(addNums(10, 20));

// TS function 
const addNums = (a: number, b: number): number => {
    return a + b;
};

console.log(addNums(10, 20));

// console.log(addNums('abc', 'def')); // error 
