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
                  <div class="row" style="height:450px;">
                     <h1>${completeOrder}</h1>
                     <div class="block"></div>
                     <div style="margin-top:20px;margin-left:42px;width:887px;border:1px dashed rgba(164, 164, 164, 1);">
							<div style="margin-top:42px;text-align : center">
								<h1 style="font-size:20px">${msg_comp1}<br>
								${msg_comp2}</h1>
							</div><br>
					</div>
					<br>
					<div style="text-align : center">
						<input type="button" value="MYPAGE" onclick="location='memberCusMyPage.do'">
						<input type="button" value="Home" onclick="location='main.do'">
					</div>
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