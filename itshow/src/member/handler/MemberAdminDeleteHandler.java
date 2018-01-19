package member.handler;



import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest; 
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import member.MemberDao;
import member.MemberDataBean;


 
@Controller
public class MemberAdminDeleteHandler implements CommandHandler{
@Resource
 private MemberDao memberDao;
	@RequestMapping("/memberAdminDelete")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		String m_id = request.getParameter("m_id");
		
		MemberDataBean memberDto = memberDao.getMember(m_id);
		request.setAttribute("m_id", m_id);
		request.setAttribute("memberDto", memberDto);
		
		return new ModelAndView("member/memberAdminDelete");
	}

}
