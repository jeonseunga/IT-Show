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
							<h1>${page_modi}</h1>
							<div class="block"></div>
							<form method="post" name="noticeModifyView"
								action="noticeModifyPro.do">
								<input type="hidden" name="num" value="${num}">
								<input type="hidden" name="pageNum" value="${pageNum}">
								<div class="row" style="margin-bottom:10px;">
									<div class="six columns">
									<a href="#" style="color:white;"></a>
										<label>${str_writer}</label><br>
										<label class="u-full-width">${noticeDto.m_id}${num}</label>
									</div>
								</div>
								<div class="row">
									<label>${str_title}</label><br>
									<input class="u-full-width" name="title"
										style="border:1px dashed rgba(164, 164, 164, 1);" value="${noticeDto.n_title}">
								</div>
								<div class="row">
									<label>${str_content}</label>
									<textarea class="u-full-width" name="content"
										style="margin-top:10px; border:1px dashed rgba(164, 164, 164, 1); min-height: 250px;">${noticeDto.n_content}</textarea>
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