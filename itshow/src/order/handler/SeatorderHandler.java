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
import info.InfoSeatOrderDataBean;
import order.OrderDao;

@Controller
public class SeatorderHandler implements CommandHandler{
	@Resource
	private OrderDao orderDao;

	@RequestMapping("/seatorder")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
/*		int startnum = Integer.parseInt(request.getParameter("startnum"));
		int endnum = Integer.parseInt(request.getParameter("endnum"));
		int i_s_num = Integer.parseInt(request.getParameter("i_s_num"));
		String seatname = request.getParameter("seatname");
		
		for(int i=startnum; i<endnum+1; i++){
			String seat = seatname+"-" + i;
			Map<String, Object> map = new HashMap<String, Object>();
			map.put( "seat", seat );
			map.put( "i_s_num", i_s_num );
			
			int result = orderDao.insert(map);
			
			if(result!=0){
			System.out.println("insert into is_seat_order values(seat_order_seq.nextVal,'"+seat+"',0,'"+i_s_num+"')");
			}
		}*/
		
		
		int i_s_num = Integer.parseInt(request.getParameter("i_s_num"));
		List <InfoSeatDataBean> info_seats = orderDao.level_SelectSeat(i_s_num);
		
		StringBuffer result = new StringBuffer("");
		
		result.append("{data:[");
		//1개만 나온다
		for(int i=0; i<info_seats.size(); i++){
			result.append("{i_s_name : '"+info_seats.get(i).getI_s_name() + "',");
			result.append("i_t_count : '"+info_seats.get(i).getI_t_count() + "',");
			result.append("i_s_num : '"+info_seats.get(i).getI_s_num() + "'}");
			if(i != info_seats.size()-1) {
				result.append(",");
			}
		}
		result.append("],");	
		result.append("seatdata:[");
		List <InfoSeatOrderDataBean> get_seats = orderDao.oneSeat(i_s_num);
		for(int i=0; i<get_seats.size(); i++){
			result.append("{s_o_seatnum : '"+get_seats.get(i).getS_o_seatnum() + "',");
			result.append("i_s_num : '"+get_seats.get(i).getI_s_num() + "',");
			result.append("s_o_num : '"+get_seats.get(i).getS_o_num() + "',");
			result.append("s_o_check : '"+get_seats.get(i).getS_o_check() + "'}");
			if(i != get_seats.size()-1) {
				result.append(",");
			}
		}
		result.append("]}");
		request.setAttribute("result", result.toString());

		return new ModelAndView("order/seatorder");
	}
	
}
