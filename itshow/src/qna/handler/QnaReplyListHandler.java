package qna.handler;

import java.text.SimpleDateFormat;
import java.util.ArrayList;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import chat.ChatDataBean;
import handler.CommandHandler;
import qna.QnADao;
import qna.QnAReplyDataBean;

@Controller
public class QnaReplyListHandler implements CommandHandler {
	@Resource
	private QnADao qnaDao;
	
	@RequestMapping("/qnaReplyList")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int q_num = Integer.parseInt(request.getParameter("num"));
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		ArrayList<QnAReplyDataBean> replyList = qnaDao.getReplyList(q_num);
		StringBuffer result = new StringBuffer("");
		if(replyList.size() == 0) {
			request.setAttribute("result", "");
		}else {
			result.append("{reply:[");
			for(int i = 0; i < replyList.size(); i++) {    
				result.append("{num : " + replyList.get(i).getQ_re_num() + ",");
				result.append("id : '" + replyList.get(i).getM_id() + "',");
				result.append("content : '" + replyList.get(i).getQ_re_content() + "',");
				result.append("date : '" + sdf.format(replyList.get(i).getQ_re_date()) + "' }");
				if(i != replyList.size()-1) {
					result.append(",");
				}
			}
			result.append("]}");
			request.setAttribute("result", result.toString());
		}
		return new ModelAndView("qna/qnaReplyList");
	}

}
