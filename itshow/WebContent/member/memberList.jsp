<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
	<link rel="stylesheet" href="/itshow/css/style.css">
	<link rel="stylesheet" href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
    <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
	<script src="${project}js/member.js"></script>
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
						<h1>회원 리스트</h1>
						<div class="block"></div>
						<form>
						<input type="hidden" name="m_code" value="2">
						<table style="margin-right: auto; margin-left: auto; width: 940px">
						 
							<tr style="border:1px dashed rgba(164, 164, 164, 1);">
								<th style="width: 15%; border:1px dashed rgba(164, 164, 164, 1);">아이디</th>
								<th style="width: 10%; border:1px dashed rgba(164, 164, 164, 1);">이름</th>
								<th style="width: 60%; border:1px dashed rgba(164, 164, 164, 1);">주소</th>
								<th style="width: 15%; border:1px dashed rgba(164, 164, 164, 1);">전화번호</th>
							    
							</tr>
							
							<c:if test="${count != 0}">
								<c:forEach var="memberDto" items="${articles}">
									<tr>
					                   <td style="cursor:pointer; text-align:center;"
											onclick="location='memberAdminView.do?m_id=${memberDto.m_id}'">
											<b>${memberDto.m_id}</b>
										</td>
										<td align="center">
											${memberDto.m_name}
										</td>
										<td align="center">
											${memberDto.m_address}
										</td>
										<td align="center">
											${memberDto.m_tel}
										</td>
									</tr>
								
								</c:forEach>
							</c:if>
						</table>
						</form>
						<div align="center">
							<c:if test="${count gt 0}">
								<c:if test="${startPage gt pageBlock}">
									<a href="memberList.do">[◀◀]</a>
									<a href="memberList.do?pageNum=${startPage-pageBlock}">[◀]</a>
								</c:if>
								<c:forEach var="i" begin="${startPage}" end="${endPage}">
									<c:if test="${i == currentPage}">
										<span>[${i}]</span>
									</c:if>
									<c:if test="${i != currentPage}">
										<a href="memberList.do?pageNum=${i}">[${i}]</a>
									</c:if>
								</c:forEach>
								<c:if test="${pageCount gt endPage}">
									<a href="memberList.do?pageNum=${startPage+pageBlock}">[▶]</a>
									<a href="memberList.do?pageNum=${pageCount}">[▶▶]</a>
								</c:if>
							</c:if>
						</div>
						<div align="right">
							<input type="button" value="목록" onclick="location='memberAdminMyPage.do'">
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