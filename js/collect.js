// slider
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: false,
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 5
});
