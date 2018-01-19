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
public class MemberModifyProHandler implements CommandHandler{
	@Resource
	private MemberDao memberDao;

	@RequestMapping("/memberModifyPro")
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable{

		request.setCharacterEncoding("UTF-8");
		MemberDataBean memberDto = new MemberDataBean();
		memberDto.setM_pw( request.getParameter("m_pw"));
		memberDto.setM_zipcode(request.getParameter("sample6_postcode"));

		memberDto.setM_id(request.getParameter("m_id"));


		String m_tel = null;
		String m_tel1 = request.getParameter( "m_tel1" );
		String m_tel2 = request.getParameter( "m_tel2" );
		String m_tel3 = request.getParameter( "m_tel3" );
		System.out.println(m_tel3);
		if( ! m_tel1.equals( "" ) 
				|| ! m_tel2.equals( "" ) 
				|| ! m_tel3.equals( "" ) ) {
			m_tel = m_tel1 + "-" + m_tel2 + "-" + m_tel3;		
		}	
		memberDto.setM_tel(m_tel);

		String m_address = null;
		String m_address1 = request.getParameter("sample6_address");
		String m_address2 = request.getParameter("sample6_address2");
		if((m_address1 != null && m_address2 != null) || (! m_address1.equals("") && ! m_address2.equals("")))  {
			m_address = m_address1 + "/n" + m_address2;
		}
		memberDto.setM_address(m_address);


		String m_email = null;
		String m_email1 = request.getParameter( "m_email1" );
		String m_email2 = request.getParameter( "m_email2" );

		if( ! m_email1.equals( "" ) 
				|| ! m_email2.equals( "" ) ) {
			m_email = m_email1 + "@" + m_email2;
		}
		memberDto.setM_email(m_email);

		int result = memberDao.updateMember( memberDto );

		request.setAttribute( "result", result);

		return new ModelAndView("member/memberModifyPro");
	}
}