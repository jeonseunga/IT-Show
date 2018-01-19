<%@page import="java.text.SimpleDateFormat"%>
<%@page import="member.MemberDataBean"%>
<%@page import="member.MemberDBBean"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="/itshow/css/style.css">
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script src="${project}js/member.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="modifyfocus()">
	<div id="wrapper">
		<div id="header">
			<c:import url="/main/header.jsp" />
		</div>
		<div id="body">
			<section>
				<div class="container">
					<div class="row">
						<h1>회원 정보 수정</h1>
						<div class="block"></div>
						<c:if test="${result == 1}">
							<form method="post" action="memberModifyPro.do"
								name="modifyform" onsubmit="return modifycheck()">
								<input type="hidden" name="verty" value="1">
								<input type="hidden" name="authnum" value="">
								<input type="hidden" name="m_code" value="1">
								<div class="row">
									<label style="width:120px; text-align: center; display: inline-block">아이디</label>
									<input type="text" name="m_id" value="${memberDto.m_id}" readonly
										style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);">
								</div>
								<div class="row">
									<label style="width:120px; text-align: center; display: inline-block">비밀번호</label>
									<input type="password" name="m_pw" value="${memberDto.m_pw}" onkeyup="m_pwcheck()"
										style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);">
									<span id="resultm0"></span>
									<br>
									<label style="width:120px; text-align: center; display: inline-block">비밀번호 확인</label>
									<input type="password" name="m_repasswd" value="${memberDto.m_pw}" onkeyup="m_repwcheck()"
										style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);">
									<span id="resultm1"></span>
								</div>
								<div class="row">
									<label style="width:120px; text-align: center; display: inline-block">이름</label>
									<input type="text" name="m_name" value="${memberDto.m_name}" readonly
										style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);">
								</div>
								<div>
									<label style="width:120px; text-align: center; display: inline-block">전화번호</label>
									<c:set var="t" value="${fn:split(memberDto.m_tel,'-')}" />
									<input type="text" name="m_tel1" value="${t[0]}" maxlength="3" onkeyup="m_telcheck()"
										style="width: 60px; border: 1px dashed rgba(164, 164, 164, 1);">
						   			 - <input type="text" name="m_tel2" value="${t[1]}" maxlength="4" onkeyup="m_telcheck()"
										style="width: 60px; border: 1px dashed rgba(164, 164, 164, 1);">
						   			 - <input type="text" name="m_tel3" value="${t[2]}" maxlength="4" onkeyup="m_telcheck()"
										style="width: 60px; border: 1px dashed rgba(164, 164, 164, 1);">
									<span id="resultm2"></span>
								</div>
								<div class="row">
									<label style="width:120px; text-align: center; display: inline-block">우편번호</label>
									<c:if test="${memberDto.m_zipcode == null}">
										<input type="text" id="sample6_postcode" name="sample6_postcode" readonly
											style="border: 1px dashed rgba(164, 164, 164, 1);">
									</c:if>
									<c:if test="${memberDto.m_zipcode != null}">
										<input type="text" id="sample6_postcode" name="sample6_postcode"
											value="${memberDto.m_zipcode}" readonly
											style="border: 1px dashed rgba(164, 164, 164, 1);">
									</c:if>
									<input type="button" value="우편번호검색" onclick="addresscheck()" >
								</div>
								<div class="row">
									<label style="width:120px; text-align: center; display: inline-block">주소</label>
									<c:if test="${memberDto.m_address == null}">
										<input type="text" name="sample6_address" id="sample6_address" readonly
											style="width: 400px; border: 1px dashed rgba(164, 164, 164, 1);">
										<br>
										<label style="width:120px; text-align: center; display: inline-block"></label>
										<input type="text" name="sample6_address2" id="sample6_address2" placeholder="상세주소"
											style="width: 400px; border: 1px dashed rgba(164, 164, 164, 1);">
									</c:if>
									<c:if test="${memberDto.m_address != null}">
										<c:set var="a" value="${fn:split(memberDto.m_address,'/n')}" />
										<input type="text" name="sample6_address" id="sample6_address" value="${a[0]}" readonly
											style="width: 400px; border: 1px dashed rgba(164, 164, 164, 1);">
										<br>
										<label style="width:120px; text-align: center; display: inline-block"></label>
										<input type="text" name="sample6_address2" id="sample6_address2" value="${a[1]}" placeholder="상세주소"
											style="width: 400px; border: 1px dashed rgba(164, 164, 164, 1);">
									</c:if>
								</div>
								<div class="row">
									<label style="width:120px; text-align: center; display: inline-block">이메일</label>
									<c:set var="e" value="${fn:split(memberDto.m_email,'@')}" />
									<input type="text" name="m_email1" value="${e[0]}" onkeyup="m_emailcheck()" 
										style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);"> @ 
							     	<input type="text" name="m_email2" value="${e[1]}" onkeyup="m_emailcheck()"
							     		style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);">
									<input type="button" value="인증번호 전송" onclick="m_sendemail()">
									<span id="resultm3"></span>
								</div>
								<div class="row">
									<label style="width:120px; text-align: center; display: inline-block">인증번호</label>
									<input type="text" name="emailnum" maxlength="7" placeholder="인증번호" onkeyup="m_emailnumc()"
										style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);">
									<span id="resultm4"></span>
								</div>
								<div class="row" align="right">
									<input type="submit" value="수정">
									<c:if test="${sessionScope.memId != null}">
										<input type="button" value="취소" onclick="location='memberCusMyPage.do'">
									</c:if>
									<c:if test="${sessionScope.comId != null}">
										<input type="button" value="취소" onclick="location='compMypage.do'">
									</c:if>
								</div>
							</form>
						</c:if>
						<c:if test="${result != 1}">
							<script type="text/javascript">
							<!--
								erroralert( diffpasswderror );
							//-->
							</script>
						</c:if>
					</div>
				</div>
			</section>
		</div>
		<div id="footer">
			<c:import url="/main/footer.jsp" />
		</div>
	</div>
</body>
</html>