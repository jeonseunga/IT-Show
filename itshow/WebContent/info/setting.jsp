<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<c:set var="project" value="/itshow/"/>
<c:set var="folder" value="/itshow/info/"/>

<c:set var="page" value="공 연 정 보"/>
<c:set var="page_Title" value="It Show"/>
<c:set var="page_title_insert" value="공연 정보 등록"/>
<c:set var="page_title_modi" value="공연 게시물 수정"/>
<c:set var="page_del" value="공연 게시물 삭제"/>
<c:set var="page_admin" value="관리자 권한 공연리스트"/>


<c:set var="str_readcount" value="조회수"/>
<c:set var="str_start" value="예매시작"/>
<c:set var="str_price" value="가격정보"/>
<c:set var="str_detail" value="상세정보"/>
<c:set var="str_center" value="공연장 정보"/>
<c:set var="str_review" value="관람후기"/>
<c:set var="str_thumbnail" value="섬네일"/>
<c:set var="str_subject" value="공연제목"/>
<c:set var="str_category" value="카테고리"/>
<c:set var="str_category_value1" value="장르선택"/>
<c:set var="str_category_value2" value="콘서트"/>
<c:set var="str_category_value3" value="연극"/>
<c:set var="str_category_value4" value="뮤지컬"/>
<c:set var="str_open_day" value="예매오픈일"/>
<c:set var="str_duration" value="공연 기간"/>
<c:set var="str_place" value="공연장"/>
<c:set var="str_location" value="공연장소"/>
<c:set var="str_address_find" value="주소찾기"/>
<c:set var="str_add_address" value="추가할 주소를 입력해주세요."/>
<c:set var="str_info" value="상세정보"/>
<c:set var="str_seatImg" value="좌석이미지 첨부"/>
<c:set var="str_video" value="동영상 첨부"/>

<c:set var="btn_save" value="저장"/>
<c:set var="btn_cancel" value="취소"/>
<c:set var="btn_delete" value="삭제"/>
<c:set var="btn_yes" value="예"/>
<c:set var="btn_no" value="아니오"/>
<c:set var="btn_add" value="추가"/>
<c:set var="btn_list" value="목록이동"/>
<c:set var="btn_find" value="검색"/>

<c:set var="msg_modi" value="글을 수정 하시겠습니까?"/>
<c:set var="msg_del" value="글을 삭제 하시겠습니까?"/>
<c:set var="msg_del_x" value="글 삭제에 실패했습니다. 다시 시도해 주세요."/>
<c:set var="msg_mod_x" value="글 수정에 실패했습니다. 다시 시도해 주세요."/>
<c:set var="msg_adm_from" value="수정 또는 삭제하고자 하는 공연의 제목을 입력해주세요."/>

