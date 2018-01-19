package notice.handler;

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
public class NoticeModifyProHandler implements CommandHandler {
	@Resource
	private NoticeDao noticeDao; 
	
	@RequestMapping("/noticeModifyPro")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		request.setCharacterEncoding( "utf-8" );
		
		NoticeDataBean noticeDto = new NoticeDataBean();
		noticeDto.setN_num(Integer.parseInt(request.getParameter("num")));
		noticeDto.setN_title(request.getParameter("title"));
		noticeDto.setN_content(request.getParameter("content"));
		System.out.println(request.getParameter("num")+"넘버");
		System.out.println(request.getParameter("title")+"제목");
		System.out.println(request.getParameter("content")+"내용");
		int result = noticeDao.updateArticle(noticeDto);
		String pageNum = request.getParameter( "pageNum" );
		
		request.setAttribute( "pageNum", pageNum );
		request.setAttribute( "result", result );
		return new ModelAndView("notice/noticeModifyPro");
	}

}
