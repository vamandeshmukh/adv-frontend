console.log('jQuery');

$(document).ready(function () {

    $("#p2").click(function () {

        $(this).hide();

    });
});


$(document).ready(function () {

    $("#p3").hover(function () {

        $(this).css('color', 'blue');
    }, function () {
        $(this).css('color', 'yellow');
    });
});


// $(document).ready(function () {
//     $("#p1").someEvent(function () {
//         $(this).someAction();
//     });
// });






$(document).ready(function () {
    $("#p1").dblclick(function () {
        $(this).remove();
    });
});






