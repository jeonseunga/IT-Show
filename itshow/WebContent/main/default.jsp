<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<title>It Show</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="/itshow/css/style.css">
</head>
<body>
	<div id="wrapper">
		<div id="header">
			<c:import url = "header.jsp"/>
		</div>
		<div id="body">
			<h2> 기본 페이지 </h2>
			${result} <br>
		</div>
		<div id="footer">
			<c:import url = "footer.jsp"/>
		</div>
	</div>
</body>
</html>