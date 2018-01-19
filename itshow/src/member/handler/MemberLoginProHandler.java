package member.handler;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import member.MemberDao;

@Controller
public class MemberLoginProHandler {
	
  @Resource
  private MemberDao memberdao;
  
  @RequestMapping("/memberLoginPro")
  public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
	  String m_id = request.getParameter("m_id");
	  String m_pw = request.getParameter("m_pw");

	  int result = memberdao.check(m_id, m_pw);
	  
	  if(result == 1) {
		  int m_code = memberdao.getCode(m_id);
		  request.setAttribute("m_code", m_code);
	  }
	  
	  request.setAttribute("result", result);
	  request.setAttribute("m_id", m_id);
	  return new ModelAndView("member/memberLoginPro");
  }
}
