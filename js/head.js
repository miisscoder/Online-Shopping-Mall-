
// search input dropdown
// texts: 搜索关键词列表(后台提供)
var texts = ['三只松鼠', '三只松鼠', '三只松鼠', '三只松鼠', '三只松鼠', '三只松鼠'];

$('#search input').keydown(function () {
    var html = '';
    texts.forEach(function (o, i) {
        html += '<div class="dropdown-item flex space-between middle" data-id = "'+ i + '">' +
            '<a href = "javascript:;" class="text">' + o + '</a>' +
            '<a href = "javascript:;" class="dropdown-delete">删除</a>' +
            '</div>';
    });
    $('#search  .dropdown-list').html(html);
    $('#search  .dropdown-menu').show();
});
$('body').on('click', '#search .dropdown-item .text', function () {
    const text = $(this).text();
    $('#search input').val(text);
    $('.search-group .dropdown-menu').hide();
});
$('body').on('click', '#search .dropdown-item .dropdown-delete', function () {
    const id = $(this).parent('.dropdown-item').attr('data-id');
    $(this).parent('.dropdown-item').remove();
    texts.splice(Number(id), 1);
});
$('body').on('click', '#search .dropdown-delete-all', function () {
    $('#search .dropdown-item').remove();
});
$(document).click(function () {
    $("#search .dropdown-menu").hide();
});
$('body').on('click', '#search .dropdown-menu', function (e) {
    e.stopPropagation();
});
