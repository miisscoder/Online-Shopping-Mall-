$('.left-item').click(function () {
    var id = $(this).attr('data-id');
    if ('0' === id) {
        $('.right-item').show();
    } else {
        $('.right-item').hide();
        $('.right-item[data-id="'+ id+'"]').show();
    }
});