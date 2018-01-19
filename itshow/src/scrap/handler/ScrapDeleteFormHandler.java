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
public class ScrapDeleteFormHandler implements CommandHandler {
	@Resource
	private ScrapDao scrapDao;
	
	@RequestMapping("/scrapDeleteForm")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		String pageNum = request.getParameter( "pageNum" );
		int s_num = Integer.parseInt(request.getParameter("s_num"));
		
		request.setAttribute("pageNum", pageNum);
		request.setAttribute("s_num", s_num);
		
		return new ModelAndView("scrap/scrapDeleteForm");
	}

}