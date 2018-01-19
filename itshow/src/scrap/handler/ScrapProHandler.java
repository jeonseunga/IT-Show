package scrap.handler;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import info.InfoDao;
import info.InfoDataBean;
import scrap.ScrapDao;
import scrap.ScrapDataBean;
@Controller
public class ScrapProHandler implements CommandHandler {
	@Resource
	private ScrapDao scrapDao;
	@Resource
	private InfoDao infoDao;
	
	@RequestMapping("/scrapPro")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int i_num = Integer.parseInt(request.getParameter("i_num"));
		String m_id = (String) request.getSession().getAttribute("memId");
		int result = 0;
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("i_num", i_num);
		map.put("m_id", m_id);
		int check = scrapDao.checkscrap(map);
		System.out.println(check+"채크");
		if(check>0) {
			result = -1;
			System.out.println(result+"rufrhk");
		} else {
		ArrayList<InfoDataBean> article = infoDao.getScrapList(i_num);
		ScrapDataBean scrapDto = new ScrapDataBean();
		scrapDto.setS_info_num(i_num);
		scrapDto.setM_id(m_id);
		scrapDto.setS_img_path(article.get(0).getI_img_thumbnail());
		scrapDto.setS_name(article.get(0).getI_name());
		scrapDto.setS_info_category(article.get(0).getC_category());
		result = scrapDao.insertScrap(scrapDto);
		}
		request.setAttribute("i_num", i_num);
		request.setAttribute("result", result);
		return new ModelAndView("scrap/scrapPro");
	}
}
