package info;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Component;

import db.SqlMapClient;

@Component("infoDao")
public class InfoDBBean implements InfoDao {
	private SqlSession session = SqlMapClient.getSession();
	
	/*** info ***/
	@Override
	public int insertDB(InfoDataBean infoDTO) {
		return session.insert("Info.getinsertDB", infoDTO);
	}
	@Override
	public int getnum(InfoDataBean infoDTO) {
		return session.selectOne("Info.getnum", infoDTO);
	}
	@Override
	public List<InfoDataBean> getinfo() {
		return session.selectList("Info.getinfo");
	}
	@Override
	public InfoDataBean getInfoDetail(int i_num) {
		return session.selectOne("Info.getInfoDetail", i_num);
	}
	@Override
	public InfoDataBean getModiArticle(int i_num) {
		return session.selectOne("Info.getModiArticle", i_num);
	}
	@Override
	public String checkId(int i_num) {
		return session.selectOne("Info.checkId", i_num);
	}
	@Override
	public String getWriterid(Map<String, Integer> map) {
		return session.selectOne("Info.getWriteid", map);
	}
	@Override
	public ArrayList<InfoDataBean> getCode1Dto(int code) {
		List<InfoDataBean> infoDto = session.selectList("Info.getCode1Dto", code);
		return (ArrayList<InfoDataBean>) infoDto;
	}
	@Override
	public int updateInfoDB(InfoDataBean infoDto) {
		return session.update("Info.updateInfoDB", infoDto);
	}
	@Override
	public int deleteInfo(int i_num) {
		return session.delete("Info.deleteInfo", i_num);
	}
	@Override
	public int getSalesCount(String m_id) {
		return session.selectOne("Info.getSalesCount", m_id);
	}
	@Override
	public List<InfoDataBean> getInfoSalesList(String m_id) {
		return session.selectList("Info.getSalesList", m_id);
	}
	@Override
	public ArrayList<InfoDataBean> getScrapList(int i_num) {
		List<InfoDataBean> infoDto = session.selectList("Info.getScrapList", i_num);
		return (ArrayList<InfoDataBean>) infoDto;
	}
	@Override
	public int checkScrap(Map<String, Object> map) {
		return session.selectOne("Info.checkScrap", map);
	}
	@Override
	public int getCatCount(int category) {
		return session.selectOne("Info.getCatCount", category);
	}
	@Override
	public List<InfoDataBean> getInfoList(Map<String, Object> map) {
		return session.selectList("Info.getInfoList", map);
	}
	@Override
	public List<InfoDataBean> getInfoListRecent(Map<String, Object> map) {
		return session.selectList("Info.getInfoListRecent", map);
	}
	@Override
	public List<InfoDataBean> getInfoListCount(Map<String, Object> map) {
		return session.selectList("Info.getInfoListCount", map);
	}
	@Override
	public List<InfoDataBean> getInfoListReview(Map<String, Object> map) {
		return session.selectList("Info.getInfoListReview", map);
	}
	@Override
	public void updateReadCount(int i_num) {
		session.update("Info.updateReadCount", i_num);
	}
	@Override
	public void updateScore(int i_num) {
		session.update("Info.updateScore", i_num);
	}

	/*** content ***/
	@Override
	public int insertDB(InfoContentDataBean iConDTO) {
		return session.insert("Info.getinsertconDB", iConDTO);
	}
	@Override
	public List<Integer> getCnums(int i_num) {
		return session.selectList("Info.getCnums", i_num);
	}
	@Override
	public List<InfoContentDataBean> getInfoContents(int i_num) {
		return session.selectList("Info.getInfoContents", i_num);
	}
	@Override
	public ArrayList<InfoContentDataBean> getinfocon(int i_num) {
		List<InfoContentDataBean> infoconDto = session.selectList("Info.getinfocon", i_num);
		return (ArrayList<InfoContentDataBean>) infoconDto;
	}
	@Override
	public int deleteContent(int i_num) {
		return session.delete("Info.deleteContent", i_num);
	}

	/*** date ***/
	@Override
	public int insertDB(InfoDateDataBean idateDTO) {
		return session.insert("Info.getinsertDateDB", idateDTO);
	}
	@Override
	public int getDateNum(int i_num) {	
		return session.selectOne("Info.getDateNum", i_num);
	}
	@Override
	public List<Integer> getDnums(int i_num) {	
		return session.selectList("Info.getDnums", i_num);
	}
	@Override
	public int getDateNumber(Map<String, Object> map) {
		return session.selectOne("Info.getDateNumber", map);
	}
	@Override
	public List<Integer> getDateNumbers(Map<String, Object> map) {
		return session.selectList("Info.getDateNumbers", map);
	}
	@Override
	public List<InfoDateDataBean> getDate(int i_num) {
		return session.selectList("Info.getDate",i_num);
	}
	@Override
	public List<InfoDateDataBean> getInfoDates(Map<String, Object> map) {
		return session.selectList("Info.getInfoDates", map);
	}
	@Override
	public ArrayList<InfoDateDataBean> getinfodate(int i_num) {
		List<InfoDateDataBean> infodateDto = session.selectList("Info.getinfodate",i_num);
		return (ArrayList<InfoDateDataBean>) infodateDto;
	}
	@Override
	public int updateinfoDateDB(InfoDateDataBean infodateDto) {
		return session.update("Info.updateinfoDateDB", infodateDto);
	}
	@Override
	public int deleteDate(int i_num) {
		return session.delete("Info.deleteDate", i_num);
	}

