
var idList =["Day11", "Yooteacher22*", "AnStudent33", "Quail44", "Leo55" ];


function checkId () {
    var id = document.getElementById("ID").value;
    var RegExp = /^[a-zA-Z0-9][a-zA-Z0-9_\-\*]{4,19}$/;

    var userId = document.getElementById("ID");  
    
    
    if(userId.value == ""){
        document.getElementById("ID").innerHTML="아이디를 입력하세요";
        document.getElementById("ID").value="";
        document.getElementById("ID").focus();//알람창 뜨고 끄면 아이디 입력칸에 커서가 등록됨
         return ;
    }else

    if (!RegExp.test(userId.value)) {
        alert("5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 해주세요.");
        document.getElementById("ID").value ="";
        document.getElementById("ID").focus();
        return ;
   }else

 
   
    
   for(let i=0; i<idList.length; i++){
    if(idList[i]==id){
        alert("중복된 아이디 입니다.");
        document.getElementById("ID").value="";
        document.getElementById("ID").focus();
        return;
    }
   }
   alert("멋진 아이디네요!");
   document.getElementById("pass1").focus(); 
};


function checkPass(){
    var password1 = document.getElementById("pass1").value;
    var password2 = document.getElementById("pass2").value;

    if(password1.length==0){
        document.getElementById("pass1").innerHTML = "이름을 입력하세요";;
    }

    if (password1.length <8||password1.length>20){
        alert("8자리 이상, 20자리 이내로 입력해주세요 ");
        return false;
    }


        function isPassword(password1){
        var reg = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";
        var txt = "aaaa";
        }
        if( !reg.test(txt) ) {
            alert("비밀번호 정규식 규칙 위반!!");
            return false;

    }
}