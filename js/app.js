$(document).ready(function () {
$('.carousel').carousel(
    {
        interval: 3000,
        ride: false
    }
);
// owl carousel
$('.people-gallery .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    slideTransition: `linear`,
    responsive: {
        0: {
            items: 1
        },
        560: {
            items: 2
        }
    }
})


});
