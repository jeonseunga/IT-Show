<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>${page_Title}</title>
		<script src="${project}js/info.js"></script>
		<link rel="stylesheet" href="${project}css/style.css">
		<script src="${project}js/jquery-3.2.1.js"></script>
		<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
	</head>
	<body onload="start()">
		<div id="wrapper">
			<div id="header">
				<c:import url = "/main/header.jsp"/>
			</div>
			<div id="body">
			<section>
				<div class="container">
					<div class="row">
						<h1>${page_title_insert}</h1>
						<div class="block"></div>
						<form method="post" action="infoInsertPro.do"
							name="Insertform" enctype="multipart/form-data"
							onsubmit="return insertcheck()">
							<input type="hidden" name="i_num" value="${i_num}">
							<table align="center" style="border-collapse: collapse;">
								<tr>
									<th colspan="2" class="t">${str_thumbnail}</th>
									<th colspan="2" class="u">
										<img style="margin:20px;" id="preImage" width="218px" height="280px"/>
									</th>
									<th colspan="2" class="u">
									<input type="file" id="i_img_thumbnail" name="i_img_thumbnail" style="width:200px;">
									</th>
								</tr>
								<tr>
									<th colspan="2" class="t">${str_subject}</th>
									<th colspan="2" class="u">
										<input style="margin-top:13px; width:275px; border:1px dashed rgba(164, 164, 164, 1);" type="text" name="i_name">
									</th>
									<th class="t">${str_category}</th>
									<th class="u">
										<select name="category" style="margin-top:13px; width:200px; border:1px dashed rgba(164, 164, 164, 1);">
											<option value="0">${str_category_value1}</option>
											<option value="1">${str_category_value2}</option>
											<option value="3">${str_category_value3}</option>
											<option value="2">${str_category_value4}</option>
										</select>
									</th>
								</tr>
								<tr>
									<th colspan="3" class="t">${str_open_day}</th>
									<th colspan="3" class="u">
										<input style="margin-top:10px;" type="date" name="i_open_day"> &nbsp;
										<input type="time" name="i_open_time">
									</th>
								</tr>
								<tr>
									<th colspan="3" class="t">${str_duration}</th>
									<th colspan="3" class="u">
										<input style="margin-top:10px;" type="date" name="i_open_start"> ~ 
										<input type="date" name="i_open_end">
									</th>
								</tr>
								<tr>
									<th colspan="3" class="t">${str_place}</th>
									<td colspan="3" class="u">
										<input type="text" style="margin-top:13px; margin-left:13px; width:400px; border:1px dashed rgba(164, 164, 164, 1);" name="i_location">
									</td>
								</tr>
								<tr>
									<th colspan="3" rowspan="2" class="t">${str_location}</th>
									<td colspan="3" class="u">
										<input type="text" style="margin-top:13px; margin-left:13px; border:1px dashed rgba(164, 164, 164, 1);"id="i_location_zip" name="i_location_zip" readonly>
										<input style="margin-left: 200px;" type="button" value="${str_address_find}" onclick="addresscheck()"></td>
								</tr>
								<tr>
									<td colspan="3" class="u">
										<input type="text" style="width:300px; margin-top:13px; margin-left:13px; border:1px dashed rgba(164, 164, 164, 1);" id="i_location_adr1" name="i_location_adr1" readonly><br>
										<input type="text" style="width:300px; margin-left:13px; border:1px dashed rgba(164, 164, 164, 1);" id="i_location_adr2" name="i_location_adr2"
											placeholder="${str_add_address}">
									</td>
								</tr>
								<tr>
									<th colspan="6" class="u">
									<input type="hidden" name="Dcount" value="0">
										<div id="adddateTR"></div> <br>
									</th>
								</tr>
								<tr style="text-align: right;">
									<td colspan="6" class="u">
										<input type="button" style="margin-top: 13px; margin-right: 13px;" value="${btn_add}" onclick="adddate()">
									</td>
								</tr>
								<tr>
									<th colspan="6" class="u">${str_info}
										<input type="hidden" name="count" value="0">
										<div id="addedFormDiv"></div> <br>
									</th>
								</tr>
								<tr style="text-align: right;">
									<td colspan="6" class="u">
									<input type="button" style="margin-top: 13px; margin-right: 13px;" value="${btn_add}" onclick="addForm()"></td>
								</tr>
								<tr>
									<th colspan="6" class="u">${str_seatImg}
										<input type="hidden" name="SIcount" value="0">
										<div id="addedSImagDiv"></div> <br>
									</th>
								</tr>
								<tr style="text-align: right;">
									<td colspan="6" class="u">
										<input type="button" style="margin-top: 13px; margin-right: 13px;" value="${btn_add}" onclick="addSImag()">
									</td>
								</tr>
								<tr>
									<th colspan="2" class="t">${str_video}</th>
									<th colspan="2" class="u">
										<video id="vi_path" controls="controls" class="video-js vjs-default-skin" data-setup="{}"
										width="300px" height="150px">
											<source type="video/mp4">
										</video>
									</th>
									<th colspan="2" class="u">
										<input style="margin-left: 90px; margin-top: 15px;" type="file" id="video_path" name="i_video_path">
									</th>
								</tr>
								<tr>
									<th colspan="6" class="u">
										<input  style="margin-top: 15px;" class="inputbutton" type="submit" value="${btn_save}">
										<input  style="margin-top: 15px;" class="btn" type="reset" value="${btn_cancel}">
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