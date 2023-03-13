
// Objects in JS

// Hands-on : Object creational methods; Literal, constructor, Instance

// https://www.w3schools.com/js/js_object_definition.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// const empData = {
//     eid: 101,
//     firstName: 'Sonu'
// };


// // const person = {};

// // const me = Object.create(person);


// const person = {
//     isHuman: false,
//     printIntroduction: function () {
//         console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
// };

// const me = Object.create(person);

// me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // Inherited properties can be overwritten

// me.printIntroduction();
//   // Expected output: "My name is Matthew. Am I human? true"


// Object creation using constructor 

// const person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// Object creation with object literal  

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person);



// const index = {
//     html: {
//         head: { script: {} },
//         body: { h1: {}, p: {} }
//     }
// };




// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
