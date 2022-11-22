

// ID : 아이디를 연결한 아이디 텍스처에 id="ID"

// 필수 입력정보인 아이디, 비밀번호가 입력 되었는지  확인하는 함수 입니다.



// JS 기능

/* [회원가입] (네이버 회원가입 참고했습니다)

1.필수 입력정보인 아이디, 비밀번호가 입력 되었는지  확인
2.아이디 기능 : 문자5~20글자로 제한, 중복 확인 기능 추가, 문자,숫자,특수기호(_),(-) 조합으로 가능하게 하기, 
3.패스워드 기능 : 패스워드 확인 기능, ***표시 , 숫자+영어+특수문자 조합으로 가능하게 하기 
4. 이름 : 한글로, 문자 2~5글자로 제한, 
5. 성별 : 라디오박스 이용
6. 생년월일 : date타입 이용, 예약기능 추가 (https://greensky0026.tistory.com/150?category=996413) 
7. 전화번호 : 3박스로 나눠 1번박스에 010~019 로 제한 2번박스에 3~4글자로 제한
    3번박스에 4글자로 제한
8. 본인 확인 이메일 : email 타입 이용, (선택사항이라고 적어주기)
9. 가입하기 버튼 : , 확인 되면 가입 완료 페이지로 이동
10. 취소 버튼 : 클릭시 로그인 화면으로 이동



----------------------------------------------------------
//지정한 이름(지정한id) 총 정리  : 
 1. id : 사용자가 아이디 입력칸에 입력한 값입니다.
 2. password : 는 사용자가 패스워드 입력칸에 입력한 값입니다.
 3. passwordcheck : 는 비밀번호 확인칸에 사용자가 입력한 값입니다. 


*/

var idList =["Day1", "YooTeacher2", "AnStudent2", "Quail3", "Leo4" ];
  



   // [필수 입력정보인 아이디, 비밀번호가 입력되었는지 확인하는 함수]
   function checkValue() //함수 이름
   {
       if(!document.getElementById("Id").value){ 
        /* 단어 : "id"는 사용자가 아이디 입력칸에 입력한 값입니다. 
           설명 : 사용자가 아이디 입력칸에 아무것도 넣지 않았을 때 값을 false 로 리턴하는 함수입니다. 
         */
        
           document.getElementById("Id").innerHTML = "아이디를 입력하세요";
           return false; //false로 리턴하는건 가입완료가 되지 못되게 하기 위함입니다.
       }
       
       if(!document.getElementById("Password").value){
        /* 단어 :
           설명 : 사용자가 패스워드 입력칸에 아무것도 넣지 않았을때 리턴값을 false로 리턴하는 함수입니다. */
           document.getElementById("Password").innerHTML ="비밀번호를 입력하세요.";
           return false;
       }
       
       
       if(document.getElementById("Password").value != document.getElementById("PassWordCheck").value)
       /* 설명 : "PassWordCheck"는 비밀번호 확인칸에 사용자가 입력한 값입니다. 
          단어 : 비밀번호와 비밀번호 확인에 입력된 값이 동일한지 확인하는 것입니다. */
           alert("비밀번호를 동일하게 입력하세요.");
           return false;
       }
    
    
// [아이디 기능]
       function Id(){
        var id = document.getElementById("Id").value;
        if(id == ""){
            document.getElementById("Password").innerHTML="필수 정보입니다.";
             return false;
        }

        var userID = /^[a-z0-9][a-z0-9_\-]{4,19}$/;
        if (!userID.test(id)) {
            document.getElementById("Password").innerHTML="5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 해주세요.";
            return false;
       }


       for(let i=0; i<idList.length; i++){
        if(idList[i]==id){
            document.getElementById("Password").innerHTML="중복된 아이디 입니다. 다른 아이디를 입력해주세요"
            document.getElementById("Id").value="";
            return;
        }
       }
       document.getElementById("Password").innerHTML="멋진 아이디네요!"; 
    };

//[아이디 중복체크]

for (let i = 0; i < idList.length; i++) {
    if(idList[i]==Id){
        alert("아이디가 중복되었습니다. 다른 아이디를 입력해주세요");
        document.getElementById("Id").value ="";
        return;
    }
}
