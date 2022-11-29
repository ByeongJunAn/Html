/*------------------------------------------*/
/*이미지 모달*/
function myFunction(imgs) {
    var tapexpandImg = document.getElementById("tapexpandedImg");
    var tapimgText = document.getElementById("tapimgtext");
    tapexpandImg.src = imgs.src;
    tapimgText.innerHTML = imgs.alt;
    tapexpandImg.parentElement.style.display = "block";
  }


