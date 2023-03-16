const url = 'https://jsonplaceholder.typicode.com/users/';

// login
$(document).ready(function () {
    $("#loginForm").submit(function () {
        console.log('submitted');
        $('#loginForm').trigger("reset");
    });
});



