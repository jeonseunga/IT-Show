package info.handler;

import java.text.SimpleDateFormat;
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
import info.InfoDao;
import info.InfoDateDataBean;

@Controller
public class infoDateListHandler implements CommandHandler {
	@Resource
	private InfoDao infoDao;
	
	@RequestMapping("/infoContentDate")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int i_num = Integer.parseInt(request.getParameter("num"));
		Date day = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(day);
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("i_num", i_num);
		map.put("i_date", date);
		List<InfoDateDataBean> infoDates = infoDao.getInfoDates(map);
		
		StringBuffer result = new StringBuffer("");
		if(infoDates.size() == 0) {
			result.append("data = [{date : ''}]");
		}else {
			result.append("data = [");
			for(int i=0; i < infoDates.size(); i++){
				result.append("{date : '" + infoDates.get(i).getI_date() + "'}");
				if(i != infoDates.size()-1) {
					result.append(",");
				}
			}
			result.append("]");
		}
		request.setAttribute("result", result.toString());
		return new ModelAndView("info/infoContentDate");
	}
}