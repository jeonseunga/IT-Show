<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
	<head>
<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="/itshow/css/style.css">
		<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
		<script src="${project}js/member.js"></script>
	</head>
	<body>
		<div id="wrapper">
			<div id="header">
				<c:import url="/main/header.jsp" />
			</div>
			<div id="body">
				<section>
					<div class="container">
						<div class="row">
							<h1>회원삭제</h1>
							<div class="block"></div>
							<div class="row" align="center">${msg_admindelete}<br><br>
								<form method="post" action="memberAdminDeletePro.do" name="memberadminDelete">
									<input type="hidden" name="m_id" value="${m_id}">
									<div>
										회원을 삭제하시겠습니까?<br><br>
										<input type="submit" value="${btn_ok} "onclick="history.go(-1)">
										<input type="button" value="${btn_cancel}" onclick="history.go(-1)">
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