console.log('DOM Traversal with jQuery');

$(document).ready(function () {
    $('#phoneList').click(function () {
        // $(this).parents().css('color', 'blue');
        // $(this).parent().css('color', 'blue');
        $(this).parentsUntil('#productList').css('color', 'blue');
    });
});



