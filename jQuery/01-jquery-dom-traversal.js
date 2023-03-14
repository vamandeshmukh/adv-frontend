console.log('DOM Traversal with jQuery');

// $(document).ready(function () {
//     $('#phoneList').click(function () {
//         // $(this).parents().css('color', 'blue');
//         $(this).parent().css('color', 'blue');
//         // $(this).parentsUntil($('#productList')).css('color', 'blue');
//     });
// });



let showHide = true;

$(document).ready(function () {
    $('#phones').click(function () {
        if (showHide)
            $(this).next().hide();
        else
            $(this).next().show();
        showHide = !showHide;
    });
});


// $(document).ready(function () {
//     $('#phones').click(function () {
//         $(this).next().toggle(250);
//     });
// });



