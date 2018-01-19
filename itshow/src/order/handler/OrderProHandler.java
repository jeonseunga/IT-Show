package order.handler;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import info.InfoDataBean;
import info.InfoDateDataBean;
import info.InfoTimeDataBean;
import order.OrderDao;

@Controller
public class OrderProHandler implements CommandHandler{

	@Resource
	private OrderDao orderDao;

	@RequestMapping("/orderPro")
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		String id = (String)request.getSession().getAttribute("memId");
		request.setAttribute("id", id);
		
		int i_num = Integer.parseInt(request.getParameter("i_num"));
		int i_d_num = Integer.parseInt(request.getParameter("i_d_num"));
		int i_t_num = Integer.parseInt(request.getParameter("i_t_num"));
		String numlists = request.getParameter("s_o_numlist");
		String s = request.getParameter("sum");
		
		InfoDataBean info = orderDao.gerInfo(i_num);
		InfoDateDataBean date = orderDao.getDate(i_d_num);
		InfoTimeDataBean time = orderDao.getTime1(i_t_num);
		String img_path = info.getI_img_thumbnail();
		request.setAttribute("img_path", img_path);
		
		request.setAttribute("num",i_num);
		request.setAttribute("info", info);
		request.setAttribute("date", date);
		request.setAttribute("time", time);
		request.setAttribute("n", numlists);
		request.setAttribute("s", s);
		//System.out.println(numlists);
		/*String[] s_o_nums = s_o_numlist.split(",");
		
		for (String s_o_num : s_o_nums ){
            System.out.println(s_o_num);
            
        }*/

		return new ModelAndView("order/orderPro");
	}

}
