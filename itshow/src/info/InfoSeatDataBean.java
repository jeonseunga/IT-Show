package info;

public class InfoSeatDataBean {
	private int i_s_num;		//좌석정보 번호
	private int i_s_floor;		//층수
	private String i_s_level;	//좌석 등급
	private String i_s_name;	//좌석이름
	private int i_s_price;		//좌석 가격
	private int i_s_start;		//좌석시작번호
	private int i_s_end;		//좌석 끝 번호
	private int i_t_num;		//공연시간 번호 참조
	private int i_t_count;		//좌석 남은 갯수
	
	private int i_s_total;
	
	public int getI_s_num() {
		return i_s_num;
	}
	public void setI_s_num(int i_s_num) {
		this.i_s_num = i_s_num;
	}
	public int getI_s_floor() {
		return i_s_floor;
	}
	public void setI_s_floor(int i_s_floor) {
		this.i_s_floor = i_s_floor;
	}
	public String getI_s_level() {
		return i_s_level;
	}
	public void setI_s_level(String i_s_level) {
		this.i_s_level = i_s_level;
	}
	public String getI_s_name() {
		return i_s_name;
	}
	public void setI_s_name(String i_s_name) {
		this.i_s_name = i_s_name;
	}
	public int getI_s_price() {
		return i_s_price;
	}
	public void setI_s_price(int i_s_price) {
		this.i_s_price = i_s_price;
	}
	public int getI_s_start() {
		return i_s_start;
	}
	public void setI_s_start(int i_s_start) {
		this.i_s_start = i_s_start;
	}
	public int getI_s_end() {
		return i_s_end;
	}
	public void setI_s_end(int i_s_end) {
		this.i_s_end = i_s_end;
	}
	public int getI_t_num() {
		return i_t_num;
	}
	public void setI_t_num(int i_t_num) {
		this.i_t_num = i_t_num;
	}
	public int getI_t_count() {
		return i_t_count;
	}
	public void setI_t_count(int i_t_count) {
		this.i_t_count = i_t_count;
	}
	
	public int getI_s_total() {
		return i_s_total;
	}
	public void setI_s_total(int i_s_total) {
		this.i_s_total = i_s_total;
	}
}