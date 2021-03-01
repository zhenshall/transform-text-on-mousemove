$(function() {

    const $letter = $('.letter');

    // Get mouse location and set value as font weight
    let $x;
    $letter.mousemove(function(event) {
        var offset = $(this).offset();
        $x = event.pageX- offset.left;
        $(event.currentTarget).css({ fontWeight: $x * 10 });
    });
    

    // $letter.on('mouseover', event => {
    //     $(event.currentTarget).animate({ fontWeight: '600' }, 300);
    // });

    // $letter.on('mouseleave', event => {
    //     $(event.currentTarget).animate({ fontWeight: '100' }, 1000);
    // });

});