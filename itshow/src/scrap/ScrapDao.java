package scrap;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import info.InfoDataBean;
import notice.NoticeDataBean;

public interface ScrapDao {
	public int getCount(String m_id);
	public ArrayList<ScrapDataBean> getArticles(Map<String, Object> map);
	public String checkId(Map<String, Integer> map);
	public int deleteScrap(int s_num);
	public int insertScrap(ScrapDataBean scrapDto);
	public int delScrap(int i_num);
	public int updateScrap(Map<String, Object> map);
	public int getsccount(int i_num);
	public int checkscrap(Map<String, Object> map);
}
