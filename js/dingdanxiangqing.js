$('.check-all').click(function () {
    $('.check-order input').prop('checked', $(this).children('input').prop('checked'));
});
