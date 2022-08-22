$('.owl-carousel').owlCarousel({

    autoplay: true,
    autoplayHoverPause: true,
    items: 4,
    nav: true,
    dots: false,
    loop: true,
    lazyLoad: true,
    margin: 5,
    stagePadding: 5,
    responsive: {
        0: {
            items: 1,
            dots: false
        },
        560: {
            items: 1,
            dots: false

        },
        728: {
            items: 2,
            dots: true

        },
        1024: {
            items: 4,
            dots: true

        },
        1920: {
            items: 4,
            dots: false

        }

    }

});