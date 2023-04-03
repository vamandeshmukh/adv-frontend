// run as - 
// tsc 01-ts-intro.ts 
// node 01-ts-intro.js
;
var greet = function (user) {
    console.log('Hello ' + user.name);
};
greet({ name: 'Vaman', age: 21 }); // no error  
var u1 = { name: 'Sonu', age: 21 };
greet(u1); // no error 
// greet('Vaman'); // error
