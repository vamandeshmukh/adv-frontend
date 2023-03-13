

// console.log('one');
// console.log('two'); // delay 
// console.log('three');



// syntax 
// setTimeout(arg1, arg2);
// setTimeout(() => { }, 2000);

// async nature of JS 

// console.log('one');
// setTimeout(() => {
//     console.log('two'); // delay 
// }, 2000);
// console.log('three');

// ====================
// Problems of async JS 
// ====================

// console.log('one');

// const getMessage = () => {

//     setTimeout(() => {
//         return { message: 'Happy womens day!' };
//     }, 2000);

// };

// let greeting = getMessage();

// console.log(greeting.message);

// ====================
// solution 1: callback  
// ====================

// console.log('one');

// const getMessage = (arg) => {

//     console.log('getMessage called.');

//     setTimeout(() => {
//         arg({ message: 'Happy womens day!' });
//     }, 2000);

// };

// getMessage((abc) => {
//     console.log(abc.message);
// });

