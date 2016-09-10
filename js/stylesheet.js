$(document).ready(function () {
    $('.carousel').carousel({
        interval: 5000
//        pause: "false"
    });

    wow = new WOW(
            {
                animateClass: 'animated',
                offset: 150
            }
    );
    wow.init();

});