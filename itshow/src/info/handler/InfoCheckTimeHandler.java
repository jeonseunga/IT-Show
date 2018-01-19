package info.handler;

import java.sql.Timestamp;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import info.InfoDao;
import info.InfoDataBean;

@Controller
public class InfoCheckTimeHandler implements CommandHandler {
	@Resource
	private InfoDao infoDao;
	
	@RequestMapping("/infoCheckTime")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int i_num = Integer.parseInt(request.getParameter("num"));
		InfoDataBean infoDto = infoDao.getInfoDetail(i_num);
		Timestamp current = new Timestamp(System.currentTimeMillis());
		int result = 0;
		if(current.before(infoDto.getI_open_date())) {
			result = 1;
		}
		
		request.setAttribute("result", result);
		
		return new ModelAndView("info/infoCheckTime");
	}

}
