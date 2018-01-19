<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:set var="project" value="/itshow/"/>

<c:set var="page_insert" value="글작성"/>
<c:set var="page_Title" value="It Show"/>
<c:set var="page_modi" value="글수정"/>
<c:set var="page_content" value="공지사항 내용"/>
<c:set var="page_list" value="공 지 사 항"/>
<c:set var="page_del" value="공지사항 삭제"/>

<c:set var="str_writer" value="작성자"/>
<c:set var="str_day" value="작성일"/>
<c:set var="str_title" value="제목"/>
<c:set var="str_content" value="내용"/>
<c:set var="str_number" value="글번호"/>

<c:set var="btn_yes" value="예"/>
<c:set var="btn_no" value="아니오"/>
<c:set var="btn_delete" value="삭제"/>

<c:set var="msg_insert_x" value="글작성에 실패했습니다. 다시 시도해 주세요."/>
<c:set var="msg_modi" value="글을 수정 하시겠습니까?"/>
<c:set var="msg_modi_x" value="글 수정에 실패했습니다. 다시 시도해 주세요."/>
<c:set var="msg_list_x" value="게시물이 없습니다. 게시물을 등록해주세요."/>
<c:set var="msg_del" value="글을 삭제 하시겠습니까?"/>
<c:set var="msg_del_x" value="글 삭제에 실패했습니다. 다시 시도해 주세요."/>