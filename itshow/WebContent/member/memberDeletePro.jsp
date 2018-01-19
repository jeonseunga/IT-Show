<%@page import="member.MemberDBBean"%> 
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ include file="setting.jsp" %>
<script src="${project}js/member.js"></script>

<c:if test="${resultCheck == 1}">
	<c:if test="${result == 0}">
		<script type="text/javascript">
			<!--
			alert( deleteerror );
			//-->				
		</script>
		<meta http-equiv="refresh" content="0; url=main.do">
	</c:if>
	<c:if test="${result == 1}">
		${sessionScope.memId = null};
		${sessionScope.comId = null};
		<c:redirect url="main.do"/>
		<%--
		session.removeAttribute( "memId" );
		response.sendRedirect( "main.jsp" );
		 --%>
	</c:if>
</c:if>
<c:if test="${ resultCheck == -1}">
	<script type="text/javascript">
		<!--
		erroralert( diffpasswderror );
		//-->
	</script>
</c:if>
	











