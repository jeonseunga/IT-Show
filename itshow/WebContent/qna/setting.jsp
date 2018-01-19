<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<c:set var="project" value="/itshow/"/>
<c:set var="folder" value="/itshow/qna/"/>

<c:set var="page" value="문 의 사 항"/>

<c:set var="str_num" value="글번호"/>
<c:set var="str_title" value="글제목"/>
<c:set var="str_writer" value="글쓴이"/>
<c:set var="str_date" value="작성일"/>
<c:set var="str_search_result" value="검색 결과"/>

<c:set var="msg_no_content" value="게시물이 없습니다."/>
<c:set var="msg_modify" value="글을 수정 하시겠습니까?"/>
<c:set var="msg_delete" value="글을 삭제 하시겠습니까?"/>
<c:set var="msg_confirm" value="본인 확인을 위해 비밀번호를 입력해주세요"/>
<c:set var="msg_write_failed" value="글 작성에 실패하였습니다. 다시 시도해주세요."/>
<c:set var="msg_modify_failed" value="글 수정에 실패하였습니다. 다시 시도해주세요."/>
<c:set var="msg_delete_failed" value="글 삭제에 실패하였습니다. 다시 시도해주세요."/>

<c:set var="btn_write" value="글쓰기"/>
<c:set var="btn_modify" value="수정"/>
<c:set var="btn_delete" value="삭제"/>
<c:set var="btn_list" value="목록"/>
<c:set var="btn_ok" value="확인"/>
<c:set var="btn_cancel" value="취소"/>
<c:set var="btn_search" value="검색"/>