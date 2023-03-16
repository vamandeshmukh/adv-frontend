const url = 'https://jsonplaceholder.typicode.com/users/';

// login
$(document).ready(function () {
    $("#loginForm").submit(function () {
        console.log('submitted');
        $("#userdata").text($("#username").val());
        $('#loginForm').trigger("reset");
    });
});



