<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/itshow/css/style.css">
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script src="${project}js/member.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="loginfocus()">
	<div id="wrapper">
		<div id="header">
			<c:import url="/main/header.jsp" />
		</div>
		<div id="body">
			<section>
				<div class="container">
					<div class="row">
						<h1>로그인</h1>
						<div class="block"></div>
						<div align="center">
							<form method="post" action="memberLoginPro.do" 
								name="loginform" onsubmit="return logincheck()">
								<div>
									<label style="width:80px; text-align: center; display: inline-block">아 이 디</label> 
									<input style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);"
										type="text" name="m_id"/>
								</div>
								<div>
									<label style="width:80px; text-align: center; display: inline-block">비밀번호</label>
									<input style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);"
										type="password" name="m_pw"/>
								</div>
								<div>
									<input type="submit" value="로그인">
									<input type="button" value="회원가입" onclick="location='memberRegisterForm.do'">
								</div>
								<div>
									<a href="memberIdFindForm.do" style="font-size:12px; color:blue;">아이디 찾기 </a>
									<a href="memberPwFindForm.do" style="font-size:12px; color:blue;">비밀번호 찾기 </a>
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