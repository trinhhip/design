require([
    'jquery',
    'domReady!'
], function($) {
    $( "#close-nav" ).click(function(e) {
        e.preventDefault();
        $("html").removeClass("nav-open");
        setTimeout(function() {
            $("html").removeClass("nav-before-open");
        }, 300);
    });
});
