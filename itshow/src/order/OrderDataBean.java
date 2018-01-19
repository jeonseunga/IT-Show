package order;

import java.sql.Timestamp;

public class OrderDataBean {
	private int o_num;			//예매번호(시퀀스)
	private String o_pay;			//결제수단
	private String o_name;			//공연이름*
	private String o_date;			//공연날짜*
	private String o_starttime;		//시작시간*
	private int o_notification;		//메일알림
	private int o_tickets;			//매수
	private String o_ticket_list;	//좌석예매여부 번호리스트
	private String o_pirce;			//총가격
	private String m_id;			//멤버아이디 참조
	public int getO_num() {
		return o_num;
	}
	public void setO_num(int o_num) {
		this.o_num = o_num;
	}
	public String getO_pay() {
		return o_pay;
	}
	public void setO_pay(String o_pay) {
		this.o_pay = o_pay;
	}
	public String getO_name() {
		return o_name;
	}
	public void setO_name(String o_name) {
		this.o_name = o_name;
	}
	public String getO_date() {
		return o_date;
	}
	public void setO_date(String o_date) {
		this.o_date = o_date;
	}
	public String getO_starttime() {
		return o_starttime;
	}
	public void setO_starttime(String o_starttime) {
		this.o_starttime = o_starttime;
	}
	public int getO_notification() {
		return o_notification;
	}
	public void setO_notification(int o_notification) {
		this.o_notification = o_notification;
	}
	public int getO_tickets() {
		return o_tickets;
	}
	public void setO_tickets(int o_tickets) {
		this.o_tickets = o_tickets;
	}
	public String getO_ticket_list() {
		return o_ticket_list;
	}
	public void setO_ticket_list(String o_ticket_list) {
		this.o_ticket_list = o_ticket_list;
	}
	public String getO_pirce() {
		return o_pirce;
	}
	public void setO_price(String o_pirce) {
		this.o_pirce = o_pirce;
	}
	public String getM_id() {
		return m_id;
	}
	public void setM_id(String m_id) {
		this.m_id = m_id;
	}
	
}