<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>It Show</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/itshow/css/style.css">
<link rel="stylesheet"
	href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script src="${project}js/member.js"></script>
</head>
<body>
	<div id="wrapper">
		<div id="header">
			<c:import url="/main/header.jsp" />
		</div>
		<div id="body">
			<section>
				<div class="container">
					<div class="row">
						<h1>회원가입</h1>
						<div class="block"></div>
						<div align="center" style="margin-top: 100px;">
							<div class="six columns">
								<img style="width: auto; height:130px; margin-bottom: 23px;" src="/itshow/images/회원.png"><br>
								<input style="width: 300px; height: 200;"
									class="button-primary" type="button" value="일반 회원가입"
									onclick="location='memberInputForm.do'">
							</div>
							<div class="six columns">
								<img style="width: auto; height:130px; margin-bottom: 23px;" src="/itshow/images/group.png"><br>
								<input style="width: 300px; height: 200;"
									class="button-primary" type="button" value="업체 회원가입"
									onclick="location='memberComInputForm.do'">
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