<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
</head>
	<div class='wrapper2'>
		<search>
			<form>
				<input class='searchbar transparent' id='search' type='text'
					placeholder='enter city, country' autocomplete="off" 
					style="color:black; border:1px dashed rgba(164, 164, 164, 1);"/>
				&nbsp;&nbsp;&nbsp;
				<input class='button2' id='button' type="submit" value='GO'/>
			</form>
		</search>
		<div class='panel'>
			<h3 style="color:black;"class='city' id='city'></h3>
			<div class="block"></div>
			<div class='weather' id='weather'>
				<div class='group secondary'>
					<label id='dt'></label><br>
					<label id='description'></label>
				</div>
				<div class='group secondary'>
					<label id='wind'></label><br>
					<label id='humidity'></label>
				</div>
				<div class='temperature' id='temperature'>
					<h5 class='temp' id='temp'>
						<i id='condition'></i>
						<span id='num'></span>
						<span class='divider secondary'></span>&deg;C
					</h5>
				</div>
				<div class='forecast' id='forecast'></div>
			</div>
		</div>
		<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
	</div>
</html>