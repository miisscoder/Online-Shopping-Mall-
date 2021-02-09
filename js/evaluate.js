// 删除图像
$('.btn-delete').click(function () {
    $(this).parent('.item').remove();
});

// 上传图像
$('.btn-upload input[type="file"]').change(function (event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        var html = '<div class="item">' +
            '<img src="' + event.target.result + '"  class="image" />' +
            '<img src="image/close.png" class="btn-delete" />' +
            '</div>';
        $('.image-items').append(html);
    };
    reader.readAsDataURL(selectedFile);
});


// 星星
$('img.star').click(function () {
    var src = $(this).attr('src');
    var id = Number($(this).attr('data-id'));
    if ('image/star-black.png' === src) {
        while (id < 6) {
            $(this).parent('.star-group')
                .children('img.star[data-id="' + id + '"]')
                .attr('src', 'image/star-grey-2.png');
            id++;
        }
    } else if ('image/star-grey-2.png' === src) {
        while (id > 0) {
            $(this).parent('.star-group')
                .children('img.star[data-id="' + id + '"]')
                .attr('src', 'image/star-black.png');
            id--;
        }
    }
}); 