<%@page import="member.MemberDBBean"%> 
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ include file="setting.jsp" %>
<!DOCTYPE html>
<html>
<head>
	<script src="${project}js/member.js"></script>
</head>
<body>
	<div id="wrapper">
		<div id="header">
			<c:import url = "/main/header.jsp"/>
		</div>
		<div id="body">
			<section>
				<div class="container">
					<div class="row">
						<h1>비밀번호 찾기</h1>
						<div class="block"></div>
					
						<c:if test="${resultCheck != 1}">
							<div align="center">
								일치하는 정보가 없습니다
							</div>
						</c:if>
						<c:if test="${resultCheck == 1}">
							<div align="center">
								비밀번호를 찾았습니다!<br>
								메일로 전송하시려면 이메일을 입력해주세요.<br><br>
								<form method="post" name="memberpwfind"
									onsubmit="return memberfindcheck()">
									<div>
										<input type="hidden" name="m_pw" value="${memberDto.m_pw}">
									   	<label><b>E-mail</b></label>
										<input class="form-control" type="text" name="m_pfemail1" maxlength="100"
											style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);"
											onchange="findpemail()"/>@
										<select name=m_pfemail2  onchange="findpemail()">
											<option value="0">직접입력</option>
											<option value="naver.com">네이버</option>
											<option value="daum.net">다음</option>
											<option value="nate.com">네이트</option>
											<option value="gmail.com">구글</option> 
										</select>
									</div>
									<br>
									<div class="row" align="center">
										<input type="button" value="보내기" onclick="findemail()">
										<input type="button" value="취소" onclick="location='memberLoginForm.do'">
									</div>
						       </form>
					       </div>
						</c:if>
					</div>
				</div>
			</section>
		</div>
		<div id="footer">
			<c:import url = "/main/footer.jsp"/>
		</div>
	</div>
</body>
</html>






