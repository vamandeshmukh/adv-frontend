
// control structure in JS

// if else 

// let num = 10;

// if (num > 20)
//     console.log('true');
// else
//     console.log('false');

// if (10 > 5) {
//     console.log('true');
// }
// else {
//     console.log('false');
// }

// let num = 2;

// switch (num) {
//     case 1:
//         console.log('one');
//         break;
//     case 2:
//         console.log('two');
//         break;
//     default:
//         console.log('other');
// }

// let num = (10 > 20) ? 10 : 20;


// const myArray = [10, 20, 30, 40, 50];

// for (let i = 0; i < myArray.length; i++)
//     console.log(myArray[i]);

// for (let m in myArray)
//     console.log(m);

// for (let m of myArray)
//     console.log(m);


// functions in JS 

// function fun() {
//     console.log('fun function called');
// };

// fun();

// const fun = () => {
//     console.log('fun function called');
// };

// fun();

// revision time...


// const addNums = (a, b) => {
//     console.log(a + b);
// };

// const addNums2 = (a, b) => {
//     return a + b;
// };


// addNums();
// addNums(10);
// addNums(10, 20);
// addNums(10, 20, 30);

// console.log(addNums(10, 20)); // undefined
// console.log(addNums2(10, 20)); // 30 

// function syntaxes 

// const addNums3 = (a, b) => { console.log(a + b); };
// const addNums4 = (a, b) => console.log(a + b);

// const addNums5 = (a, b) => { return a + b };
// const addNums6 = (a, b) => a + b;

// const addGst = (amount) => { return amount + 18; };
// const addGst2 = (amount) => amount + 18;
// const addGst3 = amount => amount + 18;

// console.log(addGst(100));
// console.log(addGst2(100));
// console.log(addGst3(100));



// const addGst = 10;
// const addGst = (amount) => { return amount + 18; };
// const addGst = (amount) => { return amount + 18; };

// const fun = (arg) => { return arg + 18; };

// let output = fun(100);

// console.log(output);

// const getFun = (arg) => {
//     console.log('getFun called.');
//     // arg();
//     console.log(arg.abc);
// };

// getFun({ abc: 'some value' });

// const getFun = (arg) => {
//     console.log('getFun called.');
//     console.log(arg + 18);
// };

// getFun(100);

// let num = 200;
// getFun(num);

const getFun = (arg) => { // 2
    console.log('getFun called.'); // 3
    arg(); // 4
};

getFun(() => { console.log('anonymous function called'); });

// const someFunction = () => { // 5
//     console.log('someFunction called.'); // 6
// };
// getFun(someFunction); // 1





// vaman 