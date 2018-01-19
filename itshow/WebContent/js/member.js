/**
 *    회원관리
 */   

var iderror = "아이디를 입력해주세요";
var confirmerror = "이미 사용중인 아이디 입니다";
var passwderror = "비밀번호를 입력해주세요";
var repasswderror = "비밀번호를 확인해주세요";
var nameerror = "이름을 입력해주세요";
var telerror = "전화번호를 입력해주세요";
var telallerror = "전화번호를 모두 입력해주세요";
var telinterror = "전화번호를 숫자로 입력해주세요";
var noemailerror = "이메일을 입력해주세요";
var emailerror = "이메일 형식에 맞지 않습니다";
var emailnumerror ="인증번호를 입력해주세요";
var remailerror = "인증번호를 확인해주세요";
var verifyerror = "이메일 인증을 해주세요";
var telnumbererror = "전화번호를 숫자로 입력해주세요";

var inputerror = "회원 가입에 실패했습니다\n잠시 후 다시 시도하세요"; 
var noiderror = "입력하신 아이디가 없습니다\n다시 확인하세요";
var diffpasswderror = "입력하신 비밀번호가 다릅니다\n다시 확인하세요";
var updateerror = "회원 정보 변경에 실패했습니다\n잠시 후 다시 시도하세요";
var idselecterror = "입력하신 아이디가 존재하지 않습니다.";
var deleteerror = "회원 탈퇴에 실패했습니다.";

function erroralert( msg ) {
	alert( msg );
	history.back();
}

function m_goback() {
	history.back();
}

function loginfocus() {
	loginform.m_id.focus();
}

function confirmcheck() {
	if(!confirmform.m_id.value ) {
		alert( iderror );
		confirmform.m_id.focus();
		return false;
	}
}

/* * * * * * *
 * 가입 폼
 * * * * * * */

//아이디 중복확인
function confirmid() {
	var m_id = insertform.m_id.value;
	$.ajax(
			{
				type : 'POST',
				url : 'memberConfirmId.do',
				data : {
					m_id : m_id
				},
				dataType : 'text',
				success : function(data) {
					$('#result').html(data);
				},
				error : function( e ) {
					$('#result').html( e );
				}
			}      
	);
}

//이메일 중복확인
function mailCheck(){
	var m_email = insertform.m_email1.value;
	$.ajax(
			{
				type : 'POST',
				url : 'memberEmailCheck.do',
				data : {
					m_email : m_email
				},
				dataType : 'text',
				success : function(data) {
					$('#result7').html(data);
				},
				error : function( e ) {
					$('#result7').html( e );
				}
			}      
	);
}

//비밀번호
function pwcheck(){
	var m_pw = insertform.m_pw.value;
	var result1 = document.getElementById("result1");
	if(insertform.m_pw.value) {
		result1.innerHTML = "";
	}else if(!insertform.m_pw.value) {
		result1.innerHTML = passwderror;
	}
}

//비밀번호 확인
function repwcheck(){
	var m_pw = insertform.m_pw.value;
	var result2 = document.getElementById("result2");
	if(insertform.m_pw.value != insertform.m_repasswd.value){
		if(!insertform.m_repasswd.value) {
			result2.innerHTML = "비밀번호 확인을 위해 다시 입력해주세요.";
		}else {
			result2.innerHTML = "비밀번호가 다릅니다.";
		}
	}else if(insertform.m_pw.value == insertform.m_repasswd.value){
		result2.innerHTML = "비밀번호가 같습니다.";
	}
}

//이름 확인
function namecheck(){
	var m_name = insertform.m_name.value;
	var result3 = document.getElementById("result3");
	if(insertform.m_name.value){
		result3.innerHTML = "";   
	}else if(!insertform.m_name.value){
		result3.innerHTML = "이름을 입력해주세요.";
	}
}


//전화번호 확인
function telcheck(){
	var m_tel1 = insertform.m_tel1.value;
	var result4 = document.getElementById("result4");

	if(insertform.m_tel1.value.length == 3 ) {
		insertform.m_tel2.focus();
	}

	if(insertform.m_tel2.value.length == 4 ) {
		insertform.m_tel3.focus();
	}

	if(!insertform.m_tel1.value
			&& !insertform.m_tel2.value
			&& !insertform.m_tel3.value) {
		result4.innerHTML = "전화번호를 입력해주세요";
	}

	if(insertform.m_tel1.value
			&& insertform.m_tel2.value
			&& insertform.m_tel3.value) {
		result4.innerHTML = "";
	}
	
	if(insertform.m_tel1.value !=0){
		var String = insertform.m_tel1.value;
		var len = String.length;
		var str = "0123456789";
		for(i=0; i<len; i++){
			if(str.indexOf(String.charAt(i)) == -1){
				result4.innerHTML = telnumbererror;
				return false;
				break;
			}
		}
	}

	if(insertform.m_tel2.value !=0){
		var String = insertform.m_tel2.value;
		var len = String.length;
		var str = "0123456789";
		for(i=0; i<len; i++){
			if(str.indexOf(String.charAt(i)) == -1){
				result4.innerHTML = telnumbererror;
				return false;
				break;
			}
		}
	}

	if(insertform.m_tel3.value !=0){
		var String = insertform.m_tel3.value;
		var len = String.length;
		var str = "0123456789";
		for(i=0; i<len; i++){
			if(str.indexOf(String.charAt(i)) == -1){
				result4.innerHTML = telnumbererror;
				return false;
				break;
			}
		}
	}

	if(insertform.m_tel1.value 
			|| insertform.m_tel2.value 
			|| insertform.m_tel3.value ) {
		if( insertform.m_tel1.value.length < 2 
				|| insertform.m_tel2.value.length < 3 
				|| insertform.m_tel3.value.length < 4 ) {
			result4.innerHTML = "전화번호를 모두 입력해주세요";
			return false;
		}
	}
}


