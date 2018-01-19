<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
<head>
	<title>${page_Title}</title>
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
						<h1>${page_title_scarp}</h1>
						<div class="block"></div>
						<form method="post" name="scrapForm" 
							action="scrapPro.do">
							<input type="hidden" name="i_num" value="${i_num}">
							<div align="center">
								${msg_scarp}<br><br><br>
								<input class="button-primary" type="submit" value="${btn_yes}">
								<input class="button-primary" type="button" value="${btn_no}"
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