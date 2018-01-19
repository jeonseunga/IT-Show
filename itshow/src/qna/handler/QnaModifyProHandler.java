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
public class QnaModifyProHandler implements CommandHandler {
	@Resource
	private QnADao qnaDao; 
	
	@RequestMapping("/qnaModifyPro")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		request.setCharacterEncoding( "utf-8" );
		
		String pageNum = request.getParameter("pageNum");
		request.setAttribute("pageNum", pageNum);
		
		QnADataBean qnaDto = new QnADataBean();
		qnaDto.setQ_num(Integer.parseInt(request.getParameter("num")));
		qnaDto.setQ_title(request.getParameter("title"));
		qnaDto.setQ_content(request.getParameter("content"));
		
		int result = qnaDao.updateArticle(qnaDto);
		
		request.setAttribute( "result", result );
		return new ModelAndView("qna/qnaModifyPro");
	}

}
