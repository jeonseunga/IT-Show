package qna.handler;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import qna.QnADao;

@Controller
public class QnaReplyDeleteHandler implements CommandHandler {
	@Resource
	private QnADao qnaDao;
	
	@RequestMapping("/qnaReplyDelete")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int q_re_num = Integer.parseInt(request.getParameter("num"));
		int result = 0;
		if((String) request.getSession().getAttribute("adminId") != null) {
			result = qnaDao.deleteReply(q_re_num);
		}
		request.setAttribute("result", result);
		return new ModelAndView("qna/qnaReplyDelete");
	}

}
