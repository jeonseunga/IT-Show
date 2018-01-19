package info;

public class InfoSeatOrderDataBean {
	private int s_o_num;		//좌석예매여부 번호
	private String s_o_seatnum;	//좌석 번호
	private int s_o_check;		//좌석여부
	private int i_s_num;		//좌석정보 번호 참조
	public int getS_o_num() {
		return s_o_num;
	}
	public void setS_o_num(int s_o_num) {
		this.s_o_num = s_o_num;
	}
	public String getS_o_seatnum() {
		return s_o_seatnum;
	}
	public void setS_o_seatnum(String s_o_seatnum) {
		this.s_o_seatnum = s_o_seatnum;
	}
	public int getS_o_check() {
		return s_o_check;
	}
	public void setS_o_check(int s_o_check) {
		this.s_o_check = s_o_check;
	}
	public int getI_s_num() {
		return i_s_num;
	}
	public void setI_s_num(int i_s_num) {
		this.i_s_num = i_s_num;
	}
	
}
