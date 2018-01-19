package qna.handler;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import qna.QnADao;
import qna.QnADataBean;

@Controller
public class QnaModifyViewHandler implements CommandHandler {
	@Resource
	private QnADao qnaDao;
	
	@RequestMapping("/qnaModifyView")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int num = Integer.parseInt(request.getParameter("num"));
		String pageNum = request.getParameter("pageNum");

		request.setAttribute("num", num);
		request.setAttribute("pageNum", pageNum);
		
		QnADataBean qnaDto = qnaDao.getArticle(num);
		request.setAttribute("qnaDto", qnaDto);
		
		return new ModelAndView("qna/qnaModifyView");
	}

}
