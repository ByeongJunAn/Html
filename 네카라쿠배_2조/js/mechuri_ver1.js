$(function() { 

    $(".btn-login").click(function() {
    $("#modalLogin").fadeIn();
    });
        
    // 공통 모달 닫기
    $(".modal").on("click", function() {
        $(this).fadeOut();
    })

    ClassicEditor.create( document.querySelector( '#editor' ), {
        language: "ko"
    } )
    .then( editor => {
        console.log( editor );
    } )
    .catch( error => {
        console.error( error );
    } );

});