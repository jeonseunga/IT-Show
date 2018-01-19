package scrap.handler;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import notice.NoticeDao;
import scrap.ScrapDao;
@Controller
public class ScrapDeleteProHandler implements CommandHandler {
	@Resource
	private ScrapDao scrapDao;
	
	@RequestMapping("/scrapDeletePro")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int s_num = Integer.parseInt(request.getParameter("s_num"));
		String m_id = (String) request.getSession().getAttribute("memId");
		//String m_id = "aaa";
		int check_id = 0;
		int result = 0;
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("s_num", s_num);
		String s_m_id = scrapDao.checkId(map);
		// 로그인 아이디와 스크랩한 아이디가 동일인물인지 확인
		if(m_id.equals(s_m_id)) {
			// 동일인물인지 확인 후 스크랩 삭제
			check_id = 1;
			if(check_id==1) {
				result = scrapDao.deleteScrap(s_num);
			}
		}
		
		request.setAttribute("result", result);
		return new ModelAndView("scrap/scrapDeletePro");
	}
}
