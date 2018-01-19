<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
	<html>
	<head>
		<title>It Show</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="/itshow/css/style.css">
		<style type="text/css">
				.off-screen {
					display: none;
				}
				
				#nav {
					text-align: center;
				}
				
				#nav a {
					display: inline-block;
					padding: 3px 5px;
				}
		</style>
	</head>
	<body onload="Listpaging()">
		<div id="wrapper">
			<div id="header">
				<c:import url = "/main/header.jsp"/>
				<script src="/itshow/js/member.js"></script>
			</div>
			<div id="body">
				<section>
					<div class="container">
						<div class="row">
							<h1>${infolistPage}</h1>
							<div class="block"></div>
							<div id="orderlist"></div>
							<table id = "products" style="margin-right: auto; margin-left: auto; width: 940px">
								<a href="#"></a>
								<!-- <form id="orderlist">
								</form> -->
								<thead>
								<tr style="border:1px dashed rgba(164, 164, 164, 1);">
									<th style="width: 30%; border:1px dashed rgba(164, 164, 164, 1);">${info_title}</th>
									<th style="width: 20%; border:1px dashed rgba(164, 164, 164, 1);">
										${info_date}
									</th>
									<th style="width: 18%; border:1px dashed rgba(164, 164, 164, 1);"></th>
								</tr>
								</thead>
								
								<c:if test="${count == 0}">
									<tr>
										<th colspan="5">
											<br>
											${msg_noinfo}
										</th>
									</tr>
								</c:if>
								
								<c:if test="${count != 0}">
									<tbody>
									<c:forEach var="infoDto" items="${infos}">
										<tr>
											<td align="center">
												<a>
													${infoDto.i_name}
												</a>
											</td>
											<td align="center">
												<a>
													<fmt:formatDate value="${infoDto.i_reg_date}" type="both" pattern="yyyy/MM/dd hh:mm:ss"/>
												</a>
											</td>
											<th>
												<c:if test="${m_code==3}">
													<b><a href="infoModifyForm.do?num=${infoDto.i_num}&m_code=${m_code}">${btn_modify}</a></b>&nbsp;&nbsp;&nbsp;
													<b><a href="infoSalesStatus.do?num=${infoDto.i_num}">${btn_check}</a></b>&nbsp;&nbsp;&nbsp;													
													<b><a href="infoDeleteForm.do?num=${infoDto.i_num}&m_code=${m_code}">${info_del}</a></b>
												</c:if>
												<c:if test="${m_code==1}">
													<b><a href="infoModifyForm.do?num=${infoDto.i_num}&m_code=${m_code}&title=${title}">${btn_modify}</a></b>&nbsp;&nbsp;&nbsp;
													<b><a href="infoDeleteForm.do?num=${infoDto.i_num}&m_code=${m_code}&title=${title}">${info_del}</a></b>
												</c:if>
											</th>
										</tr>
									</c:forEach>
									</tbody>
								</c:if>
							</table>
							<br>
							<div align="right">
								<c:if test="${m_code==3}">
									<input type="button" value="글쓰기" onclick="location='infoInsertForm.do'">
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