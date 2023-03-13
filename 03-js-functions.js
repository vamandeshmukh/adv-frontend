

// // function returning a function 
// ---------------------------------

// https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function

// const someVariable = () => { console.log('someVariable called'); };

// someVariable();


// const fun = () => {
//     console.log('fun called');
//     // return 10;
//     return () => {
//         console.log('returned function');
//     };
// };

// const output = fun();

// output();



// Closure in JS 
// --------------

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

// let count = 1;
// let count2 = 11;

// const fun = () => {
//     let count3 = 31;
//     // const a = {};
//     // const b = [];
//     const c = () => { };

//     console.log(count);
//     console.log(count2);
//     console.log(count3);
//     count++;
// };

// console.log(count);

// fun();
// fun();
// fun();


// let count = 1;

// const outerFun = () => {

//     const outVar = 31;
//     console.log(count); // 1
//     // console.log(inVar);
//     console.log(outVar);
//     count++;

//     const innerFun = () => {
//         const inVar = 22;
//         console.log(count); // 2
//         console.log(inVar);
//         console.log(outVar);
//         count++;
//     };

//     innerFun();
// };

// outerFun();


// function binding 
// ----------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind


// const fun = {
//     fn: 'Sonu',
//     getFn: () => {
//         return this.fn;
//     }
// };


// const name1 = fun.getFn();
// console.log(name1);

// const name2 = fun.getFn.bind(fun);
// console.log(name2());

// const fun = () => { console.log(this); };

// function fun2() { console.log(this); };

// fun();
// fun2();






// console.log(this);

// alert('Hi!');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
// https://www.w3schools.com/js/js_function_bind.asp

let num;

const module = {
    x: 42,
    getX: function () {
        return this.x;
    }
};

// const module = {
//     x: 42,
//     getX: () => {
//         return module.x;
//     }
// };


const unboundGetX = module.getX;
console.log(unboundGetX());

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());

// const module = {
//     x: 42,
//     getX: () => {
//         return this.x;
//     }
// };

// const unboundGetX = module.getX;
// console.log(unboundGetX());

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());













// // const greeting = 'Happy Women's Day!';
// // const greeting2 = "Happy Women's Day!";

// // const greeting1 = 'Happy Women"s Day!';
// // const greeting3 = `Happy Women's Day!`;

// // const day = 'Holi'; // "Women's day"
// // const greetingOfTheDay2 = 'Happy ' + day + '!';
// // const greetingOfTheDay = `Happy ${day}!`;

// // console.log(greetingOfTheDay);

const Employee = {
    firstname: 'John',
    lastname: 'Doe'
};

console.log(Employee);
// Expected output: "John"

delete Employee.firstname;

console.log(Employee);
  // Expected output: undefined

  
  