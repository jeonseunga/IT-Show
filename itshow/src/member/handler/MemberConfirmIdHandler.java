package member.handler;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import member.MemberDao;

@Controller
public class MemberConfirmIdHandler implements CommandHandler{
	@Resource
	private MemberDao memberDao;
	
	@RequestMapping("/memberConfirmId")
   public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable{
		String m_id = request.getParameter("m_id");
		
		int result = memberDao.check(m_id);
		
		request.setAttribute("result", result);
		request.setAttribute("m_id", m_id);
		
		return new ModelAndView("member/memberConfirmId");
	}
}
