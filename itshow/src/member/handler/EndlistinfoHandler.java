package member.handler;

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
public class EndlistinfoHandler implements CommandHandler{

	@Resource
	private MemberDao memberDao;
	
	@RequestMapping("/endlistinfo")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		String id = request.getParameter("s_id");
		String date = request.getParameter("date");
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put( "id", id );
		map.put( "date", date );
		
		int count = memberDao.eorderCount(map);
		request.setAttribute("count", count);
		if(count !=0){
			List<OrderDataBean> order = memberDao.egetOrder(map);
			
			StringBuffer result = new StringBuffer("");
			result.append("{data:[");
			
			for(int i = 0; i<order.size(); i++){
				
				String title = order.get(i).getO_name();
				
				int i_num = memberDao.getInum(title);
				
				String o_date = order.get(i).getO_date();
				String time = order.get(i).getO_starttime();
				String price = order.get(i).getO_pirce();
				String pay = order.get(i).getO_pay();
				String s_o_numlist = order.get(i).getO_ticket_list();
				
				result.append("{title : '"+ title + "',");
				result.append("date : '"+ o_date + "',");
				result.append("i_num : '"+ i_num + "',");
				result.append("time : '"+ time + "',");
				result.append("price : '"+ price + "',");
				result.append("seatlist : '"+ s_o_numlist + "',");
				result.append("pay : '"+ pay + "'}");
				if(i != order.size()-1) {
					result.append(",");
				}
				
			}
			result.append("]}");
			request.setAttribute("result", result.toString());
			
		}else{
			StringBuffer result = new StringBuffer("");
			result.append("{data:[");
			
				result.append("{title : '"+ "fs" + "'}");
	
			result.append("]}");
			request.setAttribute("result", result.toString());
		}
		
		return new ModelAndView("member/endlistinfo");
	}

}