package notice.handler;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import member.MemberDao;
import notice.NoticeDao;
import qna.QnADao;
@Controller
public class NoticeDeleteProHandler implements CommandHandler {
	@Resource
	private NoticeDao noticeDao;
	
	@Resource
	private MemberDao memberDao;
	
	@RequestMapping("/noticeDeletePro")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		int num = Integer.parseInt(request.getParameter("num"));
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("n_num", num);
		String a_id = (String)request.getSession().getAttribute("adminId");
		int result = 0;
		int code = memberDao.getCode(a_id);
		System.out.println(code);
		if(code==1) {
			result = noticeDao.deleteArticle(map);
		}
		
		request.setAttribute("num", num);
		request.setAttribute("result", result);
		return new ModelAndView("notice/noticeDeletePro");
	}
}
