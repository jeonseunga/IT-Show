package info.handler;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import notice.NoticeDao;
@Controller
public class InfoDeleteFormHandler implements CommandHandler {
	
	@RequestMapping("/infoDeleteForm")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int i_num = Integer.parseInt(request.getParameter("num"));
		int m_code = Integer.parseInt(request.getParameter("m_code"));
		String title = request.getParameter("title");
		request.setAttribute("i_num", i_num);
		request.setAttribute("m_code", m_code);
		request.setAttribute("title", title);
		return new ModelAndView("info/infoDeleteForm");
	}

}