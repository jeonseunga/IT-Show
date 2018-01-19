package info.handler;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

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
public class InfoRankingHandler implements CommandHandler {
	@Resource
	private InfoDao infoDao;
	
	@RequestMapping("/infoRanking")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		ArrayList<InfoDataBean> code_1_infoDto = infoDao.getCode1Dto(1);
		ArrayList<InfoDataBean> code_2_infoDto = infoDao.getCode1Dto(3);
		ArrayList<InfoDataBean> code_3_infoDto = infoDao.getCode1Dto(2);
		StringBuffer result = new StringBuffer("");
		String str = "";
		
		str += "{Data : [";
		str += "{ code_1_infoDto : [";
		if(code_1_infoDto.size() != 0) {
			for(int i=0; i<code_1_infoDto.size();i++) {
				str += "{ i_num : " + code_1_infoDto.get(i).getI_num() + ",";
				str += "i_name : '" + code_1_infoDto.get(i).getI_name() + "'}";
				if(i != code_1_infoDto.size()-1) {
					str += ",";
				}
			}
		}
		str += "]},";
		str += "{ code_2_infoDto : [";
		if(code_2_infoDto.size() != 0) {
			for(int i=0; i<code_2_infoDto.size();i++) {
			str += "{ i_num : " + code_2_infoDto.get(i).getI_num() + ",";
			str += "i_name : '" + code_2_infoDto.get(i).getI_name() + "'}";
				if(i != code_2_infoDto.size()-1) {
					str += ",";
				}
			}
		}
		str += "]},";
		str += "{ code_3_infoDto : [";
		if(code_3_infoDto.size() != 0) {
			for(int i=0;i<code_3_infoDto.size();i++) {
				str += "{ i_num : " + code_3_infoDto.get(i).getI_num() + ",";
				str += "i_name : '" + code_3_infoDto.get(i).getI_name() + "'}";
					if(i != code_3_infoDto.size()-1) {
						str += ",";
					}
				}
		}
		str += "]},";
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String d = sdf.format(new Date());
		str += "{ time : '" + d + "'}";
		str += "]}";
		result.append(str);
		request.setAttribute("result", result.toString());
		
		/*if(code_1_infoDto.size() == 0) {
			request.setAttribute("result", "");
		}else {
			str += "{Data : [";
			str += "{ code_1_infoDto : [";
			for(int i=0; i<code_1_infoDto.size();i++) {
			str += "{ i_num : " + code_1_infoDto.get(i).getI_num() + ",";
			str += "i_name : '" + code_1_infoDto.get(i).getI_name() + "'}";
				if(i != code_1_infoDto.size()-1) {
					str += ",";
				}
			}
			str += "]},";
			str += "{ code_2_infoDto : [";
			for(int i=0; i<code_2_infoDto.size();i++) {
			str += "{ i_num : " + code_2_infoDto.get(i).getI_num() + ",";
			str += "i_name : '" + code_2_infoDto.get(i).getI_name() + "'}";
				if(i != code_2_infoDto.size()-1) {
					str += ",";
				}
			}
			str += "]},";
			str += "{ code_3_infoDto : [";
			for(int i=0;i<code_3_infoDto.size();i++) {
			str += "{ i_num : " + code_3_infoDto.get(i).getI_num() + ",";
			str += "i_name : '" + code_3_infoDto.get(i).getI_name() + "'}";
				if(i != code_3_infoDto.size()-1) {
					str += ",";
				}
			}
			str += "]},";
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			String d = sdf.format(new Date());
			str += "{ time : '" + d + "'}";
			str += "]}";
			result.append(str);
			request.setAttribute("result", result.toString());
		}*/
		
		return new ModelAndView("info/infoRanking");
	}
}