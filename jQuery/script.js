console.log('jQuery');

$(document).ready(function () {
    $("#p2").click(function () {
        console.log('clicked');
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










