package member.handler;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import member.MemberDao;
import order.OrderDataBean;
import order.OrderSeatDataBean;
import order.OrderTicketDataBean;

@Controller
public class SendmailListHandler implements CommandHandler{

	@Resource
	private MemberDao memberDao;
	
	@RequestMapping("/sendmailList")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		//3일 후 날짜
		Calendar cal = Calendar.getInstance();
		cal.add(cal.DATE,+3);

		String daylater = cal.get(cal.YEAR)+"-"+(cal.get(cal.MONTH)+1)+"-"+cal.get(cal.DATE);
		SimpleDateFormat sdfmt = new SimpleDateFormat("yyyy-MM-dd"); 
		Date date1 = sdfmt.parse(daylater);
		daylater = new java.text.SimpleDateFormat ("yyyy-MM-dd").format(date1);

		System.out.println(daylater);
	
		
		//String daylater = "2017-12-07";
		int count = memberDao.getOrderCount(daylater);
		
		if(count!=0){
			List<OrderDataBean> orderList = memberDao.getOrderList(daylater);
			
			StringBuffer result = new StringBuffer("");
			result.append("{data:[");
			
			for(int i = 0; i<orderList.size(); i++){
				String id = orderList.get(i).getM_id();
				String title = orderList.get(i).getO_name();
				String date = orderList.get(i).getO_date();
				String time = orderList.get(i).getO_starttime();
				String price = orderList.get(i).getO_pirce();
				int o_num = orderList.get(i).getO_num();
				
				String email = memberDao.getEmail(id);
				String src = memberDao.getImg(title);
				System.out.println(title+"ddd");
				System.out.println(src);
				
				List<OrderTicketDataBean> orderseatlist = memberDao.getSeatOrder(o_num);
				
				String seatlist = ""; 
				
				for(int j=0; j<orderseatlist.size(); j++){
					String seat = orderseatlist.get(j).getO_t_seatname();
					seatlist += seat+",";
				}
					result.append("{title : '"+ title + "',");
					result.append("date : '"+ date + "',");
					result.append("id : '"+ id + "',");
					result.append("time : '"+ time + "',");
					result.append("price : '"+ price + "',");
					result.append("email : '"+ email + "',");
					result.append("count : '"+ count + "',");
					result.append("src : '"+ src + "',");
					result.append("o_num : '"+ o_num + "',");
					result.append("seatlist : '"+ seatlist + "'}");
					
					if(i != orderList.size()-1) {
						result.append(",");
					}
			}
			
			result.append("]}");
			request.setAttribute("result", result.toString());
		}else{
			StringBuffer result = new StringBuffer("");
			result.append("{data:[");
			
				result.append("{title : 'error:noCount'}");
				
			result.append("]}");
			request.setAttribute("result", result.toString());	
		}
		
		return new ModelAndView("member/sendmailList");
	}

}




















