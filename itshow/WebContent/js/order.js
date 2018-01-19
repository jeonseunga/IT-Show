/**
 * 
 */

var payx = "결제수단을 선택하시기 바랍니다.";
var mailx = "메일수신 여부를 체크하시기 바랍니다.";
var seatx = "예약된 좌석입니다.";
var buyseatx = "좌석을 선택하시기 바랍니다.";
var checkorder = "결제하시겠습니까?";
var overpoint = "보유 포인트만 사용이  가능합니다.";
var checkusepoint = "1000P이상만 사용가능합니다.";
var payerror = "결제에 실패했습니다.다시시도해주세요.";




function oneCheck(chk){
    var obj = document.getElementsByName("check");
    for(var i=0; i<obj.length; i++){
        if(obj[i] != chk){
            obj[i].checked = false;
        }
    }
}



var i_d_num2;
var i_num2;
var i_t_num2;
var floor;
function change(i_t_num,i_d_num, i_num){
	
	i_d_num2=i_d_num;
	i_num2=i_num;
	i_t_num2 =i_t_num;
	
	$('#selectseatlevel').children('option').remove();
	
	var select = "<option value=\"select\">" + "좌석등급을 선택해 주세요" + "</option>";
	$("#selectseatlevel").append(select);
	
	floor = $("#selectfloor option:selected").val();

	$.ajax(
			{
				type: "POST",
				url : "seatLevelList.do",
				data : {
					i_t_num : i_t_num,
					floor : floor
				},
				dataType : 'text',
				success : function(data){
					if (data == "") {
						return;
					}
					var result = eval("(" + data + ")");
					for(var i = 0; i < result.data.length; i++) {
						var level = result.data[i].level;
						var option = "<option value="+ level +">" + result.data[i].level+" "+result.data[i].price+"원"+ "</option>";
						$("#selectseatlevel").append(option);
					}

				},
				error : function(e) {
					$('#result').html(e);
				}
			}		
		);
}


function seat(i_t_num){
	$('#addSeat').empty();
	$('#selectseat').children('option').remove();
	var level = $("#selectseatlevel option:selected").val();
	$.ajax(
			{
				type: "POST",
				url : "seatList.do",
				data : {
					i_t_num : i_t_num,
					floor : floor,
					level : level
				},
				dataType : 'text',
				success : function(data){
					if (data == "") {
						return;
					}
					var result = eval("(" + data + ")");
					var i_s_num = [];
					for(var i = 0; i < result.data.length; i++) {
						i_s_num[i] = result.data[i].i_s_num;
						sleep(10);
						getSeats(i_s_num[i]);
					}
				},
				error : function(e) {
					$('#result').html(e);
				}
			}		
		);
	
}


function sleep(num){
	 var now = new Date();
	   var stop = now.getTime() + num;
	   while(true){
		 now = new Date();
		 if(now.getTime() > stop)return;
	   }
}

function getSeats(i_s_num){
	$.ajax(
			{
				type: "POST",
				url : "seatorder.do",
				data : {
					i_s_num : i_s_num
				},
				dataType : 'text',
				success : function(data){
					if (data == "") {
						return;
					}
					var result = eval("(" + data + ")");
					for(var i = 0; i < result.data.length; i++) {
						var Isnum = result.data[i].i_s_num;
						var seatname = result.data[i].i_s_name;
						var select = seatname+" "+result.data[i].i_t_count+"석"+"<br><select onchange=\"order('"+Isnum+"\')\" style='width: 250px; border:1px dashed rgba(164, 164, 164, 1);' id='"+Isnum+"'>" +
												"<option value=''>선택안함</option>"
												+"</select><br>";
						$("#addSeat").append(select);
					}
					
					for(var i = 0; i < result.seatdata.length; i++) {
						if(result.seatdata[i].i_s_num=Isnum){
							var option = "<option value="+result.seatdata[i].s_o_num+">" + result.seatdata[i].s_o_seatnum+ "</option>";
							$("#"+Isnum).append(option);
						}
						
					}
				},
				error : function(e) {
					$('#result').html(e);
				}
			}		
		);
	
}


