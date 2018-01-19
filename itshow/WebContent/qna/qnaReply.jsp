<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="/itshow/css/style.css">
		<script src="/js/request.js"></script>
	</head>
	<script type="text/javascript">
		//글작성
		function writeReply(data) {
			var name = replyform.id.value;
			var content = replyform.content.value;
			$.ajax(
				{
					type : "POST",
					url : "qnaReplyWrite.do",
					data : {
						type : type
					},
					success : function(data) {
						
					}
				}
			);
		}
	</script>
	<body>
		<!-- 댓글 작성 -->
		<form name = "replyform">
			<div id="reply" class="row">
				<label>${str_writer}</label>
				<label class="u-full-width" name="id"><b>${qnaDto.m_id}</b></label>
				<textarea class="u-full-width" name="content"
					style="margin-top: 10px; resize:none; border: 1px dashed rgba(164, 164, 164, 1);"></textarea>
			</div>
			<div align="right">
				<input class="button-primary" type="button" value="Submit">
			</div>
		</form>
		<div id = "result">
		</div>
	</body>
</html>