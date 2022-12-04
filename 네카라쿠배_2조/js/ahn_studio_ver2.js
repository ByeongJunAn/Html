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
  // var captionText = document.getElementById("caption");
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
  // captionText.innerHTML = dots[slideIndex-1].alt;
}


