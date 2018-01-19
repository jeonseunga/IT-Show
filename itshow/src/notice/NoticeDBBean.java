package notice;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Component;

import db.SqlMapClient;
import qna.QnADataBean;

@Component("noticeDao")
public class NoticeDBBean implements NoticeDao{
	private SqlSession session = SqlMapClient.getSession();
	
	public int getCount() {
		return session.selectOne("Notice.getCount");
	}
	
	public ArrayList<NoticeDataBean> getArticles(Map<String, Integer> map) {
		List<NoticeDataBean> noticeDto = session.selectList("Notice.getArticles", map);
		return (ArrayList<NoticeDataBean>) noticeDto;
	}
	
	public int insertArticle(NoticeDataBean noticeDto) {
		return session.insert("Notice.insertArticle", noticeDto);
	}
	
	public NoticeDataBean getArticle(int n_num) {
		return session.selectOne("Notice.getArticle", n_num);
	}
	
	public int deleteArticle(Map<String, Integer> map) {
		return session.delete( "Notice.deleteArticle", map);
	}
	
	public int updateArticle(NoticeDataBean noticeDto) {
		return session.update( "Notice.updateArticle", noticeDto);
	}
	
	public int getCode(String m_id) {
		return session.update( "Notice.getCode", m_id);
	}
}
