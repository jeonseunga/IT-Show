package info;

import java.sql.Timestamp;

public class InfoDataBean {
	private int i_num;
	private String i_name;				//공연제목
	private double i_score;
	private String i_period;
	private String i_location;			//공연장 이름
	private String i_location_addr;		//공연장 주소
	private String i_location_zip;		//공연장 우편번호
	private Timestamp i_open_date;		//예매 오픈시간
	private int c_category;				//공연 카테고리
	private String i_img_thumbnail;		//썸네일 경로
	private String i_video_path;		//비디오 경로
	private String m_id;
	private Timestamp i_reg_date;		//작성일
	private int i_readcount;			//조회수
	
	
	private int endshow;
	
	
	public int getI_num() {
		return i_num;
	}
	public void setI_num(int i_num) {
		this.i_num = i_num;
	}
	public String getI_name() {
		return i_name;
	}
	public void setI_name(String i_name) {
		this.i_name = i_name;
	}
	public String getI_period() {
		return i_period;
	}
	public void setI_period(String i_period) {
		this.i_period = i_period;
	}
	public double getI_score() {
		return i_score;
	}
	public void setI_score(double i_score) {
		this.i_score = i_score;
	}
	public String getI_location() {
		return i_location;
	}
	public void setI_location(String i_location) {
		this.i_location = i_location;
	}
	public String getI_location_addr() {
		return i_location_addr;
	}
	public void setI_location_addr(String i_location_addr) {
		this.i_location_addr = i_location_addr;
	}
	public String getI_location_zip() {
		return i_location_zip;
	}
	public void setI_location_zip(String i_location_zip) {
		this.i_location_zip = i_location_zip;
	}
	public Timestamp getI_open_date() {
		return i_open_date;
	}
	public void setI_open_date(Timestamp i_open_date) {
		this.i_open_date = i_open_date;
	}
	public int getC_category() {
		return c_category;
	}
	public void setC_category(int c_category) {
		this.c_category = c_category;
	}
	public String getI_img_thumbnail() {
		return i_img_thumbnail;
	}
	public void setI_img_thumbnail(String i_img_thumbnail) {
		this.i_img_thumbnail = i_img_thumbnail;
	}
	public String getI_video_path() {
		return i_video_path;
	}
	public void setI_video_path(String i_video_path) {
		this.i_video_path = i_video_path;
	}
	public String getM_id() {
		return m_id;
	}
	public void setM_id(String m_id) {
		this.m_id = m_id;
	}
	public Timestamp getI_reg_date() {
		return i_reg_date;
	}
	public void setI_reg_date(Timestamp i_reg_date) {
		this.i_reg_date = i_reg_date;
	}
	public int getI_readcount() {
		return i_readcount;
	}
	public void setI_readcount(int i_readcount) {
		this.i_readcount = i_readcount;
	}
	
	
	public int getEndshow() {
		return endshow;
	}
	public void setEndshow(int endshow) {
		this.endshow = endshow;
	}
}
