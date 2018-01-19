<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<c:set var="project" value="/itshow/"/>
<c:set var="folder" value="/itshow/member/"/>

<c:set var="page_main" value="메인 페이지"/>
<c:set var="page_input" value="회원가입"/>
<c:set var="page_meminput" value="일반 회원가입"/>
<c:set var="page_cominput" value="업체 회원가입"/>
<c:set var="page_confirm" value="중복확인"/>
<c:set var="page_login" value="로그인"/>
<c:set var="page_modify" value= "회원 정보 수정"/>
<c:set var="page_delete" value = "탈퇴화면"/>
<c:set var="page_delpro" value = "탈퇴 처리 화면"/>
<c:set var="page_cersu" value = "인증번호 전송실패"/>
<c:set var="page_cerfa" value="인증번호 전송완료"/>
<c:set var="page_emailfa" value = "이메일 전송실패"/>
<c:set var="page_emailsu" value="이메일 전송완료"/>
<c:set var="page_memList" value="일반회원 리스트"/>
<c:set var="page_comlist" value="업체 리스트"/>
<c:set var="page_infolist" value="공연 리스트"/>
<c:set var="page_findId" value="아이디 찾기"/>
<c:set var="page_findPw" value="비밀번호 찾기"/>
<c:set var="page_pwcheck" value="비밀번호 확인"/>
<c:set var="page_memdel" value="회원삭제"/>



<c:set var="msg_main" value = "비회원이시면 회원가입을 해주세요."/>
<c:set var="msg_input" value = "회원정보를 입력하세요."/>
<c:set var="msg_id_x" value= "는(은) 이미 존재하는 아이디입니다."/>
<c:set var="msg_id_o" value="는(은) 사용가능한 아이디입니다."/>
<c:set var="msg_login" value="로그인 하십시오."/>
<c:set var="msg_sung" value="로그인 성공"/>
<c:set var="msg_modifycheck" value="회원정보 수정을 위해 비밀번호를 다시 한번 입력해주세요."/>
<c:set var="msg_deletecheck" value="회원탈퇴를 위해 비밀번호를 다시 한번 입력해주세요."/>
<c:set var="msg_delete" value="비밀번호를 다시 한 번 입력하십시오."/>
<c:set var="msg_modify" value="수정할 정보를 입력하세요."/>
<c:set var="msg_idfind" value="ID/Password는 가입시 등록한 메일 주소로 알려드립니다.<br>
                                                       가입할 때 등록한 메일주소를 입력하세요."/>
<c:set var="msg_pwfindfa" value="일치하는 정보가 없습니다."/>
<c:set var="msg_pwfindsu" value="비밀번호를 찾았습니다!<br>메일로 전송하시려면 이메일을 입력해주세요. "/>
<c:set var="msg_pwinput" value="비밀번호를 입력해주세요."/>
<c:set var="msg_repwinput" value="비밀번호 확인을 위해 다시 입력해주세요."/>
<c:set var="msg_idfindfa" value="일치하는 정보가 없습니다."/>
<c:set var="msg_idfindsu" value="아이디를 찾았습니다!"/>
<c:set var="msg_idinput" value="아이디를 입력해주세요"/>
 
 
<c:set var="id" value="아 이 디"/>
<c:set var="m_pw" value="비밀번호"/>
<c:set var="m_repw" value="비밀번호 확인"/>
<c:set var="m_name" value="이 름"/>
<c:set var="m_tel" value="전화번호"/>
<c:set var="m_email" value="이메일"/>
<c:set var="m_reg_date" value="가입일자"/>
<c:set var="m_id_login" value="님 환영합니다."/>
<c:set var="m_address" value="주소"/>
<c:set var="m_zipcode" value="우편번호"/>
<c:set var="m_emailnum" value="인증번호"/>
<c:set var="m_comname" value="업체명"/>
<c:set var="m_point" value="적립 포인트"/>

	
<c:set var="btn_login" value="로그인"/>
<c:set var="btn_close" value= "취소"/>
<c:set var="btn_cancel" value= "취소"/>
<c:set var="btn_send" value="보내기"/>
<c:set var="btn_sendsu" value="전송완료"/>
<c:set var="btn_sendfa" value="전송실패"/>
<c:set var="btn_find" value="찾기"/>
<c:set var="btn_input" value="회원가입"/>
<c:set var="btn_comlogin" value="업체 로그인"/>
<c:set var="btn_input_cancel" value="가입취소"/>
<c:set var="btn_confirm" value="중복확인"/>
<c:set var="btn_ok" value="확인"/>
<c:set var="btn_ok_cancel" value="확인취소"/>
<c:set var="btn_modify" value="회원정보수정"/>
<c:set var="btn_delete" value="탈퇴"/>
<c:set var="btn_logout" value="로그아웃"/>
<c:set var="btn_mod" value="수정"/>
<c:set var="btn_mod_cancel" value="수정 취소"/>
<c:set var="btn_code_search" value="우편번호 검색"/>
<c:set var="btn_num_check" value="인증번호 전송"/>
<c:set var="btn_meminput" value="일반 회원가입"/>
<c:set var="btn_cominput" value="업체 회원가입"/>
<c:set var="btn_findId" value="아이디 찾기"/>
<c:set var="btn_findPw" value="비밀번호 찾기"/>
<c:set var="btn_orderlist" value="예매관리"/>
<c:set var="btn_scraplist" value="스크랩"/>
<c:set var="btn_infolist" value="공연리스트"/>
<c:set var="btn_commodi" value="업체정보수정"/>
<c:set var="btn_memdel" value="회원삭제"/>
<c:set var="btn_memlist" value="일반회원리스트"/>
<c:set var="btn_comlist" value="업체 리스트"/>
<c:set var="btn_chat" value="채팅 관리"/>
<c:set var="btn_emailcheck" value="메일 발송 관리"/>
<c:set var="btn_notice" value="공지사항"/>
<c:set var="btn_infomoddel" value="공연 수정 및 삭제"/>



<c:set var="infolistPage" value="공연리스트"/>
<c:set var="info_title" value="공연제목"/>
<c:set var="info_date" value="작성일"/>
<c:set var="msg_noinfo" value="공연정보가 없습니다. 등록해주시기 바랍니다."/>
<c:set var="btn_modify" value="수정"/>
<c:set var="btn_check" value="판매현황"/>
<c:set var="info_del" value="삭제"/>