function mailCheck(){
	var m_email1 = insertform.m_email1.value;
	var m_email2 = insertform.m_email2.value;
	$.ajax(
			{
				type : 'POST',
				url : 'memberEmailCheck.do',
				data : {
					m_email1 : m_email1,
					m_email2 : m_email2
				},
				dataType : 'text',
				success : function( data ) {
					$('#result5').html(data);
				},
				error : function( e ) {
					$('#result5').html( e );
				}
			}		
	);
}

var emailCheckResult;
function emailcheckfocus(result) {
	emailCheckResult = result;
}

//이메일 확인
function emailcheck(){
	var m_email1 = insertform.m_email1.value;
	var result5 = document.getElementById("result5");
	
	if(!insertform.m_email1.value && (insertform.m_email2.value == "0")) {
		result5.innerHTML = noemailerror;
	}else if(insertform.m_email1.value.length != 0) {
		if(insertform.m_email2.value == "0") {
			//직접 입력
			if(insertform.m_email1.value.indexOf("@") == -1) {
				result5.innerHTML = emailerror;
			}else {
				result5.innerHTML = "";
				mailCheck();
			}
		}else{
			//선택 입력
			if(insertform.m_email1.value.indexOf("@") == -1) {
				result5.innerHTML = "";
				mailCheck();
			}else {
				result5.innerHTML = emailerror;
			}
		}
	}
}

//이메일 인증 소스
function sendemail(){
	var url = "";
	
	if(!insertform.m_email1.value && (insertform.m_email2.value == "0")) {
		alert(noemailerror);
		return false;
	}else if(insertform.m_email1.value.length != 0) {
		if(insertform.m_email2.value == "0") {
			//직접 입력
			if(insertform.m_email1.value.indexOf("@") == -1) {
				alert(emailerror);
				return false;
			}else {
				url = "memberSendEmail.do?m_email=" + insertform.m_email1.value;
			}
		}else{
			//선택 입력
			if(insertform.m_email1.value.indexOf("@") != -1) {
				alert(emailerror);
				return false;
			}else {
				url = "memberSendEmail.do?m_email=" + insertform.m_email1.value 
				+ "@" + insertform.m_email2.value;
			}
		}
	}
	
	open(url,"emailwindow", "statusbar=no, scrollbar=no, menubar=no, width=400px, height=208px");
}

//인증번호 설정
function setAuthNum(){
	opener.document.insertform.authnum.value = sendemailform.authnum.value;
	opener.document.insertform.verty.value = "0";
	opener.document.insertform.emailnum.focus();
	var result6 = opener.document.getElementById("result6");
	result6.innerHTML = "인증번호를 입력해주세요";
	self.close();
}

//인증번호 확인
function emailnumc(){
	var emailnum = insertform.emailnum.value;
	var result6 = document.getElementById("result6");
	if(insertform.authnum.value != insertform.emailnum.value){
		result6.innerHTML = "인증번호가 다릅니다";
	}else if(insertform.authnum.value == insertform.emailnum.value){
		insertform.verty.value = "1";
		result6.innerHTML = "이메일 인증이 완료되었습니다";
		$("input[name='m_email1']").attr("readonly",true);
	}
}

//회원가입 확인 버튼 눌렀을때
function inputcheck(){

	if(!insertform.m_id.value) {
		alert(iderror);
		return false;
	}
	
	if(insertform.confirm.value != 1) {
		alert(confirmerror);
		return false;
	}

	if(!insertform.m_pw.value) {
		alert("비밀번호를 입력해주세요.");
		return false;
	}

	if(!insertform.m_repasswd.value) {
		alert("비밀번호 확인을 해주세요.");
		return false;
	}

	if(insertform.m_pw.value != insertform.m_repasswd.value) {
		alert("비밀번호 확인을 해주세요.");
		return false;
	}

	if(!insertform.m_name.value) {
		alert("이름을 입력해주세요.");
		return false;
	}

	if(!insertform.m_tel1.value
			&& !insertform.m_tel2.value
			&& !insertform.m_tel3.value) {
		alert("전화번호를 입력해주세요.");
		return false;
	}

	if(insertform.m_tel1.value 
			|| insertform.m_tel2.value 
			|| insertform.m_tel3.value ) {
		if( insertform.m_tel1.value.length < 2 
				|| insertform.m_tel2.value.length < 3 
				|| insertform.m_tel3.value.length < 4 ) {
			alert("전화번호를 모두 입력해주세요.");
			return false;
		}
	}
	
	if(insertform.m_tel1.value !=0){
		var String = insertform.m_tel1.value;
		var len = String.length;
		var str = "0123456789";
		for(i=0; i<len; i++){
			if(str.indexOf(String.charAt(i)) == -1){
				alert(telnumbererror);
				return false;
				break;
			}
		}
	}

	if(insertform.m_tel2.value !=0){
		var String = insertform.m_tel2.value;
		var len = String.length;
		var str = "0123456789";
		for(i=0; i<len; i++){
			if(str.indexOf(String.charAt(i)) == -1){
				alert(telnumbererror);
				return false;
				break;
			}
		}
	}

	if(insertform.m_tel3.value !=0){
		var String = insertform.m_tel3.value;
		var len = String.length;
		var str = "0123456789";
		for(i=0; i<len; i++){
			if(str.indexOf(String.charAt(i)) == -1){
				alert(telnumbererror);
				return false;
				break;
			}
		}
	}
	
	if(insertform.verty.value != 1) {
		alert(verifyerror);
		return false;
	}
}


