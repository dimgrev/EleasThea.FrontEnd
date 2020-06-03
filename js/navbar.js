$(document).ready(function(){


    //Check scroll status and show correct navbar
    checkAndPrintCorrectNavBar();

    //Humburger
    $(".navbar").on('show.bs.collapse hide.bs.collapse', function(){
        $("#toggleHumburgerBtn").toggleClass("is-active");
    });


    //when scrolling change navbar
    $(window).scroll(function() {
        checkAndPrintCorrectNavBar();
    });

    //functions...
    function checkAndPrintCorrectNavBar(){
        var $height = $(window).scrollTop();
        if($height > 0) {
            $('.scroll-variable-navbar').removeClass('scroll-variable-navbar-hidden');
        }
        else {
            if (!$('.scroll-variable-navbar').hasClass("navbar-expanded")) {
                $('.scroll-variable-navbar').addClass('scroll-variable-navbar-hidden');
            }
        }
    }

    $(".scroll-on-top-navbar").on("show.bs.collapse", function(event){
        event.preventDefault();
    });

    $(".navbar").on("show.bs.collapse", function(){
        $('.scroll-variable-navbar').removeClass('scroll-variable-navbar-hidden');
        $('.scroll-variable-navbar').addClass('navbar-expanded');
    });

    $(".navbar").on("hide.bs.collapse", function(){
        $('.scroll-variable-navbar').removeClass('navbar-expanded');
        checkAndPrintCorrectNavBar();

    });
});