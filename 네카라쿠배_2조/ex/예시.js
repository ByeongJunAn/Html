//모달창 열기
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// 모달창 닫기
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}



// 썸네일 이미지 컨트롤(메인, 모달창의 작은사진 클릭시 showSlides 함수 실행)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// 이전(<), 다음(>) 키 컨트롤
function plusSlides(n) {
  showSlides(slideIndex += n);
}




function showSlides(n) {
  var i; //반복문 초기화
  var slides = document.getElementsByClassName("mySlides"); //모든 mySlides 클래스 가져오기 //모달창 안의 메인사진 
  
 

  //만약 "다음(>)" 버튼을 눌러 전달받은 n의 값이 길이보다 크면 1로 초기화 즉 다시 첫번째 사진 인덱스로 만든다
  if (n > slides.length) {slideIndex = 1}


   // n이 1보다 작을 경우 div.mySlide 의 길이를 인덱스로 설정
  if (n < 1) {slideIndex = slides.length}




  for (i = 0; i < slides.length; i++) {
    
    // 모든 사진을 none으로 처리
    slides[i].style.display = "none";
  }
   


   // slides[slideIndex - 1] if문으로 처리받은 slideIndex값에 -1을 해 slides 의 클래스를 block으로(다시 보이게) 만든다
  slides[slideIndex-1].style.display = "block";

}
