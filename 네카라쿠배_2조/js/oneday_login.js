var checkId;
var checkpassword;

function pagechange(){
    var link = '..\\HTML\\oneday_signUp.html'

    location.href = link;
}

function pagechangehome(){
    var link = '..\\HTML\\main_ver8.html'

    location.href = link;
}

function pagechangelogin(){
    var link = '..\\HTML\\oneday_login.html'

    location.href = link;
}

function login() {
    const form = document.login_form;
    const chkUsername = checkValidUsername(form);
    const chkPw = checkValidPassword(form);

    if (chkUsername) {
        // document.getElementById('alert_id').value = "";
    } else {
        // document.getElementById('alert_id').value = "";
        form.username.style.border = '2px solid';
        form.username.style.borderColor = '#FF0000';
        document.getElementById('alert_name').style.color = '#FF0000';
    }

    if (chkPw) {
        // document.getElementById('alert_password').value = "";
    } else {
        // document.getElementById('alert_password').value = "";
        form.password.style.border = '2px solid';
        form.password.style.borderColor = '#FF0000';
    }

    if (chkUsername && chkPw) {
        console.log('complete. form.submit();');
        var link = '..\\HTML\\main_ver7.html';
        if (document.getElementById('alert_name').value == "master"
        && document.getElementById('alert_password').value == "123456"){
            var link = '..\\HTML\\main_ver8.html';
            localStorage.flag = "1";
            location.href = link;
        }

        if (localStorage.getItem(document.getElementById('alert_name').value) 
        == document.getElementById('alert_password').value){
            var link = '..\\HTML\\main_ver8.html';
            localStorage.flag = "1";
            location.href = link;
        }

        return false;
    }
}

function signUp() {
    
    const form = document.login_form;
    const chkUsername = checkValidUsername(form);
    const chkId = checkValidId(form);
    const chkPw = checkValidPassword(form);
    const chkPhoneNumber = checkValidPhoneNumber(form);
    
    if (chkUsername) {
        // document.getElementById('alert_name').value = "";
    } else {
        // document.getElementById('alert_name').value = "";
        form.username.style.border = '2px solid';
        form.username.style.borderColor = '#FF0000';
        document.getElementById('alert_username').style.color = '#FF0000';
    }

    if (chkId) {
        // document.getElementById('alert_id').value = "";
    } else {
        // document.getElementById('alert_id').value = "";
        form.userid.style.border = '2px solid';
        form.userid.style.borderColor = '#FF0000';
    }

    if (chkPw) {
        // document.getElementById('alert_password').value = "";
    } else {
        // document.getElementById('alert_password').value = "";
        form.password.style.border = '2px solid';
        form.password.style.borderColor = '#FF0000';
    }

    if (chkPhoneNumber) {
        // document.getElementById('alert_phonenumber').value = "";
    } else {
        // document.getElementById('alert_phonenumber').value = "";
        form.phonenumber.style.border = '2px solid';
        form.phonenumber.style.borderColor = '#FF0000';
    }

    if (chkUsername && chkPw && chkId && chkPhoneNumber) {

        if (('localStorage' in window) && window['localStorage'] !==null){
            localStorage.name = document.getElementById('alert_name').value;
            localStorage.password = document.getElementById('alert_password').value;
            localStorage.setItem(localStorage.name, localStorage.password)
            
            var link = '..\\HTML\\oneday_login.html';
            location.href = link;
        }
    }
}

function checkValidUsername(form) {
    if (form.username.value == "") {
        document.getElementById('alert_name').value = "????????? ????????? ?????? ????????????";
        form.username.focus();
        console.log("??????");
        return false;
    }
    
    return true;
}

function checkValidId(form) {
    if (form.userid.value == "") {
        document.getElementById('alert_id').value = "?????? ????????? ?????? ????????????";
        form.userid.focus();
        return false;
    }

    return true;
}

function checkValidPassword(form) {
    if (form.password.value == "") {
        return false;
    }

    const pw = form.password.value;
    // String.prototype.search() :: ????????? ????????? ?????? ??? ????????? ???????????? ?????? ???????????? ????????????. ?????? ????????? -1 ??? ????????????.
    // number
    const num = pw.search(/[0-9]/g);
    // alphabet
    const eng = pw.search(/[a-z]/ig);
    // special characters
    const spe = pw.search(/[`~!@@#$%^&*|?????????'???";:???/?]/gi);

    if (pw.length < 6) {
        // ?????? 6??????.
        document.getElementById('alert_password').innerText = "Password must be at least 6 characters.";
        document.getElementById('alert_password').value = "???????????? ????????? ?????? ????????????";
        return false;
    } else if (pw.search(/\s/) != -1) {
        // ?????? ??????.
        document.getElementById('alert_password').innerText = "Please enter your password without spaces.";
        document.getElementById('alert_password').value = "???????????? ????????? ?????? ????????????";
        return false;
    } else if (num < 0 && eng < 0 && spe < 0) {
        // ????????? ?????? ????????? ?????? ??????.
        document.getElementById('alert_password').innerText = "Password is not valid.";
        document.getElementById('alert_password').value = "???????????? ????????? ?????? ????????????";
        return false;
    }

    return true;
}

function checkValidPhoneNumber(form) {
    if (form.phonenumber.value == "") {
        document.getElementById('alert_phonenumber').value = "???????????? ????????? ?????? ????????????";
        form.phonenumber.focus();
        return false;
    }

    return true;
}

