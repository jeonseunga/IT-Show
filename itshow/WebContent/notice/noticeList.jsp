<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="/itshow/css/style.css">
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
							<h1>${page_list}</h1>
							<div class="block"></div>
							<table style="margin-right: auto; margin-left: auto; width: 940px">
								<tr style="border:1px dashed rgba(164, 164, 164, 1);">
									<th style="width: 8%; border:1px dashed rgba(164, 164, 164, 1);">${str_number}</th>
									<th style="width: 60%; border:1px dashed rgba(164, 164, 164, 1);">${str_title}</th>
									<th style="width: 15%; border:1px dashed rgba(164, 164, 164, 1);">${str_writer}</th>
									<th style="width: 15%; border:1px dashed rgba(164, 164, 164, 1);">${str_day}</th>
								</tr>
								<c:if test="${count == 0}">
									<tr>
										<th colspan="5">
											<br>
											${msg_list_x}
										</th>
									</tr>
								</c:if>
								<c:if test="${count != 0}">
									<c:forEach var="noticeDto" items="${articles}">
										<tr>
											<td align="center">
												${number}
												<c:set var="number" value="${number-1}"/>
											</td>
											<td>
												<a href="noticeContent.do?pageNum=${pageNum}&num=${noticeDto.n_num}&number=${number+1}"
													style="margin-left:20px;">
													${noticeDto.n_title}
												</a>
											</td>
											<td align="center">
												${noticeDto.m_id}
											</td>
											<td align="center">
												<fmt:formatDate value="${noticeDto.n_date}" type="both" pattern="yyyy/MM/dd"/>
											</td>
										</tr>
									</c:forEach>
								</c:if>
							</table>
							<div align="right">
								<c:if test="${sessionScope.adminId != null}">
									<input type="button" value="Write" onclick="location='noticeWriteForm.do?pageNum=${pageNum}'">
								</c:if>
							</div>
							<div align="center">
								<c:if test="${count gt 0}">
									<c:if test="${startPage gt pageBlock}">
										<a href="noticeList.do">[◀◀]</a>
										<a href="noticeList.do?pageNum=${startPage-pageBlock}">[◀]</a>
									</c:if>
									<c:forEach var="i" begin="${startPage}" end="${endPage}">
										<c:if test="${i == currentPage}">
											<span>[${i}]</span>
										</c:if>
										<c:if test="${i != currentPage}">
											<a href="noticeList.do?pageNum=${i}">[${i}]</a>
										</c:if>
									</c:forEach>
									<c:if test="${pageCount gt endPage}">
										<a href="noticeList.do?pageNum=${startPage+pageBlock}">[▶]</a>
										<a href="noticeList.do?pageNum=${pageCount}">[▶▶]</a>
									</c:if>
								</c:if>
							</div>
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