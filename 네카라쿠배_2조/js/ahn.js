//스크롤 변경시 배너 투명화
function scrollMove() {
    $(function () {
        $(window).scroll(function () {
            if ($(document).scrollTop() > 100) {
                $("#fix_header_nav").css('background-color', '#C8DBBE ');
            } else {
                $("#fix_header_nav").css('background-color', 'transparent ');
            };
        });
    });
};

//갤러리 둘러보기 바꾸기
function GBI() {
    setTimeout(change_img1, 2000);
};

function change_img1() {
    $("#div_half_division2").css({ "background": "url(../image/BI_sea_dog.jpg)" });
    $("#div_half_division2").css({ "background-size": "100% 100%" });
    //$('.linkButton').prop('href', 변경할 값) '.linkButton' 이거 만들어서 href="" 테그 변경가능
    setTimeout(change_img2, 2000);
};

function change_img2() {
    $("#div_half_division2").css({ "background": "url(../image/BI_happy_dog.jpg)" });
    $("#div_half_division2").css({ "background-size": "100% 100%" });
    //$('.linkButton').prop('href', 변경할 값)
    setTimeout(change_img3, 2000);
};

function change_img3() {
    $("#div_half_division2").css({ "background": "url(../image/BI_sleep_dog.jpg)" });
    $("#div_half_division2").css({ "background-size": "100% 100%" });
    //$('.linkButton').prop('href', 변경할 값)
    setTimeout(change_img1, 2000);
};

// 숫자들 변경

function p_text_change_in(n, msg1, msg2) {
    $("#div_quadrant" + n).mouseover(() => {
        $("#p_v_text" + n).text(msg1);
        $("#div_quadrant" + n).addClass("div_change");
        $("#p_v_text" + n).addClass("p_change");
        for (let i = 1; i <= 5; i++) {
            if (i == n) continue;
            $("#div_quadrant" + i).addClass("div_hidden_area");
        }
    });
    $("#div_quadrant" + n).mouseout(() => {
        $("#p_v_text" + n).text(msg2);
        $("#div_quadrant" + n).removeClass("div_change");
        $("#p_v_text" + n).removeClass("p_change");
        for (let i = 1; i <= 5; i++) {
            if (i == n) continue;
            $("#div_quadrant" + i).removeClass("div_hidden_area");
        }
    });
};

// 기업가치 가기
function div_left_move() {
    $(".div_Lslide").addClass("div_Lslide_move");
    $("#p_comper_velue").css('display', 'none');
    setTimeout(visible_p, 900);
}
function visible_p() {
    $(".p_check_v").css('display', 'block');
}



/*------------------------------------------*/
/*이미지 모달*/
function myFunction(imgs) {
    var tapexpandImg = document.getElementById("tapexpandedImg");
    var tapimgText = document.getElementById("tapimgtext");
    tapexpandImg.src = imgs.src;
    tapimgText.innerHTML = imgs.alt;
    tapexpandImg.parentElement.style.display = "block";
  }