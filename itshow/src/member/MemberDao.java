package member;



import java.util.List;
import java.util.Map;

import info.InfoDataBean;
import order.OrderDataBean;
import order.OrderTicketDataBean;

public interface MemberDao {

	public int insertMember(MemberDataBean memberDto);

	public int check(String m_id); //1

	public int check(String m_id, String m_pw);//1-1

	public int sendEmail(String to, String content);

	public int sendEmailPw(String to, String content);

	public int deleteMember(String m_id);

	public MemberDataBean getMember(String m_id);//1-2

	public int updateMember(MemberDataBean memberDto);

	public List<MemberDataBean> getArticles(Map<String, Integer> map);

	public List<MemberDataBean> getCArticles(Map<String, Integer>map);

	public int getCount();

	public int findId(Map<String, String> map);

	public MemberDataBean getName(String m_name);

	public MemberDataBean getId(Map<String, String> map);

	public int findPw(Map<String, String> map);

	public MemberDataBean getPw(Map<String, String> map);

	public int mailCheck(String m_email);



	public int getCounts(String id);

	public List<InfoDataBean> getinfoM(String id);

	public int getCode(String m_id);

	public List<OrderDataBean> getOrder(Map<String, Object> map);

	public int orderCount(Map<String, Object> map);

	public String getSeat(String num);

	public String getImg(String title);

	public List<OrderDataBean> egetOrder(Map<String, Object> map);

	public int eorderCount(Map<String, Object> map);

	public int getInum(String title);



	public List<OrderDataBean> getOrderList(String daylater);

	public String getEmail(String id);

	public List<OrderTicketDataBean> getSeatOrder(int o_num);

	public int getOrderCount(String daylater);

	public void updateOrder(int o_num);

	public int gettitle_count(String title);
	public List<InfoDataBean> getinfoFind(String title);


	/*** ***/
	/*공연*/
	public int check1(String m_id);
	public int deleteinfore(String m_id);

	/*문의*/	
	public int check2(String m_id);
	public List<Integer> getQnums(String m_id);
	public int deleteQnum(int q_num);
	public int deleteqna(String m_id);

	/*예매*/
	public int check4(String m_id);
	public List<Integer> getdOrder(String m_id);
	public int deleteTicket(int o_num);
	public int deleteOnum(int o_num);
	public int deleteOrder(String m_id);
	
	/*스크랩*/
	public int check5(String m_id);
	public int deleteScrap(String m_id);
	
	/*chat*/
	public List<Integer> getChatRoom(String m_id);
	public void deleteChat(int ch_room);

	/*업체*/
	public int Cominfo(String m_id);
	public List<Integer> getComdin(String m_id);
	//스크랩
	public void deleteScrapNum(int i_num);
	//공연 리뷰
	public void deleteInfoReview(int i_num);
	//공연 상세 정보
	public void deleteInfoContent(int i_num);
	//공연 좌석 이미지
	public void deleteInfoSeatImg(int i_num);
	
	public List<Integer> getDateNumbers(int i_num);
	public List<Integer> getTimeNumbers(int i_d_num);
	public List<Integer> getSeatNumbers(int i_t_num);
	public List<Integer> getSeatOrderNumbers(int i_s_num);
	
	public void deleteSeatOrder(int i_s_num);
	public void deleteSeat(int i_t_num);
	public void deleteTime(int i_d_num);
	public void deleteDate(int i_num);
	
	public int deleteInfo(String m_id);
}
