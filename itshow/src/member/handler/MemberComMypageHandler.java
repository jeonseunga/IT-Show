package member.handler;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import info.InfoDataBean;
import member.MemberDao;
import member.MemberDataBean;
@Controller
public class MemberComMypageHandler implements CommandHandler{
	
	@Resource
	private MemberDao memberDao;
	
	@RequestMapping("/compMypage")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		String id= (String) request.getSession().getAttribute("comId");
		String m_code = request.getParameter("m_code");
		MemberDataBean memberDto = memberDao.getMember(id);
		request.setAttribute("memberDto", memberDto);
		request.setAttribute("m_code", m_code);
		return new ModelAndView("member/compMypage");
	}
}
