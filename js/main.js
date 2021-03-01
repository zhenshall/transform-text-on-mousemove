$(function() {

    const $letter = $('.letter');

    $letter.on('mouseover', event => {
        $(event.currentTarget).animate({ fontWeight: '600' }, 300);
    });

    $letter.on('mouseleave', event => {
        $(event.currentTarget).animate({ fontWeight: '100' }, 1000);
    });

});