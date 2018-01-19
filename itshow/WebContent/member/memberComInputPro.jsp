<%@page import="member.MemberDBBean"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="setting.jsp" %>
<script src="${project}js/member.js"></script>


<c:if test="${result == 0}">
	<script type="text/javascript">
		<!--
		erroralert( inputerror );
		//-->
	</script>
</c:if>
<c:if test="${result == 1}">
     <c:redirect url="memberLoginForm.do"/>
</c:if>