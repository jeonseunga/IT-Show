<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<title>It Show</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="/itshow/css/style.css">
	<script type="text/javascript">
		//<!--
		function selectDate(num) {
			if (document.getElementById("date").value != 'none') {
				getTimes(document.getElementById("date").value, num);
			}else {
				var div = document.getElementById("timelist");
				div.innerHTML = "";
			}
		}

		function getTimes(date, num) {
			$.ajax(
					{
						type : "POST",
						url : "infoTimeList.do",
						data : {
							date : date,
							num : num
						},
						success : function(data) {
							if (data == "") {
								return;
							}
							var result = eval("(" + data + ")");
							var div = document.getElementById("timelist");
							div.innerHTML = "<div style=\"margin-bottom: 10px;\" align=\"center\">" + "조회할 회차를 선택해 주세요" + "</div>"
							for(var i = 0; i < result.times.length; i++) {
								div.innerHTML += "<div align=\"center\" value=\"0\" id=\"" + result.times[i].time + "\"onclick=\"getSeats(" + num + ", '" + date + "', '" + result.times[i].time + "')\">" 
											  +  "<h5>" + result.times[i].time + "▼" + "</h5>" 
											  +  "</div>"; 
							}
						}
					}
			);
		}
		
		// 숫자 타입에서 쓸 수 있도록 format() 함수 추가
		Number.prototype.format = function(){
		    if(this==0) return 0;
		 
		    var reg = /(^[+-]?\d+)(\d{3})/;
		    var n = (this + '');
		 
		    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
		 
		    return n;
		};

		function getSeats(num, date, time) {
			$.ajax(
					{
						type : "POST",
						url : "infoSeatDetail.do",
						data : {
							date : date,
							num : num,
							time : time
						},
						success : function(data) {
							if (data == "") {
								return;
							}
							var result = eval("(" + data + ")");
							var div = document.getElementById(time);
							if(document.getElementById(time).getAttribute("value") == 0) {
								div.innerHTML = time + "▲";
								var msg = 
									  "<table>"
									+ 	"<thead>"
									+ 		"<tr>"
									+ 			"<th style=\"width: 8%; border:1px dashed rgba(164, 164, 164, 1);\">등급</th>"
									+ 			"<th style=\"width: 8%; border:1px dashed rgba(164, 164, 164, 1);\">층</th>"
									+ 			"<th style=\"width: 8%; border:1px dashed rgba(164, 164, 164, 1);\">열</th>"
									+ 			"<th style=\"width: 8%; border:1px dashed rgba(164, 164, 164, 1);\">총 좌석 수</th>"
									+			"<th style=\"width: 8%; border:1px dashed rgba(164, 164, 164, 1);\">팔린 좌석 수</th>"
									+ 		"</tr>"
									+ 	"</thead>"
									+ "<tbody>";
								var total = 0;
								var sum = 0;
								var sales = 0;
								for(var i = 0; i < result.seats.length; i++) {
									msg += "<tr>"
										+  	"<td align=\"center\">" + result.seats[i].level + "</td>"
										+ 	"<td align=\"center\">" + result.seats[i].floor + "</td>"
										+ 	"<td align=\"center\">" + result.seats[i].name + "</td>"
										+ 	"<td align=\"center\">" + result.seats[i].total + "</td>"
										+	"<td align=\"center\">" + (result.seats[i].total - result.seats[i].count) + "</td>"
										+  "</tr>";
									sales += result.seats[i].price * (result.seats[i].total - result.seats[i].count);
									sum += result.seats[i].total;
									total += (result.seats[i].total - result.seats[i].count);
								}
								msg += "<tr>"
									+  	"<th colspan=\"3\" style=\"border:1px dashed rgba(164, 164, 164, 1);\">"
									+		"총 합계"
									+  	"</th>"
									+  	"<td align=\"center\" style=\"border:1px dashed rgba(164, 164, 164, 1);\">"
									+		sum
									+  	"</td>"
									+  	"<td align=\"center\" style=\"border:1px dashed rgba(164, 164, 164, 1);\">"
									+		total
									+  	"</td>"
									+  "</tr>";
								msg += "<tr>"
									+  	"<th colspan=\"2\" style=\"border:1px dashed rgba(164, 164, 164, 1);\">"
									+		"매출액"
									+  	"</th>"
									+  	"<td colspan=\"3\" align=\"center\" style=\"border:1px dashed rgba(164, 164, 164, 1);\">"
									+		sales.format()
									+  	"</td>"
									+  "</tr>";
								msg += "</tbody>"
									+ "</table>";
								
								var percentage = total/sum * 100.0;
								var bar = 0;
								if(percentage >= 0 && percentage <= 5) {
									bar = 0;
								}
								else if(percentage > 5 && percentage <= 19) {			//10
									bar = 10;
								}else if(percentage >= 20 && percentage <= 29) {		//20
									bar = 20;
								}else if(percentage >= 30 && percentage <= 39) {		//30
									bar = 30;
								}else if(percentage >= 40 && percentage <= 49) {		//40
									bar = 40;
								}else if(percentage >= 50 && percentage <= 59) {		//50
									bar = 50;
								}else if(percentage >= 60 && percentage <= 69) {		//60
									bar = 60;
								}else if(percentage >= 70 && percentage <= 79) {		//70
									bar = 70;
								}else if(percentage >= 80 && percentage <= 89) {		//80
									bar = 80;
								}else if(percentage >= 90 && percentage <= 99) {		//90
									bar = 90;
								}else if(percentage == 100) {		//100
									bar = 100;				
								}
								msg += "<div class=\"progressBar\">"
									+ 	"<h4>총 예매율&nbsp;" + percentage.toFixed(2) + "%</h4>"
									+ 	"<div class=\"progressBarContainer\">"
									+ 		"<div class=\"progressBarValue value-" + bar + "\"></div>"
									+ 	"</div>"
									+  "</div>";
								div.innerHTML += msg;
								document.getElementById(time).setAttribute("value", 1);
							}else {
								div.innerHTML = "<h5>" + time + "▼" + "</h5>";
								document.getElementById(time).setAttribute("value", 0);
							}
							//seatlist.innerHTML = msg;
						}
					}
			);
		}
	//-->
	</script>
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
						<h1>업체 판매 현황</h1>
						<div class="block"></div>
						<div>
							<div align="center">
								<img src="/itshow/upload/${infoDto.i_img_thumbnail}">
							</div><br>
							<h5 style="margin: 10px;"> 공연 제목 : ${infoDto.i_name}</h5>
							<div class="block" style="margin: 0px;"></div>
							<h5 style="margin: 10px;"> 공연 기간 : ${infoDto.i_period}</h5>
							<div class="block" style="margin: 0px;"></div>
							<div id="datelist" style="margin: 10px;">
								<select id="date" onchange="selectDate(${infoDto.i_num})">
										<option value="none">날짜를 선택해 주세요</option>
									<c:forEach var="infoDates" items="${infoDates}">
										<option value="${infoDates.i_date}">${infoDates.i_date}</option>
									</c:forEach>
								</select>
							</div>
							<div id="timelist"></div>
							<div id="seatlist"></div>
							<div align="right">
								<input type="button" value="목록" onclick="location='compInfoList.do?m_code=3'">
								<!-- "location='compInfoList.do?pageNum=${pageNum}'" -->
							</div>
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