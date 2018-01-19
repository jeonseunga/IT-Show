package chat;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Map;

public interface ChatDao {

	public ArrayList<ChatDataBean> startChat(ChatDataBean chatDto);	
	public ArrayList<ChatDataBean> getChatList(Map<String, Object> map);
	public ArrayList<ChatDataBean> getNewChatList(Map<String, Object> map);
	
	public int getRoomNumber();
	public int getNextRoomNumber();
	
	public int sendMsg(ChatDataBean chatDto);
	
	public int getCount();
	
	//관리자가 확인해야할 채팅 - 아직 회원이 채팅에서 나가지 않음
	public int getNewChatCount();
	
	public ArrayList<ChatDataBean> getIdList(Map<String, Integer> map);
	
	//채팅종료시 state 1로 업데이트
	public int updateState(int ch_room);
}
