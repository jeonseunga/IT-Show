<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
	<title>It Show</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css'>
	<link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.8/typicons.min.css'>
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.1.1/animate.min.css">
	<link rel="stylesheet" href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
	<link rel="stylesheet" href="/itshow/css/style.css">
</head>
<body onload="info()">
	<!-- Header Section –––––––––––––––––––––––––––––––––––––––––––––––––– -->
	<header id="header">
		<ul class="bg-bubbles">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
		<div class="main_nav">
			<div class="sticky">
				<div class="container">
					<div class="mobile-toggle">
						<span></span> <span></span> <span></span>
					</div>
					<c:if test="${sessionScope.adminId == null && sessionScope.memId == null && sessionScope.comId == null}">
						<nav>
							<ul>
								<li><a id="menu1" class="smoothscroll" href="#header">Home</a></li>
								<li><a id="menu2" class="smoothscroll" href="#about">인기검색어</a></li>
								<li><a id="menu3" class="smoothscroll" href="#team">공연일정</a></li>
								<li><a id="menu4" class="smoothscroll" href="#skills">날씨</a></li>
								<li><a id="menu5" style="margin-left: 300px;" href="memberLoginForm.do">로그인</a></li>
								<li><a id="menu6" href="memberRegisterForm.do">회원가입</a></li>
								<li><a id="menu7" href="customerService.do">고객센터</a></li>
							</ul>
						</nav>
					</c:if>
					<c:if test="${sessionScope.adminId != null}">
						<nav>
							<ul>
								<li><a id="menu1" class="smoothscroll" href="#header">Home</a></li>
								<li><a id="menu2" class="smoothscroll" href="#about">인기검색어</a></li>
								<li><a id="menu3" class="smoothscroll" href="#team">공연일정</a></li>
								<li><a id="menu4" class="smoothscroll" href="#skills">날씨</a></li>
								<li><a id="menu5" style="margin-left: 300px;" href="logout.do?id=adminId">로그아웃</a></li>
								<li><a id="menu6" href="memberAdminMyPage.do">마이페이지</a></li>
								<li><a id="menu7" href="customerService.do?m_code=${m_code}">고객센터</a></li>
							</ul>
						</nav>
					</c:if>
					<c:if test="${sessionScope.memId != null}">
						<nav>
							<ul>
								<li><a id="menu1" class="smoothscroll" href="#header">Home</a></li>
								<li><a id="menu2" class="smoothscroll" href="#about">인기검색어</a></li>
								<li><a id="menu3" class="smoothscroll" href="#team">공연일정</a></li>
								<li><a id="menu4" class="smoothscroll" href="#skills">날씨</a></li>
								<li><a id="menu5" style="margin-left: 300px;" href="logout.do?id=memId">로그아웃</a></li>
								<li><a id="menu6" href="memberCusMyPage.do">마이페이지</a></li>
								<li><a id="menu7" href="customerService.do?m_code=${m_code}">고객센터</a></li>
							</ul>
						</nav>
					</c:if>
					<c:if test="${sessionScope.comId != null}">
						<nav>
							<ul>
								<li><a id="menu1" class="smoothscroll" href="#header">Home</a></li>
								<li><a id="menu2" class="smoothscroll" href="#about">인기검색어</a></li>
								<li><a id="menu3" class="smoothscroll" href="#team">공연일정</a></li>
								<li><a id="menu4" class="smoothscroll" href="#skills">날씨</a></li>
								<li><a id="menu5" style="margin-left: 300px;" href="logout.do?id=comId">로그아웃</a></li>
								<li><a id="menu6" href="compMypage.do">마이페이지</a></li>
								<li><a id="menu7" href="customerService.do?m_code=${m_code}">고객센터</a></li>
							</ul>
						</nav>
					</c:if>
				</div>
			</div>
		</div>
		<div class="title">
			<br><br><br><br><br><br>
			<!-- <div class="smallsep heading">
			</div> -->
			<h1 class="heading">
				<img style="width: 450px; align: center; vertical-align: bottom;" src="/itshow/images/show.png">
			</h1>
			<h2 class="heading"> 여기 티켓 IT SHOW </h2><br><br>
			<a class="heading" href="infoList.do?category=concert&sort=recent">콘서트</a>
			<a class="heading" href="infoList.do?category=musical&sort=recent">뮤지컬</a>
			<a class="heading" href="infoList.do?category=drama&sort=recent">연&nbsp;극</a>
			<br><br><br><br><br>
		</div>	
	</header>
		<div class="side-container">
		<div class="side-bar btn-toggle-side-bar">
			<div class="hamb-box">
				<div class="hamb-bar">
					<img style="width: 25px; vertical-align: bottom;" src="/itshow/images/clockB.svg" alt="">
				</div>
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
	<!-- About Section –––––––––––––––––––––––––––––––––––––––––––––––––– -->
	<section id="about">
		<div class="container">
			<div class="row">
				<h1>인기검색어</h1>
				<div class="block"></div>
				<br><c:import url = "ranking.jsp"/>
			</div>
		</div>
	</section>
	<!-- Team Section –––––––––––––––––––––––––––––––––––––––––––––––––– -->
	<section id="team">
		<div class="container">
			<div class="row">
				<h1>공연일정</h1>
				<div class="block"></div>
				<c:import url = "calendar.jsp"/>
			</div>
		</div>
	</section>
	<!-- Skills Section –––––––––––––––––––––––––––––––––––––––––––––––––– -->
	<section id="skills">
		<div class="container">
			<h1>날씨</h1>
			<div class="block"></div>
			<div class="row">
				<div class="body2">
					<div class="wrapper2">
						<c:import url = "weather.jsp"/>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Footer Section –––––––––––––––––––––––––––––––––––––––––––––––––– -->
	<footer>
		<div class="container">
			<div class="nine columns">
				<p> ©2017 It Show </p>
			</div>
			<div class="three columns">
				<span class="typcn typcn-social-facebook-circular socialIcons"></span>
				<span class="typcn typcn-social-instagram-circular socialIcons"></span>
				<span class="typcn typcn-social-google-plus-circular socialIcons"></span>
				<span class="typcn typcn-social-linkedin-circular socialIcons"></span>
			</div>
		</div>
	</footer>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js'></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js"></script>
	<script src="/itshow/js/index.js"></script>
</body>
</html>