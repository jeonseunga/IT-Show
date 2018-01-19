<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
						<h1>글삭제</h1>
						<div class="block"></div>
						<c:if test="${result != 1}">
							<div style="text-align : center;">
								글 삭제에 실패했습니다. 다시 시도해 주세요. ㅠ^ㅠ
							</div>
						</c:if>
						<c:if test="${result == 1}">
							<c:redirect url="compInfoList.do?title=${title}&m_code=${m_code}"/>
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