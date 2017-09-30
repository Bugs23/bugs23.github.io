(function($) {
    var $scrollTopBtn = $('.scrollUp-btn');

    $scrollTopBtn.click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });
})(jQuery);