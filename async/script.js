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

// syntax 
// functionCall().then(() => { }).catch(() => { });

getFun()
    .then((response) => {
        console.log(response.text);
    })
    .catch((error) => {
        console.log(error.message);
    });





