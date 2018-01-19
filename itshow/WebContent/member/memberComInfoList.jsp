<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
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
							<h1>공연리스트</h1>
							<div class="block"></div>
							<table style="margin-right: auto; margin-left: auto; width: 940px">
								<tr style="border:1px dashed rgba(164, 164, 164, 1);">
									<th style="width: 30%; border:1px dashed rgba(164, 164, 164, 1);">공연제목</th>
									<th style="width: 20%; border:1px dashed rgba(164, 164, 164, 1);">작성일</th>
									<th style="width: 18%; border:1px dashed rgba(164, 164, 164, 1);"></th>
								</tr>
								<tr>
									<th colspan="3">  </th>
								</tr>
								<tr>
									<th colspan="3">  </th>
								</tr>
								<c:if test="${count == 0}">
									<tr>
										<th colspan="5">
											공연정보가 없습니다. 등록해주시기 바랍니다.
										</th>
									</tr>
								</c:if>
								<c:if test="${count != 0}">
									<c:forEach var="infoDto" items="${infos}">
										<tr>
											<td align="center">
												<a>
													${infoDto.i_name}
												</a>
											</td>
											<td align="center">
												<a>
													${infoDto.i_reg_date}
												</a>
											</td>
											<th>
												<b><a href="#" class="button2">수정</a></b>&nbsp;&nbsp;&nbsp;
												<b><a href="#">삭제</a></b>
											</th>
										</tr>
									</c:forEach>
								</c:if>
							</table>
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