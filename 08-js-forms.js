// important links 

// DOM Traversal : 
// https://www.w3.org/wiki/Traversing_the_DOM
// https://www.makeuseof.com/dom-javascript-traverse/


console.log('08-js-html-forms.html');

const user = 'Sonu';
const pass = 'Sonu';

const submitLogin = () => {

    const enteredUser = document.getElementById('username').value;
    const enteredPass = document.getElementById('password').value;

    console.log(enteredUser, enteredPass);

    if (enteredUser === user && enteredPass == pass) {
        document.getElementById('loginMessage').innerHTML = `Hi ${enteredUser}!`;
    }
    else {
        document.getElementById('loginMessage').innerHTML = 'Invalid credentials!';
    }
    // document.getElementById('username').value = '';
    // document.getElementById('password').value = '';
    document.getElementById('loginForm').reset();
};


