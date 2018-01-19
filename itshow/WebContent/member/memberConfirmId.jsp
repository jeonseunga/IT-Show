<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="setting.jsp" %>  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <script src="${project}js/member.js"></script>
</head>
<body onload ="confirmfocus()">
  <c:if test ="${result == 0}">
    	사용할 수 있는 ID입니다.
    	<script type="text/javascript">
    		$("input[name='confirm']").val("1");
    	</script>
  </c:if>
  <c:if test="${result == 1}">
    	사용할 수 없는 ID입니다.
    	<script type="text/javascript">
    		$("input[name='confirm']").val("0");
    	</script>
  </c:if>
</body>
</html>