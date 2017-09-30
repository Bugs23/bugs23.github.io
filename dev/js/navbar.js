(function($) {
    var didScroll;
    var $navbar = $('nav');
    var $scrollPosition = $(window).scrollTop();
    var $landingImgHt = $('.landing').innerHeight();

    // On scroll, set did scroll to true
    $(window).scroll(function() {
          didScroll = true;
    });

    // If didScroll is true run hasScrolled fn and reset didScroll status
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
          }
    }, 150);

    function hasScrolled() {
        // Get current scroll position
        var currentScrollPosition = $(window).scrollTop();

            // If the current scroll position is more than the previous scroll position hide the navbar
            if (currentScrollPosition > $landingImgHt && currentScrollPosition > $scrollPosition) {
                $navbar.slideUp('fast');
            } else {
                $navbar.slideDown('fast');
            }

            // Set the previous scroll position to this current scroll position
            $scrollPosition = currentScrollPosition;
    }
})(jQuery);