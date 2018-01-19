package chat;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Component;

import db.SqlMapClient;
import qna.QnADataBean;

@Component("chatDao")
public class ChatDBBean implements ChatDao{
	private SqlSession session = SqlMapClient.getSession();
	
	@Override
	public ArrayList<ChatDataBean> startChat(ChatDataBean chatDto) {
		session.insert("Chat.firstMsg", chatDto);
		List<ChatDataBean> chatList = session.selectList("Chat.startChat", chatDto.getCh_date());
		return (ArrayList<ChatDataBean>) chatList;
	}

	@Override
	public ArrayList<ChatDataBean> getNewChatList(Map<String, Object> map) {
		List<ChatDataBean> chatDto= session.selectList("Chat.getChatList", map);
		return (ArrayList<ChatDataBean>) chatDto;
	}

	@Override
	public int sendMsg(ChatDataBean chatDto) {
		return session.insert("Chat.sendMsg", chatDto);
	}

	@Override
	public int getCount() {
		return session.selectOne("Chat.getCount");
	}
	
	@Override
	public int getNewChatCount() {
		return session.selectOne("Chat.getNewChatCount");
	}
	
	@Override
	public ArrayList<ChatDataBean> getIdList(Map<String, Integer> map) {
		List<ChatDataBean> idList = session.selectList("Chat.chatIdList", map);
		return (ArrayList<ChatDataBean>) idList;
	}

	@Override
	public ArrayList<ChatDataBean> getChatList(Map<String, Object> map) {
		List<ChatDataBean> chatList = session.selectList("Chat.AdminChatList", map);
		return (ArrayList<ChatDataBean>) chatList;
	}

	@Override
	public int getRoomNumber() {
		return session.selectOne("Chat.getRoomNumber");
	}

	@Override
	public int getNextRoomNumber() {
		return session.selectOne("Chat.getNextRoomNumber");
	}

	@Override
	public int updateState(int ch_room) {
		return session.update("Chat.updateState", ch_room);
	}
}