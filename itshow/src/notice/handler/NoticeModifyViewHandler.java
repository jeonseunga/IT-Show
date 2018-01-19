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
public class NoticeModifyViewHandler implements CommandHandler {
	@Resource
	private NoticeDao noticeDao;
	
	@RequestMapping("/noticeModifyView")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int num = Integer.parseInt(request.getParameter("num"));
		String pageNum = request.getParameter("pageNum");
		// ***나중에 수정 : 로그인한 아이디가 작성자 아이디와 같은 지 확인
		// 0 = 다름
		// 1 = 같음
		int result = 1;
		request.setAttribute("result", result);
		request.setAttribute("pageNum", pageNum);
		
		if( result == 1 ) {
			NoticeDataBean noticeDto = noticeDao.getArticle(num);
			request.setAttribute("noticeDto", noticeDto);
			request.setAttribute("num", num);
		}
		
		return new ModelAndView("notice/noticeModifyView");
	}

}