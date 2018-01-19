package order.handler;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import info.InfoSeatOrderDataBean;
import member.MemberDataBean;
import order.OrderDao;
import order.OrderDataBean;

@Controller
public class InsertOrderHandler implements CommandHandler{

	@Resource
	private OrderDao orderDao;
	
	@RequestMapping("/insertOrder")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		String i_name = request.getParameter("i_name");
		String i_date = request.getParameter("i_date");
		String i_t_time = request.getParameter("i_t_time");
		String s_o_numlist = request.getParameter("n");
		String id = request.getParameter("id");
		int msg = Integer.parseInt(request.getParameter("msg"));
		String money = request.getParameter("money");
		int usepoint = Integer.parseInt(request.getParameter("up"));
		int price = Integer.parseInt(request.getParameter("pc"));
		String commap = request.getParameter("pp");
		
		String[] s_o_nums = s_o_numlist.split(",");
		int o_tickets = s_o_nums.length;
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put( "money", money );
		map.put( "i_name", i_name );
		map.put( "i_date", i_date );
		map.put( "i_t_time", i_t_time );
		map.put( "msg", msg );
		map.put( "o_tickets", o_tickets );
		map.put( "id", id );
		map.put("s_o_numlist", s_o_numlist);
		map.put("price", commap);
		
		MemberDataBean member = orderDao.getMember(id);
		int point = member.getM_point();
		int rp = point - usepoint;
		int plusP = (int) Math.round(price*0.01);
		int saveP = rp+plusP;
		
		Map<String, Object> map3 = new HashMap<String, Object>();
		map3.put( "id", id );
		map3.put( "saveP", saveP );
		
		orderDao.rePoint(map3);
		
		int result1 = orderDao.insertOrder(map);
		OrderDataBean order = orderDao.order(s_o_numlist);
		int o_num = order.getO_num();
		if(result1 != 0){
			for(int i=0; i<o_tickets; i++){
				int s_o_num = Integer.parseInt(s_o_nums[i]);
				InfoSeatOrderDataBean seat = orderDao.getName(s_o_num);
				String o_t_seatname =  seat.getS_o_seatnum();
				
				Map<String, Object> map2 = new HashMap<String, Object>();
				map2.put( "o_t_seatname", o_t_seatname );
				map2.put("o_num", o_num);
				
				int rt = orderDao.insertTicket(map2);
				if(rt==0){
					//티켓주문오류
					StringBuffer result = new StringBuffer("");
					result.append("{data:[");
					
						result.append("{check : '"+"fs"+ "'}");
						
					result.append("]}");
					request.setAttribute("result", result.toString());
					
				}else{
					//티켓주문 성공
					StringBuffer result = new StringBuffer("");
					result.append("{data:[");
					
						result.append("{check : '"+"ss"+ "'}");
						
					result.append("]}");
					request.setAttribute("result", result.toString());
				}
			}
		}else{
			//주문 오류
			StringBuffer result = new StringBuffer("");
			result.append("{data:[");
			
				result.append("{check : '"+"fs"+ "'}");
				
			result.append("]}");
			request.setAttribute("result", result.toString());
		}
		
				
		return new ModelAndView("order/insertOrder");
	}

}
