// to top
$('.to-top').click(function () {
    window.scrollTo(0, 0);
});


// minus 
$('body').on('click', '.minus', function () {
    var n = Number($(this).parent('.td6').children('.number').val());
    if (Number(n)) {
        $(this).parent('.td6').children('.number').val(0 === n ? 0 : n - 1);
    }
});

// add
$('body').on('click', '.add', function () {
    var n = Number($(this).parent('.td6').children('.number').val());
    if (Number(n) || Number(n) === 0) {
        $(this).parent('.td6').children('.number').val(n + 1);
    }
});

// tabs
$('.tab').click(function () {
    var id = $(this).attr('data-tab');
    $(this).parent('.tabs').children('.tab').removeClass('active');
    $(this).addClass('active');
    $(this).parent('.tabs').parent('.tab-template').find('.tab-container').hide();
    $(this).parent('.tabs').parent('.tab-template').find('.tab-container[data-tab="' + id + '"]').show();
});

// modals
$('.bk-cover').click(function () {
    $('.modal').hide();
    $('.bk-cover').hide();
});

// open modal
$('.btn-modal').click(function () {
    const name = $(this).attr('data-modal');
    $('.bk-cover').show();
    $('.' + name).show();
});
//  close modal
$('.modal .btn-remove-grey').click(function () {
    $('.bk-cover').hide();
    $(this).parents('.modal').hide();
});
$('.modal .btn-delete-ok').click(function () {
    $('.bk-cover').hide();
    $(this).parents('.modal').hide();
});

// pannel
$('.pannel-head').click(function () {
    const ex = $(this).parent('.pannel').attr('data-expand');
    $(this).parent('.pannel').attr('data-expand', 'true' === ex ? false : true)
});

// link get parameter
function getParameter(name) {
    var url = document.location.href;
    var start = url.indexOf("?") + 1;
    if (start == 0) {
        return "";
    }
    var value = "";
    var queryString = url.substring(start);
    var paraNames = queryString.split("&");
    for (var i = 0; i < paraNames.length; i++) {
        if (name == getParameterName(paraNames[i])) {
            value = getParameterValue(paraNames[i])
        }
    }
    return value;
}
// link get parameter -2
function getParameterName(str) {
    var start = str.indexOf("=");
    if (start == -1) {
        return str;
    }
    return str.substring(0, start);
}
// link get parameter -3
function getParameterValue(str) {
    var start = str.indexOf("=");
    if (start == -1) {
        return "";
    }
    return str.substring(start + 1);
}

