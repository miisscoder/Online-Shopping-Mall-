
var chosedImg = '';
chosedImg = $('img.chosed').attr('src');
// choose tabs
$('.choose-tab').click(function () {
    $(this).parent('.choose-tabs').children('.choose-tab').removeClass('active');
    $(this).addClass('active');
    $('img.chosed').attr('src', $(this).children('img').attr('src'));

    chosedImg = $(this).children('img').attr('src');
});

$('.profile-image').click(function () {
    $('.section-profile').hide();
    $('.section-change').show();
});

var data = '';

$('.btn-upload input[type="file"]').change(function (event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        data = event.target.result;
        $('img.update-img').attr('src', event.target.result);
    };
    reader.readAsDataURL(selectedFile);
});

$('.btn-save-image').click(function () {
    $('.section-profile').show();
    $('.section-change').hide();
    $('.profile-image img').attr('src', '' === data ? chosedImg : data);
});