package qna;

import java.sql.Timestamp;

public class QnAReplyDataBean {
	private int q_re_num;
	private String q_re_content; 
	private Timestamp q_re_date;
	private int q_num;					//문의사항 글의 번호
	private String m_id;
	public int getQ_re_num() {
		return q_re_num;
	}
	public void setQ_re_num(int q_re_num) {
		this.q_re_num = q_re_num;
	}
	public String getQ_re_content() {
		return q_re_content;
	}
	public void setQ_re_content(String q_re_content) {
		this.q_re_content = q_re_content;
	}
	public Timestamp getQ_re_date() {
		return q_re_date;
	}
	public void setQ_re_date(Timestamp q_re_date) {
		this.q_re_date = q_re_date;
	}
	public int getQ_num() {
		return q_num;
	}
	public void setQ_num(int q_num) {
		this.q_num = q_num;
	}
	public String getM_id() {
		return m_id;
	}
	public void setM_id(String m_id) {
		this.m_id = m_id;
	}
}
