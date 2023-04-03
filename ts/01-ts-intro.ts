// run as - 
// tsc 01-ts-intro.ts 
// node 01-ts-intro.js

// // JS function 
// const addNums = (a, b) => {
//     return a + b;
// };
// console.log(addNums(10, 20));

// let num: number = 10;

// // TS function 
// const addNums = (a: number, b: number): number => {
//     return a + b;
//     // return 'Sonu'; // error 
// };

// console.log(addNums(10, 20));

// console.log(addNums('abc', 'def')); // error 


// Other features of TS 

// interface 

interface User {
    name: string,
    age: number
};

const greet = (user: User): void => {
    console.log('Hello ' + user.name);
}

greet({ name: 'Vaman', age: 21 }); // no error  

const u1: User = { name: 'Sonu', age: 21 };
greet(u1); // no error 
// greet('Vaman'); // error



