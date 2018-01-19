<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<script src="/itshow/js/main.js"></script>
</head>
<body>
	<div id="wrapper">
		<div id="header">
			<c:import url = "header.jsp"/>
		</div>
		<div id="body">
			<section>
				<div class="container">
					<div class="row">
						<h1>고 객 센 터</h1>
						<div class="block"></div>
						<div align="center" style="margin-left: 23%; margin-top: 100px;">
							<a href="noticeList.do">
								<div class="three columns">
									<img style="width: 80px;" src="/itshow/images/notice.png"><br>
									<b>공지사항</b>
								</div>
							</a>
							<a href="qnaList.do">
								<div class="three columns">
									<img style="width: 80px;" src="/itshow/images/qna.png"><br>
									<b>문의사항</b>
								</div>
							</a>
							<c:if test="${sessionScope.adminId == null}">
							<a href="chatForm.do?send=admin" onclick="return membercheck('${sessionScope.memId}', '${sessionScope.comId}', '${sessionScope.adminId}')">
								<div class="three columns">
									<img style="width: 80px;" src="/itshow/images/chat.png"><br>
									<b>1:1 채팅</b>
								</div>
							</a>
							</c:if>
						</div>
					</div>
				</div>
			</section>
		</div>
		<div id="footer">
			<c:import url = "footer.jsp"/>
		</div>
	</div>
</body>
</html>