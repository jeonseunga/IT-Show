<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
   <%@ include file="setting.jsp" %>
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
	<title>It Show</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="${project}js/member.js"></script>
</head>

<body>
  <c:if test ="${result7 == 0}">
	사용할 수 있는 E-Mail 입니다
	<script type="text/javascript">
		emailcheckfocus(1);
	</script>
  </c:if>
  <c:if test="${result7 != 0}">
	사용할 수 없는 E-Mail입니다
	<script type="text/javascript">
		emailcheckfocus(0);
	</script>
  </c:if>
</body>
</html>