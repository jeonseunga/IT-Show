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
public class MemberEmailCheckHandler implements CommandHandler{
@Resource 
private MemberDao memberDao;

@RequestMapping("/memberEmailCheck")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
	 String email = null;
	 String email1 = request.getParameter("m_email1");
	 String email2 = request.getParameter("m_email2");
	 
	 if(!email1.equals("")) {
			if(email2.equals("0")) {
				// 이메일 직접입력
				email = email1;
			} else {
				// 이메일 선택입력
				email = email1 +"@"+email2;
			}
		}
	 
	 int result7 = memberDao.mailCheck(email);
	 request.setAttribute("result7", result7);
	 request.setAttribute("email", email);
	 request.setAttribute("email1", email1);
	 request.setAttribute("email2", email2);
		return new ModelAndView("member/memberEmailCheck");
	}

}
