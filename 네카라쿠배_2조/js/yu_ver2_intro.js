//스크롤 변경시 배너 투명화
function scrollMove() {
    $(function () {
        $(window).scroll(function () {
            if ($(document).scrollTop() > 100) {
                $("#fix_header_nav").css('background-color', '#efefef');
            } else {
                $("#fix_header_nav").css('background-color', 'transparent');
            };
        });
    });
};
// 네비 상단바 고정
function scrfix() {
    $(window).scroll(() => {
        var temp = $(window).scrollTop();
        var temp1 = 115 - temp;
        if (temp1 > 0) {
            $("#fix_header_nav").css('margin-top', temp1);
        } else {
            $("#fix_header_nav").css('margin-top', 0);
        }
    })
}
