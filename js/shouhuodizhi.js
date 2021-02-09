// 地址个数
var amount = 2;
updateAmount();
function updateAmount() {
    $('#amount').text(amount);
    $('#left').text(20 - amount);
}
if (0 === amount) {
    $('.empty').show();
    $('.ttable').hide();
} else {
    $('.empty').hide();
    $('.ttable').show();
}

// modal save button
$('.btn-save').click(function () {
    $('.bk-cover').hide();
    $(this).parents('.modal').hide();
    const modal = $(this).parents('.modal');
    if (true === modal.find('input[type="checkbox"]').prop('checked')) {
        $('.section-main .ttr').removeClass('default');
    }
    // close modify modal
    if (modal.hasClass('modify')) {
        const tr = $('.section-main .ttr[data-id="' + modal.attr('data-id') + '"]');
        tr.children('.ttd1').text(modal.find('.input-1').val());
        tr.children('.ttd5').text(modal.find('.input-2').val());
        tr.children('.ttd2').text(modal.find('.input-3').val());
        tr.children('.ttd3').text(modal.find('.input-4').val());
        tr.children('.ttd4').text(modal.find('.input-5').val());
        if (modal.find('input[type="checkbox"]').prop('checked')) {
            tr.addClass('default');
        }
        modal.removeClass('modify');
        modal.attr('data-id', -1);
    } else {
        //clear input
        const id = $('.section-main .ttr').length;
        // close add new modal
        var html = '<div class="ttr flex space-between middle ' +
            (true === modal.find('input[type="checkbox"]').prop('checked') ? 'default' : '') + '" ' +
            'data-id = "'+ id +'"> ' +
            '<div class="ttd ttd1 flex center middle">' + modal.find('.input-1').val() + '</div>' +
            '<div class="ttd ttd2 flex center middle">' + modal.find('.input-3').val() + '</div>' +
            '<div class="ttd ttd3 flex center middle">' + modal.find('.input-4').val() + '</div>' +
            '<div class="ttd ttd4 flex center middle">' + modal.find('.input-5').val() + '</div>' +
            '<div class="ttd ttd5 flex center middle">' + modal.find('.input-2').val() + '</div>' +
            '<div class="ttd ttd6 flex center middle">' +
            '<a href="javascript:;" class="link-modify-shouhuodizhi btn-modal"' +
            'data-modal="modal-address" > 修改</a >| ' +
            '<a href="javascript:;" class="link-delete-shouhuodizhi btn-modal"' +
            'data-modal="modal-delete">删除</a>' +
            '<a href="javascript:;" class="link-default">设为默认</a>' +
            '</div>' +
            '</div>';
        $('.ttbody').append(html);
        amount++;
        updateAmount();
    }
    modal.find('input[type="text"]').val('');
    modal.find('input[type="checkbox"]').prop('checked', false);
    
});
// 删除
$('body').on('click', '.btn-delete-ok', function () {
    const modal = $(this).parents('.modal');
    const id = modal.attr('data-id');
    $('.section-main .ttr[data-id="' + id + '"]').remove();
    amount--;
    updateAmount();
});
// 设为默认
$('body').on('click', '.link-default', function () {
    $('.section-main .ttr').removeClass('default');
    $(this).parents('.ttr').addClass('default');
});

$('body').on('click', '.btn-modal', function () {
    const name = $(this).attr('data-modal');
    // add new
    if ($(this).hasClass('add-new-shouhuodizhi')) {
        if ($('.section-main .ttr').length >= 20) {
            return;
        }
        const modal = $('.' + name);
        modal.removeClass('modify');
        modal.find('input[type="text"]').val('');
        modal.find('input[type="checkbox"]').prop('checked', false);
        // modify
    } else if ($(this).hasClass('link-modify-shouhuodizhi')) {
        const tr = $(this).parents('.ttr');
        const modal = $('.' + name);
        modal.find('.input-1').val(tr.children('.ttd1').text());
        modal.find('.input-2').val(tr.children('.ttd5').text());
        modal.find('.input-3').val(tr.children('.ttd2').text());
        modal.find('.input-4').val(tr.children('.ttd3').text());
        modal.find('.input-5').val(tr.children('.ttd4').text());
        modal.find('input[type="checkbox"]').prop('checked', tr.hasClass('default'));
        modal.addClass('modify');
        modal.attr('data-id', tr.attr('data-id'));
        // delete
    } else if ($(this).hasClass('link-delete-shouhuodizhi')) {
        const tr = $(this).parents('.ttr');
        const modal = $('.' + name);
        modal.attr('data-id', tr.attr('data-id'));
    }
    $('.bk-cover').show();
    $('.' + name).show();
});