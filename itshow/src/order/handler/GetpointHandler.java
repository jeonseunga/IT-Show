package order.handler;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import member.MemberDataBean;
import order.OrderDao;

@Controller
public class GetpointHandler implements CommandHandler{

	@Resource
	private OrderDao orderDao;
	
	@RequestMapping("/getpoint")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		String id = request.getParameter("id");

		MemberDataBean member = orderDao.getMember(id);
	
		StringBuffer result = new StringBuffer("");
		result.append("{data:[");
		
			result.append("{point : '"+member.getM_point() + "',");
			result.append("email : '"+member.getM_email() + "'}");
			
		result.append("]}");
		request.setAttribute("result", result.toString());	
		
		return new ModelAndView("order/getpoint");
	}

}
