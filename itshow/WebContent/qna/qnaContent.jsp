<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<script src="/itshow/js/qna.js"></script>
</head>
<body onload="listReply(${qnaDto.q_num})">
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
						<form method="post" name="qnaWriteForm"
							action="qnaWritePro.do">
							<div class="row" style="margin-bottom: 10px;">
								<div class="six columns">
									<label>${str_writer}</label><br>
									<label class="u-full-width"><b>${qnaDto.m_id}</b></label>
								</div>
							</div>
							<div class="row">
								<label>${str_title}</label><br>
								<div class="u-full-width" 
									style="margin-top: 10px; border: 1px dashed rgba(164, 164, 164, 1);">
									${qnaDto.q_title}
								</div>
							</div>
							<div class="row">
								<label>${page}</label>
								<div class="u-full-width" 
									style="margin-top: 10px; margin-bottom: 1.5rem; border: 1px dashed rgba(164, 164, 164, 1);">
									<pre>${qnaDto.q_content}</pre>
								</div>
							</div>
							<div align="right">
								<input class="button-primary" type="button" value="${btn_modify}"
									onclick="location='qnaModifyForm.do?num=${qnaDto.q_num}&pageNum=${pageNum}'">
								<input class="button-primary" type="button" value="${btn_delete}"
									onclick="location='qnaDeleteForm.do?num=${qnaDto.q_num}&pageNum=${pageNum}'">
								<input class="button-primary" type="button" value="${btn_list}"
									onclick="location='qnaList.do?pageNum=${pageNum}'">
							</div>
							<div class="block" style="margin-top: 10px; margin-bottom: 18px;"></div>
						</form>
						<form name="replyform">
							<div id="replylist"></div>
							<c:if test="${sessionScope.adminId == null && sessionScope.memId == null && sessionScope.comId == null}">
							</c:if>
							<c:if test="${sessionScope.adminId != null}">
								<div id="reply" class="row">
									<label>${str_writer}</label>
									<label class="u-full-width" name="id"><b>${sessionScope.adminId}</b></label>
									<input type="hidden" name="num" value="${qnaDto.q_num}">
									<textarea class="u-full-width" name="content"
										style="margin-top: 10px; border: 1px dashed rgba(164, 164, 164, 1);"></textarea>
								</div>
								<div align="right">
									<input type="button" value="${btn_ok}" onclick="writeReply('${qnaDto.q_num}')">
								</div>
							</c:if>
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