var oldSelectseat;
var oldprice = 0;
var s_o_numlist = "";
var sum = 0;
function order(seatname) {
	Select_s_o_num = $("#"+seatname+" option:selected").val();
	s_o_numlist += Select_s_o_num + ",";
	
	$.ajax(
			{
				type: "POST",
				url : "checkseat.do",
				data : {
					Select_s_o_num : Select_s_o_num
				},
				dataType : 'text',
				success : function(data){
					if (data == "") {
						return;
					}
					var result = eval("(" + data + ")");
					var check = result.data[0].check;
					if(check != "0"){
						alert(seatx);
						location.reload();
					}else{
						var Selectlevel = $("#selectseatlevel option:selected").text();
						var Selectseat = $("#"+seatname+" option:selected").text();
						if(Selectseat != "선택안함"){
							var levels = Selectlevel.split(' ');
							var level = levels[0];
							var prices = levels[1];
							price = prices.split('원');
							price = price[0];
							var id = Select_s_o_num+"_"+price;
							$("#bar").addClass("block_s");
							
							var h1="<div id = '"+id+"' style = 'margin-top:5px;'><h1 style = 'display: inline; font-size:20px;' id ='"+Select_s_o_num+"' >" +
									"</h1>&nbsp;&nbsp;&nbsp;<a onclick=\"delseat('"+id+"\')\">삭제</a></div>"
							$("#seatname").append(h1);
							
							$("#"+Select_s_o_num).append(Selectseat);
							if(Selectseat != oldSelectseat){
								sum = parseInt(price)+parseInt(oldprice);
								comma(sum);
								var button = "<input type = 'button' value = '결제하기' onclick=\"buy('"+s_o_numlist+"\')\">";
								$("#button").empty();
								$("#button").append(button);
								oldprice = sum;
								oldSelectseat = Selectseat;
							}
						}else{
							h1="";
							$("#"+seatname).append();
						}
					}
				},
				error : function(e) {
					$('#result').html(e);
				}
			}		
		);

}

function comma(sum) {
	var sum2 = Number(sum).toLocaleString('en');
	$("#price").empty();
	$("#price").append(sum2);
	
}

function buy(s_o_numlist){
	if($("#price").text()==0){
		alert(buyseatx);
	}else{
		if(confirm(checkorder)){
			
			  s_o_numlist = s_o_numlist.slice(0,-1);
			  
			  var sonl = s_o_numlist.split(",");
			  for(i=0; i<sonl.length; i++){
				  son = sonl[i];
				  $.ajax(
							{
								type: "POST",
								url : "delcount.do",
								data : {
									son : son
								},
								dataType : 'text',
								success : function(data){
									if (data == "") {
										return;
									}
									var result = eval("(" + data + ")");
									if(result.data[0].check=="fs"){
										alert(seatx);
										location.reload();
									}
								},
								error : function(e) {
									$('#result').html(e);
								}
							}		
						);
			  }
				
			  location.href = "orderPro.do?s_o_numlist="+s_o_numlist+"&i_num="+i_num2+"&i_d_num="+i_d_num2+"&i_t_num="+i_t_num2+"&sum="+sum;
			  return true;
		} else {
			  return false;
		}
	}
	
	/*if(confirm("결제하시겠습니까?")){
		
		  s_o_numlist = s_o_numlist.slice(0,-1);
		  
		  var sonl = s_o_numlist.split(",");
		  for(i=0; i<sonl.length; i++){
			  son = sonl[i];
			  $.ajax(
						{
							type: "POST",
							url : "delcount.do",
							data : {
								son : son
							},
							dataType : 'text',
							success : function(data){
								if (data == "") {
									return;
								}
								var result = eval("(" + data + ")");
								if(result.data[0].check=="fs"){
									alert("예약된 좌석입니다.");
									location.reload();
								}
							},
							error : function(e) {
								$('#result').html(e);
							}
						}		
					);
		  }
			
		  location.href = "orderPro.do?s_o_numlist="+s_o_numlist+"&i_num="+i_num2+"&i_d_num="+i_d_num2+"&i_t_num="+i_t_num2+"&sum="+sum;
		  return true;
	} else {
		  return false;
	}*/

}

function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}

function delseat(id){
	$('#'+id).remove();
	
	var id = id.split('_');
	var s_o_num = id[0];
	var price = id[1];
	
	var s_o_numlist2 = s_o_numlist.slice(0,-1);
	
	var num = s_o_numlist2.split(",");
	s_o_numlist = "";
	for(i=0; i<num.length; i++){
		if(s_o_num != num[i]){
			s_o_numlist += num[i]+",";
		}
	}
	
	oldprice = uncomma(oldprice);
	var delprice = parseInt(oldprice)-parseInt(price);
	oldprice=delprice;
	comma(delprice);
}

function orderlist(n,s,id){
	point(id);
	var n2 = n.split(",");
	comma(s);
	for(i=0; i<n2.length; i++){
		$.ajax(
				{
					type: "POST",
					url : "seatname.do",
					data : {
						s_o_n : n2[i]
					},
					dataType : 'text',
					success : function(data){
						if (data == "") {
							return;
						}
						var result = eval("(" + data + ")");
						var seatname1 = result.data[0].seatname;
						var floor1 = result.data[0].floor;
						var level1 = result.data[0].level;
						
						var str = floor1 +"층 "+" _ "+level1 +" _ "+seatname1;
						$('#seat').append(str+"<br>");
						
					},
					error : function(e) {
						$('#result').html(e);
					}
				}		
			);
	}
}


