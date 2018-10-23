$(document).ready(function () {
    
    /* initialize slider */
    
    $('.header__slider').slick({
        dots: true,
        slidesToShow: 1,
        autoplay: true, 
        autoplaySpeed: 5000,
        speed: 600,
        arrows: false,
        //fade: true,
        //cssEase: 'linear'
    });
});
