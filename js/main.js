$(function() {

    const $container = $('.container');

    let mX, mY, distance;

    // Returns distance from mouse pointer relative to an element
    function calculateDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
    }

    $(document).mousemove(function(e) {
        
        // Calculate distance from mouse pointer for each letter in the container element
        $container.children().each(function() {
            mX = e.pageX;
            mY = e.pageY;
            distance = calculateDistance($(this), mX, mY);
            distance = distance > 900 ? 900 : distance; 
            $(this).css({ fontWeight: 900 - distance*1.4 });
        });
             
    });

});