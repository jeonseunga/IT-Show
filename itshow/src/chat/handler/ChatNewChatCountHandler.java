package chat.handler;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import chat.ChatDao;
import handler.CommandHandler;

@Controller
public class ChatNewChatCountHandler implements CommandHandler {
	@Resource
	private ChatDao chatDao;
	
	@RequestMapping("/chatNewChatCount")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int count = chatDao.getNewChatCount();
		String result = "{count : " + count + "}";
		request.setAttribute("result", result);
		return new ModelAndView("member/chatNewChatCount");
	}

}
