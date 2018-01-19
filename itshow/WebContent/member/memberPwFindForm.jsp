<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
<body onload="findfocus()">
	<div id="wrapper">
		<div id="header">
			<c:import url="/main/header.jsp" />
		</div>
		<div id="body">
			<section>
				<div class="container">
					<div class="row">
						<h1>비밀번호 찾기 </h1>
						<div class="block"></div>
						<div align="center" class ="row">${msg_idfind}<br><br>
							<form method="post" action="memberPwFindPro.do" 
								name="memberpwfind" onsubmit="return memberfindcheck()">
								<!-- <div>
								    <label for="m_id">아이디</label> &nbsp;
									<input type="text" name="m_id" style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);"/>
								</div>
								<div>
								    <label for="m_name">이    름</label> &nbsp;&nbsp;
								</div> -->
								<table>
									<tr>
										<th>아이디 </th>
										<td>
											<input type="text" name="m_id" style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);"/>
										</td>
									</tr>
									<tr>
										<th>이 름 </th>
										<td>
											<input type="text" name="m_name" style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);"/>
										</td>
									</tr>
								</table>
								<!--<div>
									<label for="email">E-mail</label>
									<input class="form-control" type="text" name="m_pfemail1" maxlength="100"
											style="width: 200px; border: 1px dashed rgba(164, 164, 164, 1);"
											onchange="findpemail()"/>@
									 <select name=m_pfemail2  onchange="findpemail()">
									      <option value="0">직접입력</option>
									      <option value="naver.com">네이버</option>
									      <option value="daum.net">다음</option>
									      <option value="nate.com">네이트</option>
									      <option value="gmail.com">구글</option> 
									 </select>
								</div>
								 -->		
								<div class="row" align="center">
								   <input type="submit" value="찾기" onclick="findemail()">
								   <input type="button" value="취소" onclick="location='memberLoginForm.do'">
								</div>
							</form>
						</div>
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