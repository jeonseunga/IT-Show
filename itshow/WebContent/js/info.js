/**
 * info.js
 */
/*에러메세지*/
var er_thumbnail = "섬네일이 선택되지 않았습니다."; var er_title = "공연제목이 입력되지 않았습니다."; var er_category = "카테고리가 선택되지 않았습니다.";
var er_open_day = "예매오픈일이 선택되지 않았습니다."; var er_duration = "공연기간이 선택되지 않았습니다."; var er_place = "공연장이 입력되지 않았습니다.";
var er_location = "주소가 제대로 입력되지 않았습니다."; var er_info_date = "공연일시가 선택되지 않았습니다."; var er_info_hall = "공연홀이 입력되지 않았습니다.";
var er_info_start = "공연시작시간이 입력되지 않았습니다."; var er_info_time = "공연시간이 입력되지 않았습니다."; var er_sear_floor = "좌석층이 입력되지 않았습니다.";
var er_seat_level = "좌석등급이 입력되지 않았습니다."; var er_seat_name = "좌석명이 입력되지 않았습니다."; var er_seat_number = "좌석번호가 제대로 입력되지 않았습니다.";
var er_seat_price = "가격이 입력되지 않았습니다."; var er_seat_img = "좌석이미지가 선택되지 않았습니다."; var er_hall_name = "홀이름이 입력되지 않았습니다.";
/*----------------------------------------------------*/
/* information
------------------------------------------------------ */
var count = 0;
var Dcount = 0;
var SIcount = 0;
var Scount1 = 0;var Pcount1 = 0;var Scount2 = 0;var Pcount2 = 0;var Scount3 = 0;var Pcount3 = 0;var Scount4 = 0;
var Pcount4 = 0;var Scount5 = 0;var Pcount5 = 0;var Scount6 = 0;var Pcount6 = 0;var Scount7 = 0;var Scount8 = 0;
var Scount9 = 0;var Scount10 = 0;var Scount11 = 0;var Scount12 = 0;var Scount13 = 0;var Scount14 = 0;var Scount15 = 0;
var Scount16 = 0;var Scount17 = 0;var Scount18 = 0;var Scount19 = 0;var Scount20 = 0;var Scount21 = 0;var Scount22 = 0;
var Scount23 = 0;var Scount24 = 0;var Scount25 = 0;var Scount26 = 0;var Scount27 = 0;var Scount28 = 0;var Scount29 = 0;
var Scount30 = 0;var Scount31 = 0;var Scount32 = 0;var Scount33 = 0;var Scount34 = 0;var Scount35 = 0;var Scount36 = 0;

var Dropcount = 0;
var DropSIcount = 0;
var DropDcount = 0;
var DropPcount1 = 0;var DropPcount2 = 0;var DropPcount3 = 0;var DropPcount4 = 0;var DropPcount5 = 0;var DropPcount6 = 0;
var DropScount1 = 0;var DropScount2 = 0;var DropScount3 = 0;var DropScount4 = 0;var DropScount5 = 0;var DropScount6 = 0;
var DropScount7 = 0;var DropScount8 = 0;var DropScount9 = 0;var DropScount10 = 0;var DropScount11 = 0;var DropScount12 = 0;
var DropScount13 = 0;var DropScount14 = 0;var DropScount15 = 0;var DropScount16 = 0;var DropScount17 = 0;var DropScount18 = 0;
var DropScount19 = 0;var DropScount20 = 0;var DropScount21 = 0;var DropScount22 = 0;var DropScount23 = 0;var DropScount24 = 0;
var DropScount25 = 0;var DropScount26 = 0;var DropScount27 = 0;var DropScount28 = 0;var DropScount29 = 0;var DropScount30 = 0;
var DropScount31 = 0;var DropScount32 = 0;var DropScount33 = 0;var DropScount34 = 0;var DropScount35 = 0;var DropScount36 = 0;

/*
 * 유효성
 */
