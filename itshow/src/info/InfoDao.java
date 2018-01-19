package info;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public interface InfoDao {
	/*** info ***/
	public int insertDB(InfoDataBean infoDTO);
	public int getINumber(int i_re_num);
	public int getnum(InfoDataBean infoDTO);
	public List<InfoDataBean> getinfo();
	public InfoDataBean getInfoDetail(int i_num);
	
	public InfoDataBean getModiArticle(int i_num);
	public String checkId(int num);
	public String getWriterid(Map<String, Integer> map);
	public ArrayList<InfoDataBean> getCode1Dto(int code);
	public int updateInfoDB(InfoDataBean infoDto);
	
	public int deleteInfo(int i_num);
	
	/*** 판매현황 ***/
	public int getSalesCount(String m_id);						//등록한 공연 카운트
	public List<InfoDataBean> getInfoSalesList(String m_id);	//등록한 공연 리스트
	
	//스크랩 리스트
	public ArrayList<InfoDataBean> getScrapList(int i_num);
	public int checkScrap(Map<String, Object> map);
	
	//공연 목록 리스트
	public int getCatCount(int category);
	public List<InfoDataBean> getInfoList(Map<String, Object> map);
	public List<InfoDataBean> getInfoListRecent(Map<String, Object> map);
	public List<InfoDataBean> getInfoListCount(Map<String, Object> map);
	public List<InfoDataBean> getInfoListReview(Map<String, Object> map);
	public void updateReadCount(int i_num);
	
	public void updateScore(int i_num);	//평점 계산
	
	/*** content ***/
	public int insertDB(InfoContentDataBean iConDTO);
	public List<Integer> getCnums(int i_num);
	public List<InfoContentDataBean> getInfoContents(int i_num);
	public ArrayList<InfoContentDataBean> getinfocon(int i_num);
	public int deleteContent(int i_num);
	
	/*** date ***/
	public int insertDB(InfoDateDataBean idateDTO);
	public int getDateNum(int i_num);
	public List<Integer> getDnums(int i_num);
	public int getDateNumber(Map<String, Object> map);
	public List<Integer> getDateNumbers(Map<String, Object> map);	//i_d_num 가져오기 i_num과  i_date 으로...
	public List<InfoDateDataBean> getDate(int i_num);
	public List<InfoDateDataBean> getInfoDates(Map<String, Object> map);
	public ArrayList<InfoDateDataBean> getinfodate(int i_num);
	public int updateinfoDateDB(InfoDateDataBean infodateDto);
	public int deleteDate(int i_num);
	
	/*** time ***/
	public int insertDB(InfoTimeDataBean itimeDTO);
	public int getTimeNum(int i_d_num);
	public List<Integer> getTnums(int i_d_num);
	public int getTimeNumber(Map<String, Object> map);	//i_t_num 가져오기 i_d_num 과 i_t_time 으로...
	public InfoTimeDataBean getTime(int i_d_num);
	public List<InfoTimeDataBean> getTimeList(int i_d_num);
	public ArrayList<InfoTimeDataBean> getinfotime(int i_num);
	public ArrayList<InfoTimeDataBean> getis_info_time(int i_d_num);
	public int deleteTime(int i_d_num);
	
	/*** seat ***/
	public int insertDB(InfoSeatDataBean iseatDTO);
	public List<Integer> getSnums(int i_t_num);
	public List<InfoSeatDataBean> getSeatList(int i_t_num);
	public List<InfoSeatDataBean> getInfoSeat(int i_t_num);
	public List<InfoSeatDataBean> getSeat(int i_t_num);
	public ArrayList<InfoSeatDataBean> getinfoseat(int i_num);
	public ArrayList<InfoSeatDataBean> getis_info_seat(int i_t_num);
	public int deleteSeat(int i_t_num);
	
	/*** seat_img ***/
	public int insertDB(InfoSeatImgDataBean iSImgDto);
	public List<Integer> getSInums(int i_num);
	public ArrayList<InfoSeatImgDataBean> getinfosimg(int i_num);	
	public int deleteSeatImg(int i_num);
	
	/*** 리뷰 ***/
	//리뷰작성
	public int insertInfoReply(InfoReplyDataBean infoReplyDto);
	//i_re_num 가져오기
	public int getI_Re_num();
	//리뷰 리스트 불러오기
	public List<InfoReplyDataBean> getInfoReplyList(int i_num);
	//리뷰 삭제
	public int deleteInfoReview(int i_re_num);
	public String getReviewWriter(int i_re_num);
	//public int insert(Map<String, Object> map);
	
	/*새로만든거*/
	public int deleteorderseat(int i_s_num);
	public int gettitlecount(Map<String, Object> map);
	public List<InfoDataBean> getInfoListRecent_find(Map<String, Object> map);
	public List<InfoDataBean> getInfoListCount_find(Map<String, Object> map);
	public List<InfoDataBean> getInfoListReview_find(Map<String, Object> map);
	
	/*새로만든거*/
	public int getre_count(int i_num);
	public int deleteRePly(int i_num);
	public int updateInfoDB1(InfoDataBean infoDto);
}