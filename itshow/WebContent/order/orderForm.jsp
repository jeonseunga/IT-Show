<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="ordersetting.jsp"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
	</head>
	<body>
      <div id="wrapper">
         <div id="header">
            <c:import url = "/main/header.jsp"/>
         </div>
         <div id="body">
            <section>
               <div class="container">
                  <div class="row">
                     <h1>${selectSeat}</h1>
                     <div class="block"></div>
                        <div id="seat" style="float :left; width:600px;">
                        	<img style="width:550px; height:650px;"src="${path}${img_path}" border="0">
                        </div>
                        <div id="seat1" style="float : right; width:300px;">
							${checkSeat}<br><br>
							<select onchange="change(${i_t_num},${i_d_num},${i_num})" style="width: 250px; border:1px dashed rgba(164, 164, 164, 1);" id="selectfloor">
							    <option value="">${selectFloor}</option>
							    <c:forEach var="floor" items="${floors}">
									<option value="${floor}">${floor}${floorKr}</option>	
								</c:forEach>
							</select><br>
							${seatLevel}<br>
							<select onchange="seat(${i_t_num})" style="width: 250px; border:1px dashed rgba(164, 164, 164, 1);" id="selectseatlevel">
							    <option value="">${checkFloor}</option>
							</select><br>
							
							<div id = "addSeat" >
							<br><br><br><br><br><br><br><br><br><br>
							<a style="margin-left:-25px;">${checkLevel}</a>
							</div>
						</div>
                  </div>
                  <br>
                  <div class='block' style='margin-bottom:30px'></div>
	              <div id ="order" style="text-align:right;" >
	              		<div id = "seatname" style="margin-bottom:20px;"></div>
	              		<div id ="bar"></div>
				  		<h1 style = "font-size:30px;" id = "price"></h1>
				  </div>
				  <div id = "button" style="float : right;"> 
				  </div>
               </div>
               
            </section>
            
            
         </div>
         <div id="footer">
            <c:import url = "/main/footer.jsp"/>
         </div>
      </div>
      <script src="/itshow/js/order.js"></script>
   </body>
</html>