<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<style type="text/css">
			.acidjs-rating-stars,
			.acidjs-rating-stars label::before
			{
			    display: inline-block;
			    background-color: white;
			}
			 
			.acidjs-rating-stars label:hover,
			.acidjs-rating-stars label:hover ~ label
			{
			    color: #e55d87;
			    background-color: white;
			}
			 
			.acidjs-rating-stars *
			{
			    margin: 0;
			    padding: 0;
			    background-color: white;
			}
			 
			.acidjs-rating-stars input
			{
			    display: none;
			    background-color: white;
			}
			 
			.acidjs-rating-stars
			{
			    unicode-bidi: bidi-override;
			    direction: rtl;
			    background-color: white;
			}
			 
			.acidjs-rating-stars label
			{
			    color: #ccc;
			    background-color: white;
			}
			 
			.acidjs-rating-stars label::before
			{
			    content: "\2605";
			    width: 18px;
			    line-height: 18px;
			    text-align: center;
			    font-size: 18px;
			    cursor: pointer;
			    background-color: white;
			}
			 
			.acidjs-rating-stars input:checked ~ label
			{
			    /* color: #f5b301; */
			    color: #e55d87;
			    background-color: white;
			}
			
			label.labelstyle {
			    color: black;
			    background: white;
			    padding: 0;
			    font-size: unset;
			    display: unset;
			    text-transform: unset;
			}
		</style>
		<script type="text/javascript"> 
		//글작성
		function writeReview(num) {
			var id = reviewform.id.value;
			var content = reviewform.content.value;
			if(!content) {
				alert("내용을 입력해주세요");
				return false;
			}
			var date = "작성일";
			var stars = document.getElementsByName("star");
			var s = document.getElementById("stars");
			var rate = null;
			for(var i=0; i < stars.length; i++) {
				if(stars[i].checked) {
					rate = stars[i].value;
					break;
				}
			}
			$.ajax(
				{
					type : "POST",
					url : "infoReviewWrite.do",
					data : {
						num : num,
						id : id,
						rate : rate,
						content : content
					},
					success : function(data) {
						var data = eval("(" + data + ")");
						if(data.review[0].result == 1) {    
							var newdiv = addReview(data.review[0].num, data.review[0].id, data.review[0].rate + ".0", data.review[0].content, data.review[0].date);
							var reviewlist = document.getElementById("reviewlist");
							//reviewlist.appendChild(newdiv);
							reviewlist.insertBefore(newdiv, reviewlist.childNodes[0]);
							reviewform.content.value = "";
							//별 리셋하기
							for(var i=0; i < stars.length; i++) {
								if(stars[i].checked) {
									stars[i].checked = false;
									break;
								}
							}
							stars[4].checked = true;
						}else {
							alert("댓글작성 실패");
						}
					}
				}
			);
		}
		
		function addReview(num, id, rate, content, date) {
			var newdiv = document.createElement("div");
			newdiv.innerHTML =  "<div class=\"six columns\">"
							 + 		"<div>작성자 <label class=\"labelstyle\"><b>" + id + "</b></div></div>"
							 +	"</div>"
							 +	"<div class=\"six columns\">"
							 +		"<div>작성일 <label class=\"labelstyle\"><b>" + date + "</b></label></div>"
							 +	"</div><br>"
							 +  "<div>"
							 +		"<div>평점 <label class=\"labelstyle\"><b>" + rate + "</b></label></div>"
							 +	"</div>"
							 +	"<div style=\"margin-top: 10px; margin-bottom: 1.5rem; border: 1px dashed rgba(164, 164, 164, 1);\">"
							 + 		content 
							 + 	"</div>"
							 +	"<div align=\"right\">"
							 +  	"<input type=\"button\" value=\"삭제\" onclick=\"deleteReview("+num+")\">";
							 +	"</div>";
			newdiv.setAttribute("id", "review" + num);
			return newdiv;
		}
		
		function deleteReview(num) {
			$.ajax(
				{
					type : "POST",
					url : "infoReviewDelete.do",
					data : {
						num : num,
					},
					success : function(data) {
						if (data === "none") {
							return;
						}
						result = eval("(" + data + ")");
						if(result == 1) {
							var reviewlist = document.getElementById("reviewlist");
							var deldiv = document.getElementById("review" + num);
							reviewlist.removeChild(deldiv);			
						}else {
							alert("본인만 삭제할 수 있습니다");
						}
					}
				}
			);
		}
		
		function listReview(num) {
			$.ajax(
				{
					type : "POST",
					url : "infoReviewList.do",
					data : {
						num : num,
					},
					success : function(data) {
						if (data == "") {
							return;
						}
						var result = eval("(" + data + ")");
						for(var i = 0; i < result.review.length; i++) {
							var newdiv = addReview(result.review[i].num, result.review[i].id, result.review[i].rate, result.review[i].content, result.review[i].date);
							var reviewlist = document.getElementById("reviewlist");
							reviewlist.appendChild(newdiv);
						}
					}
				}
			);
		}
		</script>
	</head>
	<body>
		<form name = "reviewform">
			<c:if test="${sessionScope.adminId == null && sessionScope.memId == null && sessionScope.comId == null}">
			</c:if>
			<c:if test="${sessionScope.memId != null}">
				<div id="review" class="row">
					<div>작성자 <label class="labelstyle" name="id"><b>${sessionScope.memId}</b></label></div>
					평점 
					<div class="acidjs-rating-stars">
						<input type="radio" name="star" id="star1" value="5" /><label style="padding: 0;" for="star1"></label>
						<input type="radio" name="star" id="star2" value="4" /><label style="padding: 0;" for="star2"></label>
					  	<input type="radio" name="star" id="star3" value="3" /><label style="padding: 0;" for="star3"></label>
						<input type="radio" name="star" id="star4" value="2" /><label style="padding: 0;" for="star4"></label>
					 	<input type="radio" name="star" id="star5" value="1" checked/><label style="padding: 0;" for="star5"></label>
					</div>
					<textarea class="u-full-width" name="content"
						style="margin-top: 10px; resize:none; border: 1px dashed rgba(164, 164, 164, 1);"></textarea>
				</div>
				<div align="right">
					<input type="button" value="Submit" onclick="writeReview(${infoDto.i_num})">
				</div>
				<div id="reviewlist"></div>
			</c:if>
			<c:if test="${sessionScope.memId == null}">
				<div align="center" style="margin-top: 10px; margin-bottom: 10px; border: 1px dashed rgba(164, 164, 164, 1);">
					후기는 일반 회원만 작성할 수 있습니다.
				</div>
				<div id="reviewlist"></div>
			</c:if>
		</form>
	</body>
</html>