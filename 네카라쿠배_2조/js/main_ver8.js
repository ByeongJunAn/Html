//스크롤 변경시 배너 투명화
function scrollMove() {
    $(function () {
        $(window).scroll(function () {
            if ($(document).scrollTop() > 100) {
                $("#fix_header_nav").css('background-color', 'white');
                // $("#fix_header_nav:hover").css('opacity','0')
            } else {
                $("#fix_header_nav").css('background-color', 'transparent ');
            };
        });
    });
};

// swiper
$(function() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });
});

//갤러리 둘러보기 바꾸기
function GBI() {
    setTimeout(change_img1, 2000);
    if (localStorage.flag == "1"){
        document.getElementById("login").innerHTML = "Logout"
    }else{
        document.getElementById("login").innerHTML = "Login"
    }
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
// main 리뷰 내용 타이핑 효과
function typing_main() {
    var arr0 ="사진을 정말 예쁘게 찍어줘요!"
    var arr1 ="서비스가 너무 친절해요~";
    var arr2 ="우리 강아지를 가족처럼 잘 해줘요!";
    var arr3 ="한번 이용해보세요!";
    var arr4 ="이번 프로젝트 만점 받고 싶어요!";
    var arr5 ="컨셉 사진도 잘 찍어줘요!";
    var arr6 ="강아지 간식도 구비되어 있어요!";
    var arr7 ="여기 직원분들이 전부 전문가 같아요!";
    var arrto = [arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr0]
    const text = document.getElementById("p_review");
    let i = 0;
    let j = 0;
    function typing() {
        let txt = arrto[i][j++];
        $("#p_review").append(txt);
        if (j > arrto[i].length) {
            $("#p_review").text("");
            j=0;
            i++;
            if (i>7) {
                i=0;
            }
        }
    }
    setInterval(typing, 200);
}

function pageChangeLoginOut(){
    if (document.getElementById("login").innerHTML == "Logout"){
        document.getElementById("login").innerHTML = "Login";
        localStorage.flag = "0";
    }else {
        var link = '..\\HTML\\oneday_login.html';
        location.href = link;
    }
}