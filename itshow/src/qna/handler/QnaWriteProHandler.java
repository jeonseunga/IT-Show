package qna.handler;

import java.sql.Timestamp;

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
public class QnaWriteProHandler implements CommandHandler {
	@Resource
	private QnADao qnaDao;
	
	@RequestMapping("/qnaWritePro")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		request.setCharacterEncoding( "utf-8" );
		
		String pageNum = request.getParameter("pageNum");
		request.setAttribute("pageNum", pageNum);
		
		QnADataBean qnaDto = new QnADataBean();
		qnaDto.setQ_title(request.getParameter("title"));
		qnaDto.setQ_content(request.getParameter("content"));
		qnaDto.setQ_date(new Timestamp(System.currentTimeMillis()));
		
		String m_id = "";
		if(request.getSession().getAttribute("memId") != null) {
			m_id = (String) request.getSession().getAttribute("memId");
		}
		if(request.getSession().getAttribute("comId") != null) {
			m_id = (String) request.getSession().getAttribute("comId");
		}
		
		System.out.println(m_id);
		
		qnaDto.setM_id(m_id);
		
		int result = qnaDao.insertArticle(qnaDto);
		
		request.setAttribute("result", result);
		
		return new ModelAndView("qna/qnaWritePro");
	}

}