function insertcheck() {
	if(!Insertform.i_img_thumbnail.value) {
		alert(er_thumbnail);
		return false;
	} else if(!Insertform.i_name.value) {
		alert(er_title);
		Insertform.i_name.focus();
		return false;
	} else if(Insertform.category.options[Insertform.category.selectedIndex].value=="0") {
		alert(er_category);
		return false;
	} else if(!Insertform.i_open_time.value || !Insertform.i_open_day.value) {
		alert(er_open_day);
		if(!Insertform.i_open_day.value) {
			Insertform.i_open_day.focus();
		} else if(!Insertform.i_open_time.value) {
			Insertform.i_open_time.focus();
		}
		return false;
	} else if(!Insertform.i_open_start.value || !Insertform.i_open_end.value) {
		alert(er_duration);
		if(!Insertform.i_open_start.value) {
			Insertform.i_open_start.focus();
		} else if(!Insertform.i_open_end.value) {
			Insertform.i_open_end.focus();
		}
		return false;
	} else if(!Insertform.i_location.value) {
		alert(er_place);
		Insertform.i_location.focus();
		return false;
	} else if(!Insertform.i_location_zip.value || !Insertform.i_location_adr1.value) {
		alert(er_location);
		return false;
	} else if(Dcount>0){
		var ConTent1 = [];
		var ConTent1_focus = [];
        for(var i=0; i<Dcount;i++) {
        	ConTent1[i] = eval("Insertform.i_date" + i + ".value");
        	ConTent1_focus[i] = eval("Insertform.i_date" + i + ".focus();");
        	if(!ConTent1[i]) {
              	alert(er_info_date);
              	ConTent1_focus[i];
                return false;
              } else if(ConTent1[i] && i==0) {
            	  var Content2 = [];
                  var Content3 = [];
                  var Content4 = [];
                  var Content2_focus = [];
                  var Content3_focus = [];
                  var Content4_focus = [];
                  for(var j=0;j<Pcount1;j++) {
                	  Content2[j] = eval("Insertform.i_t_hall" + i + j + ".value");
                	  Content3[j] = eval("Insertform.i_t_stime" + i + j + ".value");
                	  Content4[j] = eval("Insertform.i_t_duration" + i + j + ".value");                	                  	  
                	  if(!Content2[j]) {
                		  alert(er_info_hall);
                		  Content2_focus[j] = eval("Insertform.i_t_hall" + i + j +".focus();");
                		  Content2_focus[j];
                          return false;
                	  } else if(!Content3[j]) {
                		  alert(er_info_start);
                		  Content3_focus[j] = eval("Insertform.i_t_stime" + i + j +".focus();");
                		  Content3_focus[j];
                          return false;
                	  } else if(!Content4[j]) {
                		  alert(er_info_time);
                		  Content4_focus[j] = eval("Insertform.i_t_duration" + i + j +".focus();");
                		  Content4_focus[j];
                          return false;
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==0) {
                		  var content5 = [];
                		  var content6 = [];
                		  var content7 = [];
                		  var content8 = [];
                		  var content9 = [];
                		  var content10 = [];
                		  var contnet5_focus = [];
                		  var contnet6_focus = [];
                		  var contnet7_focus = [];
                		  var contnet8_focus = [];
                		  var contnet9_focus = [];
                		  var contnet10_focus = [];
                		  for(var a=0; a<Scount1;a++) {
                			  content5[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  content6[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  content7[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  content8[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  content9[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  content10[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!content5[a]) {
                				  alert(er_sear_floor);
                				  contnet5_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  contnet5_focus[a];
                                  return false;
                			  } else if(!content6[a]) {
                				  alert(er_seat_level);
                				  contnet6_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  contnet6_focus[a];
                                  return false;
                			  } else if(!content7[a]) {
                				  alert(er_seat_name);
                				  contnet7_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  contnet7_focus[a];
                                  return false;
                			  } else if(!content8[a] || !content9[a]) {
                				  alert(er_seat_number);
                				  if(!content8[a]) {
                					  contnet8_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  contnet8_focus[a];
                				  } else if(!content9[a]) {
                					  contnet9_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  contnet9_focus[a];
                				  }                
                                  return false;
                			  } else if(!content10[a]) {
                				  alert(er_seat_price);
                				  contnet10_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  contnet10_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==1) {
                		  var tent1 = [];
                		  var tent2 = [];
                		  var tent3 = [];
                		  var tent4 = [];
                		  var tent5 = [];
                		  var tent6 = [];
                		  var tent1_focus = [];
                		  var tent2_focus = [];
                		  var tent3_focus = [];
                		  var tent4_focus = [];
                		  var tent5_focus = [];
                		  var tent6_focus = [];
                		  for(var a=0; a<Scount2;a++) {
                			  tent1[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent2[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent3[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent4[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent5[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent6[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent1[a]) {
                				  alert(er_sear_floor);
                				  tent1_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent1_focus[a];
                                  return false;
                			  } else if(!tent2[a]) {
                				  alert(er_seat_level);
                				  tent2_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent2_focus[a];
                                  return false;
                			  } else if(!tent3[a]) {
                				  alert(er_seat_name);
                				  tent3_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent3_focus[a];
                                  return false;
                			  } else if(!tent4[a] || !tent5[a]) {
                				  alert(er_seat_number);
                				  if(!tent4[a]) {
                					  tent4_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent4_focus[a];
                				  } else if(!tent5[a]) {
                					  tent5_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent5_focus[a];
                				  }
                                  return false;
                			  } else if(!tent6[a]) {
                				  alert(er_seat_price);
                				  tent6_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent6_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==2) {
                		  var tent7 = [];
                		  var tent8 = [];
                		  var tent9 = [];
                		  var tent10 = [];
                		  var tent11 = [];
                		  var tent12 = [];
                		  var tent7_focus = [];
                		  var tent8_focus = [];
                		  var tent9_focus = [];
                		  var tent10_focus = [];
                		  var tent11_focus = [];
                		  var tent12_focus = [];
                		  for(var a=0; a<Scount3;a++) {
                			  tent7[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent8[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent9[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent10[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent11[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent12[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent7[a]) {
                				  alert(er_sear_floor);
                				  tent7_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent7_focus[a];
                                  return false;
                			  } else if(!tent8[a]) {
                				  alert(er_seat_level);
                				  tent8_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent8_focus[a];
                                  return false;
                			  } else if(!tent9[a]) {
                				  alert(er_seat_name);
                				  tent9_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent9_focus[a];
                                  return false;
                			  } else if(!tent10[a] || !tent11[a]) {
                				  alert(er_seat_number);
                				  if(!tent10[a]) {
                					  tent10_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent10_focus[a];
                				  } else if(!tent11[a]) {
                					  tent11_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent11_focus[a];
                				  }
                                  return false;
                			  } else if(!tent12[a]) {
                				  alert(er_seat_price);
                				  tent12_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent12_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==3) {
                		  var tent13 = [];
                		  var tent14 = [];
                		  var tent15 = [];
                		  var tent16 = [];
                		  var tent17 = [];
                		  var tent18 = [];
                		  var tent13_focus = [];
                		  var tent14_focus = [];
                		  var tent15_focus = [];
                		  var tent16_focus = [];
                		  var tent17_focus = [];
                		  var tent18_focus = [];
                		  for(var a=0; a<Scount4;a++) {
                			  tent13[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent14[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent15[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent16[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent17[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent18[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent13[a]) {
                				  alert(er_sear_floor);
                				  tent13_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent13_focus[a];
                                  return false;
                			  } else if(!tent14[a]) {
                				  alert(er_seat_level);
                				  tent14_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent14_focus[a];
                                  return false;
                			  } else if(!tent15[a]) {
                				  alert(er_seat_name);
                				  tent15_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent15_focus[a];
                                  return false;
                			  } else if(!tent16[a] || !tent17[a]) {
                				  alert(er_seat_number);
                				  if(!tent16[a]) {
                					  tent16_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent16_focus[a];
                				  } else if(!tent17[a]) {
                					  tent17_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent17_focus[a];
                				  }
                                  return false;
                			  } else if(!tent18[a]) {
                				  alert(er_seat_price);
                				  tent18_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent18_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==4) {
                		  var tent19 = [];
                		  var tent20 = [];
                		  var tent21 = [];
                		  var tent22 = [];
                		  var tent23 = [];
                		  var tent24 = [];
                		  var tent19_focus = [];
                		  var tent20_focus = [];
                		  var tent21_focus = [];
                		  var tent22_focus = [];
                		  var tent23_focus = [];
                		  var tent24_focus = [];
                		  for(var a=0; a<Scount5;a++) {
                			  tent19[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent20[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent21[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent22[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent23[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent24[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent19[a]) {
                				  alert(er_sear_floor);
                				  tent19_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent19_focus[a];
                                  return false;
                			  } else if(!tent20[a]) {
                				  alert(er_seat_level);
                				  tent20_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent20_focus[a];
                                  return false;
                			  } else if(!tent21[a]) {
                				  alert(er_seat_name);
                				  tent21_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent21_focus[a];
                                  return false;
                			  } else if(!tent22[a] || !tent23[a]) {
                				  alert(er_seat_number);
                				  if(!tent22[a]) {
                					  tent22_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent22_focus[a];
                				  } else if(!tent23[a]) {
                					  tent23_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent23_focus[a];
                				  }
                                  return false;
                			  } else if(!tent24[a]) {
                				  alert(er_seat_price);
                				  tent24_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent24_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==5) {
                		  var tent25 = [];
                		  var tent26 = [];
                		  var tent27 = [];
                		  var tent28 = [];
                		  var tent29 = [];
                		  var tent30 = [];
                		  var tent25_focus = [];
                		  var tent26_focus = [];
                		  var tent27_focus = [];
                		  var tent28_focus = [];
                		  var tent29_focus = [];
                		  var tent30_focus = [];
                		  for(var a=0; a<Scount6;a++) {
                			  tent25[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent26[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent27[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent28[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent29[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent30[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent25[a]) {
                				  alert(er_sear_floor);
                				  tent25_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent25_focus[a];
                                  return false;
                			  } else if(!tent26[a]) {
                				  alert(er_seat_level);
                				  tent26_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent26_focus[a];
                                  return false;
                			  } else if(!tent27[a]) {
                				  alert(er_seat_name);
                				  tent27_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent27_focus[a];
                                  return false;
                			  } else if(!tent28[a] || !tent29[a]) {
                				  alert(er_seat_number);
                				  if(!tent28[a]) {
                					  tent28_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent28_focus[a];
                				  } else if(!tent29[a]) {
                					  tent29_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent29_focus[a];
                				  }
                                  return false;
                			  } else if(!tent30[a]) {
                				  alert(er_seat_price);
                				  tent30_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent30_focus[a];
                                  return false;
                			  }
                		  }
                	  }
                  }
              } else if(ConTent1[i] && i==1) {
            	  var Content5 = [];
                  var Content6 = [];
                  var Content7 = [];
                  var Content5_focus = [];
                  var Content6_focus = [];
                  var Content7_focus = [];
                  for(var j=0;j<Pcount2;j++) {
                	  Content5[j] = eval("Insertform.i_t_hall" + i + j + ".value");
                	  Content6[j] = eval("Insertform.i_t_stime" + i + j + ".value");
                	  Content7[j] = eval("Insertform.i_t_duration" + i + j + ".value");
                	  if(!Content5[j]) {
                		  alert(er_info_hall);
                		  Content5_focus[j] = eval("Insertform.i_t_hall" + i + j + ".focus();");
                		  Content5_focus[j];
                          return false;
                	  } else if(!Content6[j]) {
                		  alert(er_info_start);
                		  Content6_focus[j] = eval("Insertform.i_t_stime" + i + j + ".focus();");
                		  Content6_focus[j];
                          return false;
                	  } else if(!Content7[j]) {
                		  alert(er_info_time);
                		  Content7_focus[j] = eval("Insertform.i_t_duration" + i + j + ".focus();");
                		  Content7_focus[j];
                          return false;
                	  } else if(Content5[j] && Content6[j] && Content7[j] && j==0) {
                		  var content11 = [];
                		  var content12 = [];
                		  var content13 = [];
                		  var content14 = [];
                		  var content15 = [];
                		  var content16 = [];
                		  var contnet11_focus = [];
                		  var contnet12_focus = [];
                		  var contnet13_focus = [];
                		  var contnet14_focus = [];
                		  var contnet15_focus = [];
                		  var contnet16_focus = [];
                		  for(var a=0; a<Scount7;a++) {
                			  content11[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  content12[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  content13[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  content14[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  content15[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  content16[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!content11[a]) {
                				  alert(er_sear_floor);
                				  contnet11_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  contnet11_focus[a];
                                  return false;
                			  } else if(!content12[a]) {
                				  alert(er_seat_level);
                				  contnet12_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  contnet12_focus[a];
                                  return false;
                			  } else if(!content13[a]) {
                				  alert(er_seat_name);
                				  contnet13_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  contnet13_focus[a];
                                  return false;
                			  } else if(!content14[a] || !content15[a]) {
                				  alert(er_seat_number);
                				  if(!content14[a]) {
                					  contnet14_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  contnet14_focus[a];
                				  } else if(!content15[a]) {
                					  contnet15_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  contnet15_focus[a];
                				  }
                                  return false;
                			  } else if(!content16[a]) {
                				  alert(er_seat_price);
                				  contnet16_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  contnet16_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==1) {
                		  var tent31 = [];
                		  var tent32 = [];
                		  var tent33 = [];
                		  var tent34 = [];
                		  var tent35 = [];
                		  var tent36 = [];
                		  var tent31_focus = [];
                		  var tent32_focus = [];
                		  var tent33_focus = [];
                		  var tent34_focus = [];
                		  var tent35_focus = [];
                		  var tent36_focus = [];
                		  for(var a=0; a<Scount8;a++) {
                			  tent31[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent32[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent33[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent34[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent35[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent36[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent31[a]) {
                				  alert(er_sear_floor);
                				  tent31_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent32_focus[a];
                                  return false;
                			  } else if(!tent32[a]) {
                				  alert(er_seat_level);
                				  tent32_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent32_focus[a];
                                  return false;
                			  } else if(!tent33[a]) {
                				  alert(er_seat_name);
                				  tent33_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent33_focus[a];
                                  return false;
                			  } else if(!tent34[a] || !tent35[a]) {
                				  alert(er_seat_number);
                				  if(!tent34[a]) {
                					  tent34_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent34_focus[a];
                				  } else if(!tent35[a]) {
                					  tent35_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent35_focus[a];
                				  }
                                  return false;
                			  } else if(!tent36[a]) {
                				  alert(er_seat_price);
                				  tent36_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent36_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==2) {
                		  var tent37 = [];
                		  var tent38 = [];
                		  var tent39 = [];
                		  var tent40 = [];
                		  var tent41 = [];
                		  var tent42 = [];
                		  var tent37_focus = [];
                		  var tent38_focus = [];
                		  var tent39_focus = [];
                		  var tent40_focus = [];
                		  var tent41_focus = [];
                		  var tent42_focus = [];
                		  for(var a=0; a<Scount9;a++) {
                			  tent37[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent38[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent39[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent40[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent41[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent42[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent37[a]) {
                				  alert(er_sear_floor);
                				  tent37_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent37_focus[a];
                                  return false;
                			  } else if(!tent38[a]) {
                				  alert(er_seat_level);
                				  tent38_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent38_focus[a];
                                  return false;
                			  } else if(!tent39[a]) {
                				  alert(er_seat_name);
                				  tent39_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent39_focus[a];
                                  return false;
                			  } else if(!tent40[a] || !tent41[a]) {
                				  alert(er_seat_number);
                				  if(!tent40[a]) {
                					  tent40_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent40_focus[a];
                				  } else if(!tent41[a]) {
                					  tent41_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent41_focus[a];
                				  }
                                  return false;
                			  } else if(!tent42[a]) {
                				  alert(er_seat_price);
                				  tent42_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent42_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==3) {
                		  var tent43 = [];
                		  var tent44 = [];
                		  var tent45 = [];
                		  var tent46 = [];
                		  var tent47 = [];
                		  var tent48 = [];
                		  var tent43_focus = [];
                		  var tent44_focus = [];
                		  var tent45_focus = [];
                		  var tent46_focus = [];
                		  var tent47_focus = [];
                		  var tent48_focus = [];
                		  for(var a=0; a<Scount10;a++) {
                			  tent43[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent44[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent45[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent46[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent47[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent48[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent43[a]) {
                				  alert(er_sear_floor);
                				  tent43_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent43_focus[a];
                                  return false;
                			  } else if(!tent44[a]) {
                				  alert(er_seat_level);
                				  tent44_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent44_focus[a];
                                  return false;
                			  } else if(!tent45[a]) {
                				  alert(er_seat_name);
                				  tent45_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent45_focus[a];
                                  return false;
                			  } else if(!tent46[a] || !tent47[a]) {
                				  alert(er_seat_number);
                				  if(!tent46[a]) {
                					  tent46_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent46_focus[a];
                				  } else if(!tent47[a]) {
                					  tent47_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent47_focus[a];
                				  }
                                  return false;
                			  } else if(!tent48[a]) {
                				  alert(er_seat_price);
                				  tent48_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent48_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==4) {
                		  var tent49 = [];
                		  var tent50 = [];
                		  var tent51 = [];
                		  var tent52 = [];
                		  var tent53 = [];
                		  var tent54 = [];
                		  var tent49_focus = [];
                		  var tent50_focus = [];
                		  var tent51_focus = [];
                		  var tent52_focus = [];
                		  var tent53_focus = [];
                		  var tent54_focus = [];
                		  for(var a=0; a<Scount11;a++) {
                			  tent49[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent50[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent51[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent52[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent53[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent54[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent49[a]) {
                				  alert(er_sear_floor);
                				  tent49_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent49_focus[a];
                                  return false;
                			  } else if(!tent50[a]) {
                				  alert(er_seat_level);
                				  tent50_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent50_focus[a];
                                  return false;
                			  } else if(!tent51[a]) {
                				  alert(er_seat_name);
                				  tent51_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent51_focus[a];
                                  return false;
                			  } else if(!tent52[a] || !tent53[a]) {
                				  alert(er_seat_number);
                				  if(!tent52[a]) {
                					  tent52_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent52_focus[a];
                				  } else if(!tent53[a]) {
                					  tent53_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent53_focus[a];
                				  }
                                  return false;
                			  } else if(!tent54[a]) {
                				  alert(er_seat_price);
                				  tent54_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent54_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==5) {
                		  var tent55 = [];
                		  var tent56 = [];
                		  var tent57 = [];
                		  var tent58 = [];
                		  var tent59 = [];
                		  var tent60 = [];
                		  var tent55_focus = [];
                		  var tent56_focus = [];
                		  var tent57_focus = [];
                		  var tent58_focus = [];
                		  var tent59_focus = [];
                		  var tent60_focus = [];
                		  for(var a=0; a<Scount12;a++) {
                			  tent55[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent56[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent57[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent58[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent59[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent60[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent55[a]) {
                				  alert(er_sear_floor);
                				  tent55_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent55_focus[a];
                                  return false;
                			  } else if(!tent56[a]) {
                				  alert(er_seat_level);
                				  tent56_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent56_focus[a];
                                  return false;
                			  } else if(!tent57[a]) {
                				  alert(er_seat_name);
                				  tent57_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent57_focus[a];
                                  return false;
                			  } else if(!tent58[a] || !tent59[a]) {
                				  alert(er_seat_number);
                				  if(!tent58[a]) {
                					  tent58_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent58_focus[a];
                				  } else if(!tent59[a]) {
                					  tent59_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent59_focus[a];
                				  }
                                  return false;
                			  } else if(!tent60[a]) {
                				  alert(er_seat_price);
                				  tent60_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent60_focus[a];
                                  return false;
                			  }
                		  }
                	  }
                  }
              } else if(ConTent1[i] && i==2) {
            	  var Content8 = [];
                  var Content9 = [];
                  var Content10 = [];
                  var Content8_focus = [];
                  var Content9_focus = [];
                  var Content10_focus = [];
                  for(var j=0;j<Pcount3;j++) {
                	  Content8[j] = eval("Insertform.i_t_hall" + i + j + ".value");
                	  Content9[j] = eval("Insertform.i_t_stime" + i + j + ".value");
                	  Content10[j] = eval("Insertform.i_t_duration" + i + j + ".value");
                	  if(!Content8[j]) {
                		  alert(er_info_hall);
                		  Content8_focus[j] = eval("Insertform.i_t_hall" + i + j + ".focus();");
                		  Content8_focus[j];
                          return false;
                	  } else if(!Content9[j]) {
                		  alert(er_info_start);
                		  Content9_focus[j] = eval("Insertform.i_t_stime" + i + j + ".focus();");
                		  Content9_focus[j];
                          return false;
                	  } else if(!Content10[j]) {
                		  alert(er_info_time);
                		  Content10_focus[j] = eval("Insertform.i_t_duration" + i + j + ".focus();");
                		  Content10_focus[j];
                          return false;
                	  } else if(Content8[j] && Content9[j] && Content10[j] && j==0) {
                		  var content17 = [];
                		  var content18 = [];
                		  var content19 = [];
                		  var content20 = [];
                		  var content21 = [];
                		  var content22 = [];
                		  var contnet17_focus = [];
                		  var contnet18_focus = [];
                		  var contnet19_focus = [];
                		  var contnet20_focus = [];
                		  var contnet21_focus = [];
                		  var contnet22_focus = [];
                		  for(var a=0; a<Scount13;a++) {
                			  content17[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  content18[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  content19[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  content20[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  content21[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  content22[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!content17[a]) {
                				  alert(er_sear_floor);
                				  contnet17_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  contnet17_focus[a];
                                  return false;
                			  } else if(!content18[a]) {
                				  alert(er_seat_level);
                				  contnet18_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  contnet18_focus[a];
                                  return false;
                			  } else if(!content19[a]) {
                				  alert(er_seat_name);
                				  contnet19_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  contnet19_focus[a];
                                  return false;
                			  } else if(!content20[a] || !content21[a]) {
                				  alert(er_seat_number);
                				  if(!content20[a]) {
                					  contnet20_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  contnet20_focus[a];
                				  } else if(!content21[a]) {
                					  contnet21_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  contnet21_focus[a];
                				  }
                                  return false;
                			  } else if(!content22[a]) {
                				  alert(er_seat_price);
                				  contnet22_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  contnet22_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==1) {
                		  var tent61 = [];
                		  var tent62 = [];
                		  var tent63 = [];
                		  var tent64 = [];
                		  var tent65 = [];
                		  var tent66 = [];
                		  var tent61_focus = [];
                		  var tent62_focus = [];
                		  var tent63_focus = [];
                		  var tent64_focus = [];
                		  var tent65_focus = [];
                		  var tent66_focus = [];
                		  for(var a=0; a<Scount14;a++) {
                			  tent61[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent62[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent63[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent64[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent65[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent66[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent61[a]) {
                				  alert(er_sear_floor);
                				  tent61_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent61_focus[a];
                                  return false;
                			  } else if(!tent62[a]) {
                				  alert(er_seat_level);
                				  tent62_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent62_focus[a];
                                  return false;
                			  } else if(!tent63[a]) {
                				  alert(er_seat_name);
                				  tent63_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent63_focus[a];
                                  return false;
                			  } else if(!tent64[a] || !tent65[a]) {
                				  alert(er_seat_number);
                				  if(!tent64[a]) {
                					  tent64_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent64_focus[a];
                				  } else if(!tent65[a]) {
                					  tent65_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent65_focus[a];
                				  }
                                  return false;
                			  } else if(!tent66[a]) {
                				  alert(er_seat_price);
                				  tent66_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent66_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==2) {
                		  var tent67 = [];
                		  var tent68 = [];
                		  var tent69 = [];
                		  var tent70 = [];
                		  var tent71 = [];
                		  var tent72 = [];
                		  var tent67_focus = [];
                		  var tent68_focus = [];
                		  var tent69_focus = [];
                		  var tent70_focus = [];
                		  var tent71_focus = [];
                		  var tent72_focus = [];
                		  for(var a=0; a<Scount15;a++) {
                			  tent67[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent68[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent69[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent70[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent71[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent72[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent67[a]) {
                				  alert(er_sear_floor);
                				  tent67_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent67_focus[a];
                                  return false;
                			  } else if(!tent68[a]) {
                				  alert(er_seat_level);
                				  tent68_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent68_focus[a];
                                  return false;
                			  } else if(!tent69[a]) {
                				  alert(er_seat_name);
                				  tent69_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent69_focus[a];
                                  return false;
                			  } else if(!tent70[a] || !tent71[a]) {
                				  alert(er_seat_number);
                				  if(!tent70[a]) {
                					  tent70_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent70_focus[a];
                				  } else if(!tent71[a]) {
                					  tent71_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent71_focus[a];
                				  }
                                  return false;
                			  } else if(!tent72[a]) {
                				  alert(er_seat_price);
                				  tent72_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent72_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==3) {
                		  var tent73 = [];
                		  var tent74 = [];
                		  var tent75 = [];
                		  var tent76 = [];
                		  var tent77 = [];
                		  var tent78 = [];
                		  var tent73_focus = [];
                		  var tent74_focus = [];
                		  var tent75_focus = [];
                		  var tent76_focus = [];
                		  var tent77_focus = [];
                		  var tent78_focus = [];
                		  for(var a=0; a<Scount16;a++) {
                			  tent73[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent74[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent75[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent76[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent77[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent78[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent73[a]) {
                				  alert(er_sear_floor);
                				  tent73_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent73_focus[a];
                                  return false;
                			  } else if(!tent74[a]) {
                				  alert(er_seat_level);
                				  tent74_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent74_focus[a];
                                  return false;
                			  } else if(!tent75[a]) {
                				  alert(er_seat_name);
                				  tent75_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent75_focus[a];
                                  return false;
                			  } else if(!tent76[a] || !tent77[a]) {
                				  alert(er_seat_number);
                				  if(!tent76[a]) {
                					  tent76_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent76_focus[a];
                				  } else if(!tent77[a]) {
                					  tent77_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent77_focus[a];
                				  }
                                  return false;
                			  } else if(!tent78[a]) {
                				  alert(er_seat_price);
                				  tent78_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent78_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==4) {
                		  var tent79 = [];
                		  var tent80 = [];
                		  var tent81 = [];
                		  var tent82 = [];
                		  var tent83 = [];
                		  var tent84 = [];
                		  var tent79_focus = [];
                		  var tent80_focus = [];
                		  var tent81_focus = [];
                		  var tent82_focus = [];
                		  var tent83_focus = [];
                		  var tent84_focus = [];
                		  for(var a=0; a<Scount17;a++) {
                			  tent79[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent80[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent81[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent82[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent83[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent84[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent79[a]) {
                				  alert(er_sear_floor);
                				  tent79_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent79_focus[a];
                                  return false;
                			  } else if(!tent80[a]) {
                				  alert(er_seat_level);
                				  tent80_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent80_focus[a];
                                  return false;
                			  } else if(!tent81[a]) {
                				  alert(er_seat_name);
                				  tent81_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent81_focus[a];
                                  return false;
                			  } else if(!tent82[a] || !tent83[a]) {
                				  alert(er_seat_number);
                				  if(!tent82[a]) {
                					  tent82_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent82_focus[a];
                				  } else if(!tent83[a]) {
                					  tent83_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent83_focus[a];
                				  }
                                  return false;
                			  } else if(!tent84[a]) {
                				  alert(er_seat_price);
                				  tent84_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent84_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==5) {
                		  var tent85 = [];
                		  var tent86 = [];
                		  var tent87 = [];
                		  var tent88 = [];
                		  var tent89 = [];
                		  var tent90 = [];
                		  var tent85_focus = [];
                		  var tent86_focus = [];
                		  var tent87_focus = [];
                		  var tent88_focus = [];
                		  var tent89_focus = [];
                		  var tent90_focus = [];
                		  for(var a=0; a<Scount18;a++) {
                			  tent85[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent86[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent87[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent88[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent89[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent90[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent85[a]) {
                				  alert(er_sear_floor);
                				  tent85_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent85_focus[a];
                                  return false;
                			  } else if(!tent86[a]) {
                				  alert(er_seat_level);
                				  tent86_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent86_focus[a];
                                  return false;
                			  } else if(!tent87[a]) {
                				  alert(er_seat_name);
                				  tent87_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent87_focus[a];
                                  return false;
                			  } else if(!tent88[a] || !tent89[a]) {
                				  alert(er_seat_number);
                				  if(!tent88[a]) {
                					  tent88_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent88_focus[a];
                				  } else if(!tent89[a]) {
                					  tent89_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent89_focus[a];
                				  }
                                  return false;
                			  } else if(!tent90[a]) {
                				  alert(er_seat_price);
                				  tent90_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent90_focus[a];
                                  return false;
                			  }
                		  }
                	  }
                  } 
              } else if(ConTent1[i] && i==3) {
            	  var Content11 = [];
                  var Content12 = [];
                  var Content13 = [];
                  var Content11_focus = [];
                  var Content12_focus = [];
                  var Content13_focus = [];
                  for(var j=0;j<Pcount4;j++) {
                	  Content11[j] = eval("Insertform.i_t_hall" + i + j + ".value");
                	  Content12[j] = eval("Insertform.i_t_stime" + i + j + ".value");
                	  Content13[j] = eval("Insertform.i_t_duration" + i + j + ".value");
                	  if(!Content11[j]) {
                		  alert(er_info_hall);
                		  Content11_focus[j] = eval("Insertform.i_t_hall" + i + j + ".focus();");
                		  Content11_focus[j];
                          return false;
                	  } else if(!Content12[j]) {
                		  alert(er_info_start);
                		  Content12_focus[j] = eval("Insertform.i_t_stime" + i + j + ".focus();");
                		  Content12_focus[j];
                          return false;
                	  } else if(!Content13[j]) {
                		  alert(er_info_time);
                		  Content13_focus[j] = eval("Insertform.i_t_duration" + i + j + ".focus();");
                		  Content13_focus[j];
                          return false;
                	  } else if(Content11[j] && Content12[j] && Content13[j] && j==0) {
                		  var content23 = [];
                		  var content24 = [];
                		  var content25 = [];
                		  var content26 = [];
                		  var content27 = [];
                		  var content28 = [];
                		  var contnet23_focus = [];
                		  var contnet24_focus = [];
                		  var contnet25_focus = [];
                		  var contnet26_focus = [];
                		  var contnet27_focus = [];
                		  var contnet28_focus = [];
                		  for(var a=0; a<Scount19;a++) {
                			  content23[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  content24[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  content25[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  content26[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  content27[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  content28[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!content23[a]) {
                				  alert(er_sear_floor);
                				  contnet23_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  contnet23_focus[a];
                                  return false;
                			  } else if(!content24[a]) {
                				  alert(er_seat_level);
                				  contnet24_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  contnet24_focus[a];
                                  return false;
                			  } else if(!content25[a]) {
                				  alert(er_seat_name);
                				  contnet25_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  contnet25_focus[a];
                                  return false;
                			  } else if(!content26[a] || !content27[a]) {
                				  alert(er_seat_number);
                				  if(!content26[a]) {
                					  contnet26_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  contnet26_focus[a];
                				  } else if(!content27[a]) {
                					  contnet27_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  contnet27_focus[a];
                				  }
                                  return false;
                			  } else if(!content28[a]) {
                				  alert(er_seat_price);
                				  contnet28_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  contnet28_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==1) {
                		  var tent91 = [];
                		  var tent92 = [];
                		  var tent93 = [];
                		  var tent94 = [];
                		  var tent95 = [];
                		  var tent96 = [];
                		  var tent91_focus = [];
                		  var tent92_focus = [];
                		  var tent93_focus = [];
                		  var tent94_focus = [];
                		  var tent95_focus = [];
                		  var tent96_focus = [];
                		  for(var a=0; a<Scount20;a++) {
                			  tent91[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent92[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent93[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent94[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent95[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent96[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent91[a]) {
                				  alert(er_sear_floor);
                				  tent91_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent91_focus[a];
                                  return false;
                			  } else if(!tent92[a]) {
                				  alert(er_seat_level);
                				  tent92_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent92_focus[a];
                                  return false;
                			  } else if(!tent93[a]) {
                				  alert(er_seat_name);
                				  tent93_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent93_focus[a];
                                  return false;
                			  } else if(!tent94[a] || !tent95[a]) {
                				  alert(er_seat_number);
                				  if(!tent94[a]) {
                					  tent94_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent94_focus[a];
                				  } else if(!tent95[a]) {
                					  tent95_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent95_focus[a];
                				  }
                                  return false;
                			  } else if(!tent96[a]) {
                				  alert(er_seat_price);
                				  tent96_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent96_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==2) {
                		  var tent97 = [];
                		  var tent98 = [];
                		  var tent99 = [];
                		  var tent100 = [];
                		  var tent101 = [];
                		  var tent102 = [];
                		  var tent97_focus = [];
                		  var tent98_focus = [];
                		  var tent99_focus = [];
                		  var tent100_focus = [];
                		  var tent101_focus = [];
                		  var tent102_focus = [];
                		  for(var a=0; a<Scount21;a++) {
                			  tent97[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent98[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent99[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent100[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent101[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent102[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent97[a]) {
                				  alert(er_sear_floor);
                				  tent97_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent97_focus[a];
                                  return false;
                			  } else if(!tent98[a]) {
                				  alert(er_seat_level);
                				  tent98_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent98_focus[a];
                                  return false;
                			  } else if(!tent99[a]) {
                				  alert(er_seat_name);
                				  tent99_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent99_focus[a];
                                  return false;
                			  } else if(!tent100[a] || !tent101[a]) {
                				  alert(er_seat_number);
                				  if(!tent100[a]) {
                					  tent100_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent100_focus[a];
                				  } else if(!tent101[a]) {
                					  tent101_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent101_focus[a];
                				  }
                                  return false;
                			  } else if(!tent102[a]) {
                				  alert(er_seat_price);
                				  tent102_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent102_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==3) {
                		  var tent103 = [];
                		  var tent104 = [];
                		  var tent105 = [];
                		  var tent106 = [];
                		  var tent107 = [];
                		  var tent108 = [];
                		  var tent103_focus = [];
                		  var tent104_focus = [];
                		  var tent105_focus = [];
                		  var tent106_focus = [];
                		  var tent107_focus = [];
                		  var tent108_focus = [];
                		  for(var a=0; a<Scount22;a++) {
                			  tent103[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent104[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent105[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent106[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent107[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent108[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent103[a]) {
                				  alert(er_sear_floor);
                				  tent103_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent103_focus[a];
                                  return false;
                			  } else if(!tent104[a]) {
                				  alert(er_seat_level);
                				  tent104_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent104_focus[a];
                                  return false;
                			  } else if(!tent105[a]) {
                				  alert(er_seat_name);
                				  tent105_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent105_focus[a];
                                  return false;
                			  } else if(!tent106[a] || !tent107[a]) {
                				  alert(er_seat_number);
                				  if(!tent106[a]) {
                					  tent106_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent106_focus[a];
                				  } else if(!tent107[a]) {
                					  tent107_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent107_focus[a];
                				  }
                                  return false;
                			  } else if(!tent108[a]) {
                				  alert(er_seat_price);
                				  tent108_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent108_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==4) {
                		  var tent109 = [];
                		  var tent110 = [];
                		  var tent111 = [];
                		  var tent112 = [];
                		  var tent113 = [];
                		  var tent114 = [];
                		  var tent109_focus = [];
                		  var tent110_focus = [];
                		  var tent111_focus = [];
                		  var tent112_focus = [];
                		  var tent113_focus = [];
                		  var tent114_focus = [];
                		  for(var a=0; a<Scount23;a++) {
                			  tent109[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent110[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent111[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent112[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent113[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent114[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent109[a]) {
                				  alert(er_sear_floor);
                				  tent109_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent109_focus[a];
                                  return false;
                			  } else if(!tent110[a]) {
                				  alert(er_seat_level);
                				  tent110_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent110_focus[a];
                                  return false;
                			  } else if(!tent111[a]) {
                				  alert(er_seat_name);
                				  tent111_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent111_focus[a];
                                  return false;
                			  } else if(!tent112[a] || !tent113[a]) {
                				  alert(er_seat_number);
                				  if(!tent112[a]) {
                					  tent112_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent112_focus[a];
                				  } else if(!tent113[a]) {
                					  tent113_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent113_focus[a];
                				  }
                                  return false;
                			  } else if(!tent114[a]) {
                				  alert(er_seat_price);
                				  tent114_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent114_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==5) {
                		  var tent115 = [];
                		  var tent116 = [];
                		  var tent117 = [];
                		  var tent118 = [];
                		  var tent119 = [];
                		  var tent120 = [];
                		  var tent115_focus = [];
                		  var tent116_focus = [];
                		  var tent117_focus = [];
                		  var tent118_focus = [];
                		  var tent119_focus = [];
                		  var tent120_focus = [];
                		  for(var a=0; a<Scount24;a++) {
                			  tent115[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent116[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent117[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent118[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent119[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent120[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent115[a]) {
                				  alert(er_sear_floor);
                				  tent115_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent115_focus[a];
                                  return false;
                			  } else if(!tent116[a]) {
                				  alert(er_seat_level);
                				  tent116_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent116_focus[a];
                                  return false;
                			  } else if(!tent117[a]) {
                				  alert(er_seat_name);
                				  tent117_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent117_focus[a];
                                  return false;
                			  } else if(!tent118[a] || !tent119[a]) {
                				  alert(er_seat_number);
                				  if(!tent118[a]) {
                					  tent118_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent118_focus[a];
                				  } else if(!tent119[a]) {
                					  tent119_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent119_focus[a];
                				  }
                                  return false;
                			  } else if(!tent120[a]) {
                				  alert(er_seat_price);
                				  tent120_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent120_focus[a];
                                  return false;
                			  }
                		  }
                	  }
                  }
              } else if(ConTent1[i] && i==4) {
            	  var Content14 = [];
                  var Content15 = [];
                  var Content16 = [];
                  var Content14_focus = [];
                  var Content15_focus = [];
                  var Content16_focus = [];
                  for(var j=0;j<Pcount5;j++) {
                	  Content14[j] = eval("Insertform.i_t_hall" + i + j + ".value");
                	  Content15[j] = eval("Insertform.i_t_stime" + i + j + ".value");
                	  Content16[j] = eval("Insertform.i_t_duration" + i + j + ".value");
                	  if(!Content14[j]) {
                		  alert(er_info_hall);
                		  Content14_focus[j] = eval("Insertform.i_t_hall" + i + j + ".focus();");
                		  Content14_focus[j];
                          return false;
                	  } else if(!Content15[j]) {
                		  alert(er_info_start);
                		  Content15_focus[j] = eval("Insertform.i_t_stime" + i + j + ".focus();");
                		  Content15_focus[j];
                          return false;
                	  } else if(!Content16[j]) {
                		  alert(er_info_time);
                		  Content16_focus[j] = eval("Insertform.i_t_duration" + i + j + ".focus();");
                		  Content16_focus[j];
                          return false;
                	  } else if(Content14[j] && Content15[j] && Content16[j] && j==0) {
                		  var content29 = [];
                		  var content30 = [];
                		  var content31 = [];
                		  var content32 = [];
                		  var content33 = [];
                		  var content34 = [];
                		  var contnet29_focus = [];
                		  var contnet30_focus = [];
                		  var contnet31_focus = [];
                		  var contnet32_focus = [];
                		  var contnet33_focus = [];
                		  var contnet34_focus = [];
                		  for(var a=0; a<Scount25;a++) {
                			  content29[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  content30[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  content31[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  content32[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  content33[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  content34[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!content29[a]) {
                				  alert(er_sear_floor);
                				  contnet29_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  contnet29_focus[a];
                                  return false;
                			  } else if(!content30[a]) {
                				  alert(er_seat_level);
                				  contnet30_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  contnet30_focus[a];
                                  return false;
                			  } else if(!content31[a]) {
                				  alert(er_seat_name);
                				  contnet31_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  contnet31_focus[a];
                                  return false;
                			  } else if(!content32[a] || !content33[a]) {
                				  alert(er_seat_number);
                				  if(!content32[a]) {
                					  contnet32_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  contnet32_focus[a];
                				  } else if(!content33[a]) {
                					  contnet33_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  contnet33_focus[a];
                				  }
                                  return false;
                			  } else if(!content34[a]) {
                				  alert(er_seat_price);
                				  contnet34_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  contnet34_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==1) {
                		  var tent121 = [];
                		  var tent122 = [];
                		  var tent123 = [];
                		  var tent124 = [];
                		  var tent125 = [];
                		  var tent126 = [];
                		  var tent121_focus = [];
                		  var tent122_focus = [];
                		  var tent123_focus = [];
                		  var tent124_focus = [];
                		  var tent125_focus = [];
                		  var tent126_focus = [];
                		  for(var a=0; a<Scount26;a++) {
                			  tent121[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent122[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent123[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent124[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent125[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent126[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent121[a]) {
                				  alert(er_sear_floor);
                				  tent121_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent121_focus[a];
                                  return false;
                			  } else if(!tent122[a]) {
                				  alert(er_seat_level);
                				  tent122_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent122_focus[a];
                                  return false;
                			  } else if(!tent123[a]) {
                				  alert(er_seat_name);
                				  tent123_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent123_focus[a];
                                  return false;
                			  } else if(!tent124[a] || !tent125[a]) {
                				  alert(er_seat_number);
                				  if(!tent124[a]) {
                					  tent124_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent124_focus[a];
                				  } else if(!tent125[a]) {
                					  tent125_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent125_focus[a];
                				  }
                                  return false;
                			  } else if(!tent126[a]) {
                				  alert(er_seat_price);
                				  tent126_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent126_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==2) {
                		  var tent127 = [];
                		  var tent128 = [];
                		  var tent129 = [];
                		  var tent130 = [];
                		  var tent131 = [];
                		  var tent132 = [];
                		  var tent127_focus = [];
                		  var tent128_focus = [];
                		  var tent129_focus = [];
                		  var tent130_focus = [];
                		  var tent131_focus = [];
                		  var tent132_focus = [];
                		  for(var a=0; a<Scount27;a++) {
                			  tent127[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent128[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent129[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent130[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent131[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent132[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent127[a]) {
                				  alert(er_sear_floor);
                				  tent127_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent127_focus[a];
                                  return false;
                			  } else if(!tent128[a]) {
                				  alert(er_seat_level);
                				  tent128_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent128_focus[a];
                                  return false;
                			  } else if(!tent129[a]) {
                				  alert(er_seat_name);
                				  tent129_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent129_focus[a];
                                  return false;
                			  } else if(!tent130[a] || !tent131[a]) {
                				  alert(er_seat_number);
                				  if(!tent130[a]) {
                					  tent130_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent130_focus[a];
                				  } else if(!tent131[a]) {
                					  tent131_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent131_focus[a];
                				  }
                                  return false;
                			  } else if(!tent132[a]) {
                				  alert(er_seat_price);
                				  tent132_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent132_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==3) {
                		  var tent133 = [];
                		  var tent134 = [];
                		  var tent135 = [];
                		  var tent136 = [];
                		  var tent137 = [];
                		  var tent138 = [];
                		  var tent133_focus = [];
                		  var tent134_focus = [];
                		  var tent135_focus = [];
                		  var tent136_focus = [];
                		  var tent137_focus = [];
                		  var tent138_focus = [];
                		  for(var a=0; a<Scount28;a++) {
                			  tent133[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent134[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent135[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent136[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent137[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent138[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent133[a]) {
                				  alert(er_sear_floor);
                				  tent133_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent133_focus[a];
                                  return false;
                			  } else if(!tent134[a]) {
                				  alert(er_seat_level);
                				  tent134_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent134_focus[a];
                                  return false;
                			  } else if(!tent135[a]) {
                				  alert(er_seat_name);
                				  tent135_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent135_focus[a];
                                  return false;
                			  } else if(!tent136[a] || !tent137[a]) {
                				  alert(er_seat_number);
                				  if(!tent136[a]) {
                					  tent136_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent136_focus[a];
                				  } else if(!tent137[a]) {
                					  tent137_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent137_focus[a];
                				  }
                                  return false;
                			  } else if(!tent138[a]) {
                				  alert(er_seat_price);
                				  tent138_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent138_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==4) {
                		  var tent139 = [];
                		  var tent140 = [];
                		  var tent141 = [];
                		  var tent142 = [];
                		  var tent143 = [];
                		  var tent144 = [];
                		  var tent139_focus = [];
                		  var tent140_focus = [];
                		  var tent141_focus = [];
                		  var tent142_focus = [];
                		  var tent143_focus = [];
                		  var tent144_focus = [];
                		  for(var a=0; a<Scount29;a++) {
                			  tent139[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent140[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent141[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent142[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent143[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent144[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent139[a]) {
                				  alert(er_sear_floor);
                				  tent139_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent139_focus[a];
                                  return false;
                			  } else if(!tent140[a]) {
                				  alert(er_seat_level);
                				  tent140_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent140_focus[a];
                                  return false;
                			  } else if(!tent141[a]) {
                				  alert(er_seat_name);
                				  tent141_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent141_focus[a];
                                  return false;
                			  } else if(!tent142[a] || !tent143[a]) {
                				  alert(er_seat_number);
                				  if(!tent142[a]) {
                					  tent142_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent142_focus[a];
                				  } else if(!tent143[a]) {
                					  tent143_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent143_focus[a];
                				  }
                                  return false;
                			  } else if(!tent144[a]) {
                				  alert(er_seat_price);
                				  tent144_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent144_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==5) {
                		  var tent145 = [];
                		  var tent146 = [];
                		  var tent147 = [];
                		  var tent148 = [];
                		  var tent149 = [];
                		  var tent150 = [];
                		  var tent145_focus = [];
                		  var tent146_focus = [];
                		  var tent147_focus = [];
                		  var tent148_focus = [];
                		  var tent149_focus = [];
                		  var tent150_focus = [];
                		  for(var a=0; a<Scount30;a++) {
                			  tent145[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent146[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent147[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent148[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent149[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent150[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent145[a]) {
                				  alert(er_sear_floor);
                				  tent145_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent145_focus[a];
                                  return false;
                			  } else if(!tent146[a]) {
                				  alert(er_seat_level);
                				  tent146_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent146_focus[a];
                                  return false;
                			  } else if(!tent147[a]) {
                				  alert(er_seat_name);
                				  tent147_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent147_focus[a];
                                  return false;
                			  } else if(!tent148[a] || !tent149[a]) {
                				  alert(er_seat_number);
                				  if(!tent148[a]) {
                					  tent148_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent148_focus[a];
                				  } else if(!tent149[a]) {
                					  tent149_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent149_focus[a];
                				  }
                                  return false;
                			  } else if(!tent150[a]) {
                				  alert(er_seat_price);
                				  tent150_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent150_focus[a];
                                  return false;
                			  }
                		  }
                	  }
                  }
              } else if(ConTent1[i] && i==5) {
            	  var Content17 = [];
                  var Content18 = [];
                  var Content19 = [];
                  var Content17_focus = [];
                  var Content18_focus = [];
                  var Content19_focus = [];
                  for(var j=0;j<Pcount6;j++) {
                	  Content17[j] = eval("Insertform.i_t_hall" + i + j + ".value");
                	  Content18[j] = eval("Insertform.i_t_stime" + i + j + ".value");
                	  Content19[j] = eval("Insertform.i_t_duration" + i + j + ".value");
                	  if(!Content17[j]) {
                		  alert(er_info_hall);
                		  Content17_focus[j] = eval("Insertform.i_t_hall" + i + j + ".focus();");
                		  Content17_focus[j];
                          return false;
                	  } else if(!Content18[j]) {
                		  alert(er_info_start);
                		  Content18_focus[j] = eval("Insertform.i_t_stime" + i + j + ".focus();");
                		  Content18_focus[j];
                          return false;
                	  } else if(!Content19[j]) {
                		  alert(er_info_time);
                		  Content19_focus[j] = eval("Insertform.i_t_duration" + i + j + ".focus();");
                		  Content19_focus[j];
                          return false;
                	  } else if(Content17[j] && Content18[j] && Content19[j] && j==0) {
                		  var content35 = [];
                		  var content36 = [];
                		  var content37 = [];
                		  var content38 = [];
                		  var content39 = [];
                		  var content40 = [];
                		  var contnet35_focus = [];
                		  var contnet36_focus = [];
                		  var contnet37_focus = [];
                		  var contnet38_focus = [];
                		  var contnet39_focus = [];
                		  var contnet40_focus = [];
                		  for(var a=0; a<Scount31;a++) {
                			  content35[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  content36[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  content37[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  content38[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  content39[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  content40[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!content35[a]) {
                				  alert(er_sear_floor);
                				  contnet35_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  contnet35_focus[a];
                                  return false;
                			  } else if(!content36[a]) {
                				  alert(er_seat_level);
                				  contnet36_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  contnet36_focus[a];
                                  return false;
                			  } else if(!content37[a]) {
                				  alert(er_seat_name);
                				  contnet37_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  contnet37_focus[a];
                                  return false;
                			  } else if(!content38[a] || !content39[a]) {
                				  alert(er_seat_number);
                				  if(!content38[a]) {
                					  contnet38_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  contnet38_focus[a];
                				  } else if(!content39[a]) {
                					  contnet39_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  contnet39_focus[a];
                				  }
                                  return false;
                			  } else if(!content40[a]) {
                				  alert(er_seat_price);
                				  contnet40_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  contnet40_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==1) {
                		  var tent151 = [];
                		  var tent152 = [];
                		  var tent153 = [];
                		  var tent154 = [];
                		  var tent155 = [];
                		  var tent156 = [];
                		  var tent151_focus = [];
                		  var tent152_focus = [];
                		  var tent153_focus = [];
                		  var tent154_focus = [];
                		  var tent155_focus = [];
                		  var tent156_focus = [];
                		  for(var a=0; a<Scount32;a++) {
                			  tent151[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent152[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent153[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent154[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent155[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent156[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent151[a]) {
                				  alert(er_sear_floor);
                				  tent151_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent151_focus[a];
                                  return false;
                			  } else if(!tent152[a]) {
                				  alert(er_seat_level);
                				  tent152_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent152_focus[a];
                                  return false;
                			  } else if(!tent153[a]) {
                				  alert(er_seat_name);
                				  tent153_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent153_focus[a];
                                  return false;
                			  } else if(!tent154[a] || !tent155[a]) {
                				  alert(er_seat_number);
                				  if(!tent154[a]) {
                					  tent154_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent154_focus[a];
                				  } else if(!tent155[a]) {
                					  tent155_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent155_focus[a];
                				  }
                                  return false;
                			  } else if(!tent156[a]) {
                				  alert(er_seat_price);
                				  tent156_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent156_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==2) {
                		  var tent157 = [];
                		  var tent158 = [];
                		  var tent159 = [];
                		  var tent160 = [];
                		  var tent161 = [];
                		  var tent162 = [];
                		  var tent157_focus = [];
                		  var tent158_focus = [];
                		  var tent159_focus = [];
                		  var tent160_focus = [];
                		  var tent161_focus = [];
                		  var tent162_focus = [];
                		  for(var a=0; a<Scount33;a++) {
                			  tent157[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent158[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent159[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent160[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent161[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent162[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent157[a]) {
                				  alert(er_sear_floor);
                				  tent157_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent157_focus[a];
                                  return false;
                			  } else if(!tent158[a]) {
                				  alert(er_seat_level);
                				  tent158_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent158_focus[a];
                                  return false;
                			  } else if(!tent159[a]) {
                				  alert(er_seat_name);
                				  tent159_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent159_focus[a];
                                  return false;
                			  } else if(!tent160[a] || !tent161[a]) {
                				  alert(ㅍ);
                				  if(!tent160[a]) {
                					  tent160_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent160_focus[a];
                				  } else if(!tent161[a]) {
                					  tent161_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent161_focus[a];
                				  }
                                  return false;
                			  } else if(!tent162[a]) {
                				  alert(er_seat_price);
                				  tent162_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent162_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==3) {
                		  var tent163= [];
                		  var tent164= [];
                		  var tent165= [];
                		  var tent166= [];
                		  var tent167= [];
                		  var tent168= [];
                		  var tent163_focus = [];
                		  var tent164_focus = [];
                		  var tent165_focus = [];
                		  var tent166_focus = [];
                		  var tent167_focus = [];
                		  var tent168_focus = [];
                		  for(var a=0; a<Scount34;a++) {
                			  tent163[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent164[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent165[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent166[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent167[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent168[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent163[a]) {
                				  alert(er_sear_floor);
                				  tent163_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent163_focus[a];
                                  return false;
                			  } else if(!tent164[a]) {
                				  alert(er_seat_level);
                				  tent164_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent164_focus[a];
                                  return false;
                			  } else if(!tent165[a]) {
                				  alert(er_seat_name);
                				  tent165_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent165_focus[a];
                                  return false;
                			  } else if(!tent166[a] || !tent167[a]) {
                				  alert(er_seat_number);
                				  if(!tent166[a]) {
                					  tent166_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent166_focus[a];
                				  } else if(!tent167[a]) {
                					  tent167_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent167_focus[a];
                				  }
                                  return false;
                			  } else if(!tent168[a]) {
                				  alert(er_seat_price);
                				  tent168_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent168_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==4) {
                		  var tent169= [];
                		  var tent170= [];
                		  var tent171= [];
                		  var tent172= [];
                		  var tent173= [];
                		  var tent174= [];
                		  var tent169_focus = [];
                		  var tent170_focus = [];
                		  var tent171_focus = [];
                		  var tent172_focus = [];
                		  var tent173_focus = [];
                		  var tent174_focus = [];
                		  for(var a=0; a<Scount35;a++) {
                			  tent169[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent170[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent171[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent172[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent173[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent174[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent169[a]) {
                				  alert(er_sear_floor);
                				  tent169_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent169_focus[a];
                                  return false;
                			  } else if(!tent170[a]) {
                				  alert(er_seat_level);
                				  tent170_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent170_focus[a];
                                  return false;
                			  } else if(!tent171[a]) {
                				  alert(er_seat_name);
                				  tent171_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent171_focus[a];
                                  return false;
                			  } else if(!tent172[a] || !tent173[a]) {
                				  alert(er_seat_number);
                				  if(!tent172[a]) {
                					  tent172_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent172_focus[a];
                				  } else if(!tent173[a]) {
                					  tent173_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent173_focus[a];
                				  }
                                  return false;
                			  } else if(!tent174[a]) {
                				  alert(er_seat_price);
                				  tent174_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent174_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==5) {
                		  var tent175= [];
                		  var tent176= [];
                		  var tent177= [];
                		  var tent178= [];
                		  var tent179= [];
                		  var tent180= [];
                		  var tent175_focus = [];
                		  var tent176_focus = [];
                		  var tent177_focus = [];
                		  var tent178_focus = [];
                		  var tent179_focus = [];
                		  var tent180_focus = [];
                		  for(var a=0; a<Scount36;a++) {
                			  tent175[a] = eval("Insertform.i_s_place" + i + j + a + ".value");
                			  tent176[a] = eval("Insertform.i_s_level" + i + j + a + ".value");
                			  tent177[a] = eval("Insertform.i_s_name" + i + j + a + ".value");
                			  tent178[a] = eval("Insertform.i_s_num1" + i + j + a + ".value");
                			  tent179[a] = eval("Insertform.i_s_num2" + i + j + a + ".value");
                			  tent180[a] = eval("Insertform.i_s_price" + i + j + a + ".value");
                			  if(!tent175[a]) {
                				  alert(er_sear_floor);
                				  tent175_focus[a] = eval("Insertform.i_s_place" + i + j + a + ".focus();");
                				  tent175_focus[a];
                                  return false;
                			  } else if(!tent176[a]) {
                				  alert(er_seat_level);
                				  tent176_focus[a] = eval("Insertform.i_s_level" + i + j + a + ".focus();");
                				  tent176_focus[a];
                                  return false;
                			  } else if(!tent177[a]) {
                				  alert(er_seat_name);
                				  tent177_focus[a] = eval("Insertform.i_s_name" + i + j + a + ".focus();");
                				  tent177_focus[a];
                                  return false;
                			  } else if(!tent178[a] || !tent179[a]) {
                				  alert(er_seat_number);
                				  if(!tent178[a]) {
                					  tent178_focus[a] = eval("Insertform.i_s_num1" + i + j + a + ".focus();");
                    				  tent178_focus[a];
                				  } else if(!tent179[a]) {
                					  tent179_focus[a] = eval("Insertform.i_s_num2" + i + j + a + ".focus();");
                    				  tent179_focus[a];
                				  }
                                  return false;
                			  } else if(!tent180[a]) {
                				  alert(er_seat_price);
                				  tent180_focus[a] = eval("Insertform.i_s_price" + i + j + a + ".focus();");
                				  tent180_focus[a];
                                  return false;
                			  }
                		  }
                	  }
                  }
              } 
        }
   }
	
	if(SIcount>0) {
		var content_img = [];
		var content_img_focus = [];
	    var confocus = [];
	    var content = [];
	    for(var i=0; i < SIcount;i++) {
	        content_img[i] = eval("Insertform.simage_" + i + ".value");
	        content[i] = eval("Insertform.sihall_" + i + ".value");
	        if(!content_img [i]) {
	            alert(er_seat_img);
	            content_img_focus[i] = eval("Insertform.simage_" + i + ".focus();");
	            content_img_focus[i];
	            return false;
	        }
	        if(!content[i]) {
	        	alert(er_hall_name);
	        	confocus[i] = eval("Insertform.sihall_" + i + ".focus();");
	            confocus[i]
	        	return false;
	        }
	    }
	} 
}

/******************************************/

function start() {
	$("#i_img_thumbnail").on('change', function(){
        readURL(this);
    });
	$("#video_path").on('change', function(){
        readURL2(this);
    });
	addForm();
	adddate();
	addSImag();
}

function addForm(){
	var str = "<div id='added_"+count+"'>";
	str+="<br><input type='file' id='img_"+count+ "' name='image_"+count;
	str+="'>" + "<br><input type='text' style='width:650px; border: 1px solid lightgray;' name='content_"+count+"'> &nbsp";
	str+="<input type='Button' value='삭제' onclick='delForm()'><br></div>";                         
	$("#addedFormDiv").append(str);
	count++;
	document.Insertform.count.value=count;
}

function delForm(){
	var addedFormDiv = document.getElementById("addedFormDiv");
	if(count >1){
		var addedDiv = document.getElementById("added_"+(--count));
		addedFormDiv.removeChild(addedDiv); 
	}else{
		document.baseForm.reset();
	}
}

function addSImag(){
	var sc = SIcount;
	var str = "<div id='addSI_"+SIcount+"'><br>";
	str += "<div><input type='file' id='simg_"+SIcount+ "' name='simage_"+SIcount+"'></div>";
	str += "<div><img id='Image_"+SIcount+"' width='300' height='150'></div><br>";
	str+="<div style='display:inline;'>홀이름 <input type='text' style='border:1px dashed rgba(164, 164, 164, 1);' name='sihall_"+SIcount+"'> ";
	str+="</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
			"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
			"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " +
			"<input type='Button' value='삭제' style='margin-right:-170px;' onclick='delSImag()'></div>";                       
	$("#addedSImagDiv").append(str);
	$("#simg_"+sc).on('change', function(){
		readURL1(this,sc);
	});
	SIcount++;
	document.Insertform.SIcount.value=SIcount;
}

function delSImag(){
	var addedSImagDiv = document.getElementById("addedSImagDiv");
	if(SIcount >1){
		var addSIDiv = document.getElementById("addSI_"+(--SIcount));
		addedSImagDiv.removeChild(addSIDiv); 
	}else{
		document.baseForm.reset();
	}
}

function addresscheck() {
	new daum.Postcode({
		oncomplete: function(data) {

			var fullAddr = '';
			var extraAddr = '';

			if (data.userSelectedType === 'R') {
				fullAddr = data.roadAddress;

			} else {
				fullAddr = data.jibunAddress;
			}

			if(data.userSelectedType === 'R'){

				if(data.bname !== ''){
					extraAddr += data.bname;
				} 

				if(data.buildingName !== ''){
					extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
				}

				fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
			}

			document.getElementById('i_location_zip').value = data.zonecode; //5자리 새우편번호 사용
			document.getElementById('i_location_adr1').value = fullAddr;
			document.getElementById('i_location_adr2').focus();
		}
	}).open();
}

function addseat(DScount, PScount){
	var scon = 0;
	if(DScount==0) {
		if(PScount==0) {
			scon = Scount1;
		} else if(PScount==1) {
			scon = Scount2;
		} else if(PScount==2) {
			scon = Scount3;
		} else if(PScount==3) {
			scon = Scount4;
		} else if(PScount==4) {
			scon = Scount5;
		} else {
			scon = Scount6;
		}
	} else if(DScount==1) {
		if(PScount==0) {
			scon = Scount7;
		} else if(PScount==1) {
			scon = Scount8;
		} else if(PScount==2) {
			scon = Scount9;
		} else if(PScount==3) {
			scon = Scount10;
		} else if(PScount==4) {
			scon = Scount11;
		} else {
			scon = Scount12;
		}
	} else if(DScount==2) {
		if(PScount==0) {
			scon = Scount13;
		} else if(PScount==1) {
			scon = Scount14;
		} else if(PScount==2) {
			scon = Scount15;
		} else if(PScount==3) {
			scon = Scount16;
		} else if(PScount==4) {
			scon = Scount17;
		} else {
			scon = Scount18;
		}
	} else if(DScount==3) {
		if(PScount==0) {
			scon = Scount19;
		} else if(PScount==1) {
			scon = Scount20;
		} else if(PScount==2) {
			scon = Scount21;
		} else if(PScount==3) {
			scon = Scount22;
		} else if(PScount==4) {
			scon = Scount23;
		} else {
			scon = Scount24;
		}
	} else if(DScount==4) {
		if(PScount==0) {
			scon = Scount25;
		} else if(PScount==1) {
			scon = Scount26;
		} else if(PScount==2) {
			scon = Scount27;
		} else if(PScount==3) {
			scon = Scount28;
		} else if(PScount==4) {
			scon = Scount29;
		} else {
			scon = Scount30;
		}
	} else {
		if(PScount==0) {
			scon = Scount31;
		} else if(PScount==1) {
			scon = Scount32;
		} else if(PScount==2) {
			scon = Scount33;
		} else if(PScount==3) {
			scon = Scount34;
		} else if(PScount==4) {
			scon = Scount35;
		} else {
			scon = Scount36;
		}
	}

	var addse = "#addpo_"+DScount+PScount;

	var str = "<div id='addse_"+DScount+PScount+scon+"'><a style='color:#e55d87;'>좌석정보</a><br>";
	str+="좌석층 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_place"+DScount+PScount+scon+"'>";
	str+=" &nbsp;&nbsp;좌석등급 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_level"+DScount+PScount+scon+"'>";
	str+=" &nbsp;&nbsp;좌석명 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' id='i_s_name"+DScount+PScount+scon+"' name='i_s_name"+DScount+PScount+scon;
	str+="'> <br>좌석번호 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_num1"+DScount+PScount+scon+"'> &nbsp;~ &nbsp;";
	str+="<input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_num2"+DScount+PScount+scon+"'> &nbsp;&nbsp;가격 ";
	str+="<input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_price"+DScount+PScount+scon+"'>";
	str+=" &nbsp;<input type='Button' value='삭제' onclick='delseat("+DScount+","+PScount+","+scon+")'></div>";

	$(addse).append(str);

	if(DScount==0) {
		if(PScount==0) {
			Scount1++;
		} else if(PScount==1) {
			Scount2++;
		} else if(PScount==2) {
			Scount3++;
		} else if(PScount==3) {
			Scount4++;
		} else if(pScount==4) {
			Scount5++;
		} else {
			Scount6++;
		}
	} else if(DScount==1) {
		if(PScount==0) {
			Scount7++;
		} else if(PScount==1) {
			Scount8++;
		} else if(PScount==2) {
			Scount9++;
		} else if(PScount==3) {
			Scount10++;
		} else if(pScount==4) {
			Scount11++;
		} else {
			Scount12++;
		}
	} else if(DScount==2) {
		if(PScount==0) {
			Scount13++;
		} else if(PScount==1) {
			Scount14++;
		} else if(PScount==2) {
			Scount15++;
		} else if(PScount==3) {
			Scount16++;
		} else if(pScount==4) {
			Scount17++;
		} else {
			Scount18++;
		}
	} else if(DScount==3) {
		if(PScount==0) {
			Scount19++;
		} else if(PScount==1) {
			Scount20++;
		} else if(PScount==2) {
			Scount21++;
		} else if(PScount==3) {
			Scount22++;
		} else if(pScount==4) {
			Scount23++;
		} else {
			Scount24++;
		}
	} else if(DScount==4) {
		if(PScount==0) {
			Scount25++;
		} else if(PScount==1) {
			Scount26++;
		} else if(PScount==2) {
			Scount27++;
		} else if(PScount==3) {
			Scount28++;
		} else if(pScount==4) {
			Scount29++;
		} else {
			Scount30++;
		}
	} else {
		if(PScount==0) {
			Scount31++;
		} else if(PScount==1) {
			Scount32++;
		} else if(PScount==2) {
			Scount33++;
		} else if(PScount==3) {
			Scount34++;
		} else if(pScount==4) {
			Scount35++;
		} else {
			Scount36++;
		}
	}
}

function delseat(DDRcount, DPScount, DScount){
	var addseatTR = document.getElementById("addpo_"+DDRcount+DPScount);

	if(DScount>0){
		var addseatDiv = document.getElementById("addse_"+DDRcount+DPScount+DScount);
		if(DDRcount==0) {
			if(DPScount==0) {
				Scount1 = DScount;
			} else if(DPScount==1) {
				Scount2 = DScount;
			} else if(DPScount==2) {
				Scount3 = DScount;
			} else if(DPScount==3) {
				Scount4 = DScount;
			} else if(DPScount==4) {
				Scount5 = DScount;
			} else {
				Scount6 = DScount;
			}
		} else if(DDRcount==1) {
			if(DPScount==0) {
				alert(DScount)
				Scount7 = DScount;
			} else if(DPScount==1) {
				Scount8 = DScount;
			} else if(DPScount==2) {
				Scount9 = DScount;
			} else if(DPScount==3) {
				Scount10 = DScount;
			} else if(DPScount==4) {
				Scount11 = DScount;
			} else {
				Scount12 = DScount;
			}
		} else if(DDRcount==2) {
			if(DPScount==0) {
				Scount13 = DScount;
			} else if(DPScount==1) {
				Scount14 = DScount;
			} else if(DPScount==2) {
				Scount15 = DScount;
			} else if(DPScount==3) {
				Scount16 = DScount;
			} else if(DPScount==4) {
				Scount17 = DScount;
			} else {
				Scount18 = DScount;
			}
		} else if(DDRcount==3) {
			if(DPScount==0) {
				Scount19 = DScount;
			} else if(DPScount==1) {
				Scount20 = DScount;
			} else if(DPScount==2) {
				Scount21 = DScount;
			} else if(DPScount==3) {
				Scount22 = DScount;
			} else if(DPScount==4) {
				Scount23 = DScount;
			} else {
				Scount24 = DScount;
			}
		} else if(DDRcount==4) {
			if(DPScount==0) {
				Scount25 = DScount;
			} else if(DPScount==1) {
				Scount26 = DScount;
			} else if(DPScount==2) {
				Scount27 = DScount;
			} else if(DPScount==3) {
				Scount28 = DScount;
			} else if(DPScount==4) {
				Scount29 = DScount;
			} else {
				Scount30 = DScount;
			}
		} else {
			if(DPScount==0) {
				Scount31 = DScount;
			} else if(DPScount==1) {
				Scount32 = DScount;
			} else if(DPScount==2) {
				Scount33 = DScount;
			} else if(DPScount==3) {
				Scount34 = DScount;
			} else if(DPScount==4) {
				Scount35 = DScount;
			} else {
				Scount36 = DScount;
			}
		}
		addseatTR.removeChild(addseatDiv);
	}else{
		document.baseForm.reset();
	}
}

function addperfo(DPcount){
	var pcon = 0;
	if(DPcount==0) {
		pcon = Pcount1;
	} else if(DPcount==1) {
		pcon = Pcount2;
	} else if(DPcount==2) {
		pcon = Pcount3;
	} else if(DPcount==3) {
		pcon = Pcount4;
	} else if(DPcount==4) {
		pcon = Pcount5;
	} else {
		pcon = Pcount6;
	}

	var addper = "#adddate_"+DPcount;
	var str = "<div id='addpo_"+DPcount+pcon+"'><a style='color:#e55d87;'>공연정보</a><br>";
	str +="공연홀 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' id='i_t_hall"+DPcount+pcon+ "' name='i_t_hall"+DPcount+pcon;
	str +="'> &nbsp;&nbsp;공연시작시간 <input style='border:1px dashed rgba(164, 164, 164, 1);' type='time' name='i_t_stime"+DPcount+pcon+"'> ";
	str +=" &nbsp;&nbsp;공연시간 <input style='border:1px dashed rgba(164, 164, 164, 1); width:60px; height:28px;' type='text' name='i_t_duration"+DPcount+pcon+"'> 분";
	str +=" &nbsp;&nbsp;<input type='button' value='좌석추가' onclick='addseat("+DPcount+","+pcon+")'>";
	str +="&nbsp;<input type='Button' value='삭제' onclick='delperfo("+DPcount+","+pcon+")'>";
	str +="<div class='block' style='background:lightgray; width:700px; margin-left:125px; margin-bottom:10px;'></div></div>"
	str += "<div class='block' style='width:900px; margin-left:25px; margin-bottom:10px;'></div>";
	$(addper).append(str);

	if(DPcount==0) {
		Pcount1++;
	} else if(DPcount==1) {
		Pcount2++;
	} else if(DPcount==2) {
		Pcount3++;
	} else if(DPcount==3) {
		Pcount4++;
	} else if(DPcount==4) {
		Pcount5++;
	} else {
		Pcount6++;
	}

}

function delperfo(DDRcount, DPcount){
	alert(DPcount);
	var addperfoTR = document.getElementById("adddate_"+DDRcount);
	if(DPcount>0){
		var addperfoDiv = document.getElementById("addpo_"+DDRcount+DPcount);
		if(DDRcount==0) {
			if(DPcount==0) {
				Scount1=0;
			} else if(DPcount==1) {
				Scount2=0;
			} else if(DPcount==2) {
				Scount3=0;
			} else if(DPcount==3) {
				Scount4=0;
			} else if(DPcount==4) {
				Scount5=0;
			} else {
				Scount6=0;
			}
			Pcount1 = DPcount;
		} else if(DDRcount==1) {
			if(DPcount==0) {
				Scount7=0;
			} else if(DPcount==1) {
				Scount8=0;
			} else if(DPcount==2) {
				Scount9=0;
			} else if(DPcount==3) {
				Scount10=0;
			} else if(DPcount==4) {
				Scount11=0;
			} else {
				Scount12=0;
			}
			Pcount2 = DPcount;
		} else if(DDRcount==2) {
			if(DPcount==0) {
				Scount13=0;
			} else if(DPcount==1) {
				Scount14=0;
			} else if(DPcount==2) {
				Scount15=0;
			} else if(DPcount==3) {
				Scount16=0;
			} else if(DPcount==4) {
				Scount17=0;
			} else {
				Scount18=0;
			}
			Pcount3 = DPcount;
		} else if(DDRcount==3) {
			if(DPcount==0) {
				Scount19=0;
			} else if(DPcount==1) {
				Scount20=0;
			} else if(DPcount==2) {
				Scount21=0;
			} else if(DPcount==3) {
				Scount22=0;
			} else if(DPcount==4) {
				Scount23=0;
			} else {
				Scount24=0;
			}
			Pcount4 = DPcount;
		} else if(DDRcount==4) {
			if(DPcount==0) {
				Scount25=0;
			} else if(DPcount==1) {
				Scount26=0;
			} else if(DPcount==2) {
				Scount27=0;
			} else if(DPcount==3) {
				Scount28=0;
			} else if(DPcount==4) {
				Scount29=0;
			} else {
				Scount30=0;
			}
			Pcount5 = DPcount;
		} else {
			if(DPcount==0) {
				Scount31=0;
			} else if(DPcount==1) {
				Scount32=0;
			} else if(DPcount==2) {
				Scount33=0;
			} else if(DPcount==3) {
				Scount34=0;
			} else if(DPcount==4) {
				Scount35=0;
			} else {
				Scount36=0;
			}
			Pcount6 = DPcount;
		}
		addperfoTR.removeChild(addperfoDiv); 
	}else{
		document.baseForm.reset();
	} 
}

function adddate(){
	var ppcon = 0;
	var pscon = 0;
	if(Dcount==0) {
		ppcon = Pcount1;
		pscon = Scount1;
		$('#adddateTR').append("<a id=aid_"+Dcount+" onclick=\"this.nextSibling.style.display=(this.nextSibling.style.display==\'none')?\'block':\'none';\" href=\"javascript:void(0)\">드롭</a>");
	} else {
		if(Dcount==1) {
			ppcon = Pcount2;
			pscon = Scount7;
		} else if(Dcount==2) {
			ppcon = Pcount3;
			pscon = Scount13;
		} else if(Dcount==3) {
			ppcon = Pcount4;
			pscon = Scount19;
		} else if(Dcount==4) {
			ppcon = Pcount5;
			pscon = Scount25;
		} else {
			ppcon = Pcount6;
			pscon = Scount31;
		} 
		$('#adddateTR').append("<a id=aid_"+Dcount+" onclick=\"this.nextSibling.style.display=(this.nextSibling.style.display==\'none')?\'block':\'none';\" href=\"javascript:void(0)\"><br>드롭</a>");
	}
	var str = "<div id='adddate_"+Dcount+"' style=\"display:none\">공연일시 ";
	str += "<input type='date' style='border:1px dashed rgba(164, 164, 164, 1);' id='i_date"+Dcount+ "' name='i_date"+Dcount + "'>";
	str +="&nbsp; <input type='Button' value='삭제' onclick='deldate()'> &nbsp;";
	str +="<input type='button' value='공연추가' onclick='addperfo("+Dcount+")'>";
	str +="<div id='addpo_"+Dcount+ppcon+"'><div class='block' style='width:900px; margin-left:25px; margin-bottom:10px;'></div>";
	str +="<a style='color:#e55d87;'>공연정보</a><br>";
	str +="공연홀 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' id='i_t_hall"+Dcount+ppcon+ "' name='i_t_hall"+Dcount+ppcon;
	str +="'> &nbsp;&nbsp; 공연시작시간 <input style='border:1px dashed rgba(164, 164, 164, 1);' type='time' name='i_t_stime"+Dcount+ppcon+"'> ";
	str +=" &nbsp;&nbsp; 공연시간 <input style='border:1px dashed rgba(164, 164, 164, 1); width:60px;  height:28px;' type='text' name='i_t_duration"+Dcount+ppcon+"'> 분";
	str +="&nbsp;&nbsp; <input type='button' value='좌석추가' onclick='addseat("+Dcount+","+ppcon+")'>";
	str +="&nbsp;<input type='Button' value='삭제' onclick='delperfo("+Dcount+","+ppcon+")'>";
	str +="<div class='block' style='background:lightgray; width:700px; margin-left:125px; margin-bottom:-10px;'></div><br><a style='color:#e55d87;'>좌석정보</a><br>";
	str +="좌석층 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_place"+Dcount+ppcon+pscon+"'>";
	str +=" &nbsp;&nbsp;좌석등급 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_level"+Dcount+ppcon+pscon+"'>";
	str +=" &nbsp;&nbsp;좌석명 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' id='i_s_name"+Dcount+ppcon+pscon+ "' name='i_s_name"+Dcount+ppcon+pscon;
	str +="'><br>좌석번호 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_num1"+Dcount+ppcon+pscon+"'> &nbsp;~";
	str +=" &nbsp;<input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_num2"+Dcount+ppcon+pscon+"'> &nbsp;&nbsp;가격";
	str +=" &nbsp;<input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_price"+Dcount+ppcon+pscon+"'>";
	str +=" &nbsp;<input type='Button' value='삭제' onclick='delseat("+Dcount+","+pscon+")'></div>";
	str +="<div class='block' style='width:900px; margin-left:25px; margin-bottom:10px;'></div></div>";

	$('#adddateTR').append(str);
	if(Dcount==0) {
		Scount1++;
		Pcount1++;
	} else if(Dcount==1) {
		Scount7++;
		Pcount2++;
	} else if(Dcount==2) {
		Scount13++;
		Pcount3++;
	} else if(Dcount==3) {
		Scount19++;
		Pcount4++;
	} else if(Dcount==4) {
		Scount25++;
		Pcount5++;
	} else {
		Scount31++;
		Pcount6++;
	}

	Dcount++;
	document.Insertform.Dcount.value=Dcount;
}

function deldate(){
	var adddateTR = document.getElementById("adddateTR");
	if(Dcount>0){
		var adddateDiv = document.getElementById("adddate_"+(--Dcount));
		var a = document.getElementById("aid_"+Dcount);
		if(Dcount==1) {
			Pcount2=0;
			Scount7=0;
			Scount8=0;
			Scount9=0;
			Scount10=0;
			Scount11=0;
			Scount12=0;
		} else if(Dcount == 2) {
			Pcount3=0;
			Scount13=0;
			Scount14=0;
			Scount15=0;
			Scount16=0;
			Scount17=0;
			Scount18=0;
		} else if(Dcount == 3) {
			Pcount4=0;
			Scount19=0;
			Scount20=0;
			Scount21=0;
			Scount22=0;
			Scount23=0;
			Scount24=0;
		} else if(Dcount == 4) {
			Pcount5=0;
			Scount25=0;
			Scount26=0;
			Scount27=0;
			Scount28=0;
			Scount29=0;
			Scount30=0;
		} else {
			Pcount6=0;
			Scount31=0;
			Scount32=0;
			Scount33=0;
			Scount34=0;
			Scount35=0;
			Scount36=0;
		}
		adddateTR.removeChild(adddateDiv); 
		adddateTR.removeChild(a); 
	}else{
		document.baseForm.reset();
	} 
}

//********************************
// 수정							 *
//********************************
function modiStart(num, category) {

	addFForm(num);
	$("#i_img_thumbnail").on('change', function(){
        readURL(this);
    });
	$("#video_path").on('change', function(){
        readURL2(this);
    });
	$("#modiSelect").val(category).prop("selected", true);

}

function modicheck() {
	if(!infoModiForm.i_name.value) {
		alert("공연제목이 입력되지 않았습니다.");
		Insertform.i_name.focus();
		return false;
	} else if(infoModiForm.category.options[infoModiForm.category.selectedIndex].value=="0") {
		alert("카테고리가 선택되지 않았습니다.");
		return false;
	} else if(!infoModiForm.i_open_time.value || !infoModiForm.i_open_day.value) {
		alert("예매오픈일이 선택되지 않았습니다.");
		if(!infoModiForm.i_open_day.value) {
			infoModiForm.i_open_day.focus();
		} else if(!Insertform.i_open_time.value) {
			infoModiForm.i_open_time.focus();
		}
		return false;
	} else if(!infoModiForm.i_open_start.value || !infoModiForm.i_open_end.value) {
		alert("공연기간이 선택되지 않았습니다.");
		if(!infoModiForm.i_open_start.value) {
			infoModiForm.i_open_start.focus();
		} else if(!infoModiForm.i_open_end.value) {
			infoModiForm.i_open_end.focus();
		}
		return false;
	} else if(!infoModiForm.i_location.value) {
		alert("공연장이 입력되지 않았습니다.");
		infoModiForm.i_location.focus();
		return false;
	} else if(!infoModiForm.i_location_zip.value || !infoModiForm.i_location_adr1.value) {
		alert("주소가 제대로 입력되지 않았습니다.");
		return false;
	} else if(DropDcount>0){
		var ConTent1 = [];
		var ConTent1_focus = [];
        for(var i=0; i<DropDcount;i++) {
        	ConTent1[i] = eval("infoModiForm.i_date" + i + ".value");
        	ConTent1_focus[i] = eval("infoModiForm.i_date" + i + ".focus();");
        	if(!ConTent1[i]) {
              	alert("공연일시가 선택되지 않았습니다.");
              	ConTent1_focus[i];
                return false;
              } else if(ConTent1[i] && i==0) {
            	  var Content2 = [];
                  var Content3 = [];
                  var Content4 = [];
                  var Content2_focus = [];
                  var Content3_focus = [];
                  var Content4_focus = [];
                  for(var j=0;j<DropPcount1;j++) {
                	  Content2[j] = eval("infoModiForm.i_t_hall" + i + j + ".value");
                	  Content3[j] = eval("infoModiForm.i_t_stime" + i + j + ".value");
                	  Content4[j] = eval("infoModiForm.i_t_duration" + i + j + ".value");                	                  	  
                	  if(!Content2[j]) {
                		  alert(er_info_hall);
                		  Content2_focus[j] = eval("infoModiForm.i_t_hall" + i + j +".focus();");
                		  Content2_focus[j];
                          return false;
                	  } else if(!Content3[j]) {
                		  alert(er_info_start);
                		  Content3_focus[j] = eval("infoModiForm.i_t_stime" + i + j +".focus();");
                		  Content3_focus[j];
                          return false;
                	  } else if(!Content4[j]) {
                		  alert(er_info_time);
                		  Content4_focus[j] = eval("infoModiForm.i_t_duration" + i + j +".focus();");
                		  Content4_focus[j];
                          return false;
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==0) {
                		  var content5 = [];
                		  var content6 = [];
                		  var content7 = [];
                		  var content8 = [];
                		  var content9 = [];
                		  var content10 = [];
                		  var contnet5_focus = [];
                		  var contnet6_focus = [];
                		  var contnet7_focus = [];
                		  var contnet8_focus = [];
                		  var contnet9_focus = [];
                		  var contnet10_focus = [];
                		  for(var a=0; a<DropScount1;a++) {
                			  content5[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  content6[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  content7[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  content8[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  content9[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  content10[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!content5[a]) {
                				  alert(er_sear_floor);
                				  contnet5_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  contnet5_focus[a];
                                  return false;
                			  } else if(!content6[a]) {
                				  alert(er_seat_level);
                				  contnet6_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  contnet6_focus[a];
                                  return false;
                			  } else if(!content7[a]) {
                				  alert(er_seat_name);
                				  contnet7_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  contnet7_focus[a];
                                  return false;
                			  } else if(!content8[a] || !content9[a]) {
                				  alert(er_seat_number);
                				  if(!content8[a]) {
                					  contnet8_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  contnet8_focus[a];
                				  } else if(!content9[a]) {
                					  contnet9_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  contnet9_focus[a];
                				  }                
                                  return false;
                			  } else if(!content10[a]) {
                				  alert(er_seat_price);
                				  contnet10_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  contnet10_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==1) {
                		  var tent1 = [];
                		  var tent2 = [];
                		  var tent3 = [];
                		  var tent4 = [];
                		  var tent5 = [];
                		  var tent6 = [];
                		  var tent1_focus = [];
                		  var tent2_focus = [];
                		  var tent3_focus = [];
                		  var tent4_focus = [];
                		  var tent5_focus = [];
                		  var tent6_focus = [];
                		  for(var a=0; a<DropScount2;a++) {
                			  tent1[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent2[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent3[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent4[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent5[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent6[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent1[a]) {
                				  alert(er_sear_floor);
                				  tent1_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent1_focus[a];
                                  return false;
                			  } else if(!tent2[a]) {
                				  alert(er_seat_level);
                				  tent2_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent2_focus[a];
                                  return false;
                			  } else if(!tent3[a]) {
                				  alert(er_seat_name);
                				  tent3_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent3_focus[a];
                                  return false;
                			  } else if(!tent4[a] || !tent5[a]) {
                				  alert(er_seat_number);
                				  if(!tent4[a]) {
                					  tent4_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent4_focus[a];
                				  } else if(!tent5[a]) {
                					  tent5_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent5_focus[a];
                				  }
                                  return false;
                			  } else if(!tent6[a]) {
                				  alert(er_seat_price);
                				  tent6_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent6_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==2) {
                		  var tent7 = [];
                		  var tent8 = [];
                		  var tent9 = [];
                		  var tent10 = [];
                		  var tent11 = [];
                		  var tent12 = [];
                		  var tent7_focus = [];
                		  var tent8_focus = [];
                		  var tent9_focus = [];
                		  var tent10_focus = [];
                		  var tent11_focus = [];
                		  var tent12_focus = [];
                		  for(var a=0; a<DropScount3;a++) {
                			  tent7[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent8[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent9[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent10[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent11[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent12[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent7[a]) {
                				  alert(er_sear_floor);
                				  tent7_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent7_focus[a];
                                  return false;
                			  } else if(!tent8[a]) {
                				  alert(er_seat_level);
                				  tent8_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent8_focus[a];
                                  return false;
                			  } else if(!tent9[a]) {
                				  alert(er_seat_name);
                				  tent9_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent9_focus[a];
                                  return false;
                			  } else if(!tent10[a] || !tent11[a]) {
                				  alert(er_seat_number);
                				  if(!tent10[a]) {
                					  tent10_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent10_focus[a];
                				  } else if(!tent11[a]) {
                					  tent11_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent11_focus[a];
                				  }
                                  return false;
                			  } else if(!tent12[a]) {
                				  alert(er_seat_price);
                				  tent12_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent12_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==3) {
                		  var tent13 = [];
                		  var tent14 = [];
                		  var tent15 = [];
                		  var tent16 = [];
                		  var tent17 = [];
                		  var tent18 = [];
                		  var tent13_focus = [];
                		  var tent14_focus = [];
                		  var tent15_focus = [];
                		  var tent16_focus = [];
                		  var tent17_focus = [];
                		  var tent18_focus = [];
                		  for(var a=0; a<DropScount4;a++) {
                			  tent13[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent14[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent15[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent16[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent17[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent18[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent13[a]) {
                				  alert(er_sear_floor);
                				  tent13_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent13_focus[a];
                                  return false;
                			  } else if(!tent14[a]) {
                				  alert(er_seat_level);
                				  tent14_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent14_focus[a];
                                  return false;
                			  } else if(!tent15[a]) {
                				  alert(er_seat_name);
                				  tent15_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent15_focus[a];
                                  return false;
                			  } else if(!tent16[a] || !tent17[a]) {
                				  alert(er_seat_number);
                				  if(!tent16[a]) {
                					  tent16_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent16_focus[a];
                				  } else if(!tent17[a]) {
                					  tent17_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent17_focus[a];
                				  }
                                  return false;
                			  } else if(!tent18[a]) {
                				  alert(er_seat_price);
                				  tent18_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent18_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==4) {
                		  var tent19 = [];
                		  var tent20 = [];
                		  var tent21 = [];
                		  var tent22 = [];
                		  var tent23 = [];
                		  var tent24 = [];
                		  var tent19_focus = [];
                		  var tent20_focus = [];
                		  var tent21_focus = [];
                		  var tent22_focus = [];
                		  var tent23_focus = [];
                		  var tent24_focus = [];
                		  for(var a=0; a<DropScount5;a++) {
                			  tent19[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent20[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent21[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent22[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent23[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent24[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent19[a]) {
                				  alert(er_sear_floor);
                				  tent19_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent19_focus[a];
                                  return false;
                			  } else if(!tent20[a]) {
                				  alert(er_seat_level);
                				  tent20_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent20_focus[a];
                                  return false;
                			  } else if(!tent21[a]) {
                				  alert(er_seat_name);
                				  tent21_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent21_focus[a];
                                  return false;
                			  } else if(!tent22[a] || !tent23[a]) {
                				  alert(er_seat_number);
                				  if(!tent22[a]) {
                					  tent22_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent22_focus[a];
                				  } else if(!tent23[a]) {
                					  tent23_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent23_focus[a];
                				  }
                                  return false;
                			  } else if(!tent24[a]) {
                				  alert(er_seat_price);
                				  tent24_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent24_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==5) {
                		  var tent25 = [];
                		  var tent26 = [];
                		  var tent27 = [];
                		  var tent28 = [];
                		  var tent29 = [];
                		  var tent30 = [];
                		  var tent25_focus = [];
                		  var tent26_focus = [];
                		  var tent27_focus = [];
                		  var tent28_focus = [];
                		  var tent29_focus = [];
                		  var tent30_focus = [];
                		  for(var a=0; a<DropScount6;a++) {
                			  tent25[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent26[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent27[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent28[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent29[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent30[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent25[a]) {
                				  alert(er_sear_floor);
                				  tent25_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent25_focus[a];
                                  return false;
                			  } else if(!tent26[a]) {
                				  alert(er_seat_level);
                				  tent26_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent26_focus[a];
                                  return false;
                			  } else if(!tent27[a]) {
                				  alert(er_seat_name);
                				  tent27_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent27_focus[a];
                                  return false;
                			  } else if(!tent28[a] || !tent29[a]) {
                				  alert(er_seat_number);
                				  if(!tent28[a]) {
                					  tent28_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent28_focus[a];
                				  } else if(!tent29[a]) {
                					  tent29_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent29_focus[a];
                				  }
                                  return false;
                			  } else if(!tent30[a]) {
                				  alert(er_seat_price);
                				  tent30_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent30_focus[a];
                                  return false;
                			  }
                		  }
                	  }
                  }
              } else if(ConTent1[i] && i==1) {
            	  var Content5 = [];
                  var Content6 = [];
                  var Content7 = [];
                  var Content5_focus = [];
                  var Content6_focus = [];
                  var Content7_focus = [];
                  for(var j=0;j<DropPcount2;j++) {
                	  Content5[j] = eval("infoModiForm.i_t_hall" + i + j + ".value");
                	  Content6[j] = eval("infoModiForm.i_t_stime" + i + j + ".value");
                	  Content7[j] = eval("infoModiForm.i_t_duration" + i + j + ".value");
                	  if(!Content5[j]) {
                		  alert(er_info_hall);
                		  Content5_focus[j] = eval("infoModiForm.i_t_hall" + i + j + ".focus();");
                		  Content5_focus[j];
                          return false;
                	  } else if(!Content6[j]) {
                		  alert(er_info_start);
                		  Content6_focus[j] = eval("infoModiForm.i_t_stime" + i + j + ".focus();");
                		  Content6_focus[j];
                          return false;
                	  } else if(!Content7[j]) {
                		  alert(er_info_time);
                		  Content7_focus[j] = eval("infoModiForm.i_t_duration" + i + j + ".focus();");
                		  Content7_focus[j];
                          return false;
                	  } else if(Content5[j] && Content6[j] && Content7[j] && j==0) {
                		  var content11 = [];
                		  var content12 = [];
                		  var content13 = [];
                		  var content14 = [];
                		  var content15 = [];
                		  var content16 = [];
                		  var contnet11_focus = [];
                		  var contnet12_focus = [];
                		  var contnet13_focus = [];
                		  var contnet14_focus = [];
                		  var contnet15_focus = [];
                		  var contnet16_focus = [];
                		  for(var a=0; a<DropScount7;a++) {
                			  content11[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  content12[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  content13[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  content14[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  content15[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  content16[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!content11[a]) {
                				  alert(er_sear_floor);
                				  contnet11_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  contnet11_focus[a];
                                  return false;
                			  } else if(!content12[a]) {
                				  alert(er_seat_level);
                				  contnet12_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  contnet12_focus[a];
                                  return false;
                			  } else if(!content13[a]) {
                				  alert(er_seat_name);
                				  contnet13_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  contnet13_focus[a];
                                  return false;
                			  } else if(!content14[a] || !content15[a]) {
                				  alert(er_seat_number);
                				  if(!content14[a]) {
                					  contnet14_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  contnet14_focus[a];
                				  } else if(!content15[a]) {
                					  contnet15_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  contnet15_focus[a];
                				  }
                                  return false;
                			  } else if(!content16[a]) {
                				  alert(er_seat_price);
                				  contnet16_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  contnet16_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==1) {
                		  var tent31 = [];
                		  var tent32 = [];
                		  var tent33 = [];
                		  var tent34 = [];
                		  var tent35 = [];
                		  var tent36 = [];
                		  var tent31_focus = [];
                		  var tent32_focus = [];
                		  var tent33_focus = [];
                		  var tent34_focus = [];
                		  var tent35_focus = [];
                		  var tent36_focus = [];
                		  for(var a=0; a<DropScount8;a++) {
                			  tent31[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent32[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent33[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent34[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent35[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent36[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent31[a]) {
                				  alert(er_sear_floor);
                				  tent31_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent32_focus[a];
                                  return false;
                			  } else if(!tent32[a]) {
                				  alert(er_seat_level);
                				  tent32_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent32_focus[a];
                                  return false;
                			  } else if(!tent33[a]) {
                				  alert(er_seat_name);
                				  tent33_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent33_focus[a];
                                  return false;
                			  } else if(!tent34[a] || !tent35[a]) {
                				  alert(er_seat_number);
                				  if(!tent34[a]) {
                					  tent34_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent34_focus[a];
                				  } else if(!tent35[a]) {
                					  tent35_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent35_focus[a];
                				  }
                                  return false;
                			  } else if(!tent36[a]) {
                				  alert(er_seat_price);
                				  tent36_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent36_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==2) {
                		  var tent37 = [];
                		  var tent38 = [];
                		  var tent39 = [];
                		  var tent40 = [];
                		  var tent41 = [];
                		  var tent42 = [];
                		  var tent37_focus = [];
                		  var tent38_focus = [];
                		  var tent39_focus = [];
                		  var tent40_focus = [];
                		  var tent41_focus = [];
                		  var tent42_focus = [];
                		  for(var a=0; a<DropScount9;a++) {
                			  tent37[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent38[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent39[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent40[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent41[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent42[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent37[a]) {
                				  alert(er_sear_floor);
                				  tent37_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent37_focus[a];
                                  return false;
                			  } else if(!tent38[a]) {
                				  alert(er_seat_level);
                				  tent38_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent38_focus[a];
                                  return false;
                			  } else if(!tent39[a]) {
                				  alert(er_seat_name);
                				  tent39_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent39_focus[a];
                                  return false;
                			  } else if(!tent40[a] || !tent41[a]) {
                				  alert(er_seat_number);
                				  if(!tent40[a]) {
                					  tent40_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent40_focus[a];
                				  } else if(!tent41[a]) {
                					  tent41_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent41_focus[a];
                				  }
                                  return false;
                			  } else if(!tent42[a]) {
                				  alert(er_seat_price);
                				  tent42_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent42_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==3) {
                		  var tent43 = [];
                		  var tent44 = [];
                		  var tent45 = [];
                		  var tent46 = [];
                		  var tent47 = [];
                		  var tent48 = [];
                		  var tent43_focus = [];
                		  var tent44_focus = [];
                		  var tent45_focus = [];
                		  var tent46_focus = [];
                		  var tent47_focus = [];
                		  var tent48_focus = [];
                		  for(var a=0; a<DropScount10;a++) {
                			  tent43[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent44[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent45[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent46[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent47[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent48[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent43[a]) {
                				  alert(er_sear_floor);
                				  tent43_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent43_focus[a];
                                  return false;
                			  } else if(!tent44[a]) {
                				  alert(er_seat_level);
                				  tent44_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent44_focus[a];
                                  return false;
                			  } else if(!tent45[a]) {
                				  alert(er_seat_name);
                				  tent45_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent45_focus[a];
                                  return false;
                			  } else if(!tent46[a] || !tent47[a]) {
                				  alert(er_seat_number);
                				  if(!tent46[a]) {
                					  tent46_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent46_focus[a];
                				  } else if(!tent47[a]) {
                					  tent47_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent47_focus[a];
                				  }
                                  return false;
                			  } else if(!tent48[a]) {
                				  alert(er_seat_price);
                				  tent48_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent48_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==4) {
                		  var tent49 = [];
                		  var tent50 = [];
                		  var tent51 = [];
                		  var tent52 = [];
                		  var tent53 = [];
                		  var tent54 = [];
                		  var tent49_focus = [];
                		  var tent50_focus = [];
                		  var tent51_focus = [];
                		  var tent52_focus = [];
                		  var tent53_focus = [];
                		  var tent54_focus = [];
                		  for(var a=0; a<DropScount11;a++) {
                			  tent49[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent50[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent51[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent52[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent53[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent54[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent49[a]) {
                				  alert(er_sear_floor);
                				  tent49_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent49_focus[a];
                                  return false;
                			  } else if(!tent50[a]) {
                				  alert(er_seat_level);
                				  tent50_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent50_focus[a];
                                  return false;
                			  } else if(!tent51[a]) {
                				  alert(er_seat_name);
                				  tent51_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent51_focus[a];
                                  return false;
                			  } else if(!tent52[a] || !tent53[a]) {
                				  alert(er_seat_number);
                				  if(!tent52[a]) {
                					  tent52_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent52_focus[a];
                				  } else if(!tent53[a]) {
                					  tent53_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent53_focus[a];
                				  }
                                  return false;
                			  } else if(!tent54[a]) {
                				  alert(er_seat_price);
                				  tent54_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent54_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==5) {
                		  var tent55 = [];
                		  var tent56 = [];
                		  var tent57 = [];
                		  var tent58 = [];
                		  var tent59 = [];
                		  var tent60 = [];
                		  var tent55_focus = [];
                		  var tent56_focus = [];
                		  var tent57_focus = [];
                		  var tent58_focus = [];
                		  var tent59_focus = [];
                		  var tent60_focus = [];
                		  for(var a=0; a<DropScount12;a++) {
                			  tent55[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent56[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent57[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent58[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent59[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent60[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent55[a]) {
                				  alert(er_sear_floor);
                				  tent55_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent55_focus[a];
                                  return false;
                			  } else if(!tent56[a]) {
                				  alert(er_seat_level);
                				  tent56_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent56_focus[a];
                                  return false;
                			  } else if(!tent57[a]) {
                				  alert(er_seat_name);
                				  tent57_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent57_focus[a];
                                  return false;
                			  } else if(!tent58[a] || !tent59[a]) {
                				  alert(er_seat_number);
                				  if(!tent58[a]) {
                					  tent58_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent58_focus[a];
                				  } else if(!tent59[a]) {
                					  tent59_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent59_focus[a];
                				  }
                                  return false;
                			  } else if(!tent60[a]) {
                				  alert(er_seat_price);
                				  tent60_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent60_focus[a];
                                  return false;
                			  }
                		  }
                	  }
                  }
              } else if(ConTent1[i] && i==2) {
            	  var Content8 = [];
                  var Content9 = [];
                  var Content10 = [];
                  var Content8_focus = [];
                  var Content9_focus = [];
                  var Content10_focus = [];
                  for(var j=0;j<DropPcount3;j++) {
                	  Content8[j] = eval("infoModiForm.i_t_hall" + i + j + ".value");
                	  Content9[j] = eval("infoModiForm.i_t_stime" + i + j + ".value");
                	  Content10[j] = eval("infoModiForm.i_t_duration" + i + j + ".value");
                	  if(!Content8[j]) {
                		  alert(er_info_hall);
                		  Content8_focus[j] = eval("infoModiForm.i_t_hall" + i + j + ".focus();");
                		  Content8_focus[j];
                          return false;
                	  } else if(!Content9[j]) {
                		  alert(er_info_start);
                		  Content9_focus[j] = eval("infoModiForm.i_t_stime" + i + j + ".focus();");
                		  Content9_focus[j];
                          return false;
                	  } else if(!Content10[j]) {
                		  alert(er_info_time);
                		  Content10_focus[j] = eval("infoModiForm.i_t_duration" + i + j + ".focus();");
                		  Content10_focus[j];
                          return false;
                	  } else if(Content8[j] && Content9[j] && Content10[j] && j==0) {
                		  var content17 = [];
                		  var content18 = [];
                		  var content19 = [];
                		  var content20 = [];
                		  var content21 = [];
                		  var content22 = [];
                		  var contnet17_focus = [];
                		  var contnet18_focus = [];
                		  var contnet19_focus = [];
                		  var contnet20_focus = [];
                		  var contnet21_focus = [];
                		  var contnet22_focus = [];
                		  for(var a=0; a<DropScount13;a++) {
                			  content17[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  content18[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  content19[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  content20[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  content21[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  content22[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!content17[a]) {
                				  alert(er_sear_floor);
                				  contnet17_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  contnet17_focus[a];
                                  return false;
                			  } else if(!content18[a]) {
                				  alert(er_seat_level);
                				  contnet18_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  contnet18_focus[a];
                                  return false;
                			  } else if(!content19[a]) {
                				  alert(er_seat_name);
                				  contnet19_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  contnet19_focus[a];
                                  return false;
                			  } else if(!content20[a] || !content21[a]) {
                				  alert(er_seat_number);
                				  if(!content20[a]) {
                					  contnet20_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  contnet20_focus[a];
                				  } else if(!content21[a]) {
                					  contnet21_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  contnet21_focus[a];
                				  }
                                  return false;
                			  } else if(!content22[a]) {
                				  alert(er_seat_price);
                				  contnet22_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  contnet22_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==1) {
                		  var tent61 = [];
                		  var tent62 = [];
                		  var tent63 = [];
                		  var tent64 = [];
                		  var tent65 = [];
                		  var tent66 = [];
                		  var tent61_focus = [];
                		  var tent62_focus = [];
                		  var tent63_focus = [];
                		  var tent64_focus = [];
                		  var tent65_focus = [];
                		  var tent66_focus = [];
                		  for(var a=0; a<DropScount14;a++) {
                			  tent61[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent62[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent63[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent64[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent65[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent66[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent61[a]) {
                				  alert(er_sear_floor);
                				  tent61_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent61_focus[a];
                                  return false;
                			  } else if(!tent62[a]) {
                				  alert(er_seat_level);
                				  tent62_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent62_focus[a];
                                  return false;
                			  } else if(!tent63[a]) {
                				  alert(er_seat_name);
                				  tent63_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent63_focus[a];
                                  return false;
                			  } else if(!tent64[a] || !tent65[a]) {
                				  alert(er_seat_number);
                				  if(!tent64[a]) {
                					  tent64_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent64_focus[a];
                				  } else if(!tent65[a]) {
                					  tent65_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent65_focus[a];
                				  }
                                  return false;
                			  } else if(!tent66[a]) {
                				  alert(er_seat_price);
                				  tent66_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent66_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==2) {
                		  var tent67 = [];
                		  var tent68 = [];
                		  var tent69 = [];
                		  var tent70 = [];
                		  var tent71 = [];
                		  var tent72 = [];
                		  var tent67_focus = [];
                		  var tent68_focus = [];
                		  var tent69_focus = [];
                		  var tent70_focus = [];
                		  var tent71_focus = [];
                		  var tent72_focus = [];
                		  for(var a=0; a<DropScount15;a++) {
                			  tent67[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent68[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent69[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent70[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent71[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent72[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent67[a]) {
                				  alert(er_sear_floor);
                				  tent67_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent67_focus[a];
                                  return false;
                			  } else if(!tent68[a]) {
                				  alert(er_seat_level);
                				  tent68_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent68_focus[a];
                                  return false;
                			  } else if(!tent69[a]) {
                				  alert(er_seat_name);
                				  tent69_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent69_focus[a];
                                  return false;
                			  } else if(!tent70[a] || !tent71[a]) {
                				  alert(er_seat_number);
                				  if(!tent70[a]) {
                					  tent70_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent70_focus[a];
                				  } else if(!tent71[a]) {
                					  tent71_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent71_focus[a];
                				  }
                                  return false;
                			  } else if(!tent72[a]) {
                				  alert(er_seat_price);
                				  tent72_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent72_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==3) {
                		  var tent73 = [];
                		  var tent74 = [];
                		  var tent75 = [];
                		  var tent76 = [];
                		  var tent77 = [];
                		  var tent78 = [];
                		  var tent73_focus = [];
                		  var tent74_focus = [];
                		  var tent75_focus = [];
                		  var tent76_focus = [];
                		  var tent77_focus = [];
                		  var tent78_focus = [];
                		  for(var a=0; a<DropScount16;a++) {
                			  tent73[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent74[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent75[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent76[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent77[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent78[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent73[a]) {
                				  alert(er_sear_floor);
                				  tent73_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent73_focus[a];
                                  return false;
                			  } else if(!tent74[a]) {
                				  alert(er_seat_level);
                				  tent74_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent74_focus[a];
                                  return false;
                			  } else if(!tent75[a]) {
                				  alert(er_seat_name);
                				  tent75_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent75_focus[a];
                                  return false;
                			  } else if(!tent76[a] || !tent77[a]) {
                				  alert(er_seat_number);
                				  if(!tent76[a]) {
                					  tent76_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent76_focus[a];
                				  } else if(!tent77[a]) {
                					  tent77_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent77_focus[a];
                				  }
                                  return false;
                			  } else if(!tent78[a]) {
                				  alert(er_seat_price);
                				  tent78_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent78_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==4) {
                		  var tent79 = [];
                		  var tent80 = [];
                		  var tent81 = [];
                		  var tent82 = [];
                		  var tent83 = [];
                		  var tent84 = [];
                		  var tent79_focus = [];
                		  var tent80_focus = [];
                		  var tent81_focus = [];
                		  var tent82_focus = [];
                		  var tent83_focus = [];
                		  var tent84_focus = [];
                		  for(var a=0; a<DropScount17;a++) {
                			  tent79[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent80[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent81[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent82[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent83[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent84[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent79[a]) {
                				  alert(er_sear_floor);
                				  tent79_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent79_focus[a];
                                  return false;
                			  } else if(!tent80[a]) {
                				  alert(er_seat_level);
                				  tent80_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent80_focus[a];
                                  return false;
                			  } else if(!tent81[a]) {
                				  alert(er_seat_name);
                				  tent81_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent81_focus[a];
                                  return false;
                			  } else if(!tent82[a] || !tent83[a]) {
                				  alert(er_seat_number);
                				  if(!tent82[a]) {
                					  tent82_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent82_focus[a];
                				  } else if(!tent83[a]) {
                					  tent83_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent83_focus[a];
                				  }
                                  return false;
                			  } else if(!tent84[a]) {
                				  alert(er_seat_price);
                				  tent84_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent84_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==5) {
                		  var tent85 = [];
                		  var tent86 = [];
                		  var tent87 = [];
                		  var tent88 = [];
                		  var tent89 = [];
                		  var tent90 = [];
                		  var tent85_focus = [];
                		  var tent86_focus = [];
                		  var tent87_focus = [];
                		  var tent88_focus = [];
                		  var tent89_focus = [];
                		  var tent90_focus = [];
                		  for(var a=0; a<DropScount18;a++) {
                			  tent85[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent86[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent87[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent88[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent89[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent90[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent85[a]) {
                				  alert(er_sear_floor);
                				  tent85_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent85_focus[a];
                                  return false;
                			  } else if(!tent86[a]) {
                				  alert(er_seat_level);
                				  tent86_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent86_focus[a];
                                  return false;
                			  } else if(!tent87[a]) {
                				  alert(er_seat_name);
                				  tent87_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent87_focus[a];
                                  return false;
                			  } else if(!tent88[a] || !tent89[a]) {
                				  alert(er_seat_number);
                				  if(!tent88[a]) {
                					  tent88_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent88_focus[a];
                				  } else if(!tent89[a]) {
                					  tent89_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent89_focus[a];
                				  }
                                  return false;
                			  } else if(!tent90[a]) {
                				  alert(er_seat_price);
                				  tent90_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent90_focus[a];
                                  return false;
                			  }
                		  }
                	  }
                  } 
              } else if(ConTent1[i] && i==3) {
            	  var Content11 = [];
                  var Content12 = [];
                  var Content13 = [];
                  var Content11_focus = [];
                  var Content12_focus = [];
                  var Content13_focus = [];
                  for(var j=0;j<DropPcount4;j++) {
                	  Content11[j] = eval("infoModiForm.i_t_hall" + i + j + ".value");
                	  Content12[j] = eval("infoModiForm.i_t_stime" + i + j + ".value");
                	  Content13[j] = eval("infoModiForm.i_t_duration" + i + j + ".value");
                	  if(!Content11[j]) {
                		  alert(er_info_hall);
                		  Content11_focus[j] = eval("infoModiForm.i_t_hall" + i + j + ".focus();");
                		  Content11_focus[j];
                          return false;
                	  } else if(!Content12[j]) {
                		  alert(er_info_start);
                		  Content12_focus[j] = eval("infoModiForm.i_t_stime" + i + j + ".focus();");
                		  Content12_focus[j];
                          return false;
                	  } else if(!Content13[j]) {
                		  alert(er_info_time);
                		  Content13_focus[j] = eval("infoModiForm.i_t_duration" + i + j + ".focus();");
                		  Content13_focus[j];
                          return false;
                	  } else if(Content11[j] && Content12[j] && Content13[j] && j==0) {
                		  var content23 = [];
                		  var content24 = [];
                		  var content25 = [];
                		  var content26 = [];
                		  var content27 = [];
                		  var content28 = [];
                		  var contnet23_focus = [];
                		  var contnet24_focus = [];
                		  var contnet25_focus = [];
                		  var contnet26_focus = [];
                		  var contnet27_focus = [];
                		  var contnet28_focus = [];
                		  for(var a=0; a<DropScount19;a++) {
                			  content23[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  content24[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  content25[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  content26[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  content27[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  content28[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!content23[a]) {
                				  alert(er_sear_floor);
                				  contnet23_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  contnet23_focus[a];
                                  return false;
                			  } else if(!content24[a]) {
                				  alert(er_seat_level);
                				  contnet24_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  contnet24_focus[a];
                                  return false;
                			  } else if(!content25[a]) {
                				  alert(er_seat_name);
                				  contnet25_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  contnet25_focus[a];
                                  return false;
                			  } else if(!content26[a] || !content27[a]) {
                				  alert(er_seat_number);
                				  if(!content26[a]) {
                					  contnet26_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  contnet26_focus[a];
                				  } else if(!content27[a]) {
                					  contnet27_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  contnet27_focus[a];
                				  }
                                  return false;
                			  } else if(!content28[a]) {
                				  alert(er_seat_price);
                				  contnet28_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  contnet28_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==1) {
                		  var tent91 = [];
                		  var tent92 = [];
                		  var tent93 = [];
                		  var tent94 = [];
                		  var tent95 = [];
                		  var tent96 = [];
                		  var tent91_focus = [];
                		  var tent92_focus = [];
                		  var tent93_focus = [];
                		  var tent94_focus = [];
                		  var tent95_focus = [];
                		  var tent96_focus = [];
                		  for(var a=0; a<DropScount20;a++) {
                			  tent91[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent92[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent93[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent94[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent95[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent96[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent91[a]) {
                				  alert(er_sear_floor);
                				  tent91_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent91_focus[a];
                                  return false;
                			  } else if(!tent92[a]) {
                				  alert(er_seat_level);
                				  tent92_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent92_focus[a];
                                  return false;
                			  } else if(!tent93[a]) {
                				  alert(er_seat_name);
                				  tent93_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent93_focus[a];
                                  return false;
                			  } else if(!tent94[a] || !tent95[a]) {
                				  alert(er_seat_number);
                				  if(!tent94[a]) {
                					  tent94_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent94_focus[a];
                				  } else if(!tent95[a]) {
                					  tent95_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent95_focus[a];
                				  }
                                  return false;
                			  } else if(!tent96[a]) {
                				  alert(er_seat_price);
                				  tent96_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent96_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==2) {
                		  var tent97 = [];
                		  var tent98 = [];
                		  var tent99 = [];
                		  var tent100 = [];
                		  var tent101 = [];
                		  var tent102 = [];
                		  var tent97_focus = [];
                		  var tent98_focus = [];
                		  var tent99_focus = [];
                		  var tent100_focus = [];
                		  var tent101_focus = [];
                		  var tent102_focus = [];
                		  for(var a=0; a<DropScount21;a++) {
                			  tent97[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent98[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent99[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent100[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent101[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent102[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent97[a]) {
                				  alert(er_sear_floor);
                				  tent97_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent97_focus[a];
                                  return false;
                			  } else if(!tent98[a]) {
                				  alert(er_seat_level);
                				  tent98_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent98_focus[a];
                                  return false;
                			  } else if(!tent99[a]) {
                				  alert(er_seat_name);
                				  tent99_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent99_focus[a];
                                  return false;
                			  } else if(!tent100[a] || !tent101[a]) {
                				  alert(er_seat_number);
                				  if(!tent100[a]) {
                					  tent100_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent100_focus[a];
                				  } else if(!tent101[a]) {
                					  tent101_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent101_focus[a];
                				  }
                                  return false;
                			  } else if(!tent102[a]) {
                				  alert(er_seat_price);
                				  tent102_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent102_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==3) {
                		  var tent103 = [];
                		  var tent104 = [];
                		  var tent105 = [];
                		  var tent106 = [];
                		  var tent107 = [];
                		  var tent108 = [];
                		  var tent103_focus = [];
                		  var tent104_focus = [];
                		  var tent105_focus = [];
                		  var tent106_focus = [];
                		  var tent107_focus = [];
                		  var tent108_focus = [];
                		  for(var a=0; a<DropScount22;a++) {
                			  tent103[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent104[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent105[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent106[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent107[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent108[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent103[a]) {
                				  alert(er_sear_floor);
                				  tent103_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent103_focus[a];
                                  return false;
                			  } else if(!tent104[a]) {
                				  alert(er_seat_level);
                				  tent104_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent104_focus[a];
                                  return false;
                			  } else if(!tent105[a]) {
                				  alert(er_seat_name);
                				  tent105_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent105_focus[a];
                                  return false;
                			  } else if(!tent106[a] || !tent107[a]) {
                				  alert(er_seat_number);
                				  if(!tent106[a]) {
                					  tent106_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent106_focus[a];
                				  } else if(!tent107[a]) {
                					  tent107_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent107_focus[a];
                				  }
                                  return false;
                			  } else if(!tent108[a]) {
                				  alert(er_seat_price);
                				  tent108_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent108_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==4) {
                		  var tent109 = [];
                		  var tent110 = [];
                		  var tent111 = [];
                		  var tent112 = [];
                		  var tent113 = [];
                		  var tent114 = [];
                		  var tent109_focus = [];
                		  var tent110_focus = [];
                		  var tent111_focus = [];
                		  var tent112_focus = [];
                		  var tent113_focus = [];
                		  var tent114_focus = [];
                		  for(var a=0; a<DropScount23;a++) {
                			  tent109[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent110[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent111[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent112[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent113[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent114[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent109[a]) {
                				  alert(er_sear_floor);
                				  tent109_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent109_focus[a];
                                  return false;
                			  } else if(!tent110[a]) {
                				  alert(er_seat_level);
                				  tent110_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent110_focus[a];
                                  return false;
                			  } else if(!tent111[a]) {
                				  alert(er_seat_name);
                				  tent111_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent111_focus[a];
                                  return false;
                			  } else if(!tent112[a] || !tent113[a]) {
                				  alert(er_seat_number);
                				  if(!tent112[a]) {
                					  tent112_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent112_focus[a];
                				  } else if(!tent113[a]) {
                					  tent113_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent113_focus[a];
                				  }
                                  return false;
                			  } else if(!tent114[a]) {
                				  alert(er_seat_price);
                				  tent114_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent114_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==5) {
                		  var tent115 = [];
                		  var tent116 = [];
                		  var tent117 = [];
                		  var tent118 = [];
                		  var tent119 = [];
                		  var tent120 = [];
                		  var tent115_focus = [];
                		  var tent116_focus = [];
                		  var tent117_focus = [];
                		  var tent118_focus = [];
                		  var tent119_focus = [];
                		  var tent120_focus = [];
                		  for(var a=0; a<DropScount24;a++) {
                			  tent115[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent116[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent117[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent118[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent119[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent120[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent115[a]) {
                				  alert(er_sear_floor);
                				  tent115_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent115_focus[a];
                                  return false;
                			  } else if(!tent116[a]) {
                				  alert(er_seat_level);
                				  tent116_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent116_focus[a];
                                  return false;
                			  } else if(!tent117[a]) {
                				  alert(er_seat_name);
                				  tent117_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent117_focus[a];
                                  return false;
                			  } else if(!tent118[a] || !tent119[a]) {
                				  alert(er_seat_number);
                				  if(!tent118[a]) {
                					  tent118_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent118_focus[a];
                				  } else if(!tent119[a]) {
                					  tent119_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent119_focus[a];
                				  }
                                  return false;
                			  } else if(!tent120[a]) {
                				  alert(er_seat_price);
                				  tent120_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent120_focus[a];
                                  return false;
                			  }
                		  }
                	  }
                  }
              } else if(ConTent1[i] && i==4) {
            	  var Content14 = [];
                  var Content15 = [];
                  var Content16 = [];
                  var Content14_focus = [];
                  var Content15_focus = [];
                  var Content16_focus = [];
                  for(var j=0;j<DropPcount5;j++) {
                	  Content14[j] = eval("infoModiForm.i_t_hall" + i + j + ".value");
                	  Content15[j] = eval("infoModiForm.i_t_stime" + i + j + ".value");
                	  Content16[j] = eval("infoModiForm.i_t_duration" + i + j + ".value");
                	  if(!Content14[j]) {
                		  alert(er_info_hall);
                		  Content14_focus[j] = eval("infoModiForm.i_t_hall" + i + j + ".focus();");
                		  Content14_focus[j];
                          return false;
                	  } else if(!Content15[j]) {
                		  alert(er_info_start);
                		  Content15_focus[j] = eval("infoModiForm.i_t_stime" + i + j + ".focus();");
                		  Content15_focus[j];
                          return false;
                	  } else if(!Content16[j]) {
                		  alert(er_info_time);
                		  Content16_focus[j] = eval("infoModiForm.i_t_duration" + i + j + ".focus();");
                		  Content16_focus[j];
                          return false;
                	  } else if(Content14[j] && Content15[j] && Content16[j] && j==0) {
                		  var content29 = [];
                		  var content30 = [];
                		  var content31 = [];
                		  var content32 = [];
                		  var content33 = [];
                		  var content34 = [];
                		  var contnet29_focus = [];
                		  var contnet30_focus = [];
                		  var contnet31_focus = [];
                		  var contnet32_focus = [];
                		  var contnet33_focus = [];
                		  var contnet34_focus = [];
                		  for(var a=0; a<DropScount25;a++) {
                			  content29[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  content30[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  content31[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  content32[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  content33[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  content34[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!content29[a]) {
                				  alert(er_sear_floor);
                				  contnet29_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  contnet29_focus[a];
                                  return false;
                			  } else if(!content30[a]) {
                				  alert(er_seat_level);
                				  contnet30_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  contnet30_focus[a];
                                  return false;
                			  } else if(!content31[a]) {
                				  alert(er_seat_name);
                				  contnet31_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  contnet31_focus[a];
                                  return false;
                			  } else if(!content32[a] || !content33[a]) {
                				  alert(eat_number);
                				  if(!content32[a]) {
                					  contnet32_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  contnet32_focus[a];
                				  } else if(!content33[a]) {
                					  contnet33_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  contnet33_focus[a];
                				  }
                                  return false;
                			  } else if(!content34[a]) {
                				  alert(er_seat_price);
                				  contnet34_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  contnet34_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==1) {
                		  var tent121 = [];
                		  var tent122 = [];
                		  var tent123 = [];
                		  var tent124 = [];
                		  var tent125 = [];
                		  var tent126 = [];
                		  var tent121_focus = [];
                		  var tent122_focus = [];
                		  var tent123_focus = [];
                		  var tent124_focus = [];
                		  var tent125_focus = [];
                		  var tent126_focus = [];
                		  for(var a=0; a<DropScount26;a++) {
                			  tent121[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent122[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent123[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent124[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent125[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent126[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent121[a]) {
                				  alert(er_sear_floor);
                				  tent121_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent121_focus[a];
                                  return false;
                			  } else if(!tent122[a]) {
                				  alert(er_seat_level);
                				  tent122_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent122_focus[a];
                                  return false;
                			  } else if(!tent123[a]) {
                				  alert(er_seat_name);
                				  tent123_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent123_focus[a];
                                  return false;
                			  } else if(!tent124[a] || !tent125[a]) {
                				  alert(er_seat_number);
                				  if(!tent124[a]) {
                					  tent124_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent124_focus[a];
                				  } else if(!tent125[a]) {
                					  tent125_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent125_focus[a];
                				  }
                                  return false;
                			  } else if(!tent126[a]) {
                				  alert(er_seat_price);
                				  tent126_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent126_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==2) {
                		  var tent127 = [];
                		  var tent128 = [];
                		  var tent129 = [];
                		  var tent130 = [];
                		  var tent131 = [];
                		  var tent132 = [];
                		  var tent127_focus = [];
                		  var tent128_focus = [];
                		  var tent129_focus = [];
                		  var tent130_focus = [];
                		  var tent131_focus = [];
                		  var tent132_focus = [];
                		  for(var a=0; a<DropScount27;a++) {
                			  tent127[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent128[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent129[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent130[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent131[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent132[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent127[a]) {
                				  alert(er_sear_floor);
                				  tent127_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent127_focus[a];
                                  return false;
                			  } else if(!tent128[a]) {
                				  alert(er_seat_level);
                				  tent128_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent128_focus[a];
                                  return false;
                			  } else if(!tent129[a]) {
                				  alert(er_seat_name);
                				  tent129_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent129_focus[a];
                                  return false;
                			  } else if(!tent130[a] || !tent131[a]) {
                				  alert("좌석번호가 제대로 입력되지 않았습니다.");
                				  if(!tent130[a]) {
                					  tent130_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent130_focus[a];
                				  } else if(!tent131[a]) {
                					  tent131_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent131_focus[a];
                				  }
                                  return false;
                			  } else if(!tent132[a]) {
                				  alert(er_seat_price);
                				  tent132_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent132_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==3) {
                		  var tent133 = [];
                		  var tent134 = [];
                		  var tent135 = [];
                		  var tent136 = [];
                		  var tent137 = [];
                		  var tent138 = [];
                		  var tent133_focus = [];
                		  var tent134_focus = [];
                		  var tent135_focus = [];
                		  var tent136_focus = [];
                		  var tent137_focus = [];
                		  var tent138_focus = [];
                		  for(var a=0; a<DropScount28;a++) {
                			  tent133[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent134[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent135[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent136[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent137[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent138[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent133[a]) {
                				  alert(er_sear_floor);
                				  tent133_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent133_focus[a];
                                  return false;
                			  } else if(!tent134[a]) {
                				  alert(er_seat_level);
                				  tent134_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent134_focus[a];
                                  return false;
                			  } else if(!tent135[a]) {
                				  alert(er_seat_name);
                				  tent135_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent135_focus[a];
                                  return false;
                			  } else if(!tent136[a] || !tent137[a]) {
                				  alert(er_seat_number);
                				  if(!tent136[a]) {
                					  tent136_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent136_focus[a];
                				  } else if(!tent137[a]) {
                					  tent137_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent137_focus[a];
                				  }
                                  return false;
                			  } else if(!tent138[a]) {
                				  alert(er_seat_price);
                				  tent138_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent138_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==4) {
                		  var tent139 = [];
                		  var tent140 = [];
                		  var tent141 = [];
                		  var tent142 = [];
                		  var tent143 = [];
                		  var tent144 = [];
                		  var tent139_focus = [];
                		  var tent140_focus = [];
                		  var tent141_focus = [];
                		  var tent142_focus = [];
                		  var tent143_focus = [];
                		  var tent144_focus = [];
                		  for(var a=0; a<DropScount29;a++) {
                			  tent139[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent140[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent141[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent142[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent143[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent144[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent139[a]) {
                				  alert(er_sear_floor);
                				  tent139_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent139_focus[a];
                                  return false;
                			  } else if(!tent140[a]) {
                				  alert(er_seat_level);
                				  tent140_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent140_focus[a];
                                  return false;
                			  } else if(!tent141[a]) {
                				  alert(er_seat_name);
                				  tent141_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent141_focus[a];
                                  return false;
                			  } else if(!tent142[a] || !tent143[a]) {
                				  alert(er_seat_number);
                				  if(!tent142[a]) {
                					  tent142_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent142_focus[a];
                				  } else if(!tent143[a]) {
                					  tent143_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent143_focus[a];
                				  }
                                  return false;
                			  } else if(!tent144[a]) {
                				  alert(er_seat_price);
                				  tent144_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent144_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==5) {
                		  var tent145 = [];
                		  var tent146 = [];
                		  var tent147 = [];
                		  var tent148 = [];
                		  var tent149 = [];
                		  var tent150 = [];
                		  var tent145_focus = [];
                		  var tent146_focus = [];
                		  var tent147_focus = [];
                		  var tent148_focus = [];
                		  var tent149_focus = [];
                		  var tent150_focus = [];
                		  for(var a=0; a<DropScount30;a++) {
                			  tent145[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent146[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent147[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent148[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent149[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent150[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent145[a]) {
                				  alert(er_sear_floor);
                				  tent145_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent145_focus[a];
                                  return false;
                			  } else if(!tent146[a]) {
                				  alert(er_seat_level);
                				  tent146_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent146_focus[a];
                                  return false;
                			  } else if(!tent147[a]) {
                				  alert(er_seat_name);
                				  tent147_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent147_focus[a];
                                  return false;
                			  } else if(!tent148[a] || !tent149[a]) {
                				  alert(er_seat_number);
                				  if(!tent148[a]) {
                					  tent148_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent148_focus[a];
                				  } else if(!tent149[a]) {
                					  tent149_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent149_focus[a];
                				  }
                                  return false;
                			  } else if(!tent150[a]) {
                				  alert(er_seat_price);
                				  tent150_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent150_focus[a];
                                  return false;
                			  }
                		  }
                	  }
                  }
              } else if(ConTent1[i] && i==5) {
            	  var Content17 = [];
                  var Content18 = [];
                  var Content19 = [];
                  var Content17_focus = [];
                  var Content18_focus = [];
                  var Content19_focus = [];
                  for(var j=0;j<DropPcount6;j++) {
                	  Content17[j] = eval("infoModiForm.i_t_hall" + i + j + ".value");
                	  Content18[j] = eval("infoModiForm.i_t_stime" + i + j + ".value");
                	  Content19[j] = eval("infoModiForm.i_t_duration" + i + j + ".value");
                	  if(!Content17[j]) {
                		  alert(er_info_hall);
                		  Content17_focus[j] = eval("infoModiForm.i_t_hall" + i + j + ".focus();");
                		  Content17_focus[j];
                          return false;
                	  } else if(!Content18[j]) {
                		  alert(er_info_start);
                		  Content18_focus[j] = eval("infoModiForm.i_t_stime" + i + j + ".focus();");
                		  Content18_focus[j];
                          return false;
                	  } else if(!Content19[j]) {
                		  alert(er_info_time);
                		  Content19_focus[j] = eval("infoModiForm.i_t_duration" + i + j + ".focus();");
                		  Content19_focus[j];
                          return false;
                	  } else if(Content17[j] && Content18[j] && Content19[j] && j==0) {
                		  var content35 = [];
                		  var content36 = [];
                		  var content37 = [];
                		  var content38 = [];
                		  var content39 = [];
                		  var content40 = [];
                		  var contnet35_focus = [];
                		  var contnet36_focus = [];
                		  var contnet37_focus = [];
                		  var contnet38_focus = [];
                		  var contnet39_focus = [];
                		  var contnet40_focus = [];
                		  for(var a=0; a<DropScount31;a++) {
                			  content35[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  content36[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  content37[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  content38[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  content39[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  content40[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!content35[a]) {
                				  alert(er_sear_floor);
                				  contnet35_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  contnet35_focus[a];
                                  return false;
                			  } else if(!content36[a]) {
                				  alert(er_seat_level);
                				  contnet36_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  contnet36_focus[a];
                                  return false;
                			  } else if(!content37[a]) {
                				  alert(er_seat_name);
                				  contnet37_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  contnet37_focus[a];
                                  return false;
                			  } else if(!content38[a] || !content39[a]) {
                				  alert(er_seat_number);
                				  if(!content38[a]) {
                					  contnet38_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  contnet38_focus[a];
                				  } else if(!content39[a]) {
                					  contnet39_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  contnet39_focus[a];
                				  }
                                  return false;
                			  } else if(!content40[a]) {
                				  alert(er_seat_price);
                				  contnet40_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  contnet40_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==1) {
                		  var tent151 = [];
                		  var tent152 = [];
                		  var tent153 = [];
                		  var tent154 = [];
                		  var tent155 = [];
                		  var tent156 = [];
                		  var tent151_focus = [];
                		  var tent152_focus = [];
                		  var tent153_focus = [];
                		  var tent154_focus = [];
                		  var tent155_focus = [];
                		  var tent156_focus = [];
                		  for(var a=0; a<DropScount32;a++) {
                			  tent151[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent152[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent153[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent154[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent155[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent156[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent151[a]) {
                				  alert(er_sear_floor);
                				  tent151_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent151_focus[a];
                                  return false;
                			  } else if(!tent152[a]) {
                				  alert(er_seat_level);
                				  tent152_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent152_focus[a];
                                  return false;
                			  } else if(!tent153[a]) {
                				  alert(er_seat_name);
                				  tent153_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent153_focus[a];
                                  return false;
                			  } else if(!tent154[a] || !tent155[a]) {
                				  alert(er_seat_number);
                				  if(!tent154[a]) {
                					  tent154_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent154_focus[a];
                				  } else if(!tent155[a]) {
                					  tent155_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent155_focus[a];
                				  }
                                  return false;
                			  } else if(!tent156[a]) {
                				  alert(er_seat_price);
                				  tent156_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent156_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==2) {
                		  var tent157 = [];
                		  var tent158 = [];
                		  var tent159 = [];
                		  var tent160 = [];
                		  var tent161 = [];
                		  var tent162 = [];
                		  var tent157_focus = [];
                		  var tent158_focus = [];
                		  var tent159_focus = [];
                		  var tent160_focus = [];
                		  var tent161_focus = [];
                		  var tent162_focus = [];
                		  for(var a=0; a<DropScount33;a++) {
                			  tent157[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent158[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent159[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent160[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent161[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent162[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent157[a]) {
                				  alert(er_sear_floor);
                				  tent157_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent157_focus[a];
                                  return false;
                			  } else if(!tent158[a]) {
                				  alert(er_seat_level);
                				  tent158_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent158_focus[a];
                                  return false;
                			  } else if(!tent159[a]) {
                				  alert(er_seat_name);
                				  tent159_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent159_focus[a];
                                  return false;
                			  } else if(!tent160[a] || !tent161[a]) {
                				  alert(er_seat_number);
                				  if(!tent160[a]) {
                					  tent160_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent160_focus[a];
                				  } else if(!tent161[a]) {
                					  tent161_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent161_focus[a];
                				  }
                                  return false;
                			  } else if(!tent162[a]) {
                				  alert(er_seat_price);
                				  tent162_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent162_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==3) {
                		  var tent163= [];
                		  var tent164= [];
                		  var tent165= [];
                		  var tent166= [];
                		  var tent167= [];
                		  var tent168= [];
                		  var tent163_focus = [];
                		  var tent164_focus = [];
                		  var tent165_focus = [];
                		  var tent166_focus = [];
                		  var tent167_focus = [];
                		  var tent168_focus = [];
                		  for(var a=0; a<DropScount34;a++) {
                			  tent163[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent164[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent165[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent166[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent167[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent168[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent163[a]) {
                				  alert(er_sear_floor);
                				  tent163_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent163_focus[a];
                                  return false;
                			  } else if(!tent164[a]) {
                				  alert(er_seat_level);
                				  tent164_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent164_focus[a];
                                  return false;
                			  } else if(!tent165[a]) {
                				  alert(er_seat_name);
                				  tent165_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent165_focus[a];
                                  return false;
                			  } else if(!tent166[a] || !tent167[a]) {
                				  alert(er_seat_number);
                				  if(!tent166[a]) {
                					  tent166_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent166_focus[a];
                				  } else if(!tent167[a]) {
                					  tent167_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent167_focus[a];
                				  }
                                  return false;
                			  } else if(!tent168[a]) {
                				  alert(er_seat_price);
                				  tent168_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent168_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==4) {
                		  var tent169= [];
                		  var tent170= [];
                		  var tent171= [];
                		  var tent172= [];
                		  var tent173= [];
                		  var tent174= [];
                		  var tent169_focus = [];
                		  var tent170_focus = [];
                		  var tent171_focus = [];
                		  var tent172_focus = [];
                		  var tent173_focus = [];
                		  var tent174_focus = [];
                		  for(var a=0; a<DropScount35;a++) {
                			  tent169[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent170[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent171[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent172[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent173[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent174[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent169[a]) {
                				  alert(er_sear_floor);
                				  tent169_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent169_focus[a];
                                  return false;
                			  } else if(!tent170[a]) {
                				  alert(er_seat_level);
                				  tent170_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent170_focus[a];
                                  return false;
                			  } else if(!tent171[a]) {
                				  alert(er_seat_name);
                				  tent171_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent171_focus[a];
                                  return false;
                			  } else if(!tent172[a] || !tent173[a]) {
                				  alert(er_seat_number);
                				  if(!tent172[a]) {
                					  tent172_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent172_focus[a];
                				  } else if(!tent173[a]) {
                					  tent173_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent173_focus[a];
                				  }
                                  return false;
                			  } else if(!tent174[a]) {
                				  alert(er_seat_price);
                				  tent174_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent174_focus[a];
                                  return false;
                			  }
                		  }
                	  } else if(Content2[j] && Content3[j] && Content4[j] && j==5) {
                		  var tent175= [];
                		  var tent176= [];
                		  var tent177= [];
                		  var tent178= [];
                		  var tent179= [];
                		  var tent180= [];
                		  var tent175_focus = [];
                		  var tent176_focus = [];
                		  var tent177_focus = [];
                		  var tent178_focus = [];
                		  var tent179_focus = [];
                		  var tent180_focus = [];
                		  for(var a=0; a<DropScount36;a++) {
                			  tent175[a] = eval("infoModiForm.i_s_place" + i + j + a + ".value");
                			  tent176[a] = eval("infoModiForm.i_s_level" + i + j + a + ".value");
                			  tent177[a] = eval("infoModiForm.i_s_name" + i + j + a + ".value");
                			  tent178[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".value");
                			  tent179[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".value");
                			  tent180[a] = eval("infoModiForm.i_s_price" + i + j + a + ".value");
                			  if(!tent175[a]) {
                				  alert(er_sear_floor);
                				  tent175_focus[a] = eval("infoModiForm.i_s_place" + i + j + a + ".focus();");
                				  tent175_focus[a];
                                  return false;
                			  } else if(!tent176[a]) {
                				  alert(er_seat_level);
                				  tent176_focus[a] = eval("infoModiForm.i_s_level" + i + j + a + ".focus();");
                				  tent176_focus[a];
                                  return false;
                			  } else if(!tent177[a]) {
                				  alert(er_seat_name);
                				  tent177_focus[a] = eval("infoModiForm.i_s_name" + i + j + a + ".focus();");
                				  tent177_focus[a];
                                  return false;
                			  } else if(!tent178[a] || !tent179[a]) {
                				  alert(er_seat_number);
                				  if(!tent178[a]) {
                					  tent178_focus[a] = eval("infoModiForm.i_s_num1" + i + j + a + ".focus();");
                    				  tent178_focus[a];
                				  } else if(!tent179[a]) {
                					  tent179_focus[a] = eval("infoModiForm.i_s_num2" + i + j + a + ".focus();");
                    				  tent179_focus[a];
                				  }
                                  return false;
                			  } else if(!tent180[a]) {
                				  alert(er_seat_price);
                				  tent180_focus[a] = eval("infoModiForm.i_s_price" + i + j + a + ".focus();");
                				  tent180_focus[a];
                                  return false;
                			  }
                		  }
                	  }
                  }
              } 
        }
   }
	
	if(DropSIcount>0) {
		var content_img = [];
		var content_img_focus = [];
	    var confocus = [];
	    var content = [];
	    for(var i=0; i < DropSIcount;i++) {
	        content_img[i] = eval("infoModiForm.simage_" + i + ".value");
	        content[i] = eval("infoModiForm.sihall_" + i + ".value");
	        if(!content_img [i]) {
	            alert(er_seat_img);
	            content_img_focus[i] = eval("infoModiForm.simage_" + i + ".focus();");
	            content_img_focus[i];
	            return false;
	        }
	        if(!content[i]) {
	        	alert(er_hall_name);
	        	confocus[i] = eval("infoModiForm.sihall_" + i + ".focus();");
	            confocus[i]
	        	return false;
	        }
	    }
	} 
}

function addFForm(num) {
	var t = 0;
	var r = 0;
	var m = 0;
	$.ajax(
			{
				type : "POST",
				url : "infoDropForm.do",
				data : {
					num : num,
				},
				success : function(data) {
					if (data == "") {
						return;
					}
					var result = eval("(" + data + ")");
					for(var i = 0; i < result.Data[0].dnumsize.length; i++) {
						dropdate(result.Data[7].infodateDto[i].date,result.Data[8].infotimeDto[r++],
								result.Data[9].infoseatDto[m++]);
						for(var j=0; j < result.Data[1].tnumsize[i];j++) {
							if(j == 0) {
								if(i>=1){
									t += result.Data[1].tnumsize[i-1];
									for(var k=0; k<result.Data[2].snumsize[t]-1;k++) {
										dropseat(i, j, result.Data[9].infoseatDto[m++]);
									}
								} else {
									for(var k=0; k<result.Data[2].snumsize[j]-1;k++) {
										dropseat(i, j,result.Data[9].infoseatDto[m++]);
									}
								}
							} else {
								dropperfo(i,result.Data[8].infotimeDto[r++]);
								if(i>=1){
									t += 1;
									for(var k=0; k<result.Data[2].snumsize[t];k++) {
										dropseat(i, j, result.Data[9].infoseatDto[m++]);
									}
								} else {
									for(var k=0;k<result.Data[2].snumsize[j];k++) {
										dropseat(i, j, result.Data[9].infoseatDto[m++]);
									}
								}
							}
						}
					}

					for(var i=0; i<result.Data[3].i_c_num_size;i++) {
						dropForm(result.Data[6].infoconDto[i]);
					}

					for(var i=0; i<result.Data[4].i_si_num_size;i++) {
						dropSImag(result.Data[5].infosiDTO[i]);
					}
				}
			}
	);
}
function dropdate(date, infoTime, infoSeat){
	var ppcon = 0;
	var pscon = 0;
	if(DropDcount==0) {
		ppcon = DropPcount1;
		pscon = DropScount1;
		$('#dropTR').append("<a id=aid_"+DropDcount+" onclick=\"this.nextSibling.style.display=(this.nextSibling.style.display==\'none')?\'block':\'none';\" href=\"javascript:void(0)\">드롭</a>");
	} else {
		if(DropDcount==1) {
			ppcon = DropPcount2;
			pscon = DropScount7;
		} else if(DropDcount==2) {
			ppcon = DropPcount3;
			pscon = DropScount13;
		} else if(DropDcount==3) {
			ppcon = DropPcount4;
			pscon = DropScount19;
		} else if(DropDcount==4) {
			ppcon = DropPcount5;
			pscon = DropScount25;
		} else {
			ppcon = DropPcount6;
			pscon = DropScount31;
		} 
		$('#dropTR').append("<a id=aid_"+DropDcount+" onclick=\"this.nextSibling.style.display=(this.nextSibling.style.display==\'none')?\'block':\'none';\" href=\"javascript:void(0)\"><br>드롭</a>");
	}
	if(!infoTime && !infoSeat) {
		var str = "<div id='adddate_"+DropDcount+"' style=\"display:none\">공연일시 ";
		str += "<input type='date' style='border:1px dashed rgba(164, 164, 164, 1);' id='i_date"+DropDcount+ "' name='i_date"+DropDcount + "'>";
		str +="&nbsp; <input type='Button' value='삭제' onclick='dropdeldate()'> &nbsp;";
		str +="<input type='button' value='공연추가' onclick='dropperfo("+DropDcount+")'>";
		str += "<div id='addpo_"+DropDcount+ppcon+"'><div class='block' style='width:900px; margin-left:25px; margin-bottom:10px;'></div>";
		str +="<a style='color:#e55d87;'>공연정보</a><br>";
		str +="공연홀 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' id='i_t_hall"+DropDcount+ppcon+ "' name='i_t_hall"+DropDcount+ppcon;
		str +="'> &nbsp;&nbsp; 공연시작시간 <input style='border:1px dashed rgba(164, 164, 164, 1);' type='time' name='i_t_stime"+DropDcount+ppcon+"'> ";
		str +=" &nbsp;&nbsp; 공연시작시간 <input style='border:1px dashed rgba(164, 164, 164, 1); width:60px; height:28px;'type='text' name='i_t_duration"+DropDcount+ppcon+"'> 분";
		str +="&nbsp;&nbsp; <input type='button' value='좌석추가' onclick='dropseat("+DropDcount+","+ppcon+")'>";
		str +="&nbsp;<input type='Button' value='삭제' onclick='dropdelperfo("+DropDcount+","+ppcon+")'>";
		str +="<div class='block' style='background:lightgray; width:700px; margin-left:125px; margin-bottom:-10px;'></div><br><a style='color:#e55d87;'>좌석정보</a><br>";
		str +="좌석층 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_place"+DropDcount+ppcon+pscon+"'>";
		str +=" &nbsp;&nbsp;좌석등급 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_level"+DropDcount+ppcon+pscon+"'>";
		str +=" &nbsp;&nbsp;좌석명 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' id='i_s_name"+DropDcount+ppcon+pscon+ "' name='i_s_name"+DropDcount+ppcon+pscon;
		str +="'><br>좌석번호 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_num1"+DropDcount+ppcon+pscon+"'> &nbsp;~";
		str +=" &nbsp;<input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_num2"+DropDcount+ppcon+pscon+"'> &nbsp;&nbsp;가격";
		str +=" &nbsp;<input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_price"+DropDcount+ppcon+pscon+"'>";
		str +=" &nbsp;<input type='Button' value='삭제' onclick='dropdelseat("+DropDcount+","+pscon+")'></div>";
		str +="<div class='block' style='width:900px; margin-left:25px; margin-bottom:10px;'></div></div>";
	} else {
		var str = "<div id='adddate_"+DropDcount+"' style=\"display:none\">공연일시 ";
		str += "<input type='date' style='border:1px dashed rgba(164, 164, 164, 1);' id='i_date"+DropDcount+ "' name='i_date"+DropDcount + "' value='"+date+"'>";
		str +="&nbsp; <input type='Button' value='삭제' onclick='dropdeldate()'> &nbsp;";
		str +="<input type='button' value='공연추가' onclick='dropperfo("+DropDcount+")'>";
		str += "<div id='addpo_"+DropDcount+ppcon+"'><div class='block' style='width:900px; margin-left:25px; margin-bottom:10px;'></div>";
		str +="<a style='color:#e55d87;'>공연정보</a><br>";
		str +="공연홀 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' id='i_t_hall"+DropDcount+ppcon+ "' name='i_t_hall"+DropDcount+ppcon;
		str +="' value='"+infoTime.i_t_hall+"'> &nbsp;&nbsp; 공연시작시간 <input type='time' style='border:1px dashed rgba(164, 164, 164, 1);' name='i_t_stime"+DropDcount+ppcon+"' value='"+infoTime.i_t_time+"'> ";
		str +=" &nbsp;&nbsp; 공연시간 <input type='text' style='border:1px dashed rgba(164, 164, 164, 1); width:60px;  height:28px;' style='border:1px dashed rgba(164, 164, 164, 1); width:60px;  height:28px;' name='i_t_duration"+DropDcount+ppcon+"' value='"+infoTime.i_t_duration+"'> 분";
		str +="&nbsp;&nbsp; <input type='button' value='좌석추가' onclick='dropseat("+DropDcount+","+ppcon+")'>";
		str +="&nbsp;<input type='Button' value='삭제' onclick='dropdelperfo("+DropDcount+","+ppcon+")'>";
		str +="<div class='block' style='background:lightgray; width:700px; margin-left:125px; margin-bottom:-10px;'></div><br><a style='color:#e55d87;'>좌석정보</a><br>";
		str +="좌석층 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_place"+DropDcount+ppcon+pscon+"' value='"+infoSeat.i_s_floor+"'>";
		str +=" &nbsp;&nbsp;좌석등급 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_level"+DropDcount+ppcon+pscon+"' value='"+infoSeat.i_s_level+"'>";
		str +=" &nbsp;&nbsp;좌석명 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' id='i_s_name"+DropDcount+ppcon+pscon+ "' name='i_s_name"+DropDcount+ppcon+pscon;
		str +="' value='"+infoSeat.i_s_name+"'><br>좌석번호 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_num1"+DropDcount+ppcon+pscon+"' value='"+infoSeat.i_s_start+"'> &nbsp;~";
		str +=" &nbsp;<input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_num2"+DropDcount+ppcon+pscon+"' value='"+infoSeat.i_s_end+"'> &nbsp;&nbsp;가격";
		str +=" &nbsp;<input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_price"+DropDcount+ppcon+pscon+"' value='"+infoSeat.i_s_price+"'>";
		str +=" &nbsp;<input type='Button' value='삭제' onclick='dropdelseat("+DropDcount+","+pscon+")'></div>";
		str +="<div class='block' style='width:900px; margin-left:25px; margin-bottom:10px;'></div></div>";
	}


	$('#dropTR').append(str);
	if(DropDcount==0) {
		DropScount1++;
		DropPcount1++;
	} else if(DropDcount==1) {
		DropScount7++;
		DropPcount2++;
	} else if(DropDcount==2) {
		DropScount13++;
		DropPcount3++;
	} else if(DropDcount==3) {
		DropScount19++;
		DropPcount4++;
	} else if(DropDcount==4) {
		DropScount25++;
		DropPcount5++;
	} else {
		DropScount31++;
		DropPcount6++;
	}

	DropDcount++;

	document.infoModiForm.DropDcount.value=DropDcount;
}

function dropdeldate(){
	var adddateTR = document.getElementById("dropTR");
	if(DropDcount>0){
		var adddateDiv = document.getElementById("adddate_"+(--DropDcount));
		document.infoModiForm.DropDcount.value=DropDcount;
		var a = document.getElementById("aid_"+DropDcount);
		if(DropDcount==1) {
			DropPcount2=0;
			DropScount7=0;
			DropScount8=0;
			DropScount9=0;
			DropScount10=0;
			DropScount11=0;
			DropScount12=0;
		} else if(DropDcount == 2) {
			DropPcount3=0;
			DropScount13=0;
			DropScount14=0;
			DropScount15=0;
			DropScount16=0;
			DropScount17=0;
			DropScount18=0;
		} else if(DropDcount == 3) {
			DropPcount4=0;
			DropScount19=0;
			DropScount20=0;
			DropScount21=0;
			DropScount22=0;
			DropScount23=0;
			DropScount24=0;
		} else if(DropDcount == 4) {
			DropPcount5=0;
			DropScount25=0;
			DropScount26=0;
			DropScount27=0;
			DropScount28=0;
			DropScount29=0;
			DropScount30=0;
		} else {
			DropPcount6=0;
			DropScount31=0;
			DropScount32=0;
			DropScount33=0;
			DropScount34=0;
			DropScount35=0;
			DropScount36=0;
		}
		adddateTR.removeChild(adddateDiv); 
		adddateTR.removeChild(a); 
	}else{
		document.baseForm.reset();
	} 
}

function dropseat(DropDScount, DropPScount, DropinfoSeatDto){
	var scon = 0;
	if(DropDScount==0) {
		if(DropPScount==0) {
			scon = DropScount1;
		} else if(DropPScount==1) {
			scon = DropScount2;
		} else if(DropPScount==2) {
			scon = DropScount3;
		} else if(DropPScount==3) {
			scon = DropScount4;
		} else if(DropPScount==4) {
			scon = DropScount5;
		} else {
			scon = Scount6;
		}
	} else if(DropDScount==1) {
		if(DropPScount==0) {
			scon = DropScount7;
		} else if(DropPScount==1) {
			scon = DropScount8;
		} else if(DropPScount==2) {
			scon = DropScount9;
		} else if(DropPScount==3) {
			scon = DropScount10;
		} else if(DropPScount==4) {
			scon = DropScount11;
		} else {
			scon = DropScount12;
		}
	} else if(DropDScount==2) {
		if(DropPScount==0) {
			scon = DropScount13;
		} else if(DropPScount==1) {
			scon = DropScount14;
		} else if(DropPScount==2) {
			scon = DropScount15;
		} else if(DropPScount==3) {
			scon = DropScount16;
		} else if(DropPScount==4) {
			scon = DropScount17;
		} else {
			scon = DropScount18;
		}
	} else if(DropDScount==3) {
		if(DropPScount==0) {
			scon = DropScount19;
		} else if(DropPScount==1) {
			scon = DropScount20;
		} else if(DropPScount==2) {
			scon = DropScount21;
		} else if(DropPScount==3) {
			scon = DropScount22;
		} else if(DropPScount==4) {
			scon = DropScount23;
		} else {
			scon = DropScount24;
		}
	} else if(DropDScount==4) {
		if(DropPScount==0) {
			scon = DropScount25;
		} else if(DropPScount==1) {
			scon = DropScount26;
		} else if(DropPScount==2) {
			scon = DropScount27;
		} else if(DropPScount==3) {
			scon = DropScount28;
		} else if(DropPScount==4) {
			scon = DropScount29;
		} else {
			scon = DropScount30;
		}
	} else {
		if(DropDScount==0) {
			scon = DropScount31;
		} else if(DropPScount==1) {
			scon = DropScount32;
		} else if(DropPScount==2) {
			scon = DropScount33;
		} else if(DropPScount==3) {
			scon = DropScount34;
		} else if(DropPScount==4) {
			scon = DropScount35;
		} else {
			scon = DropScount36;
		}
	}

	var addse = "#addpo_"+DropDScount+DropPScount;
	if(DropinfoSeatDto) {
		var str = "<div id='addse_"+DropDScount+DropPScount+scon+"'><a style='color:#e55d87;'>좌석정보</a><br>";
		str+="좌석층 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px; type='text' name='i_s_place"+DropDScount+DropPScount+scon+"' value='"+DropinfoSeatDto.i_s_floor+"'>";
		str+=" &nbsp;&nbsp;좌석등급 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_level"+DropDScount+DropPScount+scon+"' value='"+DropinfoSeatDto.i_s_level+"'>";
		str+=" &nbsp;&nbsp;좌석명 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' id='i_s_name"+DropDScount+DropPScount+scon+"' name='i_s_name"+DropDScount+DropPScount+scon;
		str+="' value='"+DropinfoSeatDto.i_s_name+"'> <br>좌석번호 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_num1"+DropDScount+DropPScount+scon+"' value='"+DropinfoSeatDto.i_s_start+"'> &nbsp;~ &nbsp;";
		str+="<input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_num2"+DropDScount+DropPScount+scon+"' value='"+DropinfoSeatDto.i_s_end+"'> &nbsp;&nbsp;가격 ";
		str+="<input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_price"+DropDScount+DropPScount+scon+"' value='"+DropinfoSeatDto.i_s_price+"'>";
		str+=" &nbsp;<input type='Button' value='삭제' onclick='dropdelseat("+DropDScount+","+DropPScount+","+scon+")'></div>";
	} else {
		var str = "<div id='addse_"+DropDScount+DropPScount+scon+"'><a style='color:#e55d87;'>좌석정보</a><br>";
		str+="좌석층 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_place"+DropDScount+DropPScount+scon+"'>";
		str+=" &nbsp;&nbsp;좌석등급 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_level"+DropDScount+DropPScount+scon+"'>";
		str+=" &nbsp;&nbsp;좌석명 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' id='i_s_name"+DropDScount+DropPScount+scon+"' name='i_s_name"+DropDScount+DropPScount+scon;
		str+="'> <br>좌석번호 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_num1"+DropDScount+DropPScount+scon+"'> &nbsp;~ &nbsp;";
		str+="<input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_num2"+DropDScount+DropPScount+scon+"'> &nbsp;&nbsp;가격 ";
		str+="<input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' name='i_s_price"+DropDScount+DropPScount+scon+"'>";
		str+=" &nbsp;<input type='Button' value='삭제' onclick='dropdelseat("+DropDScount+","+DropPScount+","+scon+")'></div>";
	}

	$(addse).append(str);

	if(DropDScount==0) {
		if(DropPScount==0) {
			DropScount1++;
		} else if(DropPScount==1) {
			DropScount2++;
		} else if(DropPScount==2) {
			DropScount3++;
		} else if(DropPScount==3) {
			DropScount4++;
		} else if(DropPScount==4) {
			DropScount5++;
		} else {
			DropScount6++;
		}
	} else if(DropDScount==1) {
		if(DropPScount==0) {
			DropScount7++;
		} else if(DropPScount==1) {
			DropScount8++;
		} else if(DropPScount==2) {
			DropScount9++;
		} else if(DropPScount==3) {
			DropScount10++;
		} else if(DropPScount==4) {
			DropScount11++;
		} else {
			DropScount12++;
		}
	} else if(DropDScount==2) {
		if(DropPScount==0) {
			DropScount13++;
		} else if(DropPScount==1) {
			DropScount14++;
		} else if(DropPScount==2) {
			DropScount15++;
		} else if(DropPScount==3) {
			DropScount16++;
		} else if(DropPScount==4) {
			DropScount17++;
		} else {
			DropScount18++;
		}
	} else if(DropDScount==3) {
		if(DropPScount==0) {
			DropScount19++;
		} else if(DropPScount==1) {
			DropScount20++;
		} else if(DropPScount==2) {
			DropScount21++;
		} else if(DropPScount==3) {
			DropScount22++;
		} else if(DropPScount==4) {
			DropScount23++;
		} else {
			DropScount24++;
		}
	} else if(DropDScount==4) {
		if(DropPScount==0) {
			DropScount25++;
		} else if(DropPScount==1) {
			DropScount26++;
		} else if(DropPScount==2) {
			DropScount27++;
		} else if(DropPScount==3) {
			DropScount28++;
		} else if(DropPScount==4) {
			DropScount29++;
		} else {
			DropScount30++;
		}
	} else {
		if(DropPScount==0) {
			DropScount31++;
		} else if(DropPScount==1) {
			DropScount32++;
		} else if(DropPScount==2) {
			DropScount33++;
		} else if(DropPScount==3) {
			DropScount34++;
		} else if(DropPScount==4) {
			DropScount35++;
		} else {
			DropScount36++;
		}
	}
}

function dropdelseat(DropDRcount, DropDPScount, DropDScount){
	var addseatTR = document.getElementById("addpo_"+DropDRcount+DropDPScount);

	if(DropDScount>0){
		var addseatDiv = document.getElementById("addse_"+DropDRcount+DropDPScount+DropDScount);
		if(DropDRcount==0) {
			if(DropDPScount==0) {
				DropScount1 = DropDScount;
			} else if(DropDPScount==1) {
				DropScount2 = DropDScount;
			} else if(DropDPScount==2) {
				DropScount3 = DropDScount;
			} else if(DropDPScount==3) {
				DropScount4 = DropDScount;
			} else if(DropDPScount==4) {
				DropScount5 = DropDScount;
			} else {
				DropScount6 = DropDScount;
			}
		} else if(DropDRcount==1) {
			if(DropDPScount==0) {
				DropScount7 = DropDScount;
			} else if(DropDPScount==1) {
				DropScount8 = DropDScount;
			} else if(DropDPScount==2) {
				DropScount9 = DropDScount;
			} else if(DropDPScount==3) {
				DropScount10 = DropDScount;
			} else if(DropDPScount==4) {
				DropScount11 = DropDScount;
			} else {
				DropScount12 = DropDScount;
			}
		} else if(DropDRcount==2) {
			if(DropDPScount==0) {
				DropScount13 = DropDScount;
			} else if(DropDPScount==1) {
				DropScount14 = DropDScount;
			} else if(DropDPScount==2) {
				DropScount15 = DropDScount;
			} else if(DropDPScount==3) {
				DropScount16 = DropDScount;
			} else if(DropDPScount==4) {
				DropScount17 = DropDScount;
			} else {
				DropScount18 = DropDScount;
			}
		} else if(DropDRcount==3) {
			if(DropDPScount==0) {
				DropScount19 = DropDScount;
			} else if(DropDPScount==1) {
				DropScount20 = DropDScount;
			} else if(DropDPScount==2) {
				DropScount21 = DropDScount;
			} else if(DropDPScount==3) {
				DropScount22 = DropDScount;
			} else if(DropDPScount==4) {
				DropScount23 = DropDScount;
			} else {
				DropScount24 = DropDScount;
			}
		} else if(DropDRcount==4) {
			if(DropDPScount==0) {
				DropScount25 = DropDScount;
			} else if(DropDPScount==1) {
				DropScount26 = DropDScount;
			} else if(DropDPScount==2) {
				DropScount27 = DropDScount;
			} else if(DropDPScount==3) {
				DropScount28 = DropDScount;
			} else if(DropDPScount==4) {
				DropScount29 = DropDScount;
			} else {
				DropScount30 = DropDScount;
			}
		} else {
			if(DropDPScount==0) {
				DropScount31 = DropDScount;
			} else if(DropDPScount==1) {
				DropScount32 = DropDScount;
			} else if(DropDPScount==2) {
				DropScount33 = DropDScount;
			} else if(DropDPScount==3) {
				DropScount34 = DropDScount;
			} else if(DropDPScount==4) {
				DropScount35 = DropDScount;
			} else {
				DropScount36 = DropDScount;
			}
		}
		addseatTR.removeChild(addseatDiv);
	}else{
		document.baseForm.reset();
	}
}

function dropperfo(DropDPcount, DropinfotimeDto){
	var pcon = 0;
	if(DropDPcount==0) {
		pcon = DropPcount1;
	} else if(DropDPcount==1) {
		pcon = DropPcount2;
	} else if(DropDPcount==2) {
		pcon = DropPcount3;
	} else if(DropDPcount==3) {
		pcon = DropPcount4;
	} else if(DropDPcount==4) {
		pcon = DropPcount5;
	} else {
		pcon = DropPcount6;
	}
	if(DropinfotimeDto) {
		var addper = "#adddate_"+DropDPcount;
		var str = "<div id='addpo_"+DropDPcount+pcon+"'><a style='color:#e55d87;'>공연정보</a><br>";
		str+="공연홀 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' id='i_t_hall"+DropDPcount+pcon+ "' name='i_t_hall"+DropDPcount+pcon;
		str+="' value='"+DropinfotimeDto.i_t_hall+"'> &nbsp;&nbsp;공연시작시간 <input style='border:1px dashed rgba(164, 164, 164, 1);' type='time' name='i_t_stime"+DropDPcount+pcon+"' value='"+DropinfotimeDto.i_t_time+"'> ";
		str+=" &nbsp;&nbsp;공연시간 <input style='border:1px dashed rgba(164, 164, 164, 1); width:60px; height:28px;' type='text' name='i_t_duration"+DropDPcount+pcon+"' value='"+DropinfotimeDto.i_t_duration+"'> 분";
		str+=" &nbsp;&nbsp;<input type='button' value='좌석추가' onclick='dropseat("+DropDPcount+","+pcon+")'>";
		str+="&nbsp;<input type='Button' value='삭제' onclick='dropdelperfo("+DropDPcount+","+pcon+")'>";
		str+="<div class='block' style='background:lightgray; width:700px; margin-left:125px; margin-bottom:10px;'></div></div>";
		str+="<div class='block' style='width:900px; margin-left:25px; margin-bottom:10px;'></div>";
	} else {
		var addper = "#adddate_"+DropDPcount;
		var str = "<div id='addpo_"+DropDPcount+pcon+"'><a style='color:#e55d87;'>공연정보</a><br>";
		str+="공연홀 <input style='border:1px dashed rgba(164, 164, 164, 1); width:80px; height:28px;' type='text' id='i_t_hall"+DropDPcount+pcon+ "' name='i_t_hall"+DropDPcount+pcon;
		str+="'> &nbsp;&nbsp;공연시작시간 <input style='border:1px dashed rgba(164, 164, 164, 1);' type='time' name='i_t_stime"+DropDPcount+pcon+"'> ";
		str+=" &nbsp;&nbsp;공연시간 <input style='border:1px dashed rgba(164, 164, 164, 1); width:60px; height:28px;' type='text' name='i_t_duration"+DropDPcount+pcon+"'> 분";
		str+=" &nbsp;&nbsp;<input type='button' value='좌석추가' onclick='dropseat("+DropDPcount+","+pcon+")'>";
		str+="&nbsp;<input type='Button' value='삭제' onclick='dropdelperfo("+DropDPcount+","+pcon+")'>";
		str+="<div class='block' style='background:lightgray; width:700px; margin-left:125px; margin-bottom:10px;'></div></div>";
		str+="<div class='block' style='width:900px; margin-left:25px; margin-bottom:10px;'></div>";
	}

	$(addper).append(str);

	if(DropDPcount==0) {
		DropPcount1++;
	} else if(DropDPcount==1) {
		DropPcount2++;
	} else if(DropDPcount==2) {
		DropPcount3++;
	} else if(DropDPcount==3) {
		DropPcount4++;
	} else if(DropDPcount==4) {
		DropPcount5++;
	} else {
		DropPcount6++;
	}

}

function dropdelperfo(DropDDRcount, DropDPcount){
	var addperfoTR = document.getElementById("adddate_"+DropDDRcount);
	if(DropDPcount>0){
		var addperfoDiv = document.getElementById("addpo_"+DropDDRcount+DropDPcount);
		DropPcount = DropDPcount;
		if(DropDDRcount==0) {
			if(DropDPcount==0) {
				DropScount1=0;
			} else if(DropDPcount==1) {
				DropScount2=0;
			} else if(DropDPcount==2) {
				DropScount3=0;
			} else if(DropDPcount==3) {
				DropScount4=0;
			} else if(DropDPcount==4) {
				DropScount5=0;
			} else {
				DropScount6=0;
			}
			DropPcount1 = DropDPcount;
		} else if(DropDDRcount==1) {
			if(DropDPcount==0) {
				DropScount7=0;
			} else if(DropDPcount==1) {
				DropScount8=0;
			} else if(DropDPcount==2) {
				DropScount9=0;
			} else if(DropDPcount==3) {
				DropScount10=0;
			} else if(DropDPcount==4) {
				DropScount11=0;
			} else {
				DropScount12=0;
			}
			DropPcount2 = DropDPcount;
		} else if(DropDDRcount==2) {
			if(DropDPcount==0) {
				DropScount13=0;
			} else if(DropDPcount==1) {
				DropScount14=0;
			} else if(DropDPcount==2) {
				DropScount15=0;
			} else if(DropDPcount==3) {
				DropScount16=0;
			} else if(DropDPcount==4) {
				DropScount17=0;
			} else {
				DropScount18=0;
			}
			DropPcount3 = DropDPcount;
		} else if(DropDDRcount==3) {
			if(DropDPcount==0) {
				DropScount19=0;
			} else if(DropDPcount==1) {
				DropScount20=0;
			} else if(DropDPcount==2) {
				DropScount21=0;
			} else if(DropDPcount==3) {
				DropScount22=0;
			} else if(DropDPcount==4) {
				DropScount23=0;
			} else {
				DropScount24=0;
			}
			DropPcount4 = DropDPcount;
		} else if(DropDDRcount==4) {
			if(DropDPcount==0) {
				DropScount25=0;
			} else if(DropDPcount==1) {
				DropScount26=0;
			} else if(DropDPcount==2) {
				DropScount27=0;
			} else if(DropDPcount==3) {
				DropScount28=0;
			} else if(DropDPcount==4) {
				DropScount29=0;
			} else {
				DropScount30=0;
			}
			DropPcount5 = DropDPcount;
		} else {
			if(DropDPcount==0) {
				DropScount31=0;
			} else if(DropDPcount==1) {
				DropScount32=0;
			} else if(DropDPcount==2) {
				DropScount33=0;
			} else if(DropDPcount==3) {
				DropScount34=0;
			} else if(DropDPcount==4) {
				DropScount35=0;
			} else {
				DropScount36=0;
			}
			DropPcount6 = DropDPcount;
		}
		addperfoTR.removeChild(addperfoDiv); 
	}else{
		document.baseForm.reset();
	} 
}

function dropForm(conDto){
	var fs = Dropcount;
	if(conDto) {
		var str = "<div id='added_"+Dropcount+"'>";
		str+="<div><img id='conImg_"+Dropcount+"' width='300' height='500'";
		str+="src='/itshow/upload/"+conDto.path+"'></div>";
		str+="<input type='text' style='width:650px; border: 1px solid lightgray;' name='content_"+Dropcount;
		if(conDto.content=="null") {
			str+="'> &nbsp&nbsp&nbsp";
		} else {
			str+="' value='"+conDto.content+"'> &nbsp&nbsp&nbsp";
		}
		str+="<input type='Button' value='삭제' onclick='dropdelForm("+Dropcount+")'><br></div>";
		$("#DropFormDiv").append(str);
	} else {
		var str = "<div id='added_"+Dropcount+"'>";
		str+="<div><img id='conImg_"+Dropcount+"' width='300' height='250'></div>";
		str+="<input type='file' id='img_"+Dropcount+ "' name='image_"+Dropcount;
		str+="'><br><input type='text' style='width:650px; border: 1px solid lightgray;' name='content_"+Dropcount;
		str+="'> &nbsp&nbsp&nbsp";
		str+="<input type='hidden' name='himg_"+Dropcount+"' value='1'>";
		str+="<input type='Button' value='삭제' onclick='dropdelForm("+Dropcount+")'></div>";
		$("#DropFormDiv").append(str);
		$("#img_"+fs).on('change', function(){
	        readURL3(this,fs);
	    });
	}
	

	Dropcount++;
	document.infoModiForm.Dropcount.value=Dropcount;
}

function dropdelForm(DP){
	var DropFormDiv = document.getElementById("DropFormDiv");
	
	var DropDiv = document.getElementById("added_"+DP);
	document.infoModiForm.Dropcount.value=++Dropcount;
	var DropFormPath = document.getElementById("himg_"+DP);
	if(DropFormPath) {
		DropFormDiv.removeChild(DropFormPath);
	}
	DropFormDiv.removeChild(DropDiv); 
}

function dropSImag(SIhall){

	var ds = DropSIcount;
	if(SIhall) {
	var str = "<div id='addSI_"+DropSIcount+"'><br>";
	str+="<div><img id='Image_"+DropSIcount+"' width='300' height='150'";
	str+="src='/itshow/upload/"+SIhall.path+"'></div><br>";
	str+="<div style='display:inline;'>홀이름 <input type='text' style='border:1px dashed rgba(164, 164, 164, 1);' name='sihall_"+DropSIcount+"' value='"+SIhall.sihall+"'> ";
	str+="</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
		"<input type='Button'"+ 
		"value='삭제' style='margin-right:-170px;' onclick='dropdelSImag("+DropSIcount+")'></div>";
	} else {
		var str = "<div id='addSI_"+DropSIcount+"'><br>";
		str+="<div><input type='file' id='ssimg_"+DropSIcount+ "' name='simage_"+DropSIcount+"'></div>";
		str+="<div><img id='Image_"+DropSIcount+"' width='300' height='150'";
		str+="></div><input type='hidden' name='simg_"+DropSIcount+"' value='1'>";;
		str+="<div style='display:inline;'>홀이름 <input type='text' style='border:1px dashed rgba(164, 164, 164, 1);' name='sihall_"+DropSIcount+"'> ";
		str+="</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
			"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
			"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
			"<input type='Button'"+ 
			"value='삭제' style='margin-right:-170px;' onclick='dropdelSImag("+DropSIcount+")'></div>";
	}
	$("#DropSImagDiv").append(str);
	
	$("#ssimg_"+ds).on('change', function(){
        readURL1(this,ds);
    });

	DropSIcount++;
	document.infoModiForm.DropSIcount.value=DropSIcount;
}

function dropdelSImag(DS){
	var DropSImagDiv = document.getElementById("DropSImagDiv");

	var DropSIDiv = document.getElementById("addSI_"+DS);
	var DropPath = document.getElementById("simg_"+DS);
	if(DropPath) {
		DropSImagDiv.removeChild(DropPath);
	}
	DropSImagDiv.removeChild(DropSIDiv);
	$("#DropSImagDiv").append("<input type='hidden' name='simg_"+DS+"' value='2'>");
}

function readURL(input) {
    if (input.files && input.files[0]) {
       var reader = new FileReader();
       reader.onload = function (e) {
          $('#preImage').attr('src', e.target.result);
       }
       reader.readAsDataURL(input.files[0]);
    }
}

function readURL1(input,sc) {
    if (input.files && input.files[0]) {
       var reader1 = new FileReader();
       reader1.onload = function (e) {
    	   var name = "#Image_"+sc;
          $(name).attr('src', e.target.result);
       }
       reader1.readAsDataURL(input.files[0]);
    }
}

function readURL2(input) {
    if (input.files && input.files[0]) {
       var reader2 = new FileReader();
       reader2.onload = function (e) {
          $("#vi_path").attr('src', e.target.result);
       }
       reader2.readAsDataURL(input.files[0]);
    }
}

function readURL3(input, fs) {
    if (input.files && input.files[0]) {
       var reader3 = new FileReader();
       reader3.onload = function (e) {
          $("#conImg_"+fs).attr('src', e.target.result);
       }
       reader3.readAsDataURL(input.files[0]);
    }
}

/*----------------------------------------------------*/
/* calendar
------------------------------------------------------ */

var showdate = null;
var number = null;

!function() {

	var today = moment();

	function Calendar(selector, events, num) {
		var category = document.querySelector("#category");
		this.el = document.querySelector(selector);
		this.events = events;
		this.current = moment().date(1);

		this.num = num;

		number = num;

		this.events.forEach(function(ev) {
			ev.date = moment(ev.date);
		});
		this.draw();
		var current = document.querySelector('.today');
		if(current) {
			var self = this;
			window.setTimeout(function() {
				self.openDay(current);
			}, 500);
		}

	}

	Calendar.prototype.draw = function() {
		//Create Header
		this.drawHeader();

		//Draw Month
		this.drawMonth();

		//this.drawLegend();
	}

	Calendar.prototype.drawHeader = function() {
		var self = this;
		if(!this.header) {
			//Create the header elements
			this.header = createElement('div', 'header');
			this.header.className = 'header';

			this.title = createElement('h1', 'title');

			var right = createElement('div', 'right');
			right.addEventListener('click', function() { self.nextMonth(); });

			var left = createElement('div', 'left');
			left.addEventListener('click', function() { self.prevMonth(); });

			//Append the Elements
			this.header.appendChild(this.title); 
			this.header.appendChild(right);
			this.header.appendChild(left);
			this.el.appendChild(this.header);
		}

		this.title.innerHTML = this.current.format('YYYY-MM');
	}

	Calendar.prototype.drawMonth = function() {
		var self = this;
		if(this.month) {
			this.oldMonth = this.month;
			this.oldMonth.className = 'month out ' + (self.next ? 'next' : 'prev');
			this.oldMonth.addEventListener('webkitAnimationEnd', function() {
				self.oldMonth.parentNode.removeChild(self.oldMonth);
				self.month = createElement('div', 'month');
				self.backFill();
				self.currentMonth();
				self.fowardFill();
				self.el.appendChild(self.month);
				window.setTimeout(function() {
					self.month.className = 'month in ' + (self.next ? 'next' : 'prev');
				}, 16);
			});
		} else {
			this.month = createElement('div', 'month');
			this.el.appendChild(this.month);
			this.backFill();
			this.currentMonth();
			this.fowardFill();
			this.month.className = 'month new';
		}
	}

	Calendar.prototype.backFill = function() {
		var clone = this.current.clone();
		var dayOfWeek = clone.day();

		if(!dayOfWeek) { return; }

		clone.subtract('days', dayOfWeek+1);

		for(var i = dayOfWeek; i > 0 ; i--) {
			this.drawDay(clone.add('days', 1));
		}
	}

	Calendar.prototype.fowardFill = function() {
		var clone = this.current.clone().add('months', 1).subtract('days', 1);
		var dayOfWeek = clone.day();

		if(dayOfWeek === 6) { return; }

		for(var i = dayOfWeek; i < 6 ; i++) {
			this.drawDay(clone.add('days', 1));
		}
	}

	Calendar.prototype.currentMonth = function() {
		var clone = this.current.clone();
		while(clone.month() === this.current.month()) {
			this.drawDay(clone);
			clone.add('days', 1);
		}
	}

	Calendar.prototype.getWeek = function(day) {
		if(!this.week || day.day() === 0) {
			this.week = createElement('div', 'week');
			this.month.appendChild(this.week);
		}
	}

	Calendar.prototype.drawDay = function(day) {
		var self = this;
		this.getWeek(day);

		//Outer Day
		var outer = createElement('div', this.getDayClass(day));
		outer.addEventListener('click', function() {
			self.openDay(this);
			var month = $('.title').text();
			var day = $('.day-number', this).text();
			var date = month + "-" + day;
			showdate = date;
			selectDate(date);
			var div = document.getElementById("seats");
			div.innerHTML = "";
		});

		//Day Name
		var name = createElement('div', 'day-name', day.format('ddd'));

		//Day Number
		var number = createElement('div', 'day-number', day.format('DD'));

		//Events
		//var events = createElement('div', 'day-events');
		this.drawEvents(day, number, outer);

		outer.appendChild(name);
		outer.appendChild(number);
		//outer.appendChild(events);
		this.week.appendChild(outer);
	}

	function selectDate(date) {
		var num = number;
		$.ajax(
				{
					type : "POST",
					url : "infoTimeList.do",
					data : {
						date : date,
						num : num
					},
					success : function(data) {
						if (data == "") {
							return;
						}
						var result = eval("(" + data + ")");
						var select = "<option value=\"select\">" + "회차를 선택해 주세요." + "</option>";
						$("#turn option[value='none']").remove();
						$("#turn").append(select);
						$('select').children('option:not(:first)').remove();
						for(var i = 0; i < result.times.length; i++) {
							var j = i;
							var option = "<option value=\""+ result.times[i].time +"\">" + ++j + "회차 : " + result.times[i].time + "</option>";
							$("#turn").append(option); 
						}
					}
				}
		);
	}

	/*function getseat(time, date) {
		var num = number;
		$.ajax(
				{
					type : "POST",
					url : "infoSeatList.do",
					data : {
						date : date,
						time : time,
						num : num
					},
					success : function(data) {
						alert(data);
						if (data == "") {
							return;
						}
						var result = eval("(" + data + ")");
						var div = document.getElementById("seats");
						div.innerHTML = "";
						for(var i = 0; i < result.seats.length; i++) {
							div.innerHTML += "<b style=\"color: #db658f;\">" + result.seats[i].name + " </b>" + result.seats[i].count + "<br>";  
						}
					}
				}
		);
	}*/

	Calendar.prototype.drawEvents = function(day, element, parent) {
		if(day.month() === this.current.month()) {
			var todaysEvents = this.events.reduce(function(memo, ev) {
				if(ev.date.isSame(day, 'day')) {
					memo.push(ev);
				}
				return memo;
			}, []);

			todaysEvents.forEach(function(ev) {
				//var evSpan = createElement('span', ev.color);
				//element.appendChild(evSpan);
				element.style.color = "red";
				element.style.background = "pink";
				parent.style.pointerEvents = "auto";
			});
		}
	}

	Calendar.prototype.getDayClass = function(day) {
		classes = ['day'];
		if(day.month() !== this.current.month()) {
			classes.push('other');
		} else if (today.isSame(day, 'day')) {
			classes.push('today');
		}
		return classes.join(' ');
	}

	Calendar.prototype.openDay = function(el) {
		var details, arrow;
		var dayNumber = +el.querySelectorAll('.day-number')[0].innerText || +el.querySelectorAll('.day-number')[0].textContent;
		var day = this.current.clone().date(dayNumber);

		var currentOpened = document.querySelector('.details');

		//Check to see if there is an open detais box on the current row
		if(currentOpened && currentOpened.parentNode === el.parentNode) {
			details = currentOpened;
			arrow = document.querySelector('.arrow');
		} else {
			//Close the open events on differnt week row
			//currentOpened && currentOpened.parentNode.removeChild(currentOpened);
			if(currentOpened) {
				currentOpened.addEventListener('webkitAnimationEnd', function() {
					currentOpened.parentNode.removeChild(currentOpened);
				});
				currentOpened.addEventListener('oanimationend', function() {
					currentOpened.parentNode.removeChild(currentOpened);
				});
				currentOpened.addEventListener('msAnimationEnd', function() {
					currentOpened.parentNode.removeChild(currentOpened);
				});
				currentOpened.addEventListener('animationend', function() {
					currentOpened.parentNode.removeChild(currentOpened);
				});
				currentOpened.className = 'details out';
			}

			//Create the Details Container
			details = createElement('div', 'details in');

			//Create the arrow
			var arrow = createElement('div', 'arrow');

			//Create the event wrapper

			//details.appendChild(arrow);
			//el.parentNode.appendChild(details);
		}

		var todaysEvents = this.events.reduce(function(memo, ev) {
			if(ev.date.isSame(day, 'day')) {
				memo.push(ev);
			}
			return memo;
		}, []);

		this.renderEvents(todaysEvents, details);

		arrow.style.left = el.offsetLeft - el.parentNode.offsetLeft + 27 + 'px';
	}

	Calendar.prototype.renderEvents = function(events, ele) {
		//Remove any events in the current details element
		var currentWrapper = ele.querySelector('.events');
		var wrapper = createElement('div', 'events in' + (currentWrapper ? ' new' : ''));

		events.forEach(function(ev) {
			var div = createElement('div', 'event');
			var square = createElement('div', 'event-category ' + ev.color);
			var span = createElement('span', '', ev.eventName);

			div.appendChild(square);
			div.appendChild(span);
			wrapper.appendChild(div);
		});

		if(!events.length) {
			var div = createElement('div', 'event empty');
			var span = createElement('span', '', 'No Events');

			div.appendChild(span);
			wrapper.appendChild(div);
		}

		if(currentWrapper) {
			currentWrapper.className = 'events out';
			currentWrapper.addEventListener('webkitAnimationEnd', function() {
				currentWrapper.parentNode.removeChild(currentWrapper);
				ele.appendChild(wrapper);
			});
			currentWrapper.addEventListener('oanimationend', function() {
				currentWrapper.parentNode.removeChild(currentWrapper);
				ele.appendChild(wrapper);
			});
			currentWrapper.addEventListener('msAnimationEnd', function() {
				currentWrapper.parentNode.removeChild(currentWrapper);
				ele.appendChild(wrapper);
			});
			currentWrapper.addEventListener('animationend', function() {
				currentWrapper.parentNode.removeChild(currentWrapper);
				ele.appendChild(wrapper);
			});
		} else {
			ele.appendChild(wrapper);
		}
	}

	Calendar.prototype.drawLegend = function() {
		var legend = createElement('div', 'legend');
		var calendars = this.events.map(function(e) {
			return e.calendar + '|' + e.color;
		}).reduce(function(memo, e) {
			if(memo.indexOf(e) === -1) {
				memo.push(e);
			}
			return memo;
		}, []).forEach(function(e) {
			var parts = e.split('|');
			var entry = createElement('span', 'entry ' +  parts[1], parts[0]);
			legend.appendChild(entry);
		});

		category.appendChild(legend);
	}

	Calendar.prototype.nextMonth = function() {
		this.current.add('months', 1);
		this.next = true;
		this.draw();
	}

	Calendar.prototype.prevMonth = function() {
		this.current.subtract('months', 1);
		this.next = false;
		this.draw();
	}

	window.Calendar = Calendar;

	function createElement(tagName, className, innerText) {
		var ele = document.createElement(tagName);
		if(className) {
			ele.className = className;
		}
		if(innerText) {
			ele.innderText = ele.textContent = innerText;
		}
		return ele;
	}
}();

function infoorder(memId, i_num) {
	//예매시간 확인하기
	/*
	 * if() {
	 *  alert("예매시간을 확인해 주세요");
	 *  return false;
	 * }
	 * */
	if(!memId) {
		alert("일반 회원만 예매 가능합니다");
		return false;
	}
	if(document.getElementById("turn").value === 'none') {
		alert("날짜를 선택해 주세요");
		return false;
	}else if(document.getElementById("turn").value === 'select') {
		alert("회차를 선택해 주세요");
		return false;
	}
	
	$.ajax(
		{
			type : "POST",
			url : "infoCheckTime.do",
			data : {
				num : i_num
			},
			success : function(data) {
				if (data == "") {
					return;
				}
				var result = eval("(" + data + ")");
				if(result == 1) {
					alert("예매시간을 확인해주세요");
					return false;
				}else {
					var time = document.getElementById("turn").value;
					location.replace("orderForm.do?num=" + i_num + "&date=" + showdate + "&time=" + time);
				}
			}
		}
	);
}

function selectTurn() {
	if(document.getElementById("turn").value != 'select') {
		getseat(document.getElementById("turn").value, showdate);
	}
	var div = document.getElementById("seats");
	div.innerHTML = "";
}

function getseat(time, date) {
	var num = number;
	$.ajax(
			{
				type : "POST",
				url : "infoSeatList.do",
				data : {
					date : date,
					time : time,
					num : num
				},
				success : function(data) {
					if (data == "") {
						return;
					}
					var result = eval("(" + data + ")");
					var div = document.getElementById("seats");
					div.innerHTML = "";
					for(var i = 0; i < result.seats.length; i++) {
						div.innerHTML += "<b style=\"color: #db658f;\">" + result.seats[i].name + " </b>" + result.seats[i].count + "<br>";  
					}
				}
			}
	);
}

function infocal(num) {
	$.ajax(
			{
				type : "POST",
				url : "infoContentDate.do",
				data : {
					num : num
				},
				success : function(data) {
					/*if (data == "") {
						return;
					}*/
					var result = eval("(" + data + ")");
					var calendar = new Calendar('#calendar', result, num);
				}
			}
	);
}