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
				<c:import url="/main/header.jsp"/>
			</div>
			<div id="body">
				<section>
					<div class="container">
						<div class="row">
							<h1>${page}</h1>
							<div class="block"></div>
							<form method="post" name="qnaModifyForm"
								action="qnaModifyPro.do" onsubmit="return qnamodifycheck()">
								<input type="hidden" name="num" value="${num}">
								<input type="hidden" name="pageNum" value="${pageNum}">
								<div class="row" style="margin-bottom:10px;">
									<div class="six columns">
										<label>${str_writer}</label><br>
										<label class="u-full-width"><b>${qnaDto.m_id}</b></label>
									</div>
								</div>
								<div class="row">
									<label>${str_title}</label><br>
									<input class="u-full-width" name="title" value="${qnaDto.q_title}" 
										style="border:1px dashed rgba(164, 164, 164, 1);">
								</div>
								<div class="row">
									<label>${page}</label>
									<textarea class="u-full-width" name="content"
										style="margin-top:10px; border:1px dashed rgba(164, 164, 164, 1);">${qnaDto.q_content}</textarea>
								</div>
								<div align="right">
									<input class="button-primary" type="submit" value="${btn_ok}">
									<input class="button-primary" type="button" value="${btn_cancel}"
										onclick="location='qnaContent.do?num=${qnaDto.q_num}&pageNum=${pageNum}'">
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