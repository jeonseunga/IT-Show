package info.handler;
import java.io.File;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;
import handler.CommandHandler;
import info.InfoContentDataBean;
import info.InfoDBBean;
import info.InfoDataBean;
import info.InfoDateDataBean;
import info.InfoSeatDataBean;
import info.InfoSeatImgDataBean;
import info.InfoTimeDataBean;
import order.OrderDBBean;
import scrap.ScrapDBBean;

@Controller
public class InfoModifyProHandler implements CommandHandler{
	@Resource
	private InfoDBBean infoDao;
	
	@Resource
	private OrderDBBean orderDao;

	@Resource
	private ScrapDBBean scrapDao;
	@RequestMapping("/infoModifyPro")
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		request.setCharacterEncoding("utf-8");
		
		String path = request.getSession().getServletContext().getRealPath("/upload");
		
		//***** 나중에 로그인한 업체 회원으로 아이디 등록하게 수정할 부분 *****
		String i_write = (String)request.getSession().getAttribute("comId");
		
		File file = new File(path);
		if(!file.exists()) {
			file.mkdir();
		}

		MultipartRequest multi = new MultipartRequest(request, path, 1024*1024*5, "utf-8", new DefaultFileRenamePolicy());
		int i_num = Integer.parseInt(multi.getParameter("i_num"));
		String m_code = multi.getParameter("m_code");
		System.out.println(m_code+"코드");
		// 공연전반적인 정보 인설트
		InfoDataBean infoDto = new InfoDataBean();
		infoDto.setI_num(i_num);
		infoDto.setI_name(multi.getParameter("i_name"));
		infoDto.setI_location(multi.getParameter("i_location"));
		String addr1 = multi.getParameter("i_location_adr1");
		String addr2 = multi.getParameter("i_location_adr2");
		if(addr2.equals("")||addr2==null) {
			infoDto.setI_location_addr(addr1);
		} else {
			String addr = addr1 + "/" + addr2;
			infoDto.setI_location_addr(addr);
		}
		infoDto.setI_location_zip(multi.getParameter("i_location_zip"));
		String day = multi.getParameter("i_open_day"); // 형식을 지켜야 함
		String time = multi.getParameter("i_open_time");
		if(time.length()<=5) {
			String i_open_date = day +" "+time + ":0";
			Timestamp t = Timestamp.valueOf(i_open_date);
			infoDto.setI_open_date(t);
		} else {
			String i_open_date = day +" "+time;
			Timestamp t = Timestamp.valueOf(i_open_date);
			infoDto.setI_open_date(t);
		}
		infoDto.setC_category(Integer.parseInt(multi.getParameter("category")));
		infoDto.setI_period(multi.getParameter("i_open_start")+"~"+multi.getParameter("i_open_end"));
		String thumbnail_path = multi.getFilesystemName("i_img_thumbnail");
		if(thumbnail_path==null || thumbnail_path=="") {
			infoDto.setI_img_thumbnail(multi.getParameter("thumbnail_path"));
		} else {
			infoDto.setI_img_thumbnail(thumbnail_path);
		}
		String video_path = multi.getFilesystemName("i_video_path");
		String Vpath = multi.getParameter("video_path");
		if(video_path==null || video_path=="") {
			infoDto.setI_video_path(Vpath);	
		} else {
			infoDto.setI_video_path(video_path);
		}
		int upinfo = 0;
		if(m_code.equals("3")) {
			infoDto.setM_id(i_write);
			upinfo = infoDao.updateInfoDB(infoDto);
		} else {
			upinfo = infoDao.updateInfoDB1(infoDto);
		}
		
		int check3 = 0;
		int check1 = 0;
		int check2 = 0;
		int check4 = 0;
		String check_id = infoDao.checkId(i_num);
		
