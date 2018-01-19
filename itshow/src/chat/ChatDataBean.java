package chat;

import java.sql.Timestamp;

public class ChatDataBean {
	int ch_num;
	String ch_content;
	Timestamp ch_date;
	String ch_send_to;
	int ch_room;
	int ch_state;
	String m_id;
	public int getCh_num() {
		return ch_num;
	}
	public void setCh_num(int ch_num) {
		this.ch_num = ch_num;
	}
	public String getCh_content() {
		return ch_content;
	}
	public void setCh_content(String ch_content) {
		this.ch_content = ch_content;
	}
	public Timestamp getCh_date() {
		return ch_date;
	}
	public void setCh_date(Timestamp ch_date) {
		this.ch_date = ch_date;
	}
	public String getCh_send_to() {
		return ch_send_to;
	}
	public void setCh_send_to(String ch_send_to) {
		this.ch_send_to = ch_send_to;
	}
	public int getCh_room() {
		return ch_room;
	}
	public void setCh_room(int ch_room) {
		this.ch_room = ch_room;
	}
	public int getCh_state() {
		return ch_state;
	}
	public void setCh_state(int ch_state) {
		this.ch_state = ch_state;
	}
	public String getM_id() {
		return m_id;
	}
	public void setM_id(String m_id) {
		this.m_id = m_id;
	}
}