function setid( id ) {
	opener.document.insertform.m_id.value = id;
	self.close();
	opener.document.insertform.confirm.value = id;
	opener.document.insertform.passwd.focus();
}

function inputfocus() {
	insertform.m_id.focus();
}



//이메일 
//1. null일 경우         이동
//2. 직접입력일 경우      입력창에 @가 없으면 경고
//3. 선택이력일 경우      입력창에 @가 있으면 경고   

//전화번호가 있을때나 없을때 모두 동일하게 동작해야 한다.





/* * * * * * *
 * 회원정보 수정
 * * * * * * */

function modiformfocus(){
	modifyform.m_pw.focus();
}

function modifyfocus(){
	modifyform.m_pw.focus();
}


//비밀번호
function m_pwcheck(){
	var m_pw = modifyform.m_pw.value;
	var result0 = document.getElementById("resultm0");
	if(modifyform.m_pw.value) {
		result0.innerHTML = "";
		modifyform.m_repasswd.value = "";
		document.getElementById("resultm1").innerHTML = "비밀번호 확인을 위해 다시 입력해주세요";
	}else if(!modifyform.m_pw.value) {
		result0.innerHTML = passwderror;
		modifyform.m_repasswd.value = "";
		document.getElementById("resultm1").innerHTML = "비밀번호 확인을 위해 다시 입력해주세요";
	}
}

//비밀번호 확인
function m_repwcheck(){
	var m_pw = modifyform.m_pw.value;
	var result1 = document.getElementById("resultm1");
	if(modifyform.m_pw.value != modifyform.m_repasswd.value){
		if(!modifyform.m_repasswd.value) {
			result1.innerHTML = "비밀번호 확인을 위해 다시 입력해주세요.";
		}else {
			result1.innerHTML = "비밀번호가 다릅니다.";
		}
	}else if(modifyform.m_pw.value == modifyform.m_repasswd.value){
		result1.innerHTML = "비밀번호가 같습니다.";
	}
}

//전화번호 확인
function m_telcheck(){
	var m_tel1 = modifyform.m_tel1.value;
	var result2 = document.getElementById("resultm2");

	if(modifyform.m_tel1.value.length == 3 ) {
		modifyform.m_tel2.focus();
	}

	if(modifyform.m_tel2.value.length == 4 ) {
		modifyform.m_tel3.focus();
	}

	if(!modifyform.m_tel1.value
			&& !modifyform.m_tel2.value
			&& !modifyform.m_tel3.value) {
		result2.innerHTML = "전화번호를 입력해주세요";
	}

	if(modifyform.m_tel1.value
			&& modifyform.m_tel2.value
			&& modifyform.m_tel3.value) {
		result2.innerHTML = "";
	}
	
	if(modifyform.m_tel1.value !=0){
		var String = modifyform.m_tel1.value;
		var len = String.length;
		var str = "0123456789";
		for(i=0; i<len; i++){
			if(str.indexOf(String.charAt(i)) == -1){
				result2.innerHTML = telnumbererror;
				return false;
				break;
			}
		}
	}

	if(modifyform.m_tel2.value !=0){
		var String = modifyform.m_tel2.value;
		var len = String.length;
		var str = "0123456789";
		for(i=0; i<len; i++){
			if(str.indexOf(String.charAt(i)) == -1){
				result2.innerHTML = telnumbererror;
				return false;
				break;
			}
		}
	}

	if(modifyform.m_tel3.value !=0){
		var String = modifyform.m_tel3.value;
		var len = String.length;
		var str = "0123456789";
		for(i=0; i<len; i++){
			if(str.indexOf(String.charAt(i)) == -1){
				result2.innerHTML = telnumbererror;
				return false;
				break;
			}
		}
	}

	if(modifyform.m_tel1.value 
			|| modifyform.m_tel2.value 
			|| modifyform.m_tel3.value ) {
		if( modifyform.m_tel1.value.length < 2 
				|| modifyform.m_tel2.value.length < 3 
				|| modifyform.m_tel3.value.length < 4 ) {
			result2.innerHTML = "전화번호를 모두 입력해주세요";
			return false;
		}
	}
}

//이메일 확인
function m_emailcheck(){
	var m_email1 = modifyform.m_email1.value;
	modifyform.verty.value = "0";
	var result3 = document.getElementById("resultm3");
	
	if(!modifyform.m_email1.value && !modifyform.m_email2.value) {
		result3.innerHTML = noemailerror;
	}
	
	if(modifyform.m_email1.value && !modifyform.m_email2.value) {
		result3.innerHTML = emailerror;
	}
	
	if(!modifyform.m_email1.value && modifyform.m_email2.value) {
		result3.innerHTML = emailerror;
	}
	
	if(modifyform.m_email1.value && modifyform.m_email2.value) {
		if(modifyform.m_email1.value.indexOf("@") != -1) {
			result3.innerHTML = emailerror;
		}else if(modifyform.m_email2.value.indexOf("@") != -1) {
			result3.innerHTML = emailerror;
		}else {
			result3.innerHTML = "";
		}
	}
}

