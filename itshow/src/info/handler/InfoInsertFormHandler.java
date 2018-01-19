package info.handler;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import handler.CommandHandler;

@Controller
public class InfoInsertFormHandler implements CommandHandler{
	@RequestMapping("/infoInsertForm")
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int i_num = 0;	
		int i_category = 0;
		
		if(request.getParameter("i_num")!=null) {
			i_num = Integer.parseInt(request.getParameter("i_num"));
			i_category = Integer.parseInt(request.getParameter("i_category"));
		}
		
		request.setAttribute("i_num", i_num);
		request.setAttribute("i_category", i_category);
		
		return new ModelAndView("info/infoInsertForm");
	}
}

