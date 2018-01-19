<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="setting.jsp"%>
<!DOCTYPE html>
<html>
<head>
	<script src="/itshow/js/jquery-3.2.1.js"></script>
	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=db61f20ad3488c4c7b828a00ee7df9d1&libraries=services"></script>
	<style type="text/css">
	/* Style the tab */
	div.tab {
		float: left;
	}
	
	/* Style the buttons inside the tab */
	div.tab button {
		display: inline-block;
		height: 38px;
		color: #fff;
		text-align: center;
		font-size: 11px;
		font-weight: 600;
		line-height: 38px;
		letter-spacing: .1rem;
		text-transform: uppercase;
		text-decoration: none;
		white-space: nowrap;
		background: #5fc3e4;
		border-radius: 0px;
		border: 0;
		cursor: pointer;
		box-sizing: border-box;
	}
	
	/* Change background color of buttons on hover */
	div.tab button:hover {
		background: #e55d87;
	}
	
	/* Create an active/current tablink class */
	div.tab button.active {
		background: #e55d87;
	}
	
	/* Style the tab content */
	.tabcontent {
		display: none;
		padding: 6px 12px;
		border-top: none;
	}
	</style>
	<script type="text/javascript">
		function startContent(num) {
			infocal(num);
			listReview(num);
			openCity(event, 'content');
		}
		
		var coords = null;
		function openCity(evt, name) {
		    var i, tabcontent, tablinks;
		    tabcontent = document.getElementsByClassName("tabcontent");
		    for (i = 0; i < tabcontent.length; i++) {
		        tabcontent[i].style.display = "none";
		    }
		    tablinks = document.getElementsByClassName("tablinks");
		    for (i = 0; i < tablinks.length; i++) {
		        tablinks[i].className = tablinks[i].className.replace(" active", "");
		    }
		    document.getElementById(name).style.display = "block";
		    evt.currentTarget.className += " active";
		    //document.getElementById('map').innerHTML = "";
		    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
		    mapOption = {
		        center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
		        level: 3 // 지도의 확대 레벨
		    };  
		
			// 지도를 생성합니다    
			var map = new daum.maps.Map(mapContainer, mapOption); 
			
			// 주소-좌표 변환 객체를 생성합니다
			var geocoder = new daum.maps.services.Geocoder();
			
			
			
			// 주소로 좌표를 검색합니다
			// 공연장 주소로 수정
			var addr = document.getElementById("address").innerHTML;
			var loc = document.getElementById("location").innerHTML;
			geocoder.addressSearch(addr, function(result, status) {		
			    // 정상적으로 검색이 완료됐으면 
			     if (status === daum.maps.services.Status.OK) {		
			        coords = new daum.maps.LatLng(result[0].y, result[0].x);	
			        // 결과값으로 받은 위치를 마커로 표시합니다
			        var marker = new daum.maps.Marker({
			            map: map,
			            position: coords
			        });	
			        // 인포윈도우로 장소에 대한 설명을 표시합니다
			        var infowindow = new daum.maps.InfoWindow({
			        	//공연장 이름으로 수정
			            content: '<div style="width:150px;text-align:center;padding:6px 0;">'+loc+'</div>'
			        });
			        infowindow.open(map, marker);	
			        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
			        map.setCenter(coords);
			    } 
			});
		}
		
		function direction(location) {
			window.open(encodeURI('http://map.daum.net/link/to/' + location + ',' + coords.getLat() + ',' + coords.getLng()));
		}
	</script>
</head>
<body onload="startContent(${infoDto.i_num})">
	<div id="wrapper">
		<div id="header">
			<c:import url = "/main/header.jsp"/>
		</div>
		<div id="body">
			<section>
				<div class="container">
					<div class="row">
						<h1>${infoDto.i_name}</h1> 
						<div class="block" style="margin-bottom: 0;"></div>
						<div align="right">
							<b>${str_readcount}</b> ${infoDto.i_readcount}
						</div>
					</div>
					<br><br>
					<div class="row">
						<div class="four columns">
							<div align="center"><img width="218px" height="280px" src="/itshow/upload/${infoDto.i_img_thumbnail}"></div>
							<div align="center">
								<b>평점</b> <fmt:formatNumber type = "number" maxFractionDigits = "1" value = "${infoDto.i_score}" />
							</div>
							<c:if test="${sessionScope.memId != null}">
								<c:if test="${scrap != 0}">
									<div align="center">
										<b>스크랩</b>
										<a href="scrapForm.do?num=${infoDto.i_num}"><b style="color:red; font-size: 23px;">♥</b></a>
									</div>
								</c:if>
								<c:if test="${scrap == 0}">
									<div align="center"><b>스크랩</b><a href="scrapForm.do?num=${infoDto.i_num}"><b style="color:red; font-size: 20px;">♡</b></a></div>
								</c:if>
							</c:if>
						</div>
						<div class="four columns">
							<b>${str_location}</b> ${infoDto.i_location}<br>
							<b>공연일</b> ${infoDto.i_period}<br>
							<b>${str_start}</b>
							<fmt:formatDate value="${infoDto.i_open_date}" type="both" pattern="yyyy-MM-dd HH:mm"/>
							<div class="block" style="margin-top: 10px; margin-bottom: 10px;"></div>
							<b>${str_price}</b><br>
							<c:forEach var="infoSeatDto" items="${infoSeatDto}" varStatus="status">
								<b style="color: #db658f; padding: 10px;">${infoSeatDto.i_s_level}</b>
								<fmt:formatNumber type = "number" pattern = "###,###" value = "${infoSeatDto.i_s_price}" /> <br>
							</c:forEach>
						</div>
						<div class="four columns">
							<c:import url = "infoContentCal.jsp"/>
						</div>
					</div>
					<div class="row" style="margin-top: 50px; display: block;
    					overflow: -webkit-paged-y;">
						<div class="tab">
							<button class="tablinks" onclick="openCity(event, 'review')">관람 후기</button>
							<button class="tablinks" onclick="openCity(event, 'daummap')">공연장 안내</button>
							<button class="tablinks" onclick="openCity(event, 'content')">상세정보</button>
						</div>
						<br><br>
						<div id="content" class="tabcontent">
							<br>
							<c:if test="${infoDto.i_video_path != null && infoDto.i_video_path != 'null'}">
								<div align="center">
									<video id="vi_path" controls="controls" class="video-js vjs-default-skin"
										data-setup="{}" width="500px" height="auto">
										<source src="/itshow/upload/${infoDto.i_video_path}"
											type="video/mp4">
									</video>
								</div>
							</c:if>
							<c:forEach var="infoContentDto" items="${infoContentDto}">
								<div align="center">
									<img src="/itshow/upload/${infoContentDto.i_c_img_path}">
									<br>
									${infoContentDto.i_c_content}
								</div>
							</c:forEach>
						</div>
						<div id="daummap" class="tabcontent">
							<div style="display: inline-block;"><b>공연장</b></div>
							<div id="location" style="display: inline-block;">
								${infoDto.i_location}</div>
							<br>
							<div style="display: inline-block;">
								<b>주소</b>
							</div>
							<div id="address" style="display: inline-block;">
								${infoDto.i_location_addr}</div>
							<br> <br>
							<div id="map" style="width: 960px; height: 400px; margin-bottom: 10px;"></div>
							<div align="right">
								<input type="button" value="길찾기" onclick="direction('${infoDto.i_location}')">
							</div>
						</div>
						<div id="review" class="tabcontent">
							<c:import url = "infoReview.jsp"/>
						</div>		
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