package info;

public class InfoSeatImgDataBean {
	private int s_img_num;		//공연좌석 이미지 번호
	private String s_img_hall;
	private String s_img_path;	//공연좌석 이미지 경로
	private int i_num;			//공연정보 글번호 참조
	public int getS_img_num() {
		return s_img_num;
	}
	public void setS_img_num(int s_img_num) {
		this.s_img_num = s_img_num;
	}
	public String getS_img_path() {
		return s_img_path;
	}
	public String getS_img_hall() {
		return s_img_hall;
	}
	public void setS_img_hall(String s_img_hall) {
		this.s_img_hall = s_img_hall;
	}
	public void setS_img_path(String s_img_path) {
		this.s_img_path = s_img_path;
	}
	public int getI_num() {
		return i_num;
	}
	public void setI_num(int i_num) {
		this.i_num = i_num;
	}
	
}
