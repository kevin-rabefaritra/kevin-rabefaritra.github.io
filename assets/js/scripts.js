/*============================
   js index
==============================

==========================================*/

(function($) {
    "use strict";

    /*================================
    Preloader
    ==================================*/
    // var preloader = $('#preloader');
    // $(window).on('load', function() {
    //     preloader.fadeOut('slow', function() { $(this).remove(); });
    // });

    /*================================
    Owl Carousel
    ==================================*/
    // tst-carousel
    var sync1 = $('.tst-carousel');
    var sync2 = $('.tst-left-thumb');
    // Sync nav
    // sync1.on('click', '.owl-next', function() {
    //     sync2.trigger('next.owl.carousel')
    // });
    // sync1.on('click', '.owl-prev', function() {
    //     sync2.trigger('prev.owl.carousel')
    // });
    sync1.owlCarousel({
        margin: 0,
        items: 1,
        dots: true,
        loop: true,
        autoplay: true,
        nav: false,
        mouseDrag: true,
    });
    sync2.owlCarousel({
        margin: 0,
        items: 1,
        dots: false,
        loop: true,
        autoplay: true,
        nav: false,
        mouseDrag: false,
    });
    sync1.on('change.owl.carousel', function(event) {
        if (event.namespace && event.property.name === 'position') {
            var target = event.relatedTarget.relative(event.property.value, true);
            sync2.owlCarousel('to', target, 300, true);
        }
    })

    $('.client-carousel').owlCarousel({
        margin: 50,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: false,
        dots: false,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 2
            },
            450: {
                items: 2
            },
            768: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });

    // $('.client-carousel').owlCarousel({
    //     margin: 50,
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeout: 4000,
    //     nav: false,
    //     dots: false,
    //     smartSpeed: 800,
    //     responsive: {
    //         0: {
    //             items: 2
    //         },
    //         450: {
    //             items: 2
    //         },
    //         768: {
    //             items: 4
    //         },
    //         1000: {
    //             items: 6
    //         }
    //     }
    // });

    $('.expand-video').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: false
        }
    });

    /*================================
    counter up
    ==================================*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /*================================
    slicknav
    ==================================*/
    $('ul#navigation').slicknav({
        prependTo: ".mobile_menu"
    });

    $(".type").typed({
        strings: ["eat", "code", "drink", "repeat"],
        typeSpeed: 100,
        backDelay: 1200,
        loop: true,
        loopCount: false,
    });

    feather.replace();

})(jQuery);