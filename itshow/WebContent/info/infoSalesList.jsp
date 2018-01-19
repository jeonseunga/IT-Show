<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
<head>
	<title>It Show</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
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
						<h1>판 매 현 황</h1>
						<div class="block"></div>
						<table style="margin-right: auto; margin-left: auto; width: 980px;">
							<tr>
								<th style="width: 3%; border:1px dashed rgba(164, 164, 164, 1);">글번호</th>
								<th style="width: 5%; border:1px dashed rgba(164, 164, 164, 1);">카테고리</th>
								<th style="width: 25%; border:1px dashed rgba(164, 164, 164, 1);">공연제목</th>
								<th style="width: 13%; border:1px dashed rgba(164, 164, 164, 1);">기간</th>
								<th style="width: 8%; border:1px dashed rgba(164, 164, 164, 1);">등록일</th>
							</tr>
							<c:if test="${count == 0}">
								<tr>
									<th colspan="5">
										<br>
										등록하신 공연이 없습니다.
									</th>
								</tr>
							</c:if>
							<c:if test="${count != 0}">
								<c:forEach var="infos" items="${infos}">
									<tr>
										<td align="center">
											${number}
											<c:set var="number" value="${number-1}"/>
										</td>
										<td align="center">
											<c:if test="${infos.c_category == 1}">콘서트</c:if>
											<c:if test="${infos.c_category == 2}">뮤지컬</c:if>
											<c:if test="${infos.c_category == 3}">연 극</c:if>
										</td>
										<td align="center">
											<a href="infoSalesStatus.do?num=${infos.i_num}">${infos.i_name}</a>
										</td>
										<td align="center">
											${infos.i_period}
										</td>
										<td align="center">
											<fmt:formatDate value="${infos.i_reg_date}" type="both" pattern="yyyy/MM/dd"/>
										</td>
									</tr>
								</c:forEach>
							</c:if>
						</table>
						<div align="center">
							<c:if test="${count gt 0}">
								<c:if test="${startPage gt pageBlock}">
									<a href="infoSalesList.do">[◀◀]</a>
									<a href="infoSalesList.do?pageNum=${startPage-pageBlock}">[◀]</a>
								</c:if>
								<c:forEach var="i" begin="${startPage}" end="${endPage}">
									<c:if test="${i == currentPage}">
										<span>[${i}]</span>
									</c:if>
									<c:if test="${i != currentPage}">
										<a href="infoSalesList.do?pageNum=${i}">[${i}]</a>
									</c:if>
								</c:forEach>
								<c:if test="${pageCount gt endPage}">
									<a href="infoSalesList.do?pageNum=${startPage+pageBlock}">[▶]</a>
									<a href="infoSalesList.do?pageNum=${pageCount}">[▶▶]</a>
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