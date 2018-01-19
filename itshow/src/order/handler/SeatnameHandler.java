package order.handler;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import info.InfoSeatDataBean;
import info.InfoSeatOrderDataBean;
import order.OrderDao;

@Controller
public class SeatnameHandler implements CommandHandler{
	@Resource
	private OrderDao orderDao;

	@RequestMapping("/seatname")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int s_o_num = Integer.parseInt(request.getParameter("s_o_n"));
		
		InfoSeatOrderDataBean seatorder = orderDao.getName(s_o_num);
		int i_s_num = seatorder.getI_s_num();
		String seatname = seatorder.getS_o_seatnum();
		
		InfoSeatDataBean seat = orderDao.getLevel(i_s_num);
		
		int floor = seat.getI_s_floor();
		String level = seat.getI_s_level();
		
		StringBuffer result = new StringBuffer("");
		result.append("{data:[");
		
			result.append("{seatname : '"+seatname + "',");
			result.append("floor : '"+floor + "',");
			result.append("level : '"+level + "'}");
			
		result.append("]}");
		request.setAttribute("result", result.toString());	
		
		return new ModelAndView("order/seatname");
	}

}
