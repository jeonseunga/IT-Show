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
public class MemberIdFindProHandler implements CommandHandler{
 @Resource
 private MemberDao memberDao;
 
  @RequestMapping("/memberIdFindPro")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
	  
	  	request.setCharacterEncoding("UTF-8");
	  	
	    String m_name = request.getParameter("m_name");
		String m_email1 = request.getParameter("m_femail1");
		String m_email2 = request.getParameter("m_femail2");
		
		String m_email = "";
		if(!m_email1.equals("")) {
			if(m_email2.equals("0")) {
				// 이메일 직접입력
				m_email = m_email1;
			} else {
				// 이메일 선택입력
				m_email = m_email1 +"@"+m_email2;
			}
		}
		
		Map<String, String> map = new HashMap<String, String>();
		map.put("m_name", m_name);
		map.put("m_email", m_email);
		int resultCheck = memberDao.findId(map);	//이름과 이메일 같은게 있는지 확인
		request.setAttribute("resultCheck", resultCheck );
		
		System.out.println(m_name);
		
		if(resultCheck == 1){	
		    MemberDataBean memberDto = memberDao.getId(map);
		    request.setAttribute("memberDto", memberDto);
		}
		
		return new ModelAndView("member/memberIdFindPro");
	}

}
