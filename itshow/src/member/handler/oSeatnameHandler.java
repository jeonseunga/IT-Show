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
public class oSeatnameHandler implements CommandHandler{
	@Resource
	private MemberDao memberDao;
	
	@RequestMapping("/oseatname")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		String num = request.getParameter("s");
		String seatname = memberDao.getSeat(num);
		
		StringBuffer result = new StringBuffer("");
		result.append("{data:[");
		
			result.append("{seatname : '"+ seatname + "'}");

		result.append("]}");
		request.setAttribute("result", result.toString());
			
		
		return new ModelAndView("member/oseatname");
	}

}
