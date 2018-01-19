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
						<h1>${page}</h1>
						<div class="block"></div>
						<c:if test="${sessionScope.memId != null}">
							<c:set value="${sessionScope.memId}" var = "loginId"/>
						</c:if>
						<c:if test="${sessionScope.comId != null}">
							<c:set value="${sessionScope.comId}" var = "loginId"/>
						</c:if>
						<form method="post" name="qnaModifyForm" 
							action="qnaModifyView.do" onsubmit="return qnamodifywritercheck('${loginId}')">
							<input type="hidden" name="num" value="${num}">
							<input type="hidden" name="pageNum" value="${pageNum}">
							<input type="hidden" name="writer" value="${id}">
							<div align="center">
								${msg_modify}<br><br><br>
								<input class="button-primary" type="submit" value="${btn_ok}">
								<input class="button-primary" type="button" value="${btn_cancel}"
									onclick="location='qnaContent.do?num=${num}&pageNum=${pageNum}'">
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