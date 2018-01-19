/**
 * qna.sj
 */

var qnanomember = "로그인 해주세요";
var qnanotitle = "제목을 입력해주세요";
var qnanocontent = "내용을 입력해주세요";
var qnanopassword = "비밀번호를 입력해주세요";
var qnanokeyword = "검색어를 입력해주세요";
var qnabasicmember = "일반/업체 회원만 이용할 수 있습니다.";

var qnanotwritercontent = "비밀번호가 다릅니다";
var qnanotwritermodify = "본인이 작성한 글만 수정 가능합니다";
var qnanotwriterdelete = "본인이 작성한 글만 삭제 가능합니다";


function qnaMemberCheck(memId, comId, adminId, pageNum) {
	if(adminId) {
		alert(qnabasicmember);
		return false;
	}else if(!memId && !comId) {
		alert(qnanomember);
		return false;
	}
	location.replace("qnaWriteForm.do?pageNum=" + pageNum);
}

function qnasearchcheck() {
	if(!qnaSearchForm.keyword.value) {
		alert(qnanokeyword);
		return false;
	}
}

function qnawritecheck() {
	if(!qnaWriteForm.title.value) {
		alert(qnanotitle);
		return false;
	}else if(!qnaWriteForm.content.value) {
		alert(qnanocontent);
		return false;
	}
}

function qnacontentcheck() {
	if(!qnaContentForm.passwd.value) {
		alert(qnanopassword);
		return false;
	}else if(qnaContentForm.passwd.value != qnaContentForm.pw.value) {
		alert(qnanotwritercontent);
		return false;
	}
}

function qnamodifywritercheck(loginId) {
	if(qnaModifyForm.writer.value != loginId) {
		alert(qnanotwritermodify);
		return false;
	}
}

function qnamodifycheck() {
	if(!qnaWriteForm.title.value) {
		alert(qnanotitle);
		return false;
	}else if(!qnaWriteForm.content.value) {
		alert(qnanocontent);
		return false;
	}
}

function qnadeletewritercheck(loginId) {
	if(loginId != "admin") {
		if(qnaDeleteForm.writer.value != loginId) {
			alert(qnanotwriterdelete);
			return false;
		}
	}
}

function qnareplycheck() {
	if(!replyform.content.value) {
		alert(qnanocontent);
		return false;
	}
}

//글작성
function writeReply(num) {
	qnareplycheck();
	var id = replyform.id.value;
	var content = replyform.content.value;
	var date = "작성일";
	$.ajax(
		{
			type : "POST",
			url : "qnaReplyWrite.do",
			data : {
				num : num,
				id : id,
				content : content
			},
			success : function(data) {
				var data = eval("(" + data + ")");
				if(data.reply[0].result == 1) {    
					var newdiv = addReply(data.reply[0].num, data.reply[0].id, data.reply[0].content, data.reply[0].date);
					var replylist = document.getElementById("replylist");
					replylist.appendChild(newdiv);
					replyform.content.value = "";
				}else {
					alert("댓글작성 실패");
				}
			}
		}
	);
}

function addReply(num, id, content, date) {
	var newdiv = document.createElement("div");
	newdiv.innerHTML =  "<div class=\"six columns\">"
					 + 		"<label>글쓴이 </label>"
					 +		"<label class=\"u-full-width\"><b>" + id + "</b></label>"
					 +	"</div>"
					 +	"<div class=\"six columns\">"
					 +		"<label>작성일 </label>"
					 +		"<label class=\"u-full-width\"><b>" + date + "</b></label>"
					 +	"</div><br>"
					 +	"<div style=\"margin-top: 10px; margin-bottom: 1.5rem; border: 1px dashed rgba(164, 164, 164, 1);\">"
					 + 		content 
					 + 	"</div>"
					 +	"<div align=\"right\">"
					 +  	"<input type=\"button\" value=\"삭제\" onclick=\"deleteReply("+num+")\">";
					 +	"</div>";
	newdiv.setAttribute("id", "reply" + num);
	return newdiv;
}

function deleteReply(num) {
	$.ajax(
		{
			type : "POST",
			url : "qnaReplyDelete.do",
			data : {
				num : num,
			},
			success : function(data) {
				if (data == "") {
					return;
				}
				result = eval("(" + data + ")");
				if(result == 1) {
					var replylist = document.getElementById("replylist");
					var deldiv = document.getElementById("reply" + num);
					replylist.removeChild(deldiv);			
				}else {
					alert("삭제 실패");
				}
			}
		}
	);
}

function listReply(num) {
	$.ajax(
		{
			type : "POST",
			url : "qnaReplyList.do",
			data : {
				num : num,
			},
			success : function(data) {
				if (data == "") {
					return;
				}
				var result = eval("(" + data + ")");
				for(var i = 0; i < result.reply.length; i++) {
					var newdiv = addReply(result.reply[i].num, result.reply[i].id, result.reply[i].content, result.reply[i].date);
					var replylist = document.getElementById("replylist");
					replylist.appendChild(newdiv);
				}
			}
		}
	);
}