// 填写单号
$('.btn-fill-number').click(function () {
    $('.section-main').hide();
    $('.deliver-code-form').show();
});
// 提交单号
$('.modal-deliver-code-success .btn-delete-ok').click(function () {
    $('.section-main').show();
    $('.deliver-code-form').hide();
});
// 查看原因
$('.btn-check-reason').click(function () {
    $('.section-main').hide();
    $('.apply-failure-reason').show();
    window.scrollTo(0, 0);
});
// 申请退换
$('.btn-apply-exchange').click(function () {
    $('.tab-container[data-tab="2"]').hide();
    $('.return-section').show();
});
// 申请成功
$('.modal-apply-success .btn-delete-ok').click(function () {
    $('.tab-container[data-tab="2"]').show();
    $('.return-section').hide();
});
// choose-tabs
$('.choose-tab').click(function () {
    var id = $(this).attr('data-tab');
    $(this).parent('.choose-tabs').children('.choose-tab').removeClass('active');
    $(this).addClass('active');

    if ('2' === id) {
        $('.upload-image .sub-label').hide();
        $('.return-address').hide();
    } else if ('1' === id) {
        $('.upload-image .sub-label').show();
        $('.return-address').show();
    }
});
// 上传图像
$('.btn-upload input[type="file"]').change(function (event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        var html = '<img src = "' + event.target.result + '" />';
        $('.images').append(html);
    };
    reader.readAsDataURL(selectedFile);
});
