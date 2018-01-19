package info.handler;

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
import info.InfoSeatDataBean;

@Controller
public class InfoSeatDetailHandler implements CommandHandler {
	@Resource
	private InfoDao infoDao;
	
	@RequestMapping("/infoSeatDetail")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int i_num = Integer.parseInt(request.getParameter("num"));
		String i_date = request.getParameter("date");
		String i_t_time = request.getParameter("time");
		
		//get i_d_num
		Map<String, Object> map1 = new HashMap<String, Object>();
		map1.put("i_num", i_num);
		map1.put("i_date", i_date);
		int i_d_num = infoDao.getDateNumber(map1);
		//get i_t_num
		Map<String, Object> map2 = new HashMap<String, Object>();
		map2.put("i_d_num", i_d_num);
		map2.put("i_t_time", i_t_time);
		int i_t_num = infoDao.getTimeNumber(map2);
		//List<Integer> i_t_num = infoDao.getTnums(i_d_num);
		
		List<InfoSeatDataBean> infoSeatDto = infoDao.getSeat(i_t_num);
		//get seat info
		StringBuffer result = new StringBuffer("");
		result.append("{ seats:[");
		for(int i = 0; i < infoSeatDto.size(); i++) {
			result.append("{level : '" + infoSeatDto.get(i).getI_s_level() + "', ");
			result.append("floor : '" + infoSeatDto.get(i).getI_s_floor() + "', ");
			result.append("name : '" + infoSeatDto.get(i).getI_s_name() + "', ");
			result.append("price : " + infoSeatDto.get(i).getI_s_price() + ", ");
			result.append("total : " + infoSeatDto.get(i).getI_s_total() + ", ");
			result.append("count : " + infoSeatDto.get(i).getI_t_count() + "} ");
			if(i != infoSeatDto.size()-1) {
				result.append(",");
			}
		}
		result.append("] }");
		request.setAttribute("result", result.toString());
		return new ModelAndView("info/infoSeatDetail");
	}
}
