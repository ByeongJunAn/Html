//모달창 열기
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// 모달창 닫기
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// 슬라이드 초기화
var slideIndex = 1;
showSlides(slideIndex);

// 이전, 다음 키 컨트롤
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// 썸네일 이미지 컨트롤
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}






//slideindex : 모달창 메인 사진번호 
//function plusSlide(n) : 플러스슬라이드 함수에는 slideindex의 값에 +1 하는 식이 들어있다.
//function 