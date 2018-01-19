<%@page import="member.MemberDBBean"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ include file="setting.jsp"%>
<script src="${project}js/member.js"></script>


<c:if test="${resultCheck != 0}">
	<script type="text/javascript">
	<!--
		erroralert(Adeleteerror);
	//-->
	</script>
</c:if>
<c:if test="${resultCheck == 1}">
	<c:if test="${m_code == 2}">
		<c:redirect url="memberList.do" />
	</c:if>
	<c:if test="${m_code == 3}">
		<c:redirect url="memberComList.do" />
	</c:if>
</c:if>