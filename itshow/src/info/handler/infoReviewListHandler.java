package info.handler;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import info.InfoDao;
import info.InfoReplyDataBean;

@Controller
public class infoReviewListHandler implements CommandHandler {
	@Resource
	private InfoDao infoDao;
	
	@RequestMapping("/infoReviewList")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int i_num = Integer.parseInt(request.getParameter("num"));
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		List<InfoReplyDataBean> infoReplyList = infoDao.getInfoReplyList(i_num);
		StringBuffer result = new StringBuffer("");
		if(infoReplyList.size() == 0) {
			request.setAttribute("result", "");
		}else {
			result.append("{review:[");
			for(int i = 0; i < infoReplyList.size(); i++) {    
				result.append("{num : " + infoReplyList.get(i).getI_re_num() + ",");
				result.append("id : '" + infoReplyList.get(i).getM_id() + "',");
				result.append("rate : " + infoReplyList.get(i).getI_re_score() + ",");
				result.append("content : '" + infoReplyList.get(i).getI_re_content() + "',");
				result.append("date : '" + sdf.format(infoReplyList.get(i).getI_re_date()) + "' }");
				if(i != infoReplyList.size()-1) {
					result.append(",");
				}
			}
			result.append("]}");
			request.setAttribute("result", result.toString());
		}
		return new ModelAndView("info/infoReviewList");
	}

}
