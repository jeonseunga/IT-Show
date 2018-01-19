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
						<h1>아이디/비밀번호 찾기</h1>
						<div class="block"></div>
						<%-- 
						<c:if test="${resultCheck == 1}">
							<c:if test="${result == 0}">
								<div style="text-align:center;">
							      	 일치하는 정보가 없습니다.
							    </div>
							</c:if>
							<c:if test="${result == 1}">
								<div style="text-align:center;">
							      	 아이디를 찾았습니다!
							    </div>
							    <div style="text-align:center;">
							      	${memberDto.m_id}
							    </div>
							</c:if>
						</c:if>
						<c:if test="${resultCheck == -1}">
							<div style="text-align:center;">
						          이메일이 일치하지 않습니다.
						    </div>
						</c:if> 
						--%>
						<c:if test="${resultCheck != 1}">
							<div align="center">
								일치하는 정보가 없습니다.
							</div>
						</c:if>
						<c:if test="${resultCheck == 1}">
							<div align="center">
								아이디를 찾았습니다!<br>
								${memberDto.m_id}<br><br>
								<input type="button" value="로그인" onclick="location='memberLoginForm.do'">
								<input type="button" value="비밀번호 찾기" onclick="location='memberPwFindForm.do'">
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






