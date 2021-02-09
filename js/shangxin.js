

// slider
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true
});


$('.tab-menus .right').click(function () {
    var expand = $(this).attr('data-expand');
    if ('true' === expand) {
        $(this).attr('data-expand', 'false');
        $(this).parents('.tab-menu').removeClass('expand');
    } else if ('false' === expand) {
        $(this).attr('data-expand', 'true');
        $(this).parents('.tab-menu').addClass('expand');
    }
});