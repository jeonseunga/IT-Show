<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>${page_Title}</title>
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
						<h1>${page_title_scarp}</h1>
						<div class="block"></div>
						<form method="POST" name="scrap">
						<table style="margin-right: auto; margin-left: auto; width: 940px">
							<tr style="border:1px dashed rgba(164, 164, 164, 1);">
								<th style="width: 8%; border:1px dashed rgba(164, 164, 164, 1);">${str_num}</th>
								<th style="width: 15%; border:1px dashed rgba(164, 164, 164, 1);">${str_category}</th>
								<th colspan="2" style="width: 60%; border:1px dashed rgba(164, 164, 164, 1);">${str_title}</th>
								<th style="width: 15%; border:1px dashed rgba(164, 164, 164, 1);">${str_delete}</th>
							</tr>
							<c:if test="${count == 0}">
								<tr>
									<th colspan="4">
										<br>
										${msg_scarp_x}
									</th>
								</tr>
							</c:if>
							<c:if test="${count != 0}">
								<c:forEach var="scrapDto" items="${articles}">
									<tr>
										<td align="center">
											${number}
											<c:set var="number" value="${number-1}"/>
										</td>
										<td align="center">
											<c:if test="${scrapDto.s_info_category==1}">
												${str_concert}
											</c:if>
											<c:if test="${scrapDto.s_info_category==2}">
												${str_musical}
											</c:if>
											<c:if test="${scrapDto.s_info_category==3}">
												${str_drama}
											</c:if>
										</td>
										<td align="right">
											<a href = "infoContent.do?num=${scrapDto.s_info_num}">
												<img src="/itshow/upload/${scrapDto.s_img_path}" width="120" height="150" alt="" />
											</a>
										</td>
										<td>
											<a href = "infoContent.do?num=${scrapDto.s_info_num}">
												&nbsp;${scrapDto.s_name}
											</a>
										</td>
										<th>
											<input type="button" value="${btn_delete}" onclick="location='scrapDeleteForm.do?s_num=${scrapDto.s_num}&pageNum=${pageNum}'">
										</th>
									</tr>
								</c:forEach>
							</c:if>
						</table>
						</form>
						<div align="center">
							<c:if test="${count gt 0}">
								<c:if test="${startPage gt pageBlock}">
									<a href="scrapList.do">[◀◀]</a>
									<a href="scrapList.do?pageNum=${startPage-pageBlock}">[◀]</a>
								</c:if>
								<c:forEach var="i" begin="${startPage}" end="${endPage}">
									<c:if test="${i == currentPage}">
										<span>[${i}]</span>
									</c:if>
									<c:if test="${i != currentPage}">
										<a href="scrapList.do?pageNum=${i}">[${i}]</a>
									</c:if>
								</c:forEach>
								<c:if test="${pageCount gt endPage}">
									<a href="scrapList.do?pageNum=${startPage+pageBlock}">[▶]</a>
									<a href="scrapList.do?pageNum=${pageCount}">[▶▶]</a>
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