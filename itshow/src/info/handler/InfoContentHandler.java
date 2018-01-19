package info.handler;

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
import info.InfoContentDataBean;
import info.InfoDao;
import info.InfoDataBean;
import info.InfoSeatDataBean;

@Controller
public class InfoContentHandler implements CommandHandler {
	@Resource
	private InfoDao infoDao;
	
	@RequestMapping("infoContent")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int i_num = Integer.parseInt(request.getParameter("num"));
		int scrap = 0;
		
		if((String) request.getSession().getAttribute("memId") != null) {
			String m_id = (String) request.getSession().getAttribute("memId");
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("m_id", m_id);
			map.put("s_info_num", i_num);
			scrap = infoDao.checkScrap(map);
		}
		
		request.setAttribute("scrap", scrap);
		
		//조회수 업데이트
		infoDao.updateReadCount(i_num);
		
		//기본정보 가져오기
		InfoDataBean infoDto = infoDao.getInfoDetail(i_num);
		request.setAttribute("infoDto", infoDto);
		
		//상세정보 가져오기
		List<InfoContentDataBean> infoContentDto = infoDao.getInfoContents(i_num);
		request.setAttribute("infoContentDto", infoContentDto);
		
		//i_d_num 가져오기
		List<Integer> dateNumber = infoDao.getDnums(i_num);
		//i_t_num 가져오기
		List<Integer> timeNumber = infoDao.getTnums(dateNumber.get(0));
		
		//좌석정보 가져오기
		List<InfoSeatDataBean> infoSeatDto = infoDao.getInfoSeat(timeNumber.get(0));
		request.setAttribute("infoSeatDto", infoSeatDto);
		
		return new ModelAndView("info/infoContent");
	}
}