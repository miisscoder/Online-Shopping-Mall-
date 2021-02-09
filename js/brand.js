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