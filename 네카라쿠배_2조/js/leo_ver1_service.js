// okday 키워드 예약가능날짜
// reservation() 예약가능 판별 메서드
var okday=['2022-12-01','2022-12-02','2022-12-03']; 
function reservation(){
    day=document.getElementById("date_id").value;
    console.log(day);
    if(okday==day){
        alert("예약가능합니다.")
    }else{
        alert("예약이 불가능합니다.")
    }
}

    // $(function(){
    //     $("#inphoto").click(function(){
    //         $("in1").fadeIn("in2")
    //     });
    // });

function 투명2() {
    $(function () {
        $(window).scroll(function () {
            if ($(document).scrollTop() > 100) {
                $("#fix_header_nav").css('background-color', '#C8DBBE');
            } else {
                $("#fix_header_nav").css('background-color', 'transparent');
            };
        });
    });
};

// 맵 표시
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 37.497654645, lng: 126.921847 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;