function m_sendemail(){
	if(!modifyform.m_email1.value && !modifyform.m_email2.value) {
		alert(noemailerror);
	}
	
	if(modifyform.m_email1.value && !modifyform.m_email2.value) {
		alert(emailerror);
	}
	
	if(!modifyform.m_email1.value && modifyform.m_email2.value) {
		alert(emailerror);
	}
	
	if(modifyform.m_email1.value && modifyform.m_email2.value) {
		if(modifyform.m_email1.value.indexOf("@") != -1) {
			alert(emailerror);
		}else if(modifyform.m_email2.value.indexOf("@") != -1) {
			alert(emailerror);
		}else {
			var String = modifyform.m_email1.value + "@" + modifyform.m_email2.value;
			var url = "memberModisendEmail.do?m_email=" + String;
			open(url,"emailwindow", "statusbar=no, scrollbar=no, menubar=no, width=400px, height=200px");
		}
	}
}

function m_setAuthNum(){
	opener.document.modifyform.authnum.value = modisendemailform.authnum.value;
	opener.document.modifyform.verty.value = "0";
	opener.document.modifyform.emailnum.focus();
	var result4 = opener.document.getElementById("resultm4");
	result4.innerHTML = "인증번호를 입력해주세요";
	self.close();
}

function m_emailnumc(){
	var emailnum = modifyform.emailnum.value;
	var resultm4 = document.getElementById("resultm4");
	if(modifyform.authnum.value != modifyform.emailnum.value){
		resultm4.innerHTML = "인증번호가 다릅니다";
	}else if(modifyform.authnum.value == modifyform.emailnum.value){
		modifyform.verty.value = "1";
		resultm4.innerHTML = "이메일 인증이 완료되었습니다";
		$("input[name='m_email1']").attr("readonly",true);
	}
}

//수정 버튼 눌렀을때
function modifycheck(){
	
	if(!modifyform.m_pw.value) {
		alert("비밀번호를 입력해주세요.");
		return false;
	}

	if(!modifyform.m_repasswd.value) {
		alert("비밀번호 확인을 해주세요.");
		return false;
	}

	if(modifyform.m_pw.value != modifyform.m_repasswd.value) {
		alert("비밀번호 확인을 해주세요.");
		return false;
	}
	
	if(!modifyform.m_tel1.value
			&& !insertform.m_tel2.value
			&& !insertform.m_tel3.value) {
		alert("전화번호를 입력해주세요.");
		return false;
	}

	if(modifyform.m_tel1.value 
			|| modifyform.m_tel2.value 
			|| modifyform.m_tel3.value ) {
		if(modifyform.m_tel1.value.length < 2 
				|| modifyform.m_tel2.value.length < 3 
				|| modifyform.m_tel3.value.length < 4 ) {
			alert("전화번호를 모두 입력해주세요.");
			return false;
		}
	}
	
	if(modifyform.m_tel1.value !=0){
		var String = modifyform.m_tel1.value;
		var len = String.length;
		var str = "0123456789";
		for(i=0; i<len; i++){
			if(str.indexOf(String.charAt(i)) == -1){
				alert(telnumbererror);
				return false;
				break;
			}
		}
	}

	if(modifyform.m_tel2.value !=0){
		var String = modifyform.m_tel2.value;
		var len = String.length;
		var str = "0123456789";
		for(i=0; i<len; i++){
			if(str.indexOf(String.charAt(i)) == -1){
				alert(telnumbererror);
				return false;
				break;
			}
		}
	}

	if(modifyform.m_tel3.value !=0){
		var String = modifyform.m_tel3.value;
		var len = String.length;
		var str = "0123456789";
		for(i=0; i<len; i++){
			if(str.indexOf(String.charAt(i)) == -1){
				alert(telnumbererror);
				return false;
				break;
			}
		}
	}
	
	if(modifyform.verty.value != 1) {
		alert(verifyerror);
		return false;
	}
}


function moemail(){
	modifyform.verty.value = "1";
	if(!modifyform.m_email1.value && !modifyform.m_email2.value) {
		modifyform.verty.value = "0";
	}
}
function modifyemail() {
	insertform.verty.value = "1";
}



/* 관리자 수정 */

//관리자가 회원 아이디삭제
function admindelete(){
	var url = "adminDelete.do";
	open(url,"deletewindow",
	"statusbar=no, scrollbar=no, menubar=no, width=400px, height=130px");   
}

function selete(){
	if(admindelform.m_id.value == 0){
		alert(iderror);
		admindelform.m_id.focus();
		return false;
	}
}