		if(m_code.equals("3")) {
			if(upinfo==1 && i_write.equals(check_id)) {
				List<Integer> i_d_nums = infoDao.getDnums(i_num);
				for(int i=0;i<i_d_nums.size();i++) {
					List<Integer> i_t_nums = infoDao.getTnums(i_d_nums.get(i));
					for(int j=0;j<i_t_nums.size();j++) {
						ArrayList<InfoSeatDataBean> is_info_seat = infoDao.getis_info_seat(i_t_nums.get(j));
						for(int l=0; l<is_info_seat.size();l++) {
							check4 = infoDao.deleteorderseat(is_info_seat.get(l).getI_s_num());
						}
						
						if(check4>=1) {
							check1 = infoDao.deleteSeat(i_t_nums.get(j));
						}
					}
				}
				
				if(check1 >= 1 ) {
					for(int i=0;i<i_d_nums.size();i++) {
						check2 = infoDao.deleteTime(i_d_nums.get(i));
					}
				}

				if(check2 >= 1) {
					infoDao.deleteDate(i_num);
					infoDao.deleteContent(i_num);
					check3 = infoDao.deleteSeatImg(i_num);
				}
			}
		} else {
			if(upinfo==1) {
				List<Integer> i_d_nums = infoDao.getDnums(i_num);
				for(int i=0;i<i_d_nums.size();i++) {
					List<Integer> i_t_nums = infoDao.getTnums(i_d_nums.get(i));
					for(int j=0;j<i_t_nums.size();j++) {
						ArrayList<InfoSeatDataBean> is_info_seat = infoDao.getis_info_seat(i_t_nums.get(j));
						for(int l=0; l<is_info_seat.size();l++) {
							check4 = infoDao.deleteorderseat(is_info_seat.get(l).getI_s_num());
						}
						
						if(check4>=1) {
							check1 = infoDao.deleteSeat(i_t_nums.get(j));
						}
					}
				}
				
				if(check1 >= 1 ) {
					for(int i=0;i<i_d_nums.size();i++) {
						check2 = infoDao.deleteTime(i_d_nums.get(i));
					}
				}

				if(check2 >= 1) {
					infoDao.deleteDate(i_num);
					infoDao.deleteContent(i_num);
					check3 = infoDao.deleteSeatImg(i_num);
				}
			}
		}
		
		
		// 공연일시 인설트
		int dateCount = Integer.parseInt(multi.getParameter("DropDcount"));
		InfoDateDataBean indateDto = new InfoDateDataBean();
		int result1 = 0;
		if(check3 >= 1) {
			for(int i=0;i<dateCount;i++) {
				indateDto.setI_date(multi.getParameter("i_date"+i));
				indateDto.setI_num(i_num);
				result1 = infoDao.insertDB(indateDto);
			}
		}
				
		// 공연회차 인설트
		InfoTimeDataBean intimeDto = new InfoTimeDataBean();
		List<Integer> i_d_num = infoDao.getDnums(i_num);
		int result2 = 0;
		if(result1==1) {
			for(int i=0; i<i_d_num.size();i++) {
				for(int j=0; j < 20; j++) {
					String hall = multi.getParameter("i_t_hall"+i+j);
					String Time = multi.getParameter("i_t_stime"+i+j);
					String duration = multi.getParameter("i_t_duration"+i+j);
					if(hall!=null&&hall!=""&&Time!=null&&Time!=""&&duration!=null&&duration!="") {
						intimeDto.setI_t_hall(hall);
						intimeDto.setI_t_time(Time);
						intimeDto.setI_t_duration(duration);
						intimeDto.setI_d_num(i_d_num.get(i));
						result2 = infoDao.insertDB(intimeDto);
					}
				}
			}
		}
				
		// 좌석정보 인설트
		InfoSeatDataBean inseatDto = new InfoSeatDataBean();
		int result3 = 0;
		if(result2 == 1) {
			for(int i=0; i<i_d_num.size();i++) {
			List<Integer> i_t_num = infoDao.getTnums(i_d_num.get(i));
				for(int j=0; j < i_t_num.size(); j++) {
					for(int k=0; k<20; k++) {
						String sname = multi.getParameter("i_s_name"+i+j+k);
						String level = multi.getParameter("i_s_level"+i+j+k);
						if(sname!=null&&sname!=""&&level!=null&&level!="") {
							int start = Integer.parseInt(multi.getParameter("i_s_num1"+i+j+k));
							int end = Integer.parseInt(multi.getParameter("i_s_num2"+i+j+k));
							int price = Integer.parseInt(multi.getParameter("i_s_price"+i+j+k));
							int floor = Integer.parseInt(multi.getParameter("i_s_place"+i+j+k));
							int t_count = end - start + 1;
							inseatDto.setI_s_floor(floor);
							inseatDto.setI_s_name(sname);
							inseatDto.setI_s_price(price);
							inseatDto.setI_s_start(start);
							inseatDto.setI_s_end(end);
							inseatDto.setI_s_level(level);
							inseatDto.setI_t_count(t_count);
							inseatDto.setI_t_num(i_t_num.get(j));
							result3 = infoDao.insertDB(inseatDto);
						}
					}
				}
			}
		}
		
