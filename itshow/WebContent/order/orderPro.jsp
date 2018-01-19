<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="ordersetting.jsp"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
	</head>
	<body onload="orderlist('${n}',${s},'${id}')">
		<div id="wrapper">
         <div id="header">
            <c:import url = "/main/header.jsp"/>
         </div>
         <div id="body">
            <section>
               <div class="container">
                  <div class="row" style="height:900px;">
                     <h1>${payPage}</h1>
                     <div class="block"></div>
                     	<form id="order">
							<table>
								<tr>
									<td style="width:200px;"rowspan="5"><img style="width:180px; height:240px;"src="${path}${img_path}" border="0"></th>
									<td style="width:100px;"><h1 style="font-size:18px">${info_title}</h1></td>
									<td style="width:200px;"><h1 style="font-size:18px">${info.i_name}</h1></td>
									<td></td>
								</tr>
								<tr>
									<td><h1 style="font-size:18px">${info_date}</h1></td>
									<td><h1 style="font-size:18px">${date.i_date}</h1></td>
									<td></td>
								</tr>
								<tr>
									<td><h1 style="font-size:18px">${info_time}</h1></td>
									<td><h1 style="font-size:18px">${time.i_t_time}&nbsp;&nbsp;(${time.i_t_duration})</h1></td>
									<td></td>
								</tr>
								<tr>
									<td><h1 style="font-size:18px">${info_seat}</h1></td>
									<td><h1 id="seat"style="font-size:18px"></h1></td>
									<td style="width:100px">
									<a onclick="reChoice('${n}','${num}','${date.i_date}','${time.i_t_time}')">다시선택</a>
									</td>
								</tr>
								<tr>
									<td><h1 style="font-size:18px">${info_price}</h1></td>
									<td><h1 id="price" style="font-size:18px"></h1></td>
									<td></td>
								</tr>
							</table>                     	
                     	</form>
                     	<div class="block" style="margin-bottom:30px"></div>
                     	<div id="point" style="height:200px">
                     		${pointLine}<br><br>
                     		<div id="point-1" style="float :left;">
	                     		${useablePoint}&nbsp;&nbsp;&nbsp;&nbsp;
	                     		<input style="text-align:right; width : 100px; border:1px dashed rgba(164, 164, 164, 1);"
	                     				type="text" id="mypoint" value="" readonly>
	                     		&nbsp;&nbsp;&nbsp;&nbsp;${usePoint}&nbsp;&nbsp;&nbsp;&nbsp;
	                     		<div id = "dp" style="display:inline;"></div>
                     		</div>
                     		<div style="margin-top:85px;text-align :right;"><h1 id="reprice"></h1></div> 
                     	</div>
                     	<div class="block" style="margin-top:30px"></div>
                     	${selectPay}<br><br>
                     	<select style="width: 250px; border:1px dashed rgba(164, 164, 164, 1);" id="pay">
							<option value="">${otn_selectPay}</option>
							<option value="${otn_card}">${otn_card}</option>
							<option value="${otn_cash}">${otn_cash}</option>
							<option value="${otn_phone}">${otn_phone}</option>
						</select><br>
						<div class="block" style="margin-top:30px"></div>
						<div style="margin-top:10px;margin-left:25px;width:906px;border:1px dashed rgba(164, 164, 164, 1);">
							<div style="margin-top:10px; margin-left:20px">
							${msg_mail1}<br>
							${msg_mail2}
							</div><br>
							<div style="text-align:right;margin-right:20px">
								<input class="formcheckbox" type="checkbox" name="check" value="1"
                  					onclick="oneCheck(this);">${yes}&nbsp;&nbsp;&nbsp;&nbsp;
           						<input class="formcheckbox" type="checkbox" name="check" value="0"
                  					onclick="oneCheck(this);">${no}
                  			</div>
						</div>
						<div style="margin-top:30px"><input style="float :right;"type="button" onclick="pay('${info.i_name}','${date.i_date}','${time.i_t_time}','${n}','${id}')"value="${go_pay}"></div>
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