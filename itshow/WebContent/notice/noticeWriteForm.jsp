<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
							<h1>${page_insert}</h1>
							<div class="block"></div>
							<form method="post" name="noticeWriteForm"
								action="noticeWritePro.do">
								<div class="row" style="margin-bottom:10px;">
									<div class="six columns">
										<label>${str_writer}</label><br>
										<!-- ${m_id} --> 
										<label class="u-full-width">${sessionScope.adminId}</label>
									</div>
								</div>
								<div class="row">
									<label>${str_title}</label><br>
									<input class="u-full-width" name="title"
										style="border:1px dashed rgba(164, 164, 164, 1);">
								</div>
								<div class="row">
									<label>${str_content}</label>
									<textarea class="u-full-width" name="content"
										style="resize:none; margin-top:10px; border:1px dashed rgba(164, 164, 164, 1); min-height: 250px;"></textarea>
								</div>
								<div align="right">
									<input class="button-primary" type="submit" value="Submit">
									<input class="button-primary" type="button" value="Cancel"
										onclick="location='noticeList.do?pageNum=${pageNum}'">
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