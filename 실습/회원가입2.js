
var idList =["qwertyasdfgr547_","Day11", "Yooteacher22*", "AnStudent33", "Quail44", "Leo55" ];


function checkId () {
    var id = document.getElementById("ID").value;
    var RegExp = /^[a-zA-Z0-9][a-zA-Z0-9_\-\*]{4,19}$/;

    var userId = document.getElementById("ID");  
    
    
    if(userId.value == ""){
        alert("아이디를 입력해주세요.");
        document.getElementById("ID").value="";
         return ;
    }else

    if (!RegExp.test(userId.value)) {
        alert("5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 해주세요.");
        document.getElementById("ID").value ="";
        return ;
   }else

    
   for(let i=0; i<idList.length; i++){
    if(idList[i]==id){
        alert("중복된 아이디 입니다.");
        document.getElementById("ID").value="";
        return;
    }
   }
   alert("멋진 아이디네요!"); 
};


