/*
assignment: 
using HTML, JS, jQuery, AJAX create - 
login form 
register form 

with these APIs - 
GET - https://jsonplaceholder.typicode.com/users/ 
POST - https://jsonplaceholder.typicode.com/users/

use this folder as template.

*/
















const url = 'https://jsonplaceholder.typicode.com/users/';

// login
$(document).ready(function () {
    $("#submitLogin").click(function () {
        userData = { username: $('#username').val(), password: $('#password').val() }
        let loginStatus = false;
        let loggedInUser = '';
        $.get(url, function (data) {
            data.forEach(element => {
                if (userData.username == element.username && userData.password == element.username) {
                    console.log(element)
                    loginStatus = true;
                    loggedInUser = element.username;
                }
                if (loginStatus)
                    $("#userdata").text(`Hi ${loggedInUser}! You have logged in successfully.`);
                else
                    $("#userdata").text('Invalid credentials!');
            });
        })
            .fail(function (error) {
                $("#userdata").text('Something went wrong!');
            });
        $('#loginForm').trigger("reset");
    });
});


// register
$(document).ready(function () {

    $("#submitRegister").click(function () {
        userData = {
            username: $('#username').val(),
            password: $('#password').val(),
            confirmpassword: $('#confirmpassword').val()
        };
        if (userData.password === userData.confirmpassword) {
            $.post(url, userData, function (data) {
                $("#userdata").text(`Hi ${data.username}! You have registered successfully.`);
            })
                .fail(function (error) {
                    $("#userdata").text('Something went wrong!');
                });
        }
        else {
            $("#userdata").text('password and confirm password do not match!');
        }
        $('#registerForm').trigger("reset");
    });

});

