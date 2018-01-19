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
public class MemberFindSendEmailHandler implements CommandHandler{
@Resource
 private MemberDao memberDao;
 @RequestMapping("/memberFindSendEmail")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
	 	String m_email =request.getParameter("m_email");
		String m_pw = request.getParameter("m_pw");
		String content = "";		
		
		content = "비밀번호 [ " + m_pw+ " ]";
		
		int result = memberDao.sendEmailPw(m_email, content);
	
		request.setAttribute("result",result);
		request.setAttribute("authnum", m_pw );
		return new ModelAndView("member/memberFindSendEmail");
	}

}