function findemail(){
	var url = "";
	if( !memberpwfind.m_pfemail1.value && (memberpwfind.m_pfemail2.value == "0") ){
		alert( emailerror );
		memberpwfind.m_pfemail1.focus();
		return;
	}else if( memberpwfind.m_pfemail1.value.length != 0 ) {
		if( memberpwfind.m_pfemail2.value == "0" ) {
			// 직접입력
			if( memberpwfind.m_pfemail1.value.indexOf( "@" ) == -1 ) {
				alert( emailerror );
				memberpwfind.m_pfemail1.focus();
				return;
			}
			url = "memberFindSendEmail.do?m_email=" + memberpwfind.m_pfemail1.value + "&m_pw=" + memberpwfind.m_pw.value;
		} else {
			// 선택입력
			if( memberpwfind.m_pfemail1.value.indexOf( "@" ) != -1 ) {
				alert( emailerror );
				memberpwfind.m_pfemail1.focus();
				return;
			}
			url = "memberFindSendEmail.do?m_email=" + memberpwfind.m_pfemail1.value 
			+ "@" + memberpwfind.m_pfemail2.value + "&m_pw=" + memberpwfind.m_pw.value;
		}      
	}   
	open(url,"emailwindow",
	"statusbar=no, scrollbar=no, menubar=no, width=400px, height=200px");
}

function findfocus(){
	memberfind.m_name.focus();
}

function memberfindcheck(){
	if(!memberfind.m_name.value){
		alert(nameerror);   
		memberfind.m_name.focus;
		return false;
	}
	else if(!memberfind.m_femail1.value){
		alert(noemail);
		memberfind.m_femail1.focus;
		return false;
	}
}

function modifyemail() {
	insertform.verty.value = "1";
}

function setfindAuthNum(){
	/*opener.document.memberpwfind.m_pw.value = findsendemail.m_pw.value;
   opener.document.memberpwfind.verty.value = "0";*/
	opener.document.location.replace('memberLoginForm.do');
	self.close();
}



//다음 우편 api 사용 스크립트
function addresscheck() {
	new daum.Postcode({
		oncomplete: function(data) {
			// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

			// 각 주소의 노출 규칙에 따라 주소를 조합한다.
			// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
			var fullAddr = ''; // 최종 주소 변수
			var extraAddr = ''; // 조합형 주소 변수

			// 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
			if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
				fullAddr = data.roadAddress;

			} else { // 사용자가 지번 주소를 선택했을 경우(J)
				fullAddr = data.jibunAddress;
			}

			// 사용자가 선택한 주소가 도로명 타입일때 조합한다.
			if(data.userSelectedType === 'R'){
				//법정동명이 있을 경우 추가한다.
				if(data.bname !== ''){
					extraAddr += data.bname;
				} 
				// 건물명이 있을 경우 추가한다.
				if(data.buildingName !== ''){
					extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
				}
				// 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
				fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
			}

			// 우편번호와 주소 정보를 해당 필드에 넣는다.
			document.getElementById('sample6_postcode').value = data.zonecode; //5자리 새우편번호 사용
			document.getElementById('sample6_address').value = fullAddr;

			// 커서를 상세주소 필드로 이동한다.
			document.getElementById('sample6_address2').focus();
			document.getElementById('sample6_address2').value = "";
		}
	}).open();
}


/**
 * 
 * 예매확인
 * 
 */

function order(s_id,date){
	$('#nav').remove();
	$('#o').empty();
	$('#a').empty();
	var a = "<b><a style='color:#e55d87' onclick=\"endinfo('"+s_id+"','"+date+"')\">지난공연</a></b>";
	$('#a').append(a);
	$.ajax(
			{
				type: "POST",
				url : "listinfo.do",
				data : {
					s_id : s_id,
					date : date
				},
				dataType : 'text',
				success : function(data){
					if (data == "") {
						return;
					}
					var result = eval("(" + data + ")");

					if(result.data[0].title != "fs"){

						for(var i = 0; i<result.data.length; i++){

							var tb = "<ui><div onclick=\"location.href='infoContent.do?num="+result.data[i].i_num+"\'\"><form id='order"+i+"'>"+
							"<table>"+
							"<tr>"+
							"<td style='width:250px;'rowspan='6'><div id='img"+i+"'></div></th>"+
							"<td style='width:100px;'><h1 style='font-size:18px'>제목</h1></td>"+
							"<td style='width:350px;'><h1 style='font-size:18px'>"+result.data[i].title+"</h1></td>"+
							"<td rowspan='6'><div id='qr"+i+"'style='width:180px; height:180px; border:1px dashed rgba(164, 164, 164, 1);'></div></td>"+
							"</tr>"+
							"<tr>"+
							"<td><h1 style='font-size:18px'>공연날짜</h1></td>"+
							"<td><h1 style='font-size:18px'>"+result.data[i].date+"</h1></td>"+
							"<td></td>"+
							"</tr>"+
							"<tr>"+
							"<td><h1 style='font-size:18px'>공연시간</h1></td>"+
							"<td><h1 style='font-size:18px'>"+result.data[i].time+"</h1></td>"+
							"<td></td>"+
							"</tr>"+
							"<tr>"+
							"<td><h1 style='font-size:18px'>선택좌석</h1></td>"+
							"<td>"+
							"<h1 id='seat"+i+"' style='font-size:18px'></h1>"+
							"</td>"+
							"<td></td>"+
							"</tr>"+
							"<tr>"+
							"<td><h1 style='font-size:18px'>가격</h1></td>"+
							"<td><h1 style='font-size:18px'>"+result.data[i].price+"</h1></td>"+
							"<td></td>"+
							"</tr>"+
							"<tr>"+
							"<td><h1 style='font-size:18px'>결제수단</h1></td>"+
							"<td><h1 style='font-size:18px'>"+result.data[i].pay+"</h1></td>"+
							"<td></td>"+
							"</tr>"+
							"</table>"+   
							"</form>"+
							"<div class='block' style='margin-bottom:30px'></div></div></ui>";

							$('#o').append(tb);

							seat(result.data[i].title,result.data[i].date,result.data[i].time,result.data[i].price,result.data[i].seatlist,i);
							img(result.data[i].title,i);

						}
						paging(result.data.length);

					}else{
						var ap = "<ui><div style='text-align:center; font-size:18px'>예매내역 정보가 없습니다.<br>예매해주시기바랍니다." +
						"</div><div class='block' style='margin-top:45px'></ui>";
						$('#o').append(ap);
					}
				},
				error : function(e) {
					$('#result').html(e);
				}
			}		
	);

}



