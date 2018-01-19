package notice.handler;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import member.MemberDao;
import notice.NoticeDao;
import notice.NoticeDataBean;
import qna.QnADao;
import qna.QnADataBean;
@Controller
public class NoticeContentHandler implements CommandHandler {
	@Resource
	private NoticeDao noticeDao;
	
	@RequestMapping("/noticeContent")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int n_num = Integer.parseInt(request.getParameter("num"));
		String pageNum = request.getParameter( "pageNum" );
		
/*		String m_id = (String)request.getSession().getAttribute("comId");
		int m_code = noticeDao.getCode(m_id);
		request.setAttribute("m_code", m_code);*/
		
		NoticeDataBean noticeDto = noticeDao.getArticle(n_num);
		
		request.setAttribute( "pageNum", pageNum );	
		request.setAttribute("noticeDto", noticeDto);
		return new ModelAndView("notice/noticeContent");
	}

}
