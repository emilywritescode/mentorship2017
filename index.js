$(document).ready(function () {
    
    $(window).scroll(function () {
        if ($(window).scrollTop() > $(window).height()-60) {
            $(".navigation").addClass("fixed-nav");
        } else {
            $(".navigation").removeClass("fixed-nav");
        }
    });
});