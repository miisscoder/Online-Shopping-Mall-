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


// count down 倒计时
var hour = 1;
var minute = 1;
var second = 1;
countDown(hour, minute, second);
function countDown(hour, minute, second) {
    var internal = setInterval(function () {
        if (0 === second) {
            if (0 === minute) {
                if (0 === hour) {
                    clearInterval(internal);
                } else {
                    hour--;
                    minute = 59;
                    second = 59;
                }
            } else {
                minute--;
                second = 59;
            }
        } else {
            second--;
        }

        $('#hour').text(hour < 10 ? '0' + hour : hour);
        $('#minute').text(minute < 10 ? '0' + minute : minute);
        $('#second').text(second < 10 ? '0' + second : second);
    }, 1000);
}


//floor menu FX 品牌

var brands = [['诺心1', 'incake', '诺心', 'incake', '诺心', 'incake', '诺心', 'incake', '诺心', 'incake', '诺心', 'incake', '诺心', 'incake'],
    ['诺心2', 'incake', '诺心', 'incake', '诺心', 'incake', '诺心', 'incake', '诺心', 'incake', '诺心', 'incake', '诺心', 'incake'],
    ['诺心3', 'incake', '诺心', 'incake', '诺心', 'incake', '诺心', 'incake', '诺心', 'incake', '诺心', 'incake', '诺心', 'incake'],
    ['诺心4', 'incake', '诺心', 'incake', '诺心', 'incake', '诺心', 'incake', '诺心', 'incake', '诺心', 'incake', '诺心', 'incake']];
function init() {
    brands.forEach(function (brand, index) {
        const floor = index + 1;
        const maxFloor = (0 === brands[floor - 1].length % 12 ?
            brands[floor - 1].length / 12 :
            Math.ceil(brands[floor - 1].length / 12));
        var html = '';

        // list
        $('.section-f[data-floor="' + floor + '"] .list').attr('data-active', 0);
        brand.forEach(function (value, i) {
            if (i < 12) {
                html += '<div class="item ' +
                    (0 === i ? 'active-' + floor : '') +
                    '" data-id ="' + i +
                    '">' + value + '</div>';
            }
        });
        // buttons
        $('.section-f[data-floor="' + floor + '"] .list').html(html);
        $('.section-f[data-floor="' + floor + '"] .last-page').addClass('disable');
        if (maxFloor === 1) {
            $('.section-f[data-floor="' + floor + '"] .next-page').addClass('disable');
        }
    });
}
init();
// section floor left buttons
$('body').on('click', '.section-f .list .item', function () {
    var floor = Number($(this).parents('.section-f').attr('data-floor'));
    $(this).parents('.list').find('.item').removeClass('active-' + floor);
    $(this).addClass('active-' + floor);
    $('.section-f[data-floor="' + floor + '"] .list').attr('data-active', $(this).attr('data-id'));
    // add here
});
// last page in Floor Section
$('.section-f .last-page').click(function () {
    var page = Number($(this).parents('.f-pagination').attr('data-page'));
    const f = Number($(this).parents('.section-f').attr('data-floor'));
    const active = Number($('.section-f[data-floor="' + f + '"] .list').attr('data-active'));
    if (1 < page) {
        var html = '';
        page = page - 1;
        $(this).parents('.f-pagination').attr('data-page', page);
        brands[f - 1].forEach(function (value, index) {
            if (page * 12 > index && (page - 1) * 12 <= index) {
                html += '<div class="item ' +
                    (active === index ? 'active-' + f : '') +
                    '" data-id ="' + index +
                '">' + value + '</div>';
            }
        });
        $('.section-f[data-floor="'+ f +'"] .list').html(html);
        paginationBtn(page, f);
    }
});
// next page in Floor Section
$('.section-f .next-page').click(function () {
    var page = Number($(this).parents('.f-pagination').attr('data-page'));
    const f = Number($(this).parents('.section-f').attr('data-floor'));
    const maxFloor = (0 === brands[f - 1].length % 12 ?
        brands[f - 1].length / 12 :
        Math.ceil(brands[f - 1].length / 12));
    const active = Number($('.section-f[data-floor="' + f + '"] .list').attr('data-active'));
    if (maxFloor >  page) {
        var html = '';
        page = page + 1;
        $(this).parents('.f-pagination').attr('data-page', page);
        brands[f - 1].forEach(function (value, index) {
            if (page * 12 > index && (page - 1) * 12 <= index) {
                html += '<div class="item ' +
                    (active === index ? ('active-' + f) : '') +
                    '" data-id ="' + index +
                    '">' + value + '</div>';
            }
        });
        $('.section-f[data-floor="' + f + '"] .list').html(html);
        paginationBtn(page, f);
    }
});
// pagination buttons set
function paginationBtn(page, floor) {
    const maxFloor = (0 === brands[floor - 1].length % 12 ?
        brands[floor - 1].length / 12 :
        Math.ceil(brands[floor - 1].length / 12));
    const pagination = $('.section-f[data-floor="' + floor +'"] .f-pagination');
    pagination.children('.last-page').removeClass('disable');
    pagination.children('.next-page').removeClass('disable');
    if (1 === page) {
        pagination.children('.last-page').addClass('disable');
    } else if (maxFloor === page) {
        pagination.children('.next-page').addClass('disable');
    }
}