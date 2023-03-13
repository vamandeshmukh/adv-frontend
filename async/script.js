console.log('Start');

// ===================
// problem of async js 
// ===================

// const getFun = () => {
//     setTimeout(() => {
//         return { text: 'Hello wold!' };
//     }, 2000);
// };

// const fun = getFun();
// console.log(fun.text);

// ============================
// solution 1 - using callback 
// ============================

// const getFun = (arg) => {
//     setTimeout(() => {
//         arg({ text: 'Hello wold!' }); // not avaiable 
//     }, 2000);
// };

// getFun((abc) => { console.log(abc.text); });


// Promise 
// keep 
// break 

// ============================
// solution 2 - using Promise  
// ============================

// const getFun = () => {
//     let isDataAvailable = true; // false 
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isDataAvailable)
//                 resolve({ text: 'Hello world!' });
//             else
//                 reject({ message: 'Something is wrong!' });
//         }, 2000);
//     });
// };



// syntax 1 
// functionCall().then(() => { }).catch(() => { });
// syntax 2 
// functionCall().then(() => { }, () => { });

// using syntax 1 

// getFun()
//     .then((response) => {
//         console.log(response.text);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });


// using syntax 2 

// getFun()
//     .then(
//         (response) => {
//             console.log(response.text);
//         },
//         (error) => {
//             console.log(error.message);
//         });

// using shortcut syntax variations  

// getFun()
//     .then(
//         response => console.log(response.text)
//         , 
//         errror => console.log(error.message)
//         );

// getFun()
//     .then(
//         res => console.log(res.text)
//         ,
//         e => console.log(e.message)
//     );




// ================================
// solution 3 - using async / await   
// ================================

const getFun = () => {
    let isDataAvailable = true; // false 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDataAvailable)
                resolve({ text: 'Hello world!' });
            else
                reject({ message: 'Something is wrong!' });
        }, 2000);
    });
};

const fun = async () => {
    const funMessage = await getFun();
    console.log(funMessage.text);
};

fun();


// create a function "gstCalc" using Promise to calculate invoice amount -
// input - work cost e.g. 100
// output - final invoice amount = cost + 9% sgst + 9% cgst - 10% tds - 108
// input should be a postive number.


// const gstCalc = (cost) => {
//     return new Promise((resolve, reject) => {
//         if (cost > 0) {
//             let sgst = cost * 0.09;
//             console.log(sgst);
//             let cgst = cost * 0.09;
//             console.log(cgst);
//             let tds = cost * 0.10;
//             console.log(tds);
//             let finalAmount = cost + cgst + sgst - tds;
//             resolve({ amount: finalAmount });
//         }
//         else {
//             reject({ message: 'Something is wrong!' });
//         }
//     });
// };

// gstCalc(100).then(res => console.log(res.amount), e => console.log(e.message));





