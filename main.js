$(function () {
    function o() {
        $("html, body").on("touchmove", function () {
            preventDefault()
        }), $("html, body").css("overflow", "hidden")
    }

    function t() {
        $("html, body").off("touchmove"), $("html, body").css("overflow-y", "auto")
    }
    $(".call-back__button, .call-back__icon").click(function () {
        $(".popup-callback").fadeIn(200), o()
    }), $(".popup-callback").click(function (o) {
        o.target == this && ($(this).fadeOut(50), t())
    }), $(".title__button, .service-button, .example-button").click(function () {
        $(".popup-callback_other").fadeIn(200), o()
    }), $(".popup-callback_other").click(function (o) {
        o.target == this && ($(this).fadeOut(50), t())
    }), $("body").on("click", '[href*="#"]', function (o) {
        var t = 0;
        $("html,body").stop().animate({
            scrollTop: $(this.hash).offset().top - t
        }, 1e3), o.preventDefault()
    }),
       
    $("#tel").mask("+7 (999) 999-99-99"), $(".slick").slick({
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: ".arrow_right",
        prevArrow: ".arrow_left",
        dots: !0,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }),
        
    $(".popup-menu").click(function () {
        $(".popup-nav").slideToggle();
    }),
    
    $(window).scroll(function () {
        $(window).scrollTop() > 1700 && $(".flying-el-service").fadeIn(2800)
    })
});
