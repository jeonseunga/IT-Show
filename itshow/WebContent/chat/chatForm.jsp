<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="/itshow/css/style.css">
	<script src = "https://code.jquery.com/jquery-3.1.1.min.js"></script>
	<script type="text/javascript">
		var num = 0;
		function getinfinitechat() {
			setInterval(function(){
				getchatlist(num);
			}, 1000);
		}
		
		function getchatlist(type) {
			var send = $('#sendTo').val();
			var room = $('#room').val();
			$.ajax(
					{
						type : "POST",
						url : "chatList.do",
						data : {
							type : type,
							send : send,
							room : room,
						},
						success : function(data) {
							if (data == "") {
								return;
							}
							var result = eval("(" + data + ")");
							for(var i = 0; i < result.msg.length; i++) {
								addchat(result.msg[i].id, result.msg[i].content, result.msg[i].time, result.msg[i].session);
							}
							num = result.last;
						}
					}
				);
		}
		
		function sendmessage(send) {
			var content = $('#content').val();
			var room = $('#room').val();
			$.ajax(
				{
					type : "POST",
					url : "chatSend.do",
					data : {
						content : content,
						send : send,
						room : room
					},
					success : function(result) {
						if(result == 1) {
							//전송성공
						}else {
							//전송실패
							alert("실패");
						}
					}
				}
			);
			$('#content').val('');
		}
		
		var i = 0;
		function addchat(id, content, time, session) {
			$('#chatList').append("<div id=\"chat\" style=\"padding-left: 5px;\">"
								+	"<div id=\"me" + i + "\">"
								+	"<label id=\"id\"><b>" + id + "</b> </label>"
								+	"<label id=\"time" + i + "\"> " + time + " </label>"
								+	"<pre style=\"margin-top: 0px; margin-bottom: 8px; padding-right: 5px;\">" 
								+ 		content 
								+ 	"</pre>"
								+	"</div>"
								+ "</div>");
			$('#chatList').scrollTop($('#chatList').prop('scrollHeight'));
			if(id == session) {
				$('#me' + i).css("color", "purple");
				$('#me' + i).css('text-align', 'right');
				$('#me' + i).css('padding-right', '5px');
			}else {
				$('#me' + i).css("color", "purple");
				$('#me' + i).css('text-align', 'left');
				$('#me' + i).css('padding-right', '5px');
			}
			i++;
		}
		
		function exitchat(id, room) {
			$.ajax(
				{
					type : "POST",
					url : "chatExit.do",
					data : {
						id : id,
						room : room
					},
					success : function(result) {
						if(result == 1) {
							//전송성공
							location.replace("customerService.do");
						}else {
							//전송실패
							alert("실패");
							//location='customerService.do'
						}
					}
				}
			);
		}
		
		$(document).ready(
				function() {
					getchatlist('start');
					getinfinitechat();
				}
			);
	</script>
</head>
<body>
	<div id="wrapper">
		<div id="header">
			<c:import url = "/main/header.jsp"/>
		</div>
		<div id="body">
			<!-- <input id = "btn2" class="btn btn-default" type = "button" value = "X" style="margin-right: 500px;" > -->
			<section>
				<div class="container">
					<div class="row">
						<div id="chat" style="margin-left: 25%; 'width: 400px;">
							<div id="chatList"style="width: 400px; height: 430px; overflow: auto; overflow-x: hidden; border: 1px dashed rgba(164, 164, 164, 1); ">
								<c:if test="${sessionScope.adminId != null}">
									<b>테스트 ${sessionScope.adminId} ${room}</b>
									<input id="sendTo" type="hidden" value="${send}">
									<input id="room" type="hidden" value="${room}">
								</c:if>
								<c:if test="${sessionScope.memId != null}">
									<b>테스트 ${sessionScope.memId} ${room}</b>
									<input id="room" type="hidden" value="${room}">
								</c:if>
								<c:if test="${sessionScope.comId != null}">
									<b>테스트 ${sessionScope.comId} ${room}</b>
									<input id="room" type="hidden" value="${room}">
								</c:if>
							</div>
							<textarea id="content" style="resize:none; width: 400px; margin-top: 10px; margin-bottom: 0px; border: 1px dashed rgba(164, 164, 164, 1);"></textarea>
							<div align="right" style="width: 400px;">
								<input id="send" type="button" value="전송" onclick="sendmessage('${send}')">
								<c:if test="${sessionScope.memId != null}">
									<input id="exit" type="button" value="나가기" onclick="exitchat('${sessionScope.memId}', ${room})">
								</c:if>
								<c:if test="${sessionScope.comId != null}">
									<input id="exit" type="button" value="나가기" onclick="exitchat('${sessionScope.comId}', ${room})">
								</c:if>
								<c:if test="${sessionScope.adminId != null}">
									<input id="exit" type="button" value="목록" onclick="location='chatUserList.do'">
								</c:if>
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