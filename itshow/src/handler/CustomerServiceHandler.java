package handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import member.MemberDao;

@Controller
public class CustomerServiceHandler implements CommandHandler {
	private MemberDao memberDao;
	@RequestMapping("/customerService.do")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		return new ModelAndView("main/customerService");
	}
}
