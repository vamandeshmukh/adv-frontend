console.log('ajax demos');


const getData = () => {

    const http = new XMLHttpRequest();

    http.onload = function () {
        let response = this.responseText;
        document.getElementById('userData').innerHTML = response;
        console.log(response); 
    };

    http.open('GET', 'https://jsonplaceholder.typicode.com/users/2');
    http.send();



};