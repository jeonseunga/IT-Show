<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<style type="text/css">
				.off-screen {
					display: none;
				}
				
				#nav {
					text-align: center;
				}
				
				#nav a {
					display: inline-block;
					padding: 3px 5px;
				}
		</style>
	</head>
	<body onload="order('${id}','${date}')">
      <div id="wrapper">
         <div id="header">
            <c:import url = "/main/header.jsp"/>
         </div>
         <div id="body">
            <section>
               <div class="container">
                  <div class="row">
                    <div style="margin-bottom : 25px;"><h1 style="display:inline">예매내역</h1><div id = "a" style="float:right; margin-top:50px;"></div></div>
                    <div class="block"></div>
					<div id = "orderlsit">
						<div id="o">
						</div>
					</div>	                 
                  </div> 
               </div>
            </section>
         </div>
         <div id="footer">
            <c:import url = "/main/footer.jsp"/>
         </div>
      </div>
      <script src="/itshow/js/member.js"></script>
   </body>
</html>