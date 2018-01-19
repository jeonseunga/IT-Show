<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<title>It Show</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
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
						<h1>공연게시물삭제</h1>
						<div class="block"></div>
						<form method="post" name="infoDeleteForm" 
							action="infoDeletePro.do">
							<input type="hidden" name="num" value="${i_num}">
							<input type="hidden" name="m_code" value="${m_code}">
							<input type="hidden" name="title" value="${title}">
							<div align="center">
								글을 삭제 하시겠습니까?<br><br><br>
								<input class="button-primary" type="submit" value="네">
								<input class="button-primary" type="button" value="아니요"
									onclick="location='infoContent.do?num=${i_num}'">
							</div>
						</form>
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