package handler;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import info.InfoDao;
import info.InfoDataBean;
import info.InfoDateDataBean;

@Controller
public class CalendarListHandler implements CommandHandler {
	@Resource
	private InfoDao infoDao;

	@RequestMapping("/calendarList")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		//infoDataBean에서 제목, 카테고리
		//infoDateDataBean 에서 날짜가져오기

		List<InfoDataBean> infos = infoDao.getinfo();
	
		if(infos.size() > 0){
			StringBuffer result = new StringBuffer("");
			result.append("{data:[");
			
			for(int i = 0; i<infos.size(); i++){

				int i_num = infos.get(i).getI_num();
				
				String i_name = infos.get(i).getI_name();
				String calendar = null;
				String color = null;

				switch( infos.get(i).getC_category() ){
					case 1 : calendar = "콘서트"; break;
					case 2 : calendar = "뮤지컬"; break;
					case 3 : calendar = "연극"; break;
				}

				switch( infos.get(i).getC_category() ){
					case 1 : color = "orange"; break;
					case 2 : color = "blue"; break;
					case 3 : color = "green"; break;
				}
				
				List<InfoDateDataBean> date = infoDao.getDate(i_num);
				for(int j = 0; j<date.size(); j++){
					result.append("{eventName : '"+ i_name + "',");
					result.append("calendar : '"+ calendar + "',");
					result.append("inum : '"+ i_num + "',");
					result.append("color : '"+ color + "',");
					result.append("date : '"+date.get(j).getI_date() + "'}");
					if(j != date.size()-1) {
						result.append(",");
					}
				}
				if(i != infos.size()-1) {
					result.append(",");
				}
				
			}
			result.append("]}");
			request.setAttribute("result", result.toString());
		}else{
			request.setAttribute("result", "");
		}

		return new ModelAndView("main/calendarList");
	}

}
