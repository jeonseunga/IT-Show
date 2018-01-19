package info;

import java.sql.Timestamp;

public class InfoReplyDataBean {
	private int i_re_num;
	private String i_re_content;
	private Timestamp i_re_date;
	private double i_re_score;
	private int i_re_category;
	private int i_num;
	private String m_id;
	public int getI_re_num() {
		return i_re_num;
	}
	public void setI_re_num(int i_re_num) {
		this.i_re_num = i_re_num;
	}
	public String getI_re_content() {
		return i_re_content;
	}
	public void setI_re_content(String i_re_content) {
		this.i_re_content = i_re_content;
	}
	public Timestamp getI_re_date() {
		return i_re_date;
	}
	public void setI_re_date(Timestamp i_re_date) {
		this.i_re_date = i_re_date;
	}
	public double getI_re_score() {
		return i_re_score;
	}
	public void setI_re_score(double i_re_score) {
		this.i_re_score = i_re_score;
	}
	public int getI_re_category() {
		return i_re_category;
	}
	public void setI_re_category(int i_re_category) {
		this.i_re_category = i_re_category;
	}
	public int getI_num() {
		return i_num;
	}
	public void setI_num(int i_num) {
		this.i_num = i_num;
	}
	public String getM_id() {
		return m_id;
	}
	public void setM_id(String m_id) {
		this.m_id = m_id;
	}
}