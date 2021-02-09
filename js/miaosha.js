

// slider
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true
});


// count down 倒计时
var hour = 1;
var minute = 1;
var second = 1;
countDown(hour, minute, second);
function countDown(hour, minute, second) {
    var internal = setInterval(function () {
        if (0 === second) {
            if (0 === minute) {
                if (0 === hour) {
                    clearInterval(internal);
                } else {
                    hour--;
                    minute = 59;
                    second = 59;
                }
            } else {
                minute--;
                second = 59;
            }
        } else {
            second--;
        }

        $('#hour').text(hour < 10 ? '0' + hour : hour);
        $('#minute').text(minute < 10 ? '0' + minute : minute);
        $('#second').text(second < 10 ? '0' + second : second);
    }, 1000);
}