function endinfo(s_id,date){
	$('#nav').remove();
	$('#o').empty();
	$('#a').empty();
	var a = "<b><a style='color:#e55d87' onclick=\"order('"+s_id+"','"+date+"')\">예정공연</a></b>";
	$('#a').append(a);
	$.ajax(
			{
				type: "POST",
				url : "endlistinfo.do",
				data : {
					s_id : s_id,
					date : date
				},
				dataType : 'text',
				success : function(data){
					if (data == "") {
						return;
					}
					var result = eval("(" + data + ")");

					if(result.data[0].title != "fs"){

						for(var i = 0; i<result.data.length; i++){
							var tb = "<ui><div onclick=\"location.href='infoContent.do?num="+result.data[i].i_num+"\'\"><form id='order"+i+"'>"+
							"<table>"+
							"<tr>"+
							"<td style='width:250px;'rowspan='6'><div id='img"+i+"'></div></th>"+
							"<td style='width:100px;'><h1 style='font-size:18px'>제목</h1></td>"+
							"<td style='width:350px;'><h1 style='font-size:18px'>"+result.data[i].title+"</h1></td>"+
							"<td rowspan='6'><div id='qr"+i+"'style='width:180px; height:180px; border:1px dashed rgba(164, 164, 164, 1);'></div></td>"+
							"</tr>"+
							"<tr>"+
							"<td><h1 style='font-size:18px'>공연날짜</h1></td>"+
							"<td><h1 style='font-size:18px'>"+result.data[i].date+"</h1></td>"+
							"<td></td>"+
							"</tr>"+
							"<tr>"+
							"<td><h1 style='font-size:18px'>공연시간</h1></td>"+
							"<td><h1 style='font-size:18px'>"+result.data[i].time+"</h1></td>"+
							"<td></td>"+
							"</tr>"+
							"<tr>"+
							"<td><h1 style='font-size:18px'>선택좌석</h1></td>"+
							"<td>"+
							"<h1 id='seat"+i+"' style='font-size:18px'></h1>"+
							"</td>"+
							"<td></td>"+
							"</tr>"+
							"<tr>"+
							"<td><h1 style='font-size:18px'>가격</h1></td>"+
							"<td><h1 style='font-size:18px'>"+result.data[i].price+"</h1></td>"+
							"<td></td>"+
							"</tr>"+
							"<tr>"+
							"<td><h1 style='font-size:18px'>결제수단</h1></td>"+
							"<td><h1 style='font-size:18px'>"+result.data[i].pay+"</h1></td>"+
							"<td></td>"+
							"</tr>"+
							"</table>"+   
							"</form>"+
							"<div class='block' style='margin-bottom:30px'></div></div></ui>";

							$('#o').append(tb);

							seat(result.data[i].title,result.data[i].date,result.data[i].time,result.data[i].price,result.data[i].seatlist,i);
							img(result.data[i].title,i);

						}
						paging(result.data.length);
					}else{
						var ap = "<ui><div style='text-align:center; font-size:18px'>지난공연이 없습니다." +
						"</div><div class='block' style='margin-top:45px'></ui>";
						$('#o').append(ap);
					}
				},
				error : function(e) {
					$('#result').html(e);
				}
			}		
	);

}


function sleep(num){
	var now = new Date();
	var stop = now.getTime() + num;
	while(true){
		now = new Date();
		if(now.getTime() > stop)return;
	}
}

function seat(title,date,time,price,seatlist,i){
	var s11='';
	var seat = seatlist.split(',');
	for(var j = 0; j<seat.length; j++){
		var s = seat[j];
		$.ajax(
				{
					type: "POST",
					url : "oseatname.do",
					data : {
						s : s
					},
					dataType : 'text',
					success : function(data){
						if (data == "") {
							return;
						}
						var result = eval("(" + data + ")");
						var sn = result.data[0].seatname + "<br>";
						$('#seat'+i).append(sn);

						s11 += result.data[0].seatname + ", ";
						qr(title,date,time,price,s11,i);
					},
					error : function(e) {
						$('#result').html(e);
					}
				}		
		);
	}

}


function img(title,i){
	$.ajax(
			{
				type: "POST",
				url : "imgsrc.do",
				data : {
					title : title
				},
				dataType : 'text',
				success : function(data){
					if (data == "") {
						return;
					}
					var result = eval("(" + data + ")");
					var ig = "<img style='width:180px; height:240px;' src='/itshow/upload/"+result.data[0].imgsrc+"' border='0'>"
					$('#img'+i).append(ig);
				},
				error : function(e) {
					$('#result').html(e);
				}
			}		
	);
}


