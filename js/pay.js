// 显示全部地址
$('.show-all').click(function () {
    var expand = $(this).attr('data-expand');
    if ('true' === expand) {
        $(this).attr('data-expand', 'false');
        $(this).parents('.section-order-content').children('.items').attr('data-expand', 'false');
    } else if ('false' === expand) {
        $(this).attr('data-expand', 'true');
        $(this).parents('.section-order-content').children('.items').attr('data-expand', 'true');
    } else {
        alert('.show-all error');
    }
});


// choose tabs
$('.choose-tab').click(function () {
    $(this).parents('.choose-tabs').find('.choose-tab').removeClass('active');
    $(this).addClass('active');
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