<%@page import="member.MemberDBBean"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ include file="setting.jsp"%>
<script src="${project}js/member.js"></script>

<c:if test="${result == 0}">
	<script type="text/javascript">
			<!--
			alert( updateerror );
			//-->
		</script>
	<meta http-equiv="refresh" content="0; url=memberCusMyPage.do">
</c:if>
<c:if test="${result != 0}">
	<c:if test="${sessionScope.memId != null}">
		<c:redirect url="memberCusMyPage.do" />
	</c:if>
	<c:if test="${sessionScope.comId != null}">
		<c:redirect url="compMypage.do" />
	</c:if>
</c:if>