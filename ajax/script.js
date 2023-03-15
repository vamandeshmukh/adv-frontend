console.log('ajax demos');


const getData = () => {

    const http = new XMLHttpRequest();

    http.onload = function () {
        document.getElementById('userData').innerHTML = this.responseText;
    };
    
    http.open('GET', 'https://jsonplaceholder.typicode.com/users/2');
    http.send();



};