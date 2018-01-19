package notice;

import java.util.ArrayList;
import java.util.Map;

import qna.QnADataBean;

public interface NoticeDao {
	public int getCount();
	public ArrayList<NoticeDataBean> getArticles(Map<String, Integer> map);
	public int insertArticle(NoticeDataBean noticeDto);
	public NoticeDataBean getArticle(int n_num);
	public int deleteArticle(Map<String, Integer> Map);
	public int updateArticle(NoticeDataBean noticeDto);
	public int getCode(String m_id);
}
