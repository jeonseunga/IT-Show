package chat.handler;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import chat.ChatDao;
import chat.ChatDataBean;
import handler.CommandHandler;
import qna.QnADataBean;

@Controller
public class ChatUserListHandler implements CommandHandler {
	@Resource
	private ChatDao chatDao;
	
	@RequestMapping("/chatUserList")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {		
		return new ModelAndView("chat/chatUserList");
	}
}
