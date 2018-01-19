package chat.handler;

import java.sql.Timestamp;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import chat.ChatDao;
import chat.ChatDataBean;
import handler.CommandHandler;

@Controller
public class ChatExitHandler implements CommandHandler {
	@Resource
	private ChatDao chatDao;
	
	@RequestMapping("/chatExit")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		String m_id = request.getParameter("id");
		int room = Integer.parseInt(request.getParameter("room"));
		Timestamp date = new Timestamp(System.currentTimeMillis());
		
		ChatDataBean chatDto = new ChatDataBean();
		chatDto.setCh_content("회원님이 채팅방을 나가셨습니다.");
		chatDto.setCh_date(date);
		chatDto.setCh_send_to("admin");
		chatDto.setCh_state(1);
		chatDto.setCh_room(room);
		chatDto.setM_id(m_id);
		
		int result = chatDao.sendMsg(chatDto);
		request.setAttribute("result", result);
		
		int update = chatDao.updateState(room);
		return new ModelAndView("chat/chatExit");
	}

}
