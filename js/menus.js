
// main menu -- 全部商品分类
menu = [['诺心', 'Incake', '21Cake', 'Mcake', '黑池蛋糕',
    '派悦坊蛋糕', '美芝饴', '定制款蛋糕', '蛋糕兑换卡'],
    ['诺心'], ['Incake'], ['21Cake'], ['Mcake'], ['黑池蛋糕'],
    ['派悦坊蛋糕'], ['美芝饴'], ['定制款蛋糕'], ['蛋糕兑换卡'],
    ['诺心'], ['Incake'], ['21Cake'], ['Mcake'], ['黑池蛋糕'],
    ['派悦坊蛋糕'], ['美芝饴'], ['定制款蛋糕']];
$('.main-menu-title').mouseover(function () {
    $('.main-dropdown-menu').show();
});
$('.main-dropdown-item').mouseover(function () {
    // last active
    var lastId = Number($('.main-dropdown-item.active').attr('data-id'));
    $('.main-dropdown-item[data-id = "'+lastId +'"]').removeClass('active');
    $('.main-dropdown-item[data-id = "' + lastId + '"]').children('img.tab-img')
        .attr('src', 'image/tab-' + lastId + '.png');
    $('.main-dropdown-item[data-id = "' + lastId + '"]').children('img.arrow-img')
        .attr('src', 'image/arrow-white.png');
    // this active
    const id = Number($(this).attr('data-id')) ;
    $(this).addClass('active');
    $(this).children('img.tab-img')
        .attr('src', 'image/tab-' + id + '-active.png');
    $(this).children('img.arrow-img')
        .attr('src', 'image/arrow-red.png');

    $('.main-dropdown-menu-sub').show();
    var html = '';
    for (var i = 0; i < menu[id-1].length; i++) {
        html += '<a href="brand.html" class="main-dropdown-item-sub flex center middle">' + menu[id-1][i] +'</div>';
    }
    $('.main-dropdown-menu-sub').html(html);
});
$('.main-menu').mouseleave(function () {
    if (!$(this).find('.main-dropdown-menu').hasClass('show')) {
        $('.main-dropdown-menu').hide();
    }
    $('.main-dropdown-menu-sub').hide();
});
// main menu -- 全部商品分类 end

// dropdown -- about us
$('.dropdown-about').mouseover(function () {
    $('.dropdown-about .dropdown-menu ').show();
});
$('.dropdown-about').mouseout(function () {
    $('.dropdown-about .dropdown-menu ').hide();
});
