$(document).ready(function () {
    //SLIDER
    $(".works__carousel").slick({
        infinite: !0,
        slidesToShow: 3,
        speed: 1e3,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 5e3,
        cssEase: "ease-in-out",
        dots: !0,
        nextArrow: '<button class="next"></button>',
        prevArrow: '<button class="prev"></button>',
        responsive: [{
            breakpoint: 1030,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1
            }
        }]
    });

    //SCROLL PAGE
    $("a[href^='#']").click(function () {
        var e = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(e).offset().top + "px"
        }, "linear");
    });

    //ANIMATE TAGS ON SCROLL TO PRICE DIV
    var windowHeight = $(window).height();
    $(document).on("scroll", function () {
        var priceDiv = $("#price"),
            t = priceDiv.offset().top + priceDiv.height();
        $(document).scrollTop() + windowHeight >= t && ($(".p__brackets_l").addClass("flying-elements-price__brackets_left"), $(".p__hashtag").addClass("flying-elements-price__hashtag"), $(".p__div").addClass("flying-elements-price__div"), $(".p__slash").addClass("flying-elements-price__slash"), $(".p__brackets_r").addClass("flying-elements-price__brackets_right"))
    });

    //MENU MOBILE
    $(".header__burger").click(function (e) {
        e.preventDefault();
        $(".mobile__menu").slideToggle();
    });

    //MASK PHONE
    $('input[type="tel"]').mask("+7(999)999-99-99");


    //FORM AND POPUP
    //-- SHOW
    $(".callback, .header__callback_mobile").click(function (e) {
        e.preventDefault();
        $('.popup-callback').css("display", "flex");
    });
    $(".find-out-more, .see-price, .order").click(function (e) {
        e.preventDefault();
        $('.popup-find-out-more').css("display", "flex");
    });

    //-- CLOSE
    $('.close-form').click(function () {
        $(this).parents('.popup').toggle();
    });

    //-- SUBMIT (callback-form)
       $('#callback-form').validate({
        rules: {
            name: 'required',
            tel: {
                required: true,
                minlength: 16,
            }
        },
        messages: {
            name: 'Обязательно укажите имя',
            tel: 'Обязательно укажите номер телефона в правильном формате'
        },
        submitHandler: function (form) {
            form.submit();
        }
       });
    
    $('#send-form').validate({
        rules: {
            name: 'required',
            email: 'required',
            sub: 'required',
        },
        messages: {
            name: 'Обязательно укажите имя',
            email: 'Обязательно укажите e-mail в правильном формате',
            sub: 'Укажите ваш вопрос'
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
    
    // $('form').submit(function (event) {
    //     event.preventDefault();
    //     sendAjaxForm($(this), '../send.php');
    // });

    // function sendAjaxForm(form, url) {
    //     $.ajax({
    //         url: url,
    //         type: "POST",
    //         dataType: "html",
    //         data: form.serialize(),
    //         success: function () {
    //             alert('Успешно отправлено!');
    //         },
    //         error: function () {
    //             alert('Ошибка отправления');
    //         }
    //     });
    // }
});
