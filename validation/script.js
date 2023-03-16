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
