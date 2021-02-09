// 上传图像
$('.btn-upload input[type="file"]').change(function (event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        var html = '<img src = "' + event.target.result + '" />';
        $('.btn-upload').before(html);
    };
    reader.readAsDataURL(selectedFile);
});
