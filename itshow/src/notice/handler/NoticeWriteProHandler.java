package notice.handler;

import java.sql.Timestamp;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import notice.NoticeDao;
import notice.NoticeDataBean;
import qna.QnADao;
import qna.QnADataBean;
@Controller
public class NoticeWriteProHandler implements CommandHandler {
	@Resource
	private NoticeDao noticeDao;
	
	@RequestMapping("/noticeWritePro")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		request.setCharacterEncoding( "utf-8" );
		
		String pageNum = request.getParameter("pageNum");
		request.setAttribute("pageNum", pageNum);
		
		NoticeDataBean noticeDto = new NoticeDataBean();
		noticeDto.setN_title(request.getParameter("title"));
		noticeDto.setN_content(request.getParameter("content"));
		noticeDto.setN_date(new Timestamp(System.currentTimeMillis()));
		noticeDto.setM_id((String) request.getSession().getAttribute("adminId"));
		
		int result = noticeDao.insertArticle(noticeDto);
		
		request.setAttribute("result", result);
		
		return new ModelAndView("notice/noticeWritePro");
	}

}
