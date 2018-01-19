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
public class ChatSendHandler implements CommandHandler{
	@Resource
	private ChatDao chatDao;
	
	@RequestMapping("/chatSend")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		String m_id = "";
		if(request.getSession().getAttribute("memId") != null) {
			m_id = (String) request.getSession().getAttribute("memId");
		}
		if(request.getSession().getAttribute("comId") != null) {
			m_id = (String) request.getSession().getAttribute("comId");
		}
		if(request.getSession().getAttribute("adminId") != null) {
			m_id = (String) request.getSession().getAttribute("adminId");
		}
		
		Timestamp date = new Timestamp(System.currentTimeMillis());
		String sendTo = request.getParameter("send");
		int room = Integer.parseInt(request.getParameter("room"));
		
		ChatDataBean chatDto = new ChatDataBean();
		if(sendTo.equals("admin")) {
			//sendTo가 관리자일 경우 관리자에게 보내기
			chatDto.setCh_content(request.getParameter("content"));
			chatDto.setCh_date(date);
			chatDto.setCh_send_to("admin");
			chatDto.setCh_room(room);
			chatDto.setCh_state(0);
			chatDto.setM_id(m_id);
		}else {
			//sendTo가 관리자가 아닐 경우 보내는 사람에게 보내기
			chatDto.setCh_content(request.getParameter("content"));
			chatDto.setCh_date(date);
			chatDto.setCh_send_to(sendTo);
			chatDto.setCh_room(room);
			chatDto.setCh_state(0);
			chatDto.setM_id(m_id);
		}
		
		int result = chatDao.sendMsg(chatDto);
	
		request.setAttribute("result", result);
		return new ModelAndView("chat/chatSend");
	}
}