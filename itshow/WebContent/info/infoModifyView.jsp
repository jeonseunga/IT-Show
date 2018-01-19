<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@include file="setting.jsp"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<script src="/itshow/js/info.js"></script>
		<script src="/itshow/js/jquery-3.2.1.js"></script>
		<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
		<link rel="stylesheet" href="/itshow/css/style.css">
	</head>
	<body onload="modiStart(${num}, ${infoDto.c_category})">
		<div id="wrapper">
			<div id="header">
				<c:import url = "/main/header.jsp"/>
			</div>
			<div id="body">
				<section>
					<div class="container">
						<div class="row">
							<h1>${page_title_modi}</h1>
						<div class="block"></div>
						<form method="post" action="infoModifyPro.do"
							name="infoModiForm" enctype="multipart/form-data"
							onsubmit="return modicheck()">
							<input type="hidden" name="i_num" value="${num}">
							<input type="hidden" name="m_code" value="${m_code}">
							<input type="hidden" name="title" value="${title}">
							<table align="center" style="border-collapse: collapse;">
								<tr>
									<th colspan="2" class="t">${str_thumbnail}</th>
									<th colspan="2" class="u">
										<img style="margin:20px;" id="preImage" width="218px" height="280px" src="/itshow/upload/${infoDto.i_img_thumbnail}"/>
										<input type="hidden" name="thumbnail_path" value="${infoDto.i_img_thumbnail}">
									</th>
									<th colspan="2" class="u">
										<input type="file" id="i_img_thumbnail" name="i_img_thumbnail" style="width:200px;">
									</th>
								</tr>
								<tr>
									<th colspan="2" class="t">${str_subject}</th>
									<th colspan="2" class="u">
										<input style="margin-top:13px; width:275px; border:1px dashed rgba(164, 164, 164, 1);" 
										type="text" name="i_name" value="${infoDto.i_name}">
									</th>
									<th class="t">${str_category}</th>
									<th class="u">
										<select id="modiSelect" name="category"
										style="margin-top:13px; width:200px; border:1px dashed rgba(164, 164, 164, 1);">
											<option value="1">${str_category_value2}</option>
											<option value="3">${str_category_value3}</option>
											<option value="2">${str_category_value4}</option>
										</select>
									</th>
								</tr>
								<!-- 예매시작일 구분기호로 나누기 -->
								<tr>
									<th colspan="3" class="t">${str_open_day}</th>
									<th colspan="3" class="u">
										<c:set var ="e" value="${fn:split(infoDto.i_open_date,' ')}"/>
										<input style="margin-top:10px;" type="date" name="i_open_day" 
										value="${e[0]}"> &nbsp;
										<input type="time" name="i_open_time" value="${e[1]}">
									</th>
								</tr>
								<!-- 공연기간 구분기호로 나누기 -->
								<tr>
									<th colspan="3" class="t">${str_duration}</th>
									<th colspan="3" class="u">
									<c:set var ="t" value="${fn:split(infoDto.i_period,'~')}"/>
										<input style="margin-top:10px;" type="date" name="i_open_start" value="${t[0]}"> ~ 
										<input type="date" name="i_open_end" value="${t[1]}">
									</th>
								</tr>
								<tr>
									<th colspan="3" class="t">${str_place}</th>
									<td colspan="3" class="u">
										<input type="text" name="i_location" value="${infoDto.i_location}"
										style="margin-top:13px; margin-left:13px; width:400px; border:1px dashed rgba(164, 164, 164, 1);">
									</td>
								</tr>
								<tr>
									<th colspan="3" rowspan="2" class="t">${str_location}</th>
									<td colspan="3" class="u">
										<input type="text" id="i_location_zip" name="i_location_zip" value="${infoDto.i_location_zip}" readonly
										style="margin-top:13px; margin-left:13px; border:1px dashed rgba(164, 164, 164, 1);">
										<input type="button" value="${str_address_find}" onclick="addresscheck()"
										style="margin-left: 200px;">
									</td>
								</tr>
								<!-- 공연장 주소 구분기호로 나누기 -->
								<tr>
									<td colspan="3" class="u">
									<c:set var ="a" value="${fn:split(infoDto.i_location_addr,'/')}"/>
										<input type="text" id="i_location_adr1" name="i_location_adr1" value="${a[0]}" readonly
										style="width:300px; margin-top:13px; margin-left:13px; border:1px dashed rgba(164, 164, 164, 1);"><br>
										<input type="text" id="i_location_adr2" name="i_location_adr2" value="${a[1]}"
										style="width:300px; margin-left:13px; border:1px dashed rgba(164, 164, 164, 1);"
										placeholder="${str_add_address}">
									</td>
								</tr>
								<tr>
									<th colspan="6" class="u">
										<input type="hidden" name="DropDcount" value="0">
										<div id="dropTR"></div>
									</th>
								</tr>
								<tr style="text-align: right;">
									<td colspan="6" class="u">
									<input type="button" value="${btn_add}" onclick="dropdate()"
									style="margin-top: 13px; margin-right: 13px;">
									</td>
								</tr>
								<tr>
									<th colspan="6" class="u">${str_info}
										<input type="hidden" name="Dropcount" value="0">
										<div id="DropFormDiv">
										<c:forEach var="a" begin="0" end="${size}">
											<div id="himg_${a}">
												<input type="hidden" name="himg_${a}" value="0">
												<input type="hidden" name="himg_path_${a}" 
												value="${contentDto[a].i_c_img_path}">
											</div>
										</c:forEach>
										</div>
									</th>
								</tr>
								<tr style="text-align: right;">
									<td colspan="6" class="u">
									<input type="button" value="${btn_add}" onclick="dropForm()"
									style="margin-top: 13px; margin-right: 13px;">
									</td>
								</tr>
								<tr>
									<th colspan="6" class="u">${str_seatImg}
										<input type="hidden" name="DropSIcount" value="0">
										<div id="DropSImagDiv">
										<c:forEach var="b" begin="0" end="${length}">
											<div id="simg_${b}">
												<input type="hidden" name="simg_${b}" value="0">
												<input type="hidden" name="simg_path_${b}" 
												value="${seatimgDto[b].s_img_path}">
											</div>
										</c:forEach>
										</div>
									</th>
								</tr>
								<tr style="text-align: right;">
									<td colspan="6" class="u">
										<input style="margin-top: 13px; margin-right: 13px;" type="button" 
										value="${btn_add}" onclick="dropSImag()">
									</td>
								</tr>
								<tr>
									<th colspan="2" class="t">${str_video}</th>
									<th colspan="2" class="u">
									<input type="hidden" name="video_path" value="${infoDto.i_video_path}">
										<video id="vi_path" controls="controls" class="video-js vjs-default-skin" data-setup="{}"
										width="300px" height="150px">
											<source src="/itshow/upload/${infoDto.i_video_path}" type="video/mp4">
										</video>
									</th>
									<th colspan="2" class="u">
										<input style="margin-left: 90px; margin-top: 15px;" type="file" id="video_path" name="i_video_path">
									</th>
								</tr>
								<tr>
									<th colspan="6" class="u">
										<input style="margin-top: 15px;" class="inputbutton" type="submit" value="${btn_save}">
										<input style="margin-top: 15px;" class="inputbutton" type="button" value="${btn_list}"
										onclick="location='compInfoList.do?m_code=${m_code}&title=${title}'">
									</th>
								</tr>
							</table>
						</form>
						</div>
					</div>
				</section>
			</div>
			<div id="footer">
				<c:import url = "/main/footer.jsp"/>
			</div>
		</div>
	</body>
</html>