function qr(title,date,time,price,s,i){
	//구글API URL
	var s12 = s.slice(0,-2);
	var gqrapi = "http://chart.apis.google.com/chart?cht=qr&chs=144x144&choe=UTF-8&chld=H|0";
	var text = "제목  : "+title+"\n날짜 : " + date+ "\n시간 : "+ time + "\n가격 : "+price + "\n좌석 : "+s12;
	//$text = "dd";
	var imgsrc = gqrapi+"&chl="+encodeURIComponent(text); //입력 데이터 인코딩해서 구글 API에 파라메터로 붙이고...
	//이미지 객체를 생성해서 구글API URL을 "src="로 지정
	var img = new Image();

	$(img).on('load', function (){
		var $this = $(this);
		$this.hide();
		$("#qr"+i).empty().append(this); //<div></div>에 이미지 객체를 덧붙이고...
		$this.fadeIn();
	}).attr({"src" : imgsrc, "width" : 178, "height" : 178, "alt" : "QR CODE: "+$("#text").val()}); //이미지 객체의 속성 지정 "src"에 구글API URL 지정
}


function paging(size){
	var $setRows = $('#orderlsit');

	$setRows
	.submit(function(e) {
		e.preventDefault();
		var rowPerPage = 3 * 1;// 1 을  곱하여 문자열을 숫자형로 변환


		$('#nav').remove();

		var $products = $('#o');

		$products.after('<div id="nav">');

		var $tr = $($products).find('ui');
		//var rowTotals = $tr.length;
		var rowTotals = size;

		var pageTotal = Math.ceil(rowTotals / rowPerPage);
		var i = 0;

		for (; i < pageTotal; i++) {
			$('<a href="#"></a>').attr('rel', i).html(i + 1).appendTo(
			'#nav');
		}

		$tr.addClass('off-screen').slice(0, rowPerPage).removeClass(
		'off-screen');
		var $pagingLink = $('#nav a');
		$pagingLink.on('click', function(evt) {
			evt.preventDefault();
			var $this = $(this);
			if ($this.hasClass('active')) {
				return;
			}
			$pagingLink.removeClass('active');
			$this.addClass('active');

			// 0 => 0(0*4), 4(0*4+4)
			// 1 => 4(1*4), 8(1*4+4)
			// 2 => 8(2*4), 12(2*4+4)
			// 시작 행 = 페이지 번호 * 페이지당 행수
			// 끝 행 = 시작 행 + 페이지당 행수

			var currPage = $this.attr('rel');
			var startItem = currPage * rowPerPage;
			var endItem = startItem + rowPerPage;

			$tr.css('opacity', '0.0').addClass('off-screen').slice(
					startItem, endItem).removeClass('off-screen')
					.animate({
						opacity : 1
					}, 300);

		});

		$pagingLink.filter(':first').addClass('active');

	});

	$setRows.submit();
}


/*
 * *****************************************************************************************
 * 메일발송
 * */

function qr2(title,date,time,price,s){
	//구글API URL
	var s12 = s.slice(0,-1);
	var gqrapi = "http://chart.apis.google.com/chart?cht=qr&chs=144x144&choe=UTF-8&chld=H|0";
	var text = "제목  : "+title+"\n날짜 : " + date+ "\n시간 : "+ time + "\n가격 : "+price + "\n좌석 : "+s12;
	var qrsrc = gqrapi+"&chl="+encodeURIComponent(text); //입력 데이터 인코딩해서 구글 API에 파라메터로 붙이고...
	return qrsrc;
}

