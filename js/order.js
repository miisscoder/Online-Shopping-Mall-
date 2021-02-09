// 显示全部地址
$('.show-all').click(function () {
    var expand = $(this).attr('data-expand');
    if ('true' === expand) {
        $(this).attr('data-expand', 'false');
        $(this).parent('.section-address').children('.items').attr('data-expand', 'false');
    } else if ('false' === expand) {
        $(this).attr('data-expand', 'true');
        $(this).parent('.section-address').children('.items').attr('data-expand', 'true');
    } else {
        alert('.show-all error');
    }
});


// choose tabs
$('.choose-tab').click(function () {
    $(this).parents('.choose-tabs').find('.choose-tab').removeClass('active');
    $(this).addClass('active');
});

// datepicker
$('#datepicker').datepicker({
    language: 'zh-CN',
    todayHighlight: true,
    beforeShowDay: function (e) {
        var today = new Date();
        var todayy = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        if (e < todayy) {
            return {
                enabled: false,
                classes: 'disable'
            }
        } 
    }
});
const today = $('#datepicker').find('td.today');
today.removeClass('today');
today.addClass('active');