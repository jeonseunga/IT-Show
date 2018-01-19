<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>It Show</title>
		<script src="/itshow/js/info.js"></script>
		<link rel="stylesheet" href="/itshow/css/style.css">
		<script src="/itshow/js/jquery-3.2.1.js"></script>
		<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
	</head>
	<body onload="start()">
		<div id="wrapper">
			<div id="header">
				<c:import url = "/main/header.jsp"/>
			</div>
			<div id="body">
			<section>
				<div class="container">
					<div class="row">
						<c:if test="${check == 1}">
							<c:redirect url="compInfoList.do?m_code=3"/>
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