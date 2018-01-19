package info.handler;

import java.util.ArrayList;
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
import info.InfoTimeDataBean;

@Controller
public class InfoTimeListHandler implements CommandHandler {
	@Resource
	private InfoDao infoDao;
	
	@RequestMapping("/infoTimeList")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int i_num = Integer.parseInt(request.getParameter("num"));
		String i_date = request.getParameter("date");
		
		// 리스트로 i_d_num 가져오기 3 4
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("i_num", i_num);
		map.put("i_date", i_date);
		List<Integer> infoDateNumbers = infoDao.getDateNumbers(map);
		
		StringBuffer result = new StringBuffer("");
		result.append("{ times:[");
		List<InfoTimeDataBean> infoTimeList = null;
		for(int j = 0; j < infoDateNumbers.size(); j++) {
			int i_d_num = infoDateNumbers.get(j); // 3 , 4
			infoTimeList = infoDao.getTimeList(i_d_num);
			for(int i = 0; i < infoTimeList.size(); i++) {
				result.append("{time : '" + infoTimeList.get(i).getI_t_time() + "'}");
				if(i != infoTimeList.size()-1 || j != infoDateNumbers.size()-1) {
					result.append(",");
				}
			}
		}
		result.append("] }");
		request.setAttribute("result", result.toString());
		
		return new ModelAndView("info/infoTimeList");
	}
}