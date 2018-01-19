<%@page import="member.MemberDBBean"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
<head>
<title>It Show</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/itshow/css/style.css">
<link rel="stylesheet"
	href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
<script src="${project}js/member.js"></script>
</head>
<body>
	<c:if test="${result ==0}">
		<h2 align="center">
			<br> 이메일 전송실패
		</h2>
		<div align="center">
			<input class="btn btn-info" type="button" value="${btn_close}"
				onclick="self.close()">
		</div>
	</c:if>
	<c:if test="${result !=0}">
		<form name="sendemailform">
			<input type="hidden" name="authnum" value="${authnum}">
			<br>
			<h2 align="center">
				이메일 전송완료
			</h2>
			<div align="center">
				<input class="btn btn-info" type="button" value="전송 완료"
					onclick="setAuthNum()">
			</div>
		</form>
	</c:if>
</body>
</html>