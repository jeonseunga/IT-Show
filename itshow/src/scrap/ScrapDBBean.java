package scrap;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Component;

import db.SqlMapClient;
import info.InfoDataBean;
import notice.NoticeDataBean;

@Component("scrapDao")
public class ScrapDBBean implements ScrapDao{
	private SqlSession session = SqlMapClient.getSession();
	
	public int getCount(String m_id) {
		return session.selectOne("Scrap.getCount", m_id);
	}
	
	public ArrayList<ScrapDataBean> getArticles(Map<String, Object> map) {
		List<ScrapDataBean> scrapDto = session.selectList("Scrap.getArticles", map);
		return (ArrayList<ScrapDataBean>) scrapDto;
	}
	
	public String checkId(Map<String, Integer> map) {
		return session.selectOne("Scrap.checkId", map);
	}
	
	public int deleteScrap(int s_num) {
		return session.delete( "Scrap.deleteScrap", s_num);
	}
	
	public int insertScrap(ScrapDataBean scrapDto) {
		return session.insert("Scrap.insertScrap", scrapDto);
	}
	
	public int delScrap(int i_num) {
		return session.delete("Scrap.delScrap", i_num);
	}
	
	public int updateScrap(Map<String, Object> map) {
		System.out.println(map.get("i_num")+"dd");
		return session.update("Scrap.updateScrap", map);
	}
	
	public int getsccount(int i_num) {
		return session.selectOne("Scrap.getsccount", i_num);
	}
	
	public int checkscrap(Map<String, Object> map) {
		return session.selectOne("Scrap.checkscrap", map);
	}
}
