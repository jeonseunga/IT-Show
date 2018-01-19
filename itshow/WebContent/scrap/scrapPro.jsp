<%@page import="scrap.ScrapDBBean"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<script src="/itshow/js/scrap.js"></script>
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
						<c:if test="${result == 0}">
							<div style="text-align : center;">
								${msg_scrap_pro_x}
							</div>
						</c:if>
						<c:if test="${result == -1}">
							<script type="text/javascript">
								<!--
									alert(er_scrap);
								//-->
							</script>
							<meta http-equiv="refresh" content="0; url=infoContent.do?num=${i_num}">
						</c:if>
						<c:if test="${result == 1}">
							<c:redirect url="infoContent.do?num=${i_num}"/>
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