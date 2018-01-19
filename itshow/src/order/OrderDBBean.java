package order;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Component;

import db.SqlMapClient;
import info.InfoDataBean;
import info.InfoDateDataBean;
import info.InfoSeatDataBean;
import info.InfoSeatOrderDataBean;
import info.InfoTimeDataBean;
import member.MemberDataBean;

@Component("orderDao")
public class OrderDBBean implements OrderDao {
	private SqlSession session = SqlMapClient.getSession();

	@Override
	public String getImg(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return session.selectOne("Order.getImg",map);
	}

	@Override
	public InfoTimeDataBean getTime(Map<String, Object> map2) {
		return session.selectOne("Order.getTime",map2);
	}

	@Override
	public List<String> getFloor(int i_t_num) {
		return session.selectList("Order.getFloor",i_t_num);
	}

	@Override
	public List<InfoSeatDataBean> getSeat(Map<String, Object> map) {
		return session.selectList("Order.getSeat",map);
	}

	@Override
	public List<InfoSeatDataBean> getSeats(Map<String, Object> map) {
		return session.selectList("Order.getSeats",map);
	}

	@Override
	public List<InfoSeatDataBean> level_SelectSeat(int i_s_num) {
		return session.selectList("Order.level_SelectSeat",i_s_num);
	}

	@Override
	public List<InfoSeatOrderDataBean> oneSeat(int i_s_num) {
		return session.selectList("Order.oneSeat",i_s_num);
	}

	@Override
	public int check(int s_o_num) {
		return session.selectOne("Order.check",s_o_num);
	}

	@Override
	public InfoDataBean gerInfo(int i_num) {
		return session.selectOne("Order.getInfo",i_num);
	}

	@Override
	public InfoDateDataBean getDate(int i_d_num) {
		return session.selectOne("Order.getDate",i_d_num);
	}

	@Override
	public InfoTimeDataBean getTime1(int i_t_num) {
		return session.selectOne("Order.getTime1",i_t_num);
	}

	@Override
	public InfoSeatOrderDataBean getName(int s_o_num) {
		return session.selectOne("Order.getName",s_o_num);
	}

	@Override
	public InfoSeatDataBean getLevel(int i_s_num) {
		return session.selectOne("Order.getLevel",i_s_num);
	}

	@Override
	public MemberDataBean getMember(String id) {
		return session.selectOne("Order.getMember",id);
	}

	@Override
	public void changeCk(int s_o_num) {
		session.update("Order.changeCk",s_o_num);
	}

	@Override
	public void delCount(Map<String, Object> map) {
		session.update("Order.delCount",map);
	}

	@Override
	public void returnCk(int s_o_num) {
		session.update("Order.returnCk",s_o_num);
	}

	@Override
	public int insertOrder(Map<String, Object> map) {
		return session.insert("Order.insertOrder",map);
	}

	@Override
	public OrderDataBean order(String s_o_numlist) {
		return session.selectOne("Order.order",s_o_numlist);
	}

	@Override
	public int insertTicket(Map<String, Object> map2) {
		return session.insert("Order.insertTicket",map2);
	}

	@Override
	public void rePoint(Map<String, Object> map3) {
		session.update("Order.rePoint",map3);
	}

	@Override
	public int getDateNumber(Map<String, Object> map) {
		return session.selectOne("Order.getDateNumber", map);
	}
	
	@Override
	public int insert(Map<String, Object> map) {
		return session.insert("Order.insertSeat",map);
	}	
}