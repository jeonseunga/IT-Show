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
public class MemberModifyViewHandler implements CommandHandler{
	@Resource
	private MemberDao memberDao;

	@RequestMapping("/memberModifyView")
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable{

		String m_id = "";
		if((String)request.getSession().getAttribute("memId") != null) {
			m_id = (String)request.getSession().getAttribute("memId");
		}

		if((String)request.getSession().getAttribute("comId") != null) {
			m_id = (String)request.getSession().getAttribute("comId");
		}

		String m_pw = request.getParameter("m_pw");		
		int result = memberDao.check(m_id, m_pw);
		request.setAttribute("result", result);
		if(result==1) {
			MemberDataBean memberDto = memberDao.getMember(m_id);
			request.setAttribute("memberDto", memberDto); // 한번에 넘길 수 있음
		}
		return new ModelAndView("member/memberModifyView");
	}
}
