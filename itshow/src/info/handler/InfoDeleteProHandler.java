package info.handler;

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

import handler.CommandHandler;
import info.InfoDao;
import info.InfoDateDataBean;
import info.InfoSeatDataBean;
import member.MemberDao;
import notice.NoticeDao;
import scrap.ScrapDao;
@Controller
public class InfoDeleteProHandler implements CommandHandler {
	@Resource
	private InfoDao infoDao;
	@Resource
	private ScrapDao scrapDao;
	
	@RequestMapping("/infoDeletePro")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int i_num = Integer.parseInt(request.getParameter("num"));
		String m_id = (String)request.getSession().getAttribute("comId");
		String m_code = request.getParameter("m_code");
		String title = request.getParameter("title");
		
		int result = 0;
		int check1=0;
		int check2=0;
		int check3=0;
		String check_id = infoDao.checkId(i_num);
		if(m_code.equals("3")) {
			if(m_id.equals(check_id)) {
				List<Integer> i_d_nums = infoDao.getDnums(i_num);
				for(int i=0;i<i_d_nums.size();i++) {
					List<Integer> i_t_nums = infoDao.getTnums(i_d_nums.get(i));
					for(int j=0;j<i_t_nums.size();j++) {
						ArrayList<InfoSeatDataBean> is_info_seat = infoDao.getis_info_seat(i_t_nums.get(j));
						for(int l=0; l<is_info_seat.size();l++) {
							System.out.println(is_info_seat.get(l).getI_s_num()+"에스넘번호");
							check3 = infoDao.deleteorderseat(is_info_seat.get(l).getI_s_num());
							System.out.println(check3+"check3");
						}
						
						if(check3>=1) {
							check1 = infoDao.deleteSeat(i_t_nums.get(j));
							System.out.println(check1+"check1");
						}
					}
				}

				if(check1 >= 1 ) {
					for(int i=0;i<i_d_nums.size();i++) {
						check2 = infoDao.deleteTime(i_d_nums.get(i));
						System.out.println(check2+"check2");
					}
				}

				if(check2 >= 1) {
					int scrapcount = scrapDao.getsccount(i_num);
					System.out.println(scrapcount+"scrapcount");
					if(scrapcount>0) {
						scrapDao.deleteScrap(i_num);
					}
					int replycount = infoDao.getre_count(i_num);
					if(replycount>0) {
						infoDao.deleteRePly(i_num);
					}
					result = infoDao.deleteDate(i_num);
					System.out.println(result+"result1");
					result = infoDao.deleteContent(i_num);
					System.out.println(result+"result2");
					result = infoDao.deleteSeatImg(i_num);
					System.out.println(result+"result3");
					result = infoDao.deleteInfo(i_num);
					System.out.println(result+"result4");
				}
			}
		} else {
			List<Integer> i_d_nums = infoDao.getDnums(i_num);
			for(int i=0;i<i_d_nums.size();i++) {
				List<Integer> i_t_nums = infoDao.getTnums(i_d_nums.get(i));
				for(int j=0;j<i_t_nums.size();j++) {
					ArrayList<InfoSeatDataBean> is_info_seat = infoDao.getis_info_seat(i_t_nums.get(j));
					for(int l=0; l<is_info_seat.size();l++) {
						System.out.println(is_info_seat.get(l).getI_s_num()+"에스넘번호");
						check3 = infoDao.deleteorderseat(is_info_seat.get(l).getI_s_num());
						System.out.println(check3+"check3");
					}
					
					if(check3>=1) {
						check1 = infoDao.deleteSeat(i_t_nums.get(j));
						System.out.println(check1+"check1");
					}
				}
			}

			if(check1 >= 1 ) {
				for(int i=0;i<i_d_nums.size();i++) {
					check2 = infoDao.deleteTime(i_d_nums.get(i));
					System.out.println(check2+"check2");
				}
			}

			if(check2 >= 1) {
				int scrapcount = scrapDao.getsccount(i_num);
				System.out.println(scrapcount+"scrapcount");
				if(scrapcount>0) {
					scrapDao.deleteScrap(i_num);
				}
				int replycount = infoDao.getre_count(i_num);
				if(replycount>0) {
					infoDao.deleteRePly(i_num);
				}
				result = infoDao.deleteDate(i_num);
				System.out.println(result+"result1");
				result = infoDao.deleteContent(i_num);
				System.out.println(result+"result2");
				result = infoDao.deleteSeatImg(i_num);
				System.out.println(result+"result3");
				result = infoDao.deleteInfo(i_num);
				System.out.println(result+"result4");
			}
		}
		
		request.setAttribute("title", title);
		request.setAttribute("m_code", m_code);
		request.setAttribute("result", result);
		return new ModelAndView("info/infoDeletePro");
	}
}
