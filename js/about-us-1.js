// history-section
$('.history-section .item').click(function () {
    $('.history-section .item').removeClass('active');
    $(this).addClass('active');
});
// move right
$('.move-right').click(function () {
    var left = $(this).parents('.container').find('.items-content').css('left');
    var n = Number(left.substring(0, left.length - 2));
    if (- n < ($(this).parents('.container').find('.items-content').width() -
        $(this).parents('.container').find('.items').width())) {
        $(this).parents('.container').find('.items-content').css('left', (n - 370) + 'px');
        $(this).parents('.container').find('.move-left').removeClass('disable');
        if ((-n + 370) >= ($(this).parents('.container').find('.items-content').width() -
            $(this).parents('.container').find('.items').width())) {
            $(this).addClass('disable');
        }
    } else {
        $(this).addClass('disable');
    }
});
// move left
$('.move-left').click(function () {
    var left = $(this).parents('.container').find('.items-content').css('left');
    var n = Number(left.substring(0, left.length - 2));
    if (n < 0 ) {
        $(this).parents('.container').find('.items-content').css('left', (n + 370) + 'px');
        $(this).parents('.container').find('.move-right').removeClass('disable');
        if ((-n - 370) >= 0) {
            $(this).addClass('disable');
        }
    } else {
        $(this).addClass('disable');
    }
});

