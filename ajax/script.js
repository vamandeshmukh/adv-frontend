// https://www.w3schools.com/js/js_ajax_http.asp

console.log('ajax demos');


const getData = () => {

    const http = new XMLHttpRequest();

    http.onload = function () {
        let response = this.responseText;
        document.getElementById('userData').innerHTML = response;
        console.log(response); 
    };

    http.open('GET', 'https://jsonplaceholder.typicode.com/users/4');
    http.send();

};