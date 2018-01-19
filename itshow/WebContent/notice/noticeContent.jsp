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
						<h1>${page_content}</h1>
						<div class="block"></div>
						<form method="post" name="qnaWriteForm" action="qnaWritePro.do">
							<div class="row" style="margin-bottom: 10px;">
								<div class="six columns">
									<label>${str_writer}</label><br>
									<label class="u-full-width"><b>${noticeDto.m_id}</b></label>
								</div>
							</div>
							<div class="row">
								<label>${str_title}</label><br>
								<div class="u-full-width" 
									style="margin-top: 10px; border: 1px dashed rgba(164, 164, 164, 1);">
									${noticeDto.n_title}
								</div>
							</div>
							<div class="row">
								<label>${str_content}</label>
								<div style="margin-top: 10px; margin-bottom: 1.5rem; border: 1px dashed rgba(164, 164, 164, 1);">
									<pre>${noticeDto.n_content}</pre>
								</div>
							</div>
							<div align="right">
								<c:if test="${sessionScope.adminId != null}">
									<input class="button-primary" type="button" value="Modify"
										onclick="location='noticeModifyForm.do?num=${noticeDto.n_num}&pageNum=${pageNum}'">
									<input class="button-primary" type="button" value="Delete"
										onclick="location='noticeDeleteForm.do?num=${noticeDto.n_num}&pageNum=${pageNum}'">
								</c:if>
								<input class="button-primary" type="button" value="List"
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