

// console.log('es6 JS');

// Modern JS - ES6 features 

// Arrow functions, 
// Template Literals    ''    ""        ``

// Default parameters, 
// Destructuring, 
// Spread/Rest, 
// Class, 
// Inheritance, 
// Map/Set, 


// ----

// Default parameters, 

// const addNums = (a, b) => {
//     console.log(a + b);
// };

// const addNums = (a = 1, b = 2) => {
//     console.log(a + b);
// };

// addNums(); // NaN // 3
// addNums(10); // NaN // 12
// addNums(10, 20); // 30 
// addNums(10, 20, 30); // 30 


// Destructuring, 

// array destructuring 

// 100 - b 40, d 20, t 25, a 15

// const takeHome = [40, 20, 25, 15];

// console.log(takeHome);

// const ba = takeHome[0];
// const da = takeHome[1];
// const ta = takeHome[2];
// const ea = takeHome[3];

// [ba, da, ta, ea] = takeHome;

// console.log(ba);

// [ba, da] = takeHome;

// console.log(ba);
// console.log(da);

// [ba, ...da] = takeHome;

// console.log(ba);
// console.log(da);


// object destructuring 

// empData = { eid: 101, firstName: 'Sonu', salary: 10.5 };

// console.log(empData);
// console.log(empData.firstName);

// const { eid, firstName, salary } = empData;
// console.log(firstName);


// OOP features 

// class 

// class Employee {

//     // const eid; // X 
//     eid;
//     firstName;
//     salary;

//     constructor(eid, firstName, salary) {
//         this.eid = eid;
//         this.firstName = firstName;
//         this.salary = salary;
//     };

//     work = () => {

//     };
// }

// Java 
// Employee emp = new Employee();

// JS 
// const emp = new Employee();
// const emp = new Employee(101, 'Sonu', 10.5);
// console.log(emp.salary);
// emp.salary = 12.5;
// console.log(emp.salary);


// class ContractualEmployee extends Employee {

// }

// const emp2 = new ContractualEmployee();
// emp2.salary = 14.5;
// console.log(emp2.salary); 


// Map in JS 

// proper js object 

// const empData = { eid: 101, fName: 'Sonu' };

// Map in JS 

const empData = new Map();

const firstName = {};

empData.set('eid', 101);
empData.set(firstName, 'Sonu');
empData.set(true, 10.5);
empData.set(10, 10.5);

console.log(empData);

empData.set(true, 10.2);

console.log(empData);








