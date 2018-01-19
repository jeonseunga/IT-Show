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
import info.InfoTimeDataBean;
import order.OrderDao;

@Controller
public class OrderFormHandler implements CommandHandler{

	@Resource
	private OrderDao orderDao;
	
	@RequestMapping("/orderForm.do")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		int i_num = Integer.parseInt(request.getParameter("num"));
		String i_date = (String)request.getParameter("date");
		
		Map<String, Object> map3 = new HashMap<String, Object>();
		map3.put( "i_num", i_num );
		map3.put( "i_date", i_date );
		
		int i_d_num = orderDao.getDateNumber(map3);
		
		String o_starttime = (String)request.getParameter("time");

		Map<String, Object> map2 = new HashMap<String, Object>();
		map2.put( "i_d_num", i_d_num );
		map2.put( "o_starttime", o_starttime );
		
		InfoTimeDataBean info_time = orderDao.getTime(map2);
		
		int i_t_num = info_time.getI_t_num();
		String hall = info_time.getI_t_hall();
		
		
		request.setAttribute("i_d_num", i_d_num);
		request.setAttribute("i_t_num", i_t_num);
		request.setAttribute("i_num", i_num);
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put( "i_num", i_num );
		map.put( "hall", hall );
		
		String img_path = orderDao.getImg(map);
		request.setAttribute("img_path", img_path);
		
		List <String> floors = orderDao.getFloor(i_t_num);
		
		
		if(floors.size() > 0){
			request.setAttribute("floors", floors);
			
			/*for(int i=0; i<floors.size(); i++){
				String floor = floors.get(i);
				request.setAttribute("floor", floor);
			}*/
			
		}

		
		return new ModelAndView("order/orderForm");
	}

}
