package member.handler;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
import member.MemberDao;
import order.OrderDataBean;

@Controller
public class OrderlistHandler implements CommandHandler{

	@Resource
	private MemberDao memberDao;
	
	@RequestMapping("/orderlist")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		String id = (String) request.getSession().getAttribute("memId");
		
		
		Date day = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(day);
		
		//String date = "2017-11-13";
		
		request.setAttribute("id", id);
		request.setAttribute("date", date);

		
		return new ModelAndView("member/orderlist");
	}

}
