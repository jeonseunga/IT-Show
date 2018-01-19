<%@page import="member.MemberDBBean"%> 
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ include file="setting.jsp" %>
<script src="${project}js/member.js"></script>
 
<c:if test="${result == 0}">
    <!-- 아이디가 없음 -->
		<script type="text/javascript">
			<!--
			erroralert(noiderror);
			//-->
		</script>
</c:if>
<c:if test="${result == -1}">
        <!-- 비번 다름 -->
		<script type="text/javascript">
			<!--
			erroralert(diffpasswderror);
			//-->
		</script>
</c:if>
<c:if test="${result == 1}"> 
	<c:if test="${m_code == 1}"> 
       	${sessionScope.adminId = m_id};
    </c:if>
    <c:if test="${m_code == 2}"> 
       	${sessionScope.memId = m_id};
    </c:if>
    <c:if test="${m_code == 3}"> 
       	${sessionScope.comId = m_id};
    </c:if>
    <c:redirect url="main.do"></c:redirect>
</c:if>