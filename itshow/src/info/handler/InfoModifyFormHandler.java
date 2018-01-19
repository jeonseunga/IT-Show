package info.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
@Controller
public class InfoModifyFormHandler implements CommandHandler {
	@RequestMapping("infoModifyForm")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int num = Integer.parseInt( request.getParameter( "num" ) );
		String m_code = request.getParameter("m_code");
		String title = request.getParameter("title");
		request.setAttribute( "m_code", m_code );
		request.setAttribute( "num", num );
		request.setAttribute( "title", title );
		return new ModelAndView("info/infoModifyForm");
	}

}
