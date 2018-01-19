<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<c:set var="project" value="/itshow/"/>
<c:set var="folder" value="/itshow/chat/"/>

<c:set var="page_user_list" value="1:1 채  팅 상 황"/>

<c:set var="str_num" value="글번호"/>
<c:set var="str_room" value="채팅방"/>
<c:set var="str_from" value="보낸 아이디"/>
<c:set var="str_date" value="마지막 수신 날짜"/>

<c:set var="msg_no_content" value="채팅이 없습니다."/>