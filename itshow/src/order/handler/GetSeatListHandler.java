/*package order.handler;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import info.InfoSeatOrderDataBean;
import order.OrderDao;

@Controller
public class GetSeatListHandler implements CommandHandler{
	@Resource
	private OrderDao orderDao;

	@RequestMapping("/getSeatList")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		int i_s_num = Integer.parseInt(request.getParameter("i_s_num"));
		String seatname = request.getParameter("seatname");
		
		StringBuffer result = new StringBuffer("");
		result.append("{data:[");
		List <InfoSeatOrderDataBean> get_seats = orderDao.oneSeat(i_s_num);
		for(int i=0; i<get_seats.size(); i++){
			result.append("{s_o_seatnum : '"+get_seats.get(i).getS_o_seatnum() + "',");
			result.append("s_o_num : '"+get_seats.get(i).getS_o_num() + "',");
			result.append("seatname : '"+seatname+ "',");
			result.append("s_o_check : '"+get_seats.get(i).getS_o_check() + "'}");
			if(i != get_seats.size()-1) {
				result.append(",");
			}
		}
		result.append("]}");
		request.setAttribute("result", result.toString());
		
		return new ModelAndView("order/getSeatList");
	}

}















*/