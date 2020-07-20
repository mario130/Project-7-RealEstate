$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        // nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        autoplay: true,
    });

    const arrow = $('#arrow');
    arrow.on('click', function (e) {
        e.preventDefault()
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    })

    $(window).on('scroll', function () {
        
        if (window.scrollY >= 1000) {
            
            arrow.show()
        } else {
            arrow.hide()
        }
    })

    $('a').on('click', function (e) {
        e.preventDefault()
    })


});