<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<style type="text/css">
			#infocontentcal {
				margin-bottom: 18px;
			}
			
			#infocontentcal .header {
				height: 50px;
				width: 290px;
				background: white;
				text-align: center;
				position: relative;
				z-index: 100;
			}
			
			#infocontentcal .header h1 .title {
			 	background : white;
			 	padding: 0;
			 	font-size: 18px;
			 	line-height: 30px;
			 	font-weight: 100;
			 	letter-spacing: 1px;
			}
			
			#infocontentcal .day {
				display: inline-block;
				width: 40px;
				padding: 5px;
				text-align: center;
				vertical-align: top;
				cursor: pointer;
				position: relative;
				z-index: 100;
				pointer-events: none;
			}
			
			#infocontentcal .day-name {
				font-size: 1px;
				text-transform: uppercase;
				margin-bottom: 2px;
				color: rgba(0, 0, 0, .5);
			 	letter-spacing: .3px;
			 	pointer-events: none;
			}
			
			#infocontentcal .day-number {
			  font-size: 10px;
			  letter-spacing: 1.5px;
			  pointer-events: none;
			}
			
			#infocontentcal .day.other {
				pointer-events: none;
			}
		</style>
	</head>
	<body>
		<div id="infocontentcal">
			<div id="calendar" style="height: auto;"></div>
		</div>
		<div align="center">
			<select id="turn" onchange="selectTurn()">
				<option value="none">날짜를 선택해 주세요.</option>
			</select>
			<div id="seats" class="row">
			</div>
			<br>
			<input type="button" value="예매하기" onclick="infoorder('${sessionScope.memId}', ${infoDto.i_num})">
		</div>
		<script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js"></script>
		<script src="/itshow/js/info.js"></script>
	</body>
</html>