function point(id){
	$.ajax(
			{
				type: "POST",
				url : "getpoint.do",
				data : {
					id : id
				},
				dataType : 'text',
				success : function(data){
					if (data == "") {
						return;
					}
					var result = eval("(" + data + ")");
					var point = result.data[0].point;
					var email = result.data[0].email;
					var p = $('#price').text();
					$('#mypoint').val(point);
					$('#reprice').append(p);
					
					var ap = "<input onkeyup='delpoint()'style='text-align:right; width : 100px; border:1px dashed rgba(164, 164, 164, 1);'type='number' step='10'min='0'max='"+point+"'id='usepoint' placeholder='0P' value=''>"
					$('#dp').append(ap);
				},
				error : function(e) {
					$('#result').html(e);
				}
			}		
		);
}


function delpoint(){
	if($('#mypoint').val()>parseInt(1000)){
		var op = $('#price').text();
		var op1 = uncomma(op);
		var usep = $('#usepoint').val();
		var rep = parseInt(op1)-parseInt(usep);
		var rep2 = Number(rep).toLocaleString('en');
		$('#reprice').empty();
		$('#reprice').append(rep2);
		var rp = $('#price').text();
		var mp = $('#mypoint').val();
		if(parseInt(mp)<parseInt(usep)){
			alert(overpoint);
			$('#usepoint').val("");
			$('#reprice').empty();
			$('#reprice').append(rp);
		}
		
		if(usep==""){
			$('#reprice').empty();
			$('#reprice').append(rp);
		}
	}else{
		alert(checkusepoint);
		$('#usepoint').val("");
	}
	
	
}

function reChoice(nlist,num,date,time){
	var nts = nlist.split(",");
	for(i=0; i<nts.length; i++){
		var nt = nts[i];
		$.ajax(
				{
					type: "POST",
					url : "returnS.do",
					data : {
						nt : nt
					},
					dataType : 'text',
					success : function(data){
						if (data == "") {
							return;
						}
						var result = eval("(" + data + ")");
						
					},
					error : function(e) {
						$('#result').html(e);
					}
				}		
			);
	}
	
	location.href = "orderForm.do?num="+num+"&date="+date+"&time="+time;
}


function pay(i_name,i_date,i_t_time,n,id){
	if(!$('#pay > option:selected').val()) {
		alert(payx);
		return false;
	}else if(!$('input:checkbox[name="check"]').is(":checked")){
		alert( mailx);
		return false;
	}else{
		var pp = $('#reprice').text();
		var pc = uncomma(pp);
		var up = $('#usepoint').val();
		if(up==""){
			up="0";
		}
		var msg;
		var obj = document.getElementsByName("check");
		for(var i=0; i<obj.length; i++){
		  if(obj[i].checked){
		      msg = obj[i].value;
		  }
		}
		var money = $('#pay').val();
		$.ajax(
				{
					type: "POST",
					url : "insertOrder.do",
					data : {
						i_name : i_name,
						i_date : i_date,
						i_t_time : i_t_time,
						n : n,
						id : id,
						msg : msg,
						money : money,
						up : up,
						pc : pc,
						pp : pp
					},
					dataType : 'text',
					success : function(data){
						if (data == "") {
							return;
						}
						var result = eval("(" + data + ")");
						if(result.data[0].check=="ss"){
							location.href = "completeOrder.do";
						}else{
							alert(payerror);
							reChoice(n);
						}
					},
					error : function(e) {
						$('#result').html(e);
					}
				}		
			);
	}
	
	/*var pc1 = $('#reprice').text();
	var pc = uncomma(pc1);
	var up = $('#usepoint').val();
	if(up==""){
		up="0";
	}
	var msg;
	var obj = document.getElementsByName("check");
	for(var i=0; i<obj.length; i++){
	  if(obj[i].checked){
	      msg = obj[i].value;
	  }
	}
	var money = $('#pay').val();
	$.ajax(
			{
				type: "POST",
				url : "insertOrder.do",
				data : {
					i_name : i_name,
					i_date : i_date,
					i_t_time : i_t_time,
					n : n,
					id : id,
					msg : msg,
					money : money,
					up : up,
					pc : pc
				},
				dataType : 'text',
				success : function(data){
					if (data == "") {
						return;
					}
					var result = eval("(" + data + ")");
					if(result.data[0].check=="ss"){
						location.href = "completeOrder.do";
					}else{
						alert("결제에 실패했습니다.다시시도해주세요.");
						reChoice(n);
					}
				},
				error : function(e) {
					$('#result').html(e);
				}
			}		
		);*/
}

/*function insert(startnum,endnum,i_s_num,seatname){
	$.ajax(
			{
				type: "POST",
				url : "seatorder.do",
				data : {
					startnum : startnum,
					endnum : endnum,
					i_s_num : i_s_num,
					seatname : seatname
				},
				dataType : 'text',
				success : function(data){
					if (data == "") {
						return;
					}
					var result = eval("(" + data + ")");
				},
				error : function(e) {
					$('#result').html(e);
				}
			}		
		);
}*/


















