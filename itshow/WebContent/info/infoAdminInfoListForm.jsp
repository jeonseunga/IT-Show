<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<script src="/itshow/js/info.js"></script>
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
						<h1>${page_admin}</h1>
						<div class="block"></div>
						<form method="post" name="AdminListForm" 
							action="compInfoList.do" onsubmit="return AdminListFormcheck()">
							<input type="hidden" name="m_code" value="1">
							<div align="center">
								${msg_adm_from}<br><br><br>
								<input style="border:1px dashed rgba(164, 164, 164, 1);" type="text" name="title">
								<input class="button-primary" type="submit" value="${btn_find}">
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