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


// modal
$('.bk-cover').click(function () {
    $('.bk-cover').hide();
    $('.modal-delete').hide();
    $('.modal-remove').hide();
});

// 清空已下架商品
$('.clear').click(function () {
    $('.bk-cover').show();
    $('.modal-remove').css('display', 'flex');
});
$('.modal-remove .btn-remove-grey').click(function () {
    $('.bk-cover').hide();
    $('.modal-remove').hide();
});
$('.modal-remove .btn-delete-ok').click(function () {
    $('.bk-cover').hide();
    $('.modal-remove').hide();
});

// modal delete
$('body').on('click', '.item .delete', function () {
    var id  = $(this).parent('.item').attr('data-id');
    $('.bk-cover').show();
    $('.modal-delete').css('display', 'flex');
});
$('.modal-delete .btn-remove-grey').click(function () {
    $('.bk-cover').hide();
    $('.modal-delete').hide();
});
$('.modal-delete .btn-delete-ok').click(function () {
    $('.bk-cover').hide();
    $('.modal-delete').hide();
});


// 全部商品 items
const data = [{
    img: 'image/img/product-2.jpg',
    title: '蒙牛 特仑苏 纯牛奶 250ml/盒',
    detail: '12盒装',
    soldout: false,
    specification: '250ml*12',
    price: '650积分',
    integral: '650积分'
}, {
    img: 'image/img/product-2.jpg',
    title: '蒙牛 特仑苏 纯牛奶 250ml/盒',
    detail: '12盒装',
    soldout: true,
    specification: '250ml*12',
    price: '650积分',
    integral: '650积分'
}, {
    img: 'image/img/product-2.jpg',
    title: '蒙牛 特仑苏 纯牛奶 250ml/盒',
    detail: '12盒装',
    soldout: false,
    specification: '250ml*12',
    price: '650积分',
    integral: '650积分'
}, {
    img: 'image/img/product-2.jpg',
    title: '蒙牛 特仑苏 纯牛奶 250ml/盒',
    detail: '12盒装',
    soldout: false,
    specification: '250ml*12',
    price: '650积分',
    integral: '650积分'
    }];
var html = '';
var checkAll = false;
data.forEach(function (o, i) {
    data[i]['checked'] = false;
    html += '<div class="item flex start middle ' + (true === o['soldout'] ? 'sold-out' : '') +
        '" data-id ="' + i + '" >' +
        '<div class="td td1 flex start middle">' +
            '<div class="checkbox-group checkbox-group-rect">'+
                '<input type="checkbox" />'+
                '<label></label>'+
            '</div>'+
        '</div>'+
        '<div class="td td2 flex start middle">'+
            '<a href="javascript:;"><img src="' + o['img'] + '" class="product" /></a>'+
        '</div>'+
        '<div class="td td3 flex column center">'+
            '<div class="text-3-1">' + o['title'] +'</div>' +
            '<div class="text-3-2">' + o['detail'] +'</div>' +
            '<div class="text-3-3">已下架</div>' +
        '</div>'+
        '<div class="td td4 flex center middle">250ml*12</div>' +
        '<div class="td td5 flex center middle">' + o['price'] + '</div>' +
        '<div class="td td6 flex center middle">' +
            '<a href="javascript:;" class="minus flex center middle">-</a>' +
            '<input class="number" type="tel" />' +
            '<a href="javascript:;" class="add flex center middle">+</a>' +
        '</div>' +
        '<div class="td td7 flex center middle">' +
            o['integral'] + 
        '</div>' +
        '<div class="td td8 flex center middle">' +
            '<a href="javascript:;" class="delete">删除</a>' +
        '</div>' +
    '</div>';
});
$('.items').html(html);
$('.item .checkbox-group input').change(function () {
    var id = Number($(this).parents('.item').attr('data-id'));
    data[id]['checked'] = !data[id]['checked'];
    if (data[id]['checked']) {
        $(this).parents('.item').addClass('checked');
    } else {
        $(this).parents('.item').removeClass('checked');
    }
});

$('.check-all input').click(function () {
    checkAll = !checkAll;
    data.forEach(function (o, i) {
        data[i]['checked'] = checkAll;
    });
    $('.item input[type="checkbox"]').prop('checked',
        true === checkAll ? true : false);
    $('.check-all input').prop('checked',
        true === checkAll ? true : false);
});