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
public class QnaModifyFormHandler implements CommandHandler {
	@Resource
	private QnADao qnaDao;
	
	@RequestMapping("qnaModifyForm")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		String pageNum = request.getParameter( "pageNum" );
		int num = Integer.parseInt( request.getParameter( "num" ) );
		
		QnADataBean writer = qnaDao.getArticle(num);
		request.setAttribute("id", writer.getM_id());
				
		request.setAttribute( "pageNum", pageNum );
		request.setAttribute( "num", num );
		return new ModelAndView("qna/qnaModifyForm");
	}

}
