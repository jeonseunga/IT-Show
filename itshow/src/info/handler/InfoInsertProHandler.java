package info.handler;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
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

@Controller
public class InfoInsertProHandler implements CommandHandler{
	@Resource
	private InfoDBBean infoDao;
	
	@Resource
	private OrderDBBean orderDao;
	
	@RequestMapping("/infoInsertPro")
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		request.setCharacterEncoding("utf-8");
		
		String path = request.getSession().getServletContext().getRealPath("/upload");
		
		//***** 나중에 로그인한 업체 회원으로 아이디 등록하게 수정할 부분 *****
		String i_name = (String)request.getSession().getAttribute("comId");
		
		String input = "";
		
		File file = new File(path);
		if(!file.exists()) {
			file.mkdir();
		}

		MultipartRequest multi = new MultipartRequest(request, path, 1024*1024*1024*5, "utf-8", new DefaultFileRenamePolicy());
		
		// 공연전반적인 정보 인설트
		InfoDataBean infoDto = new InfoDataBean();
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
		String i_open_date = day +" "+time + ":0";
		Timestamp t = Timestamp.valueOf(i_open_date);
		infoDto.setI_open_date(t);
		
		infoDto.setC_category(Integer.parseInt(multi.getParameter("category")));
		infoDto.setI_period(multi.getParameter("i_open_start")+"~"+multi.getParameter("i_open_end"));
		infoDto.setI_img_thumbnail(multi.getFilesystemName("i_img_thumbnail"));
		infoDto.setM_id(i_name);
		infoDto.setI_reg_date(new Timestamp(System.currentTimeMillis()));
		infoDto.setI_video_path(multi.getFilesystemName("i_video_path"));
		
		//readcount 0으로 설정해주기!!!
		infoDto.setI_readcount(0);
		infoDto.setI_score(0);
		
