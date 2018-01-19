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
public class SeatLevelListHandler implements CommandHandler{

	@Resource
	private OrderDao orderDao;
	
	@RequestMapping("/seatLevelList")
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		int i_t_num = Integer.parseInt(request.getParameter("i_t_num"));
		String floor = request.getParameter("floor");
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put( "i_t_num", i_t_num );
		map.put( "floor", floor );
		
		List <InfoSeatDataBean> info_seat = orderDao.getSeat(map);
		
		StringBuffer result = new StringBuffer("");
		result.append("{data:[");
		
		for(int i = 0; i<info_seat.size(); i++){
			result.append("{level : '"+info_seat.get(i).getI_s_level() + "',");
			result.append("price : '"+info_seat.get(i).getI_s_price() + "'}");
			if(i != info_seat.size()-1) {
				result.append(",");
			}
		}
		result.append("]}");
		request.setAttribute("result", result.toString());
		
	
		
		
		return new ModelAndView("order/seatLevelList");
	}

}
