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
import info.InfoSeatDataBean;
import info.InfoSeatOrderDataBean;
import order.OrderDao;

@Controller
public class DelcountHandler implements CommandHandler{

	@Resource
	private OrderDao orderDao;
	
	@RequestMapping("/delcount")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int s_o_num = Integer.parseInt(request.getParameter("son"));
		
		int check = orderDao.check(s_o_num);
		if(check==0){
			orderDao.changeCk(s_o_num);
			InfoSeatOrderDataBean orderseat = orderDao.getName(s_o_num);
			int i_s_num = orderseat.getI_s_num();
			InfoSeatDataBean seat = orderDao.getLevel(i_s_num);
			int count = seat.getI_t_count()-1;
			
			Map<String, Object> map = new HashMap<String, Object>();
			map.put( "i_s_num", i_s_num );
			map.put( "count", count );
			
			orderDao.delCount(map);
			
			StringBuffer result = new StringBuffer("");
			result.append("{data:[");
			
				result.append("{check : '"+"ss"+ "'}");
				
			result.append("]}");
			request.setAttribute("result", result.toString());
		}else{
			StringBuffer result = new StringBuffer("");
			result.append("{data:[");
			
				result.append("{check : '"+"fs"+ "'}");
				
			result.append("]}");
			request.setAttribute("result", result.toString());
		}
		return new ModelAndView("order/delcount");
	}

}
