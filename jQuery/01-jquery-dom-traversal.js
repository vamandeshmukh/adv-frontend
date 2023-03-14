console.log('DOM Traversal with jQuery');

// $(document).ready(function () {
//     $('#phoneList').click(function () {
//         // $(this).parents().css('color', 'blue');
//         $(this).parent().css('color', 'blue');
//         // $(this).parentsUntil($('#productList')).css('color', 'blue');
//     });
// });



// let showHide = true;

// $(document).ready(function () {
//     $('#phones').click(function () {
//         if (showHide)
//             $(this).next().hide();
//         else
//             $(this).next().show();
//         showHide = !showHide;
//     });
// });



$(document).ready(function () {
    $('#phones').click(function () {
        $(this).next().toggle(250);
    });
});

$(document).ready(function () {
    $('#pcs').click(function () {
        $(this).next().children().toggle(250);
    });
});

// Assignment: 
// Complete learning with coding and peer-dicsussion of - 

// https://www.w3schools.com/jquery/jquery_traversing.asp
// https://www.w3schools.com/jquery/jquery_traversing_ancestors.asp
// https://www.w3schools.com/jquery/jquery_traversing_descendants.asp
// https://www.w3schools.com/jquery/jquery_traversing_siblings.asp
// https://www.w3schools.com/jquery/jquery_traversing_filtering.asp

