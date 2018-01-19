<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
	<html>
	<head>
		<title>It Show</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="/itshow/css/style.css">
		<style type="text/css">
			.infos a {
				margin : 30px;
			}
			
			.infos a:hover {
				margin : 30px;
			}
		</style>
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
							<c:set var = "cat" value = "${fn:toUpperCase(category)}" />
							<h1>${cat}</h1>
							<div class="block"></div>
						</div>
						<div align="right">
							<a href="infoList.do?category=${category}&sort=recent">등록순</a>
							<a href="infoList.do?category=${category}&sort=count">조회순</a>
							<a href="infoList.do?category=${category}&sort=review">별점순</a>
						</div>
						<br><br>
						<div class="row" align="center" style="margin-left: 50px;">
							<!-- 카운트 추가하기 -->
							<c:if test="${count == 0}">
								<div align="center">
									등록된 공연이 없습니다.
								</div>
							</c:if>
							<c:if test="${count != 0}">
								<c:forEach var="infos" items="${infos}" varStatus="status">
									<a href="infoContent.do?num=${infos.i_num}">
										<div class="four columns">
											<img src="/itshow/upload/${infos.i_img_thumbnail}" width="220"
												height="280" alt="" />
											<c:if test = "${infos.endshow == 1}">
												<h5 style="margin-bottom:0px;">${infos.i_name}</h5>
											</c:if>
											<c:if test = "${infos.endshow != 1}">
												<h5 style="text-decoration: line-through; margin-bottom:0px;">${infos.i_name}</h5> <b style="color: red;">공연종료</b> <br>
											</c:if>
											<label><fmt:formatNumber type = "number" maxFractionDigits = "1" value = "${infos.i_score}" /></label><br>
											<label>${infos.i_location}</label>
										</div>
									</a>
									<c:if test="${status.count % 3 eq 0}">
										<div class="rows"></div>
									</c:if>
								</c:forEach>
							</c:if>
						</div>
						<br><br>
						<div align="center">
							<c:if test="${count gt 0}">
								<c:if test="${startPage gt pageBlock}">
									<a href="infoList.do?category=${category}&sort=${sort}">[◀◀]</a>
									<a href="infoList.do?infoList.do?category=${category}&sort=${sort}&pageNum=${startPage-pageBlock}">[◀]</a>
								</c:if>
								<c:forEach var="i" begin="${startPage}" end="${endPage}">
									<c:if test="${i == currentPage}">
										<span>[${i}]</span>
									</c:if>
									<c:if test="${i != currentPage}">
										<a href="infoList.do?category=${category}&sort=${sort}&pageNum=${i}">[${i}]</a>
									</c:if>
								</c:forEach>
								<c:if test="${pageCount gt endPage}">
									<a href="infoList.do?category=${category}&sort=${sort}&pageNum=${startPage+pageBlock}">[▶]</a>
									<a href="infoList.do?category=${category}&sort=${sort}&pageNum=${pageCount}">[▶▶]</a>
								</c:if>
							</c:if>
						</div>
					<form method="Post"
						action="infoList.do?category=${category}&sort=${sort}">
						<div align="center">
							<br>
							<table>
								<tr>
									<td>
										<select name="find">
												<option value="title">공연제목</option>
										</select>
									</td>
									<td>
										<input type="text" name="findfind">
										<input type="submit" value="검색">
									<td>
								</tr>
							</table>
						</div>
					</form>
				</div>
				</section>	
			</div>
			<div id="footer">
				<c:import url = "/main/footer.jsp"/>
			</div>
		</div>
	</body>
</html>