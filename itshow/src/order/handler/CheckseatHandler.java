package order.handler;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import order.OrderDao;


@Controller
public class CheckseatHandler implements CommandHandler{
	@Resource
	private OrderDao orderDao;

	@RequestMapping("/checkseat")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int s_o_num = Integer.parseInt(request.getParameter("Select_s_o_num"));
		int check = orderDao.check(s_o_num);
		
		StringBuffer result = new StringBuffer("");
		result.append("{data:[");
		result.append("{check : '"+check+ "'}");
		result.append("]}");
		request.setAttribute("result", result.toString());		

		
		return new ModelAndView("order/checkseat");
	}
	
}










