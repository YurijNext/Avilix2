

$(document).ready(function() {

    /** Mobile menu **/

    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
        $('body').toggleClass('no-scroll');
        $('.mobile-menu').slideToggle(300);
        $('.level-2').slideUp(100);
        $('.lev-1__row').removeClass('lev-opnd');
    });

    $('.lev-1__row').on('click', function() {
        $(this).toggleClass('lev-opnd');
       $(this).siblings('.level-2').slideToggle(300);
    });

    /** Masked Input **/
    // $('input[type=tel]').mask('+8(999) 999 99 99');

    $('.mobile-menu').scroll(function() {
        var top = $(this).scrollTop();
        if (top > 0) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });

    $(window).scroll( function() {
        var top = $(this).scrollTop();
        if (top > 0) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });

    $(window).scroll( function() {
        var top = $(this).scrollTop();
        if (top > 0) {
            $('.web .header').removeClass('fixed');
        }
    });

    /** Scroll to id **/
    $('.services__header a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 250,
            },
            500,
            'linear'
        )

        $('.services__tab-link').removeClass('active');
        $(this).addClass('active');
    });

    $('.for-what__tab a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 200,
            },
            700,
            'linear'
        )
    });

    $('.company__header a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 200,
            },
            700,
            'linear'
        )
    });

    const offset = 400;
    const offset2 = 500;
    $(window).scroll(function() {

        let scrollTop = $(this).scrollTop();

        $('.for-what__section').each(function() {
            if(scrollTop >= $(this).offset().top - offset) {
                let sectionID = $(this).attr('id');
                $('.for-what__tab-link').removeClass('tab-link--active');

                $('[href="#' + sectionID + '"]').addClass('tab-link--active');
            }
        })

        $('.c-section').each(function() {
            if(scrollTop >= $(this).offset().top - offset) {
                let sectionID = $(this).attr('id');
                $('.c-tab-link').removeClass('active');

                $('[href="#' + sectionID + '"]').addClass('active');
            }
        })

        $('.services__slide').each(function() {
            if(scrollTop >= $(this).offset().top - offset2) {
                let sectionID = $(this).attr('id');
                $('.services__tab-link').removeClass('active');
                $('[href="#' + sectionID + '"]').addClass('active');

                $('.s-figure').removeClass('visible');

                $('[data-index="' + sectionID + '"]').addClass('visible');


            }

        })

    });

    $('.js-partners').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '40px',
                    arrows: false,
                }
            },
        ]
    });

    $('.js-industry').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.other__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
    });

    if($('body').hasClass('index')) {
        $('.services__header .wrapper').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    }

    if($('body').hasClass('services')) {
        $('.services__header .wrapper').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    }


    if($('body').hasClass('company')) {
        $('.company__header .wrapper').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 577,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        variableWidth: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    }

    $(window).on('load', function() {

        if ($(window).width() <= 768) {
            $('.for-what__tabs').slick('unslick');
            $('.for-what__tabs').slick('reinit');
        }

        if ($(window).width() > 768) {
            $('.for-what__tabs').slick('unslick');
            // $('.for-what__tabs').slick('reinit');
        }

        if ($(window).width() < 577) {
            return ad.slick(settings1);
        }



    });


    $(window).on('resize', function() {
        if ($(window).width() <= 768) {
            $('.for-what__tabs').slick('unslick');
            $('.for-what__tabs').slick('reinit');
        }

        if ($(window).width() > 768) {
            $('.for-what__tabs').slick('unslick');
            // $('.for-what__tabs').slick('reinit');
        }

        if ($(window).width() < 577) {
            return ad.slick(settings1);
        }

    });

    let ad = $('.advantages .wrapper');

    let settings1 = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 577,
                settings: "unslick"
            },
        ]
    };

    $('.for-what__tabs').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        variableWidth: true,
        mobileFirst: false,
        responsive: [
            {
                breakpoint: 380,
                slidesToShow: 1,
            },
            {
                breakpoint: 577,
                slidesToShow: 2,
            },

            {
                breakpoint: 768,
                slidesToShow: 2,
            },

            {
                breakpoint: 769,
                settings: "unslick"
            },
        ]
    });




    $('.js-services').on('init', function(event, slick, currentSlide, nextSlide) {
        setTimeout(function() {
            $('.services__slider .slick-active .services__right').addClass('animated fadeInRight');
        }, 1500);
    });


    /** Order modal **/
    function toggleModal() {
        $('body').toggleClass('no-scroll');
        $('.overlay').toggleClass('overlay--visible');
        $('.order-consult').toggleClass('order-consult--visible ');
    }
    $('#js-order-consult').on('click', function(e) {
        e.preventDefault();
        toggleModal();
    });

    $('.footer__feedback-btn').on('click', function(e) {
        e.preventDefault();
        toggleModal();
    });

    $('.order-close').on('click', function(e) {
        e.preventDefault();
        toggleModal();
    });

    $('.overlay').on('click', function() {
        toggleModal();
    });


    /** Index page word animation**/

    let i = 1;

    function letterAnimation(el) {

        let textWrapper = document.querySelector('.ml1' + i + ' ' + '.letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
            .add({
                targets: el + ' ' + '.line',
                scaleY: [0,1],
                opacity: [0.5,1],
                easing: "easeOutExpo",
                duration: 700
            })
            .add({
                targets: el + ' ' + '.line',
                translateX: [0, document.querySelector(el + ' ' + '.letters').getBoundingClientRect().width + 10],
                easing: "easeOutExpo",
                duration: 700,
                delay: 500
            }).add({
            targets: el + ' ' + '.letter',
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: (el, i) => 34 * (i+1)
        }).add({
            targets: el,
            opacity: 0,
            duration: 2000,
            easing: "easeOutExpo",
            delay: 2000
        });

    }

    (function setAnimation(callback) {
        $('.ml1' + i).css('opacity', '1');




        if($('body').hasClass('index')) {
            letterAnimation('.ml1' + i);

            let k = i;


            setTimeout(function() {
                $('#p' + k).addClass('animated fadeIn');
                setTimeout(function() {
                    $('#p' + k).addClass('animated fadeOut');
                }, 1200)
            },1800)


            i++;

            if(i > $('.ml1').length) {
                i = 1;
            }

            setTimeout(callback, 2500);
        }

    })(interval);


    function interval() {
        setInterval(function() {

            if($('body').hasClass('index')) {
                $('.ml1' + i).css('opacity', '1');

                $('.op').removeClass('animated fadeIn fadeOut');

                letterAnimation('.ml1' + i);



                setTimeout(function() {
                    $('#p' + i).addClass('animated fadeIn');
                }, 2000);

                i++;

                if(i > $('.ml1').length) {
                    i = 1;
                }
            }


        }, 5000);
    }

    /** Form validation**/

    function validateForm(form) {

        let templates = {
            erorrName : 'Введите корректное имя',
            errorCompany: 'Введите корректное название компании',
            errorPhone: 'Введите корректный номер телефона',
            errorEmail: 'Введите корректный email',
        };

        let company = $(form + ' input[name="company"]'),
            name = $(form + ' input[name="name"]'),
            telephone = $(form + ' input[name="telephone"]'),
            email = $(form + ' input[name="email"]'),
            details = $(form + ' textarea[name="details"]'),
            check = $(form + ' input[name="check"]'),
            info = $(form + ' input[name="info"]');


        let data = {
            companyVal : '',
            nameVal : '',
            telephoneVal : '',
            emailVal : '',
            detailsVal : details.val(),
            info : info.val()
        };


        let regexNames = /^[a-zA-Z\s]+$/,
            regexEmail = /^\S+@\S+\.\S+$/,
            regexTel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

        function viewError(inputName, text) {
            inputName.parents('.input-wrapper').after(`<span class="error-text">${text}</span>`);
            $('.form-input').addClass('bbi');

            setTimeout(function() {
                $('.error-text').remove();
                $('.form-input').removeClass('bbi');
            }, 5000)
        }

        function checkvalue(input, reg, obj, prop, template) {
            if(input.val() == "" || reg.test(input.val()) === false) {
                viewError(input, template);
            } else {
                 obj[prop] = input.val();
            }
        }

        name.val() == "" ? viewError(name,  templates['erorrName']) : data['nameVal'] = name.val();

        if(!check.is(':checked')) {
            check.parents('.check-wrap').css('border', '1px solid #FF3B30');

            setTimeout(function() {
                $('.check-wrap').css('border', '1px solid rgba(117, 137, 165, 0.2)')
            }, 5000)
        }

        check.on('change', function() {
            if(check.is(':checked')) {
                check.parents('.check-wrap').css('border', '1px solid rgba(117, 137, 165, 0.2)');
            }
        });

        checkvalue(company, regexNames, data, 'companyVal', templates['errorCompany']);
        checkvalue(email, regexEmail, data, 'emailVal', templates['errorEmail']);
        checkvalue(telephone, regexTel, data, 'telephoneVal' , templates['errorPhone']);

        console.log(data);

        if(data['companyVal'] && data['emailVal'] && data['telephoneVal']) {
            $.ajax({
                type: "POST",
                url: "./send.php",
                data: {...data},
                success: function() {
                    alert('Done');
                    $('input').val('');
                }
            });
        }

    }

    $('.order-form').on('click', function(e) {
       e.preventDefault();

        validateForm('.order-consultation');
    });

    $('.order-service').on('click', function(e) {
        e.preventDefault();

        validateForm('.order-service-form');
    });






});
