<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="/itshow/css/style.css">
		<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
		<script src="${project}js/member.js"></script>
	</head>
	<body onload="modiformfocus()">
		<div id="wrapper">
			<div id="header">
				<c:import url="/main/header.jsp" />
			</div>
			<div id="body">
				<section>
					<div class="container">
						<div class="row">
							<h1>비밀번호 확인</h1>
							<div class="block"></div>
							<div class="row" align="center">${msg_deletecheck}<br><br>
								<form method="post" action="memberDeletePro.do">
									<div>
										<input type="text" name="m_pw"
											style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);">
									</div>
									<div>
										<input type="submit" value="${btn_ok}">
										<c:if test="${sessionScope.memId != null}">
											<input type="button" value="${btn_cancel}" onclick="location='memberCusMyPage.do'">
										</c:if>
										<c:if test="${sessionScope.comId != null}">
											<input type="button" value="${btn_cancel}" onclick="location='compMypage.do'">
										</c:if>
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