function sendM(){
	if(confirm("메일을 보내시겠습니까?")){
		$.ajax(
				{
					type: "POST",
					url : "sendmailList.do",
					success : function(data){
						if (data == "") {
							return;
						}
						var result = eval("(" + data + ")");
						if(result.data[0].title != "error:noCount"){
							for(var i=0; i<result.data.length; i++){


								var qrsrc = qr2(result.data[i].title,result.data[i].date,result.data[i].time,result.data[i].price,result.data[i].seatlist)

								var sl = result.data[i].seatlist.slice(0,-1);

								var email = result.data[i].email;
								var content = "<div style='margin-left:200px;'><br> <h2 style='color:#e55d87'> "+result.data[i].id+" 님 즐거운 공연 되시기 바랍니다. </h2>" +
								"<div style='width:1000px;height: 2px; background: #e55d87;" +
								"background: -moz-linear-gradient(-45deg, #e55d87 0%, #5fc3e4 100%);" +
								"background: -webkit-linear-gradient(-45deg, #e55d87 0%, #5fc3e4 100%);" +
								"background: linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%);'>" +
								"</div><br><br>"+
								"<form style='margin-left:50px;'>"+
								"<table>"+
								"<tr>"+
								"<td style='width:250px;'rowspan='6'><div><img style='width:180px; height:240px;' src=\"cid:image1\"></div></th>"+
								"<td style='width:100px;'><h1 style='font-size:18px'>제목</h1></td>"+
								"<td style='width:350px;'><h1 style='font-size:18px'>"+result.data[i].title+"</h1></td>"+
								"<td rowspan='6'><div style='width:180px; height:180px; border:1px dashed rgba(164, 164, 164, 1);'><img style='width:178px; height:178px;'src="+qrsrc+"></div></td>"+
								"</tr>"+
								"<tr>"+
								"<td><h1 style='font-size:18px'>공연날짜</h1></td>"+
								"<td><h1 style='font-size:18px'>"+result.data[i].date+"</h1></td>"+
								"<td></td>"+
								"</tr>"+
								"<tr>"+
								"<td><h1 style='font-size:18px'>공연시간</h1></td>"+
								"<td><h1 style='font-size:18px'>"+result.data[i].time+"</h1></td>"+
								"<td></td>"+
								"</tr>"+
								"<tr>"+
								"<td><h1 style='font-size:18px'>선택좌석</h1></td>"+
								"<td>"+
								"<h1 style='font-size:18px'>"+sl+"</h1>"+
								"</td>"+
								"<td></td>"+
								"</tr>"+
								"<tr>"+
								"<td><h1 style='font-size:18px'>가격</h1></td>"+
								"<td><h1 style='font-size:18px'>"+result.data[i].price+"</h1></td>"+
								"<td></td>"+
								"</tr>"+
								"</table>"+   
								"</form><br><br>"+
								"<div style='width:1000px;height: 2px; background: #e55d87;" +
								"background: -moz-linear-gradient(-45deg, #e55d87 0%, #5fc3e4 100%);" +
								"background: -webkit-linear-gradient(-45deg, #e55d87 0%, #5fc3e4 100%);" +
								"background: linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%);'>" +
								"</div></div>";
								Smail(email,content,result.data[i].src,result.data[i].o_num,result.data[i].count);

							}

						}else{
							alert("전송할 메일이 없습니다.")
						}
					},
					error : function(e) {
						$('#result').html(e);
					}
				}		
		);
	}
}

var ct;
function Smail(email,content,imgsrc,o_num,count){
	ct = count;
	$.ajax(
			{
				type: "POST",
				url : "ordersendmail.do",
				data : {
					email : email,
					content : content,
					imgsrc : imgsrc,
					o_num : o_num
				},
				dataType : 'text',
				success : function(data){
					if (data == "") {
						return;
					}
					var result = eval("(" + data + ")");
					if(result.data[0].status != "fs"){
						ct--;
						var elem = document.getElementById("myBar"); 
						var width = 1;
						$('#sm').val("("+ct+") 명 메일 발송");
						var id = setInterval(frame, 10);
						function frame() {
							if (width >= 100) {
								clearInterval(id);
							} else {
								width++; 
								elem.style.width = width + '%'; 
							}
						}

					}

				},
				error : function(e) {
					$('#result').html(e);
				}
			}		
	);
}

function mail(){
	$.ajax(
			{
				type: "POST",
				url : "getcount.do",
				success : function(data){
					if (data == "") {
						return;
					}
					var result = eval("(" + data + ")");
					if(result.data[0].count != "error:noCount"){
						var c = result.data[0].count;
						$('#sm').val("("+c+") 명 메일 발송");
					}else{
						var c = 0;
						$('#sm').val("("+c+") 명 메일 발송");
					}
				},
				error : function(e) {
					$('#result').html(e);
				}
			}		
	);
	newchat();
}

function newchat() {
	$.ajax(
			{
				type: "POST",
				url : "chatNewChatCount.do",
				success : function(data){
					var result = eval("(" + data + ")");
					$('#chat').val("(" + result.count + ") " + $('#chat').val());
				},
				error : function(e) {
					$('#result').html(e);
				}
			}		
	);
}

function Listpaging(){
	var $setRows = $('#orderlist');

	$setRows
	.submit(function(e) {
		e.preventDefault();
		var rowPerPage = 5 * 1;// 1 을  곱하여 문자열을 숫자형로 변환(보여주는 갯수)

		$('#nav').remove();

		var $products = $('#products');

		$products.after('<div id="nav">');

		var $tr = $($products).find('tbody tr');
		var rowTotals = $tr.length;
		//var rowTotals = size;

		var pageTotal = Math.ceil(rowTotals / rowPerPage);
		var i = 0;

		for (; i < pageTotal; i++) {
			$('<a href="#"></a>').attr('rel', i).html(i + 1).appendTo(
			'#nav');
		}

		$tr.addClass('off-screen').slice(0, rowPerPage).removeClass(
		'off-screen');
		var $pagingLink = $('#nav a');
		$pagingLink.on('click', function(evt) {
			evt.preventDefault();
			var $this = $(this);
			if ($this.hasClass('active')) {
				return;
			}
			$pagingLink.removeClass('active');
			$this.addClass('active');

			// 0 => 0(0*4), 4(0*4+4)
			// 1 => 4(1*4), 8(1*4+4)
			// 2 => 8(2*4), 12(2*4+4)
			// 시작 행 = 페이지 번호 * 페이지당 행수
			// 끝 행 = 시작 행 + 페이지당 행수

			var currPage = $this.attr('rel');
			var startItem = currPage * rowPerPage;
			var endItem = startItem + rowPerPage;

			$tr.css('opacity', '0.0').addClass('off-screen').slice(
					startItem, endItem).removeClass('off-screen')
					.animate({
						opacity : 1
					}, 300);

		});

		$pagingLink.filter(':first').addClass('active');

	});

	$setRows.submit();
}