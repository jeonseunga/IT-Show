<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
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
						<c:if test="${result != 1}">
							<div style="text-align : center;">
								${msg_delete_failed}
							</div>
						</c:if>
						<c:if test="${result == 1}">
							<c:redirect url="qnaList.do?pageNum=${pageNum}"/>
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