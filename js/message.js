
// delete
// modal
$('.bk-cover').click(function () {
    $('.bk-cover').hide();
    $('.modal-delete').hide();
});
$('.item .rubbish').click(function () {
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