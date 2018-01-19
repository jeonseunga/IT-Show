<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body onload="mail()">
	<div id="wrapper">
		<div id="header">
			<c:import url="/main/header.jsp" />
			<script src="/itshow/js/member.js"></script>
		</div>
		<div id="body">
			<section>
				<div class="container">
					<div class="row">
						<h1>관리자 마이페이지</h1>
						<div class="block"></div>
						<div align="center">
						<br><br>
							<div class="five columns"></div>
							<div class="five columns"></div>
							<div class="five columns" style="margin-left:80px;">
								<img style="width: auto; height:100px; margin-left: ; margin-bottom: 23px;" src="/itshow/images/회원.png">
								<input style="width: 300px; height: 50px;"
									type="button" value="일반회원리스트" onclick="location='memberList.do'">
							</div>
							<div class="five columns">
								<img style="width: auto; height:100px; margin-left: ; margin-bottom: 23px;" src="/itshow/images/group.png">
								<input style="width: 300px; height: 50px;"
									type="button" value="업체 리스트 " onclick="location='memberComList.do'">
							</div>
							<div class="five columns" style="margin-left:80px;">
								<img style="width: auto; height:100px; margin-top: 23px; margin-bottom: 23px;" src="/itshow/images/notice.png">
								<input style="width: 300px; height: 50px;"
									type="button" value="공지사항" onclick="location='noticeList.do'">
							</div>
							<div class="five columns">
								<img style="width: auto; height:100px; margin-top: 23px; margin-bottom: 23px;" src="/itshow/images/modify.png">
								<input style="width: 300px; height: 50px;"
									type="button" value="공연 수정 및 삭제" onclick="location='infoAdminInfoListForm.do'">
							</div>
							<div class="five columns" style="margin-left:80px;">
								<img style="width: auto; height:100px; margin-top: 23px; margin-bottom: 23px;" src="/itshow/images/email.png">
								<input style="width: 300px; height: 50px;"
									class="button-primary" type="button" id="sm" value="" onclick="sendM()">
								<div id="myProgress" style="margin-bottom: 0px; position: relative; width: 300px; height: 5px; background-color: lightgray;">
									<div id="myBar" class="block" style="position: absolute; width: 1%; height: 100%;"></div>
								</div>
							</div>
							<div class="five columns">
								<img style="width: auto; height:100px; margin-top: 23px; margin-bottom: 23px;" src="/itshow/images/chat.png">
								<input style="width: 300px; height: 50px;"
									type="button" id="chat" value="채팅 현황" onclick="location='chatUserList.do'">
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