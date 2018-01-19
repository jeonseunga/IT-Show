package member.handler;

import java.util.HashMap;
import java.util.Map;

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
public class MemberPwFindProHandler implements CommandHandler{
 @Resource 
 private MemberDao memberDao;
 
 @RequestMapping("/memberPwFindPro")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
	request.setCharacterEncoding("UTF-8");
	  	
        String m_id = request.getParameter("m_id");
	    String m_name = request.getParameter("m_name");
		
	
		Map<String, String> map = new HashMap<String, String>();
		map.put("m_id", m_id);
		map.put("m_name", m_name);
		
		int resultCheck = memberDao.findPw(map);	
		request.setAttribute("resultCheck", resultCheck );
		
		if(resultCheck == 1){	
		    MemberDataBean memberDto = memberDao.getPw(map);
		    request.setAttribute("memberDto", memberDto);
		}
		return new ModelAndView("member/memberPwFindPro");
	}

}
