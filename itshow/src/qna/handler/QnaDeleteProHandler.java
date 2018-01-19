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
public class QnaDeleteProHandler implements CommandHandler {
	@Resource
	private QnADao qnaDao;
	
	@RequestMapping("/qnaDeletePro")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		String pageNum = request.getParameter("pageNum");
		int num = Integer.parseInt(request.getParameter("num"));
		
		request.setAttribute("num", num);
		request.setAttribute("pageNum", pageNum);
		int replyresult = qnaDao.deleteArticleReply(num);
		int result = qnaDao.deleteArticle(num);
		request.setAttribute("result", result);
		return new ModelAndView("qna/qnaDeletePro");
	}
}
