<%-- <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
</head>
<body>
	<div style="display: inline-block;"><b>공연장</b></div>
	<div id="location" style="display: inline-block;">
		${infoDto.i_location}
	</div><br>
	<div style="display: inline-block;"><b>주소</b></div>
	<div id="address" style="display: inline-block;">
		${infoDto.i_location_addr}
	</div>
	<br><br>
	<div id="map" style="width: 960px; height: 400px; margin-bottom: 10px;"></div>
	<div align="right">
		<input type="button" value="길찾기" onclick="direction('${infoDto.i_location}')">
	</div>
	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=db61f20ad3488c4c7b828a00ee7df9d1&libraries=services"></script>
	<script>
		$(window).on('load', function(){
			var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
		    mapOption = {
		        center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
		        level: 3 // 지도의 확대 레벨
		    };  
		
			// 지도를 생성합니다    
			var map = new daum.maps.Map(mapContainer, mapOption); 
			
			// 주소-좌표 변환 객체를 생성합니다
			var geocoder = new daum.maps.services.Geocoder();
			
			var coords = null;
			
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
			
			function direction(location) {
				window.open(encodeURI('http://map.daum.net/link/to/' + location + ',' + coords.getLat() + ',' + coords.getLng()));
			}
			
			function relayout() {      
			    // 지도를 표시하는 div 크기를 변경한 이후 지도가 정상적으로 표출되지 않을 수도 있습니다
			    // 크기를 변경한 이후에는 반드시  map.relayout 함수를 호출해야 합니다 
			    // window의 resize 이벤트에 의한 크기변경은 map.relayout 함수가 자동으로 호출됩니다
			    map.relayout();
			} 
		});
	</script>
</body>
</html> --%>