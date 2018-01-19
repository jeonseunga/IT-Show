<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
	<head>
		<title>It Show</title>
		<link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css'>
		<link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.8/typicons.min.css'>
		<link rel="stylesheet" href="/itshow/css/style.css">
	</head>
	<body onload="myTimer()">
	<!-- Header Section –––––––––––––––––––––––––––––––––––––––––––––––––– -->		
	<div class="main_nav">
		<div class="colorchange">
			<div class="container">
				<div class="mobile-toggle">
					<span></span> <span></span> <span></span>
				</div>
				<c:if test="${sessionScope.adminId == null && sessionScope.memId == null &&  sessionScope.comId == null}">
					<nav>
						<ul>
							<li><a class="changea" href="main.do">Home</a></li>
							<li><a class="changea" href="infoList.do?category=concert&sort=recent">콘서트</a></li>
							<li><a class="changea" href="infoList.do?category=musical&sort=recent">뮤지컬</a></li>
							<li><a class="changea" href="infoList.do?category=drama&sort=recent">연극</a></li>
							<li><a class="changea" style="margin-left: 300px;" href="memberLoginForm.do">로그인</a></li>
							<li><a class="changea" href="memberRegisterForm.do">회원가입</a></li>
							<li><a class="changea" href="customerService.do">고객센터</a></li>
						</ul>
					</nav>
				</c:if>
				<c:if test="${sessionScope.adminId != null}">
					<nav>
						<ul>
							<li><a class="changea" href="main.do">Home</a></li>
							<li><a class="changea" href="infoList.do?category=concert&sort=recent">콘서트</a></li>
							<li><a class="changea" href="infoList.do?category=musical&sort=recent">뮤지컬</a></li>
							<li><a class="changea" href="infoList.do?category=drama&sort=recent">연극</a></li>
							<li><a class="changea" style="margin-left: 300px;" href="logout.do?id=adminId">로그아웃</a></li>
							<li><a class="changea" href="memberAdminMyPage.do">마이페이지</a></li>
							<li><a class="changea" href="customerService.do">고객센터</a></li>
						</ul>
					</nav>
				</c:if>
				<c:if test="${sessionScope.memId != null}">
					<nav>
						<ul>
							<li><a class="changea" href="main.do">Home</a></li>
							<li><a class="changea" href="infoList.do?category=concert&sort=recent">콘서트</a></li>
							<li><a class="changea" href="infoList.do?category=musical&sort=recent">뮤지컬</a></li>
							<li><a class="changea" href="infoList.do?category=drama&sort=recent">연극</a></li>
							<li><a class="changea" style="margin-left: 300px;" href="logout.do?id=memId">로그아웃</a></li>
							<li><a class="changea" href="memberCusMyPage.do">마이페이지</a></li>
							<li><a class="changea" href="customerService.do">고객센터</a></li>
						</ul>
					</nav>
				</c:if>
				<c:if test="${sessionScope.comId != null}">
					<nav>
						<ul>
							<li><a class="changea" href="main.do">Home</a></li>
							<li><a class="changea" href="infoList.do?category=concert&sort=recent">콘서트</a></li>
							<li><a class="changea" href="infoList.do?category=musical&sort=recent">뮤지컬</a></li>
							<li><a class="changea" href="infoList.do?category=drama&sort=recent">연극</a></li>
							<li><a class="changea" style="margin-left: 300px;" href="logout.do?id=comId">로그아웃</a></li>
							<li><a class="changea" href="compMypage.do">마이페이지</a></li>
							<li><a class="changea" href="customerService.do">고객센터</a></li>
						</ul>
					</nav>
				</c:if>
			</div>
		</div>
	</div>
	<div class="side-container">
		<div class="side-bar btn-toggle-side-bar">
			<div class="hamb-box">
				<!-- <img style="width: 30px; vertical-align: bottom;" src="/main/images/clockB.svg" alt=""> -->
				<div class="hamb-bar">
					<img style="width: 25px; vertical-align: bottom;" src="/itshow/images/clockB.svg" alt="">
				</div>
				<!-- <div class="hamb-bar">
					<div class="bar bar02 "></div>
				</div>
				<div class="hamb-bar">
					<div class="bar bar03"></div>
				</div> -->
			</div>
			<!--hamb-box-->
			<div class="icon">
				<div class="icon01">
					<div id="clock">시계</div>
				</div>
			</div>
			<!--icon-->
		</div>
		<!--side-bar-->
	</div>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js'></script>
	<script src="/itshow/js/header.js"></script>
	</body>
</html>