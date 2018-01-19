<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
<head>
	<title>It Show</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="/itshow/css/style.css">
	<script type="text/javascript">
		function getChatUserList() {
			$.ajax({
				type : "POST",
				url : "chatUsers.do",
				data : {
					
				},
				success : function(data) {
					if (data == "") {
						return;
					}
					var result = eval("(" + data + ")");
					var count = result.count;
					var number = 1;
					/* var pageBlock = result.pageBlock;
					var pageNum = result.pageNum;
					var currentPage = result.currentPage;				
					var start = result.start; 
					var end = result.end;		
					var number = result.number;
					var pageCount = result.pageCount;
					var startPage = result.startPage;
					var endPage = result.endPage; */
					
					var userlist = document.getElementById("userlist");
					var msg = "<table style=\"margin-right: auto; margin-left: auto; width: 900px;\">"
							+	"<tr>"
							+		"<th style=\"width: 5%; border:1px dashed rgba(164, 164, 164, 1);\">글번호</th>"
							+		"<th style=\"width: 5%; border:1px dashed rgba(164, 164, 164, 1);\">채팅방</th>"
							+		"<th style=\"width: 40%; border:1px dashed rgba(164, 164, 164, 1);\">보낸 아이디</th>"
							+		"<th style=\"width: 20%; border:1px dashed rgba(164, 164, 164, 1);\">마지막 수신 날짜</th>"
							+	"</tr>";
					if(count == 0) {
						msg += 	"<tr>"
							+		"<th colspan=\"4\">"
							+			"<br>"
							+			"채팅이 없습니다."
							+		"</th>"
							+	"</tr>";
					}else {
						for (var i = 0; i < result.list.length; i++) {
							msg += "<tr>"
								+	"<td align=\"center\">"
								+		number++
								+	"</td>"
								+	"<td align=\"center\">" + result.list[i].room + "</td>"
								+	"<td align=\"center\">";
								if(result.list[i].state == 1) {
									msg += "<a style=\"text-decoration: line-through;\" href=\"chatForm.do?send=" + result.list[i].id + "&room=" + result.list[i].room + "\">"
										+		result.list[i].id
										+	"</a>";
								}else {
									msg += "<a href=\"chatForm.do?send=" + result.list[i].id + "&room=" + result.list[i].room + "\">"
										+		result.list[i].id
										+	"</a>";
								}
							msg	+=	"</td>"
								+	"<td align=\"center\">"
								+		result.list[i].date
								+	"</td>"
								+	"</tr>";
						}
						
					}
					msg += "</table>";
					userlist.innerHTML = msg;
				}
			});
			setInterval("getChatUserList()", 10000);
		}
	</script>
</head>
<body onload="getChatUserList()">
	<div id="wrapper">
		<div id="header">
			<c:import url = "/main/header.jsp"/>
		</div>
		<div id="body">
			<section>
				<div class="container">
					<div class="row">
						<h1>${page_user_list}</h1>
						<div class="block"></div>
						<div id="userlist"></div>
<%-- 						<div class="row">
							<div id="userlist"></div>
							<table style="margin-right: auto; margin-left: auto; width: 900px;">
								<tr>
									<th style="width: 5%; border:1px dashed rgba(164, 164, 164, 1);">${str_num}</th>
									<th style="width: 5%; border:1px dashed rgba(164, 164, 164, 1);">${str_room}</th>
									<th style="width: 40%; border:1px dashed rgba(164, 164, 164, 1);">${str_from}</th>
									<th style="width: 20%; border:1px dashed rgba(164, 164, 164, 1);">${str_date}</th>
								</tr>
								<c:if test="${count == 0}">
									<tr>
										<th colspan="4">
											<br>
											${msg_no_content}
										</th>
									</tr>
								</c:if>
								<c:if test="${count != 0}">
									<c:forEach var="idList" items="${idList}">
										<tr>
											<td align="center">
												${number}
												<c:set var="number" value="${number-1}"/>
											</td>
											<td align="center"> ${idList.ch_room} </td>
											<td align="center"> 
												<a href="chatForm.do?send=${idList.m_id}&room=${idList.ch_room}">
													${idList.m_id}
												</a>
											</td>
											<td align="center"> 
												<fmt:formatDate value="${idList.ch_date}" type="both" pattern="yyyy/MM/dd HH:mm:ss"/>
											</td>
										</tr>
									</c:forEach>
								</c:if>
							</table>
							<div align="center">
								<c:if test="${count gt 0}">
									<c:if test="${startPage gt pageBlock}">
										<a href="chatUserList.do">[◀◀]</a>
										<a href="chatUserList.do?pageNum=${startPage-pageBlock}">[◀]</a>
									</c:if>
									<c:forEach var="i" begin="${startPage}" end="${endPage}">
										<c:if test="${i == currentPage}">
											<span>[${i}]</span>
										</c:if>
										<c:if test="${i != currentPage}">
											<a href="chatUserList.do?pageNum=${i}">[${i}]</a>
										</c:if>
									</c:forEach>
									<c:if test="${pageCount gt endPage}">
										<a href="chatUserList.do?pageNum=${startPage+pageBlock}">[▶]</a>
										<a href="chatUserList.do?pageNum=${pageCount}">[▶▶]</a>
									</c:if>
								</c:if>
							</div>
						</div> --%>
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