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
							<table style="margin-right: auto; margin-left: auto; width: 940px">
								<tr style="border:1px dashed rgba(164, 164, 164, 1);">
									<th style="width: 8%; border:1px dashed rgba(164, 164, 164, 1);">${str_num}</th>
									<th style="width: 60%; border:1px dashed rgba(164, 164, 164, 1);">${str_title}</th>
									<th style="width: 15%; border:1px dashed rgba(164, 164, 164, 1);">${str_writer}</th>
									<th style="width: 15%; border:1px dashed rgba(164, 164, 164, 1);">${str_date}</th>
								</tr>
								<c:if test="${count == 0}">
									<tr>
										<th colspan="5">
											<br>
											${msg_no_content}
										</th>
									</tr>
								</c:if>
								<c:if test="${count != 0}">
									<c:forEach var="qnaDto" items="${articles}">
										<tr>
											<td align="center">
												${number}
												<c:set var="number" value="${number-1}"/>
											</td>
											<td>
												<a href="qnaContentForm.do?pageNum=${pageNum}&num=${qnaDto.q_num}&number=${number+1}"
													style="margin-left:20px;">
													${qnaDto.q_title} (${qnaDto.r_count})
												</a>
											</td>
											<td align="center">
												${qnaDto.m_id}
											</td>
											<td align="center">
												<fmt:formatDate value="${qnaDto.q_date}" type="both" pattern="yyyy/MM/dd"/>
											</td>
										</tr>
									</c:forEach>
								</c:if>
							</table>
							<div align="right">
								<input type="button" value="${btn_write}" onclick="qnaMemberCheck('${sessionScope.memId}', '${sessionScope.comId}', '${sessionScope.adminId}',${pageNum})">
							</div>
							<div align="center">
								<c:if test="${count gt 0}">
									<c:if test="${startPage gt pageBlock}">
										<a href="qnaList.do">[◀◀]</a>
										<a href="qnaList.do?pageNum=${startPage-pageBlock}">[◀]</a>
									</c:if>
									<c:forEach var="i" begin="${startPage}" end="${endPage}">
										<c:if test="${i == currentPage}">
											<span>[${i}]</span>
										</c:if>
										<c:if test="${i != currentPage}">
											<a href="qnaList.do?pageNum=${i}">[${i}]</a>
										</c:if>
									</c:forEach>
									<c:if test="${pageCount gt endPage}">
										<a href="qnaList.do?pageNum=${startPage+pageBlock}">[▶]</a>
										<a href="qnaList.do?pageNum=${pageCount}">[▶▶]</a>
									</c:if>
								</c:if>
							</div>
							<br>
							<form method="post" name="qnaSearchForm"
								action="qnaSearchList.do" onsubmit="return qnasearchcheck()">
								<div align="center">
									<select name="select">
										 <option value="id">${str_writer}</option>
	  									 <option value="title">${str_title}</option>
									</select>
									<input type="text" name="keyword" style="border:1px dashed rgba(164, 164, 164, 1);">
									<input type="submit" value="${btn_search}">
								</div>
							</form>
						</div>
					</div>
				</section>
			</div>
			<div id="footer">
				<c:import url="/main/footer.jsp"/>
			</div>
		</div>
	</body>
</html>