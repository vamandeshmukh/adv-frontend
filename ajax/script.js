console.log('jQuery AJAX Demos');

$(document).ready(function () {
    $("button").click(function () {
        let uid = $("#userId").val();
        console.log(uid);
        $.get(`https://jsonplaceholder.typicode.com/users/${uid}`, function (data, status, abc) {
            $("#username").text(data.name);
            $("#useremail").text(data.email);
            console.log(data);
            console.log(abc.status);
            console.log(status);
        })
            .fail(function (error) {
                $("#username").text('data not found!');
                console.log(error);
            });
    });
})


// https://www.w3schools.com/js/js_ajax_http.asp

// console.log('ajax demos');

// const getData = () => {

//     const http = new XMLHttpRequest(); // xhr
//     http.onload = function () {
//         let response = this.responseText;
//         document.getElementById('userData').innerHTML = response;
//         console.log(response);
//     };
//     http.open('GET', 'https://jsonplaceholder.typicode.com/users/101');
//     // http.open('POST', 'https://jsonplaceholder.typicode.com/users/4', { a: 'b' });
//     http.send();

// };




