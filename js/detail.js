

// slider
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 0
});

$('.swiper-button-prev-custom').click(function () {
    swiper.slidePrev();
});

$('.swiper-button-next-custom').click(function () {
    swiper.slideNext();
});
$('.swiper-slide img').click(function () {
    $('.swiper-slide img').removeClass('active');
    $(this).addClass('active');
    $('.main-img').attr('src', $(this).attr('src'));
});

// 第一个评价的第一个tab active
//$('.tab.active').parents('.tab-template')
//    .find('.tab-container[data-tab="1"]').show();


// modal
$('.bk-cover').click(function () {
    $('.bk-cover').hide();
    $('.modal-shopping-cart').hide();
});

// 清空已下架商品
$('.btn-add-cart').click(function () {
    $('.bk-cover').show();
    $('.modal-shopping-cart').css('display', 'flex');
});
$('.modal-remove .btn-remove-grey').click(function () {
    $('.bk-cover').hide();
    $('.modal-shopping-cart').hide();
});
$('.modal-remove .btn-delete-ok').click(function () {
    $('.bk-cover').hide();
    $('.modal-shopping-cart').hide();
});


//  choose tabs
$('.choose-tab').click(function () {
    var id = $(this).attr('data-tab');
    $(this).parent('.choose-tabs').children('.choose-tab').removeClass('active');
    $(this).addClass('active');
    $(this).parent('.choose-tabs').parent('.choose-tab-template').find('.choose-tab-container').hide();
    $(this).parent('.choose-tabs').parent('.choose-tab-template').find('.choose-tab-container[data-tab="' + id + '"]').show();
});

// item tabs
$('.item-tab').click(function () {
    var id = $(this).attr('data-tab');
    $(this).parent('.item-tabs').children('.item-tab').removeClass('active');
    $(this).addClass('active');
    $(this).parent('.item-tabs').parent('.item-tab-template').find('.item-tab-container').hide();
    $(this).parent('.item-tabs').parent('.item-tab-template').find('.item-tab-container[data-tab="' + id + '"]').show();
});