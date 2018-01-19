<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
	<script src="${project}js/member.js"></script>
</head>
<body onload="inputfocus()">
	<div id="wrapper">
		<div id="header">
			<c:import url="/main/header.jsp" />
		</div>
		<div id="body">
			<section>
				<div class="container">
					<div class="row">
						<h1>일반 회원 가입</h1>
						<div class="block"></div>
						<div>
							<form method="post" name="insertform"
								action="memberInputPro.do" onsubmit="return inputcheck()">
								<input type="hidden" name="authnum" value="">
								<input type="hidden" name="verty" value="0">
								<input type="hidden" name="confirm" value="0">
								<input type="hidden" name="m_code" value="2">
								<div class="row" align="left">
									<label style="width:120px; text-align: center; display: inline-block">* ${id}</label>
									<input type="text" name="m_id" onkeyup="confirmid()" placeholder="아이디"
										style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);">
									<span id="result" style="font-size: 12px;">아이디를 입력해주세요</span>
								</div>
								<div class="row">
									<label style="width:120px; text-align: center; display: inline-block">* ${m_pw}</label>
									<input type="password" name="m_pw" onkeyup="pwcheck()" placeholder="비밀번호"
										style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);">
									<span id="result1" style="font-size: 12px;;">비밀번호를 입력해주세요</span>
									<br>
									<label style="width:120px; text-align: center; display: inline-block">* ${m_repw}</label>
									<input type="password" name="m_repasswd" onkeyup="repwcheck()" placeholder="비밀번호 확인"
										style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);">
									<span id="result2" style="font-size: 12px;">비밀번호 확인을 위해 입력해주세요</span>
								</div>
								<div class="row">
									<label style="width:120px; text-align: center; display: inline-block">* ${m_name}</label>
									<input type="text" name="m_name" onkeyup="namecheck()" placeholder="이름"
										style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);">
									<span id="result3" style="font-size: 12px;">이름을 입력해주세요</span>
								</div>
								<div class="row">
									<label style="width:120px; text-align: center; display: inline-block">* ${m_tel}</label>
									<input type="text" name="m_tel1" maxlength="3" onkeyup="telcheck()"
										style="width: 60px; border: 1px dashed rgba(164, 164, 164, 1);">
									- <input type="text" name="m_tel2" maxlength="4" onkeyup="telcheck()"
										style="width: 60px; border: 1px dashed rgba(164, 164, 164, 1);">
									- <input type="text" name="m_tel3" maxlength="4" onkeyup="telcheck()"
										style="width: 60px; border: 1px dashed rgba(164, 164, 164, 1);">
									<span id="result4" style="font-size: 12px;">전화번호를 입력해주세요</span>
								</div>
								<div class="row">
									<label style="width:120px; text-align: center; display: inline-block">${m_zipcode}</label>
									<input type="text" id="sample6_postcode" name="sample6_postcode"
										style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);" readonly>
									<input type="button" onclick="addresscheck()" value="${btn_code_search}">
									<br>
									<label style="width:120px; text-align: center; display: inline-block">${m_address}</label>
									<input type="text" id="sample6_address" name="sample6_address"
										style="width: 400px; border: 1px dashed rgba(164, 164, 164, 1);" readonly>
									<br>
									<label style="width:120px; text-align: center; display: inline-block"></label>
									<input type="text" id="sample6_address2" name="sample6_address2" placeholder="상세주소"
										style="width: 400px; border: 1px dashed rgba(164, 164, 164, 1);">
								</div>
								<div class="row">
									<label style="width:120px; text-align: center; display: inline-block">* ${m_email}</label>
									<input type="text" name="m_email1" maxlength="100" onkeyup="emailcheck()"
										style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);"> @ 
									<select name="m_email2" onchange="emailcheck()">
										<option value="0">직접입력</option>
										<option value="naver.com">네이버</option>
										<option value="daum.net">다음</option>
										<option value="nate.com">네이트</option>
										<option value="gmail.com">구글</option>
									</select>
									<input type="button" value="${btn_num_check}" onclick="sendemail()">
									<span id="result5" style="font-size: 12px;">이메일을 입력해주세요</span>
								</div>
								<div class="row">
									<label style="width:120px; text-align: center; display: inline-block">${m_emailnum}</label>
									<input type="text" name="emailnum" maxlength="7" onkeyup="emailnumc()" placeholder="인증번호"
										style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);">
									<span id="result6" style="font-size: 12px;"></span>
								</div>
								<div class="row" align="right">
									<input type="submit" value="${btn_input}">
									<input type="button" value="${btn_cancel}" 
										onclick="location='memberLoginForm.do'">
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
		<div id="footer">
			<c:import url="/main/footer.jsp" />
		</div>
	</div>
</body>
</html>