package order.handler;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import info.InfoSeatDataBean;
import order.OrderDao;

@Controller
public class SeatListHandler implements CommandHandler{
	@Resource
	private OrderDao orderDao;

	@RequestMapping("/seatList")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int i_t_num = Integer.parseInt(request.getParameter("i_t_num"));
		int floor = Integer.parseInt(request.getParameter("floor"));
		String level = request.getParameter("level");
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put( "i_t_num", i_t_num );
		map.put( "floor", floor );
		map.put( "level", level );
		
		List <InfoSeatDataBean> info_seats = orderDao.getSeats(map);
		
		StringBuffer result = new StringBuffer("");
		result.append("{data:[");
		
		for(int i = 0; i<info_seats.size(); i++){
			/*result.append("{startnum : '"+info_seats.get(i).getI_s_start() + "',");
			result.append("endnum : '"+info_seats.get(i).getI_s_end() + "',");
			result.append("i_s_num : '"+info_seats.get(i).getI_s_num() + "',");
			result.append("seatname : '"+info_seats.get(i).getI_s_name() + "'}");*/
			result.append("{i_s_num : '"+info_seats.get(i).getI_s_num() + "'}");
			if(i != info_seats.size()-1) {
				result.append(",");
			}
		}
		result.append("]}");
		request.setAttribute("result", result.toString());
		
		return new ModelAndView("order/seatList");
	}
}
