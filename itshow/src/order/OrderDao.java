package order;

import java.util.List;
import java.util.Map;

import info.InfoDataBean;
import info.InfoDateDataBean;
import info.InfoSeatDataBean;
import info.InfoSeatOrderDataBean;
import info.InfoTimeDataBean;
import member.MemberDataBean;

public interface OrderDao {
	
	public InfoTimeDataBean getTime(Map<String, Object> map2);
	public String getImg(Map<String, Object> map);
	public List<String> getFloor(int i_t_num);
	public List<InfoSeatDataBean> getSeat(Map<String, Object> map);
	public List<InfoSeatDataBean> getSeats(Map<String, Object> map);
	public List<InfoSeatDataBean> level_SelectSeat(int i_s_num);
	public List<InfoSeatOrderDataBean> oneSeat(int i_s_num);
	public int check(int s_o_num);
	
	public int getDateNumber(Map<String, Object> map);
	
	public InfoDataBean gerInfo(int i_num);
	public InfoDateDataBean getDate(int i_d_num);
	public InfoTimeDataBean getTime1(int i_t_num);
	
	public InfoSeatOrderDataBean getName(int s_o_num);
	public InfoSeatDataBean getLevel(int i_s_num);
	public MemberDataBean getMember(String id);
	public void changeCk(int s_o_num);
	public void delCount(Map<String, Object> map);
	public void returnCk(int s_o_num);
	public int insertOrder(Map<String, Object> map);
	public OrderDataBean order(String s_o_numlist);
	public int insertTicket(Map<String, Object> map2);
	public void rePoint(Map<String, Object> map3);
	
	public int insert(Map<String, Object> map);
}