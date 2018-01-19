<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<script src="/itshow/js/qna.js"></script>
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
						<c:if test="${result == 1}">
							<c:redirect url="qnaContent.do?pageNum=${pageNum}&num=${num}&number=${number+1}"></c:redirect>
						</c:if>
						<c:if test="${result != 1}">
							<h1>${page}</h1>
							<div class="block"></div>
							<form method="post" name="qnaContentForm" 
								action="qnaContent.do" onsubmit="return qnacontentcheck()">
								<input type="hidden" name="num" value="${num}">
								<input type="hidden" name="pageNum" value="${pageNum}">
								<input type="hidden" name="number" value="${number}">
								<input type="hidden" name="writer" value="${id}">
								<input type="hidden" name="passwd" value="${pw}">
								<div align="center">
									<img src="${project}/images/lock.png" width="80px"><br>
									${msg_confirm}<br><br>
									<input type="password" name="pw" style="border: 1px dashed rgba(164, 164, 164, 1);"><br>
									<input type="submit" value="${btn_ok}">
									<input type="button" value="${btn_cancel}"
										onclick="location='qnaList.do?pageNum=${pageNum}'">
								</div>
							</form>
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