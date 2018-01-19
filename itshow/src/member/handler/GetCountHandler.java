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
import order.OrderTicketDataBean;

@Controller
public class GetCountHandler implements CommandHandler{

	@Resource
	private MemberDao memberDao;
	
	@RequestMapping("/getcount")
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
			StringBuffer result = new StringBuffer("");
			result.append("{data:[");
			
				result.append("{count : '"+ count + "'}");
					
			result.append("]}");
			request.setAttribute("result", result.toString());
			
		}else{
			StringBuffer result = new StringBuffer("");
			result.append("{data:[");
			
				result.append("{count : 'error:noCount'}");
				
			result.append("]}");
			request.setAttribute("result", result.toString());
			
		}
		
		return new ModelAndView("member/getcount");
	}

}


