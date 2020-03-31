var myBool = false;

$('.section1 button').click(function () {
    if (myBool == false) {
        $('.section1 p')
            .addClass('red')
            .text('Click the button to remove class "red" to this paragraph');
        $('.section1 h1').text('Red Class was applied!');
        $('.section1 button')
            .addClass('red')
            .text('Remove "Red" Class');
        myBool = true;
    } else {
        $('.section1 p')
            .removeClass('red')
            .text('Click the button to add class "red" to this paragraph');
        $('.section1 h1').text('Red Class was removed!');
        $('.section1 button')
            .removeClass('red')
            .text('Apply "Red" Class');
        myBool = false;
    }
});

$('.section2 button').click(function () {
    $('.section2 img').toggle();
    if (myBool == false) {
        $('.section2 p').text('Hi Mario!');
        $('.section2 h1').text('Here is Mario!');
        $('.section2 button').text('Make Mario dissapear');
        myBool = true;
    } else {
        $('.section2 p').text('Click the button to say Hi! to Mario');
        $('.section2 h1').text('Where is Mario!');
        $('.section2 button').text('Make Mario comeback!');
        myBool = false;
    }
});

$('.section3 button').click(function () {

    $('.section3 p').append('<p>This is the new paragraph!</p>')

});