		// 공연일시 인설트
		int result = infoDao.insertDB(infoDto);
		System.out.println(
				"insert into is_info "
				+ "values(info_seq.NEXTVAL, "
				+ "\'" + infoDto.getI_name() + "\', "
				+ "\'" + infoDto.getI_period() + "\', "
				+ infoDto.getI_score() + ", "
				+ "\'" + infoDto.getI_location() + "\', "
				+ "\'" + infoDto.getI_location_addr() + "\', "
				+ "\'" + infoDto.getI_location_zip() + "\', "
				+ "\'" + infoDto.getI_open_date() + "\', "
				+ infoDto.getC_category() + ", "
				+ "\'" + infoDto.getI_img_thumbnail() + "\', "
				+ "\'" + infoDto.getI_video_path() + "\', "
				+ "\'" + infoDto.getM_id() + "\', "
				+ "\'" + infoDto.getI_reg_date() + "\', "
				+ "\'" + infoDto.getI_readcount() + "\');");
		input += "insert into is_info "
				+ "values(info_seq.NEXTVAL, "
				+ "\'" + infoDto.getI_name() + "\', "
				+ "\'" + infoDto.getI_period() + "\', "
				+ infoDto.getI_score() + ", "
				+ "\'" + infoDto.getI_location() + "\', "
				+ "\'" + infoDto.getI_location_addr() + "\', "
				+ "\'" + infoDto.getI_location_zip() + "\', "
				+ "\'" + infoDto.getI_open_date() + "\', "
				+ infoDto.getC_category() + ", "
				+ "\'" + infoDto.getI_img_thumbnail() + "\', "
				+ "\'" + infoDto.getI_video_path() + "\', "
				+ "\'" + infoDto.getM_id() + "\', "
				+ "\'" + infoDto.getI_reg_date() + "\', "
				+ infoDto.getI_readcount() + ");";
		int dateCount = Integer.parseInt(multi.getParameter("Dcount"));
		int i_num = infoDao.getnum(infoDto);
		System.out.println(i_num+"아이넘");
		InfoDateDataBean indateDto = new InfoDateDataBean();
		int result1 = 0;
		if(result == 1) {
			for(int i=0;i<dateCount;i++) {
				indateDto.setI_date(multi.getParameter("i_date"+i));
				indateDto.setI_num(i_num);
				result1 = infoDao.insertDB(indateDto);
				System.out.println("insert into is_info_date "
						+ "values(info_date_seq.NEXTVAL, "
						+ "\'" + indateDto.getI_date() + "\', "
						+ indateDto.getI_num() + ")");
				input += "\r\ninsert into is_info_date "
						+ "values(info_date_seq.NEXTVAL, "
						+ "\'" + indateDto.getI_date() + "\', "
						+ indateDto.getI_num() + ");";
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
						System.out.println("insert into is_info_time "
								+ "values(info_time_seq.NEXTVAL, "
								+ "\'" + intimeDto.getI_t_time() + "\', "
								+ "\'" + intimeDto.getI_t_duration() + "\', "
								+ "\'" + intimeDto.getI_t_hall() + "\', "
								+ intimeDto.getI_d_num() +");");
						input += "\r\ninsert into is_info_time "
								+ "values(info_time_seq.NEXTVAL, "
								+ "\'" + intimeDto.getI_t_time() + "\', "
								+ "\'" + intimeDto.getI_t_duration() + "\', "
								+ "\'" + intimeDto.getI_t_hall() + "\', "
								+ intimeDto.getI_d_num() +");";
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
						for(int k=0; k<100; k++) {
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
								System.out.println("insert into is_info_seat "
										+ "values(info_seat_seq.NEXTVAL, "
										+ inseatDto.getI_s_floor() + ", "
										+ "\'" + inseatDto.getI_s_level() + "\', "
										+ "\'" + inseatDto.getI_s_name() + "\', "
										+ inseatDto.getI_s_price() + ", "
										+ inseatDto.getI_s_start() + ", "
										+ inseatDto.getI_s_end() + ", "
										+ inseatDto.getI_t_num() + ", "
										+ inseatDto.getI_t_count() + ");");
								input += "\r\ninsert into is_info_seat "
										+ "values(info_seat_seq.NEXTVAL, "
										+ inseatDto.getI_s_floor() + ", "
										+ "\'" + inseatDto.getI_s_level() + "\', "
										+ "\'" + inseatDto.getI_s_name() + "\', "
										+ inseatDto.getI_s_price() + ", "
										+ inseatDto.getI_s_start() + ", "
										+ inseatDto.getI_s_end() + ", "
										+ inseatDto.getI_t_num() + ", "
										+ inseatDto.getI_t_count() + ");";
						}
					}
				}
			}
		}
		
		// 공연 상세정보 인설트
		InfoContentDataBean i_ConDto = new InfoContentDataBean();
		int count = Integer.parseInt(multi.getParameter("count"));
		int result4 = 0;
		if(result3 == 1) {
			for(int i =0; i < count; i++) {
				String systemname = multi.getFilesystemName("image_"+i);
				if(systemname == null || systemname.equals("")) {
					i_ConDto.setI_c_img_path("");
				} else {
					i_ConDto.setI_c_img_path(systemname);
				} 
				i_ConDto.setI_c_content(multi.getParameter("content_" + i));
				i_ConDto.setI_num(i_num);
				result4 = infoDao.insertDB(i_ConDto);
				System.out.println("insert into is_info_content "
						+ "values(info_content_seq.NEXTVAL, "
						+ "\'" + i_ConDto.getI_c_content() + "\', "
						+ "\'" + i_ConDto.getI_c_img_path() + "\', "
						+ i_ConDto.getI_num() + ");");
				input += "\r\ninsert into is_info_content "
						+ "values(info_content_seq.NEXTVAL, "
						+ "\'" + i_ConDto.getI_c_content() + "\', "
						+ "\'" + i_ConDto.getI_c_img_path() + "\', "
						+ i_ConDto.getI_num() + ");";
			}
		}
		
		// 공연 좌석배치도 인설트
		InfoSeatImgDataBean i_SImgDto = new InfoSeatImgDataBean();
		int SIcount = Integer.parseInt(multi.getParameter("SIcount"));
		int check = 0;
		if(result4 == 1) {
			for(int i =0; i < SIcount; i++) {
				String systemname = multi.getFilesystemName("simage_"+i);
				if(systemname == null || systemname.equals("")) {
					i_SImgDto.setS_img_path("");
				} else {
					i_SImgDto.setS_img_path(systemname);
				} 
				i_SImgDto.setI_num(i_num);
				i_SImgDto.setS_img_hall(multi.getParameter("sihall_" + i));
				check = infoDao.insertDB(i_SImgDto);
				System.out.println("insert into is_seat_img "
						+ "values(seat_img_seq.NEXTVAL, "
						+ "\'" + i_SImgDto.getS_img_hall() + "\', "
						+ "\'" + i_SImgDto.getS_img_path() + "\', "
						+ i_SImgDto.getI_num() + ");");
				input += "\r\ninsert into is_seat_img "
						+ "values(seat_img_seq.NEXTVAL, "
						+ "\'" + i_SImgDto.getS_img_hall() + "\', "
						+ "\'" + i_SImgDto.getS_img_path() + "\', "
						+ i_SImgDto.getI_num() + ");";
			}
		}
		
		// 좌석명 인설트
		int result5 =0;
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
						result5 = orderDao.insert(map);
						System.out.println("insert into is_seat_order "
								+ "values(seat_order_seq.NEXTVAL, "
								+ "\'" + seat + "\', "
								+ 0 + ", "
								+ i_s_num + ");");
						input += "\r\ninsert into is_seat_order "
								+ "values(seat_order_seq.NEXTVAL, "
								+ "\'" + seat + "\', "
								+ 0 + ", "
								+ i_s_num + ");";
					}
				}
			}
		}
		request.setAttribute("check", result5);
		
		try {
		File f = new File("C:\\Users\\user1\\Desktop\\test.txt");
		BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(f));
		if(f.isFile() && file.canWrite()) {
			bufferedWriter.write(input);
			bufferedWriter.close();
		}
		}catch(IOException e) {
			e.printStackTrace();
		}
		return new ModelAndView("info/infoInsertPro");
	}
}