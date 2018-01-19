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
public class QnaContentFormHandler implements CommandHandler {
	@Resource
	private QnADao qnaDao;
	
	@RequestMapping("/qnaContentForm")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int num = Integer.parseInt(request.getParameter("num"));
		String pageNum = request.getParameter("pageNum");
		int number = Integer.parseInt(request.getParameter("number"));
		
		if(request.getSession().getAttribute("adminId") != null) {		
			request.setAttribute("result", 1);
		}else {
			QnADataBean writer = qnaDao.getArticle(num);
			request.setAttribute("id", writer.getM_id());
			request.setAttribute("pw", qnaDao.getPasswd(writer.getM_id()));
	
			request.setAttribute("result", 0);
		}
		request.setAttribute("num", num);
		request.setAttribute("pageNum", pageNum);
		request.setAttribute("number", number);
		return new ModelAndView("qna/qnaContentForm");
	}

}
