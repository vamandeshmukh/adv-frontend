// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet

// JavaScript RegEx 

// const pattern = /^a$/;
// const pattern = /^[a-zA-Z0-9@#]{2}$/;
// const pattern = /^[6-9]{1}[0-9]{9}$/;
// const pattern = /^[6-9]{1}[\d]{9}$/;

// const panCardPattern = /^$/; // do this 
// const vehicleNumberPattern = /^[\d]{1,2}$/; // do this 

// const inputValue = '321';

// const result = vehicleNumberPattern.test(inputValue);

// console.log(result);



// const url = 'https://jsonplaceholder.typicode.com/users/';

// login
$(document).ready(function () {
    $("#loginForm").submit(function () {
        console.log('submitted');
        $("#userdata").text($("#username").val());
        $('#loginForm').trigger("reset");
    });
});