	/*** time ***/
	@Override
	public int insertDB(InfoTimeDataBean itimeDTO) {
		return session.insert("Info.getinsertTimeDB", itimeDTO);
	}
	@Override
	public int getTimeNum(int i_d_num) {
		return session.selectOne("Info.getTimeNum", i_d_num);
	}
	@Override
	public List<Integer> getTnums(int i_d_num) {
		return session.selectList("Info.getTnums", i_d_num);
	}
	@Override
	public int getTimeNumber(Map<String, Object> map) {
		return session.selectOne("Info.getTimeNumber", map);
	}
	@Override
	public InfoTimeDataBean getTime(int i_d_num) {	
		return session.selectOne("Info.getTime", i_d_num);
	}
	@Override
	public List<InfoTimeDataBean> getTimeList(int i_d_num) {
		return session.selectList("Info.getTimeList", i_d_num);
	}
	@Override
	public ArrayList<InfoTimeDataBean> getinfotime(int i_num) {
		List<InfoTimeDataBean> infotimeDto = session.selectList("Info,getinfotime", i_num);
		return (ArrayList<InfoTimeDataBean>) infotimeDto;
	}
	@Override
	public ArrayList<InfoTimeDataBean> getis_info_time(int i_d_num) {
		List<InfoTimeDataBean> is_info_time = session.selectList("getis_info_time", i_d_num);
		return (ArrayList<InfoTimeDataBean>) is_info_time;
	}
	@Override
	public int deleteTime(int i_d_num) {
		return session.delete("Info.deleteTime", i_d_num);
	}

	/*** seat ***/
	@Override
	public int insertDB(InfoSeatDataBean iseatDTO) {
		return session.insert("Info.getinsertSeatDB", iseatDTO);
	}
	@Override
	public List<Integer> getSnums(int i_t_num) {
		return session.selectList("Info.getSnums", i_t_num);
	}
	@Override
	public List<InfoSeatDataBean> getSeatList(int i_t_num) {
		return session.selectList("Info.getSeatList", i_t_num);
	}
	@Override
	public List<InfoSeatDataBean> getInfoSeat(int i_t_num) {
		List<InfoSeatDataBean> infoseatDto = session.selectList("Info.getInfoSeat", i_t_num);
		return (ArrayList<InfoSeatDataBean>) infoseatDto;
	}
	@Override
	public List<InfoSeatDataBean> getSeat(int i_t_num) {
		return session.selectList("Info.getSeat", i_t_num);
	}
	@Override
	public ArrayList<InfoSeatDataBean> getinfoseat(int i_num) {
		List<InfoSeatDataBean> infoseatDto = session.selectList("Info.getinfoseat", i_num);
		return (ArrayList<InfoSeatDataBean>) infoseatDto;
	}
	@Override
	public ArrayList<InfoSeatDataBean> getis_info_seat(int i_t_num) {
		List<InfoSeatDataBean> is_info_seat = session.selectList("getis_info_seat", i_t_num);
		return (ArrayList<InfoSeatDataBean>) is_info_seat;
	}
	@Override
	public int deleteSeat(int i_t_num) {
		return session.delete("Info.deleteSeat", i_t_num);
	}

	/*** seat_img ***/
	@Override
	public int insertDB(InfoSeatImgDataBean iSImgDto) {
		return session.insert("Info.getinsertSIDB", iSImgDto);
	}
	@Override
	public List<Integer> getSInums(int i_num) {	
		return session.selectList("Info.getSInums", i_num);
	}
	@Override
	public ArrayList<InfoSeatImgDataBean> getinfosimg(int i_num) {
		List<InfoSeatImgDataBean> infosimgDto = session.selectList("Info.getinfosimg", i_num);
		return (ArrayList<InfoSeatImgDataBean>) infosimgDto;
	}
	@Override
	public int deleteSeatImg(int i_num) {	
		return session.delete("Info.deleteSeatImg", i_num);
	}

	/*** review ***/
	@Override
	public int insertInfoReply(InfoReplyDataBean infoReplyDto) {
		return session.insert("Info.insertInfoReply", infoReplyDto);
	}
	@Override
	public int getINumber(int i_re_num) {
		System.out.println(i_re_num);
		int i_num = session.selectOne("Info.getINumber", i_re_num);
		System.out.println(i_num);
		return i_num;
	}
	@Override
	public int getI_Re_num() {
		return session.selectOne("Info.getIReNum");
	}
	@Override
	public List<InfoReplyDataBean> getInfoReplyList(int i_num) {
		return session.selectList("Info.getInfoReplyList", i_num);
	}
	@Override
	public int deleteInfoReview(int i_re_num) {
		return session.delete("Info.deleteInfoReview", i_re_num);
	}
	@Override
	public String getReviewWriter(int i_re_num) {
		return session.selectOne("Info.getReviewWriter", i_re_num);
	}
	
	/*새로만든거*/
	public int deleteorderseat(int i_s_num) {
		return session.delete("Info.deleteorderseat", i_s_num);
	}
	
	public int gettitlecount(Map<String, Object> map) {
		return session.selectOne("Info.gettitlecount", map);
	}
	
	public List<InfoDataBean> getInfoListRecent_find(Map<String, Object> map) {
		return session.selectList("Info.getInfoListRecent_find", map);
	}
	
	public List<InfoDataBean> getInfoListCount_find(Map<String, Object> map) {
		return session.selectList("Info.getInfoListCount_find", map);
	}
	
	public List<InfoDataBean> getInfoListReview_find(Map<String, Object> map) {
		return session.selectList("Info.getInfoListReview_find", map);
	}
	
	/*새로만든거*/
	public int getre_count(int i_num) {
		return session.selectOne("Info.getre_count", i_num);
	}
	
	public int deleteRePly(int i_num) {
		return session.delete("Info.deleteRePly", i_num);
	}
	
	public int updateInfoDB1(InfoDataBean infoDto) {
		return session.update("Info.updateInfoDB1", infoDto);
	}
}