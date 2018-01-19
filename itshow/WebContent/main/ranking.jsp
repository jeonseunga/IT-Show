<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style type="text/css">
		.descs {
			position: relative;
			height: 250px;
			clear: both;
		}
		
		.desc {
			float: left;
		}
		
		.desc label {
			display: inline-block;
			height: 38px;
			padding: 0 30px;
			color: black;
			text-align: center;
			font-size: 15px;
			font-weight: 600;
			line-height: 38px;
			letter-spacing: .1rem;
			text-transform: uppercase;
			text-decoration: none;
			white-space: nowrap;
			background: #fae5f5;
			border-radius: 0px;
			border: 0;
			cursor: pointer;
			box-sizing: border-box;
		}
		
		.desc [type=radio] {
			display: none;
		}
		
		.desc .con {
			position: absolute;
			top: 38px;
			left: 0;
			background: white;
			right: 0;
			bottom: 0;
			padding: 20px;
			border: 1px solid #ccc;
			overflow-x: hidden;
			z-index: -1;
		}
		
		[type=radio]:checked ~ label {
			background: #d4d4f7; text-decoration : none;
			z-index: 2;
			text-decoration: none;
			
		}
		
		[type=radio]:checked ~ label ~ .con {
			z-index: 1;
		}
		
		.ranklist {
			font-size: 20px;
		}
		
		.ranktime{
			text-align: right;
		}
	</style>
	</head>
	<body>
		<div id="category2" style="margin-left: 20px"></div>
		<br>
		<div class="descs"> 
			<div class="desc">
				<input type="radio" id="tab-1" name="tab-group-1" checked>
				<label for="tab-1">콘서트</label>         
				<div class="con" id="concertranking"></div> 
			</div>
			<div class="desc">
				<input type="radio" id="tab-2" name="tab-group-1">
				<label for="tab-2">연 극</label>
				<div class="con" id="dramaranking"></div> 
			</div> 
			<div class="desc">
				<input type="radio" id="tab-3" name="tab-group-1">
				<label for="tab-3">뮤지컬</label>
				<div class="con" id="musicalranking"></div> 
			</div>
		</div>
	</body>
</html>