		// 공연 상세정보 인설트
		InfoContentDataBean i_ConDto = new InfoContentDataBean();
		int count = Integer.parseInt(multi.getParameter("Dropcount"));
		int result4 = 0;
		if(result3 == 1) {
			for(int i =0; i < count; i++) {
				String himg_0 = multi.getParameter("himg_"+i);
				System.out.println(himg_0+"himg_"+i);
				if(himg_0.equals("1")) {
					String systemname = multi.getFilesystemName("image_"+i);
					if(systemname==null || systemname=="") {
						i_ConDto.setI_c_img_path("");
						System.out.println(systemname);
					} else {
						i_ConDto.setI_c_img_path(systemname);
						System.out.println(systemname);
					}
				} else {
					String himg_path_0 = multi.getParameter("himg_path_"+i);
					System.out.println(himg_path_0);
					i_ConDto.setI_c_img_path(himg_path_0);
				}
				i_ConDto.setI_c_content(multi.getParameter("content_" + i));
				i_ConDto.setI_num(i_num);
				result4 = infoDao.insertDB(i_ConDto);
			}
		}
				
		// 공연 좌석배치도 인설트
		InfoSeatImgDataBean i_SImgDto = new InfoSeatImgDataBean();
		int SIcount = Integer.parseInt(multi.getParameter("DropSIcount"));
		int check = 0;
		if(result4 == 1) {
			for(int i =0; i < SIcount; i++) {
				String himg_seat_0 = multi.getParameter("simg_"+i);
				if(himg_seat_0.equals("1")) {
					System.out.println("44");
					String systemname = multi.getFilesystemName("simage_"+i);
					System.out.println(systemname);
					if(systemname == null || systemname.equals("")) {
						i_SImgDto.setS_img_path("");
					} else {
						i_SImgDto.setS_img_path(systemname);
					} 
					i_SImgDto.setI_num(i_num);
					System.out.println(i_num);
					i_SImgDto.setS_img_hall(multi.getParameter("sihall_" + i));
					System.out.println(multi.getParameter("sihall_" + i));
					check = infoDao.insertDB(i_SImgDto);
					System.out.println(check);
				} else if(himg_seat_0.equals("0")){
					System.out.println("33");
					String himg_seat_path_0 = multi.getParameter("simg_path_"+i);
					System.out.println(himg_seat_path_0);
					i_SImgDto.setS_img_path(himg_seat_path_0);
					i_SImgDto.setI_num(i_num);
					System.out.println(i_num);
					i_SImgDto.setS_img_hall(multi.getParameter("sihall_" + i));
					System.out.println(multi.getParameter("sihall_" + i));
					check = infoDao.insertDB(i_SImgDto);
					System.out.println(check);
				} else {
					System.out.println("삭제한경우");
				}
			}
		}
		
		// 좌석명 인설트
		int result6 =0;
		if(check==1) {
		List<Integer> i_D_num = infoDao.getDnums(i_num);
		ArrayList<InfoSeatDataBean> is_info_seat = new ArrayList<InfoSeatDataBean>();
		for(int i=0;i<i_D_num.size();i++) {
			List<Integer> i_t_num = infoDao.getTnums(i_D_num.get(i));
			for(int j=0;j<i_t_num.size();j++) {
				is_info_seat = infoDao.getis_info_seat(i_t_num.get(j));
				for(int k=0;k<is_info_seat.size();k++) {
					int startnum = is_info_seat.get(k).getI_s_start();
					int endnum = is_info_seat.get(k).getI_s_end();
					int i_s_num = is_info_seat.get(k).getI_s_num();
					String seatname = is_info_seat.get(k).getI_s_name();
					for(int o=startnum; o<endnum+1; o++){
						String seat = seatname+"-" + o;
						Map<String, Object> map = new HashMap<String, Object>();
						map.put( "seat", seat );
						map.put( "i_s_num", i_s_num );
						result6 = orderDao.insert(map);
					}
				}
			}
		}
		}
		
		int scrapcount = scrapDao.getsccount(i_num);
		if(scrapcount>0) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("i_num", i_num);
			map.put("i_thumbnail", multi.getFilesystemName("i_img_thumbnail"));
			map.put("i_category", Integer.parseInt(multi.getParameter("category")));
			result6=scrapDao.updateScrap(map);
		}
		request.setAttribute("result", result6);
		request.setAttribute("num", i_num);
		return new ModelAndView("info/infoModifyPro");
	}
}
