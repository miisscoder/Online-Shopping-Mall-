$('.step .circle').click(function () {
    $('.step').removeClass('active');
    $('.step-content').removeClass('active'); 
    const id = $(this).parent('.step').attr('data-step');
    $('.steps').attr('data-active', id);
    if (id === '1') {
        $('.step[data-step="1"]').addClass('active');
        $('.step-content[data-step="1"]').addClass('active'); 
    } else if (id === '2') {
        $('.step[data-step="1"]').addClass('active');
        $('.step[data-step="2"]').addClass('active');
        $('.step-content[data-step="2"]').addClass('active'); 
    } else if (id === '3') {
        $('.step[data-step="1"]').addClass('active');
        $('.step[data-step="2"]').addClass('active');
        $('.step[data-step="3"]').addClass('active');
        $('.step-content[data-step="3"]').addClass('active'); 
    }
});