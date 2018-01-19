package chat.handler;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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

@Controller
public class ChatListHandler implements CommandHandler {
	@Resource
	private ChatDao chatDao;
	
	@RequestMapping("/chatList")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		String m_id = "";
		String session = "";
		if(request.getSession().getAttribute("memId") != null) {
			m_id = (String) request.getSession().getAttribute("memId");
			session = m_id;
		}
		
		if(request.getSession().getAttribute("comId") != null) {
			m_id = (String) request.getSession().getAttribute("comId");
			session = m_id;
		}
		
		if(request.getSession().getAttribute("adminId") != null) {
			m_id = (String) request.getSession().getAttribute("adminId");
			session = m_id;
		}
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		
		String type = request.getParameter("type");
		if(type == null || type.equals("")) {
			request.setAttribute("result", "");
		}else if(type.equals("start")) {
			if(request.getSession().getAttribute("memId") != null) {
				m_id = (String) request.getSession().getAttribute("memId");
				Timestamp date = new Timestamp(System.currentTimeMillis());
				ChatDataBean chatDto = new ChatDataBean();
				chatDto.setCh_content("채팅을 시작합니다.");
				chatDto.setCh_date(date);
				chatDto.setCh_send_to(m_id);
				chatDto.setCh_room(Integer.parseInt(request.getParameter("room")));
				chatDto.setCh_state(0);
				chatDto.setM_id("admin");
				ArrayList<ChatDataBean> chatList = chatDao.startChat(chatDto);
				StringBuffer result = new StringBuffer("");
				if(chatList.size() == 0) {
					request.setAttribute("result", "");
				}else {
					result.append("{msg:[");
					for(int i = 0; i < chatList.size(); i++) {    
						result.append("{id : '" + chatList.get(i).getM_id() + "' ,");
						result.append("session : '" + session + "' ,");
						result.append("content : '" + chatList.get(i).getCh_content() + "' ,");
						result.append("time : '" + sdf.format(chatList.get(i).getCh_date()) + "' }");
						if(i != chatList.size()-1) {
							result.append(",");
						}
					}
					result.append("], last : " + chatList.get(chatList.size()-1).getCh_num() + "}");
					request.setAttribute("result", result.toString());
				}
			}
			
			if(request.getSession().getAttribute("comId") != null) {
				m_id = (String) request.getSession().getAttribute("comId");
				Timestamp date = new Timestamp(System.currentTimeMillis());
				ChatDataBean chatDto = new ChatDataBean();
				chatDto.setCh_content("채팅을 시작합니다.");
				chatDto.setCh_date(date);
				chatDto.setCh_send_to(m_id);
				chatDto.setCh_state(0);
				chatDto.setCh_room(Integer.parseInt(request.getParameter("room")));
				chatDto.setM_id("admin");
				ArrayList<ChatDataBean> chatList = chatDao.startChat(chatDto);
				StringBuffer result = new StringBuffer("");
				if(chatList.size() == 0) {
					request.setAttribute("result", "");
				}else {
					result.append("{msg:[");
					for(int i = 0; i < chatList.size(); i++) {    
						result.append("{id : '" + chatList.get(i).getM_id() + "' ,");
						result.append("session : '" + session + "' ,");
						result.append("content : '" + chatList.get(i).getCh_content() + "' ,");
						result.append("time : '" + sdf.format(chatList.get(i).getCh_date()) + "' }");
						if(i != chatList.size()-1) {
							result.append(",");
						}
					}
					result.append("], last : " + chatList.get(chatList.size()-1).getCh_num() + "}");
					request.setAttribute("result", result.toString());
				}
			}

			if(request.getSession().getAttribute("adminId") != null) {
				m_id = (String) request.getSession().getAttribute("adminId");
				String send = request.getParameter("send");
				int room = Integer.parseInt(request.getParameter("room"));
				Map<String, Object> map = new HashMap<String, Object>();
				map.put("m_id", m_id);
				map.put("ch_send_to", send);
				map.put("ch_room", room);
				ArrayList<ChatDataBean> chatList = chatDao.getChatList(map);
				StringBuffer result = new StringBuffer("");
				if(chatList.size() == 0) {
					request.setAttribute("result", "");
				}else {
					result.append("{msg:[");
					for(int i = 0; i < chatList.size(); i++) {    
						result.append("{id : '" + chatList.get(i).getM_id() + "' ,");
						result.append("session : '" + session + "' ,");
						result.append("content : '" + chatList.get(i).getCh_content() + "' ,");
						result.append("time : '" + sdf.format(chatList.get(i).getCh_date()) + "' ,");
						result.append("room : '" + chatList.get(i).getCh_room() + "' }");
						if(i != chatList.size()-1) {
							result.append(",");
						}
					}
					result.append("], last : " + chatList.get(chatList.size()-1).getCh_num() + "}");
					request.setAttribute("result", result.toString());
				}
			}
		}else {
			StringBuffer result = new StringBuffer("");
			int num = Integer.parseInt(request.getParameter("type"));
			int	room = Integer.parseInt(request.getParameter("room"));
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("ch_num", num);
			map.put("ch_room", room);
			ArrayList<ChatDataBean> chatList = chatDao.getNewChatList(map);
			if(chatList.size() == 0) {
				request.setAttribute("result", "");
			}else {
				result.append("{ msg:[");
				for(int i = 0; i < chatList.size(); i++) {    
					result.append("{id : '" + chatList.get(i).getM_id() + "' ,");
					result.append("session : '" + session + "' ,");
					result.append("content : '" + chatList.get(i).getCh_content() + "' ,");
					result.append("time : '" + sdf.format(chatList.get(i).getCh_date()) + "' }");
					if(i != chatList.size()-1) {
						result.append(",");
					}
				}
				result.append("], last : " + chatList.get(chatList.size()-1).getCh_num() + "}");
				request.setAttribute("result", result.toString());
			}
		}
		return new ModelAndView("chat/chatList");
	}
}
