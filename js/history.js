// modal
$('.bk-cover').click(function () {
    $('.bk-cover').hide();
    $('.modal-delete').hide();
    $('.modal-remove').hide();
});

// 清空已下架商品
$('.delete-all').click(function () {
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
$('.item .btn-remove-red').click(function () {
    $('.bk-cover').show();
    $('.modal-delete').css('display', 'flex');
});
$('.item .btn-remove-grey').click(function () {
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
