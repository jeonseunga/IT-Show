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
public class MemberModisendEmailHandler implements CommandHandler{
  @Resource 
  private MemberDao memberDao;
  
   @RequestMapping("/memberModisendEmail")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		String m_email =request.getParameter("m_email");
		String authnum = "";
		String content = "";	
		
		for(int i =0; i <= 6; i++){
			authnum += Integer.toString((int)(Math.random()*10));
		}
		content = "인증번호 [ " + authnum + " ]";
	
		
		int result = memberDao.sendEmail(m_email, content);
	
		request.setAttribute("result",result);
		request.setAttribute("authnum", authnum );
		
		return new ModelAndView("member/memberModisendEmail");
	}
	}


