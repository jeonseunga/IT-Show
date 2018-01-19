package qna;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Component;

import db.SqlMapClient;

@Component("qnaDao")
public class QnADBBean implements QnADao {
	private SqlSession session = SqlMapClient.getSession();
	@Override
	public int getCount() {
		return session.selectOne("QnA.getCount");
	}

	@Override
	public int insertArticle(QnADataBean qnaDto) {
		return session.insert("QnA.insertArticle", qnaDto);
	}

	@Override
	public ArrayList<QnADataBean> getArticles(Map<String, Integer> map) {
		List<QnADataBean> qnaDto = session.selectList("QnA.getArticles", map);
		return (ArrayList<QnADataBean>) qnaDto;
	}

	@Override
	public QnADataBean getArticle(int q_num) {
		return session.selectOne("QnA.getArticle", q_num);
	}

	@Override
	public int updateArticle(QnADataBean qnaDto) {
		return session.update( "QnA.updateArticle", qnaDto);
	}

	@Override
	public int deleteArticle(int q_num) {
		return session.delete( "QnA.deleteArticle", q_num);
	}
	
	@Override
	public int deleteArticleReply(int q_num) {
		return session.delete("QnA.deleteArticleReply", q_num);
	}

	@Override
	public int insertReply(QnAReplyDataBean qnaReplyDto) {
		return session.insert("QnA.insertReply", qnaReplyDto);
	}

	@Override
	public int getQ_Re_num() {
		return session.selectOne("QnA.getQReNum");
	}
	
	@Override
	public int updateReply(QnAReplyDataBean qnaReplyDto) {
		return session.update("QnA.updateArticle", qnaReplyDto);
	}

	@Override
	public int deleteReply(int q_re_num) {
		return session.delete("QnA.deleteReply", q_re_num);
	}

	@Override
	public ArrayList<QnAReplyDataBean> getReplyList(int q_num) {
		List<QnAReplyDataBean> qnaReplyDto = session.selectList("QnA.getReplies", q_num);
		return (ArrayList<QnAReplyDataBean>) qnaReplyDto;
	}

	@Override
	public int getReplyCount(int q_num) {
		return session.selectOne("QnA.getReplyCount", q_num);
	}

	@Override
	public String getPasswd(String m_id) {
		return session.selectOne("QnA.getPasswd", m_id);
	}

	@Override
	public int getSearchCountId(String keyword) {
		return session.selectOne("QnA.getSearchCountId", keyword);
	}

	@Override
	public int getSearchCountTitle(String keyword) {
		return session.selectOne("QnA.getSearchCountTitle", keyword);
	}

	@Override
	public ArrayList<QnADataBean> getSeachIdList(Map<String, Object> map) {
		List<QnADataBean> qnaDto = session.selectList("QnA.getSearchIdList", map);
		return (ArrayList<QnADataBean>) qnaDto;
	}

	@Override
	public ArrayList<QnADataBean> getSeachTitleList(Map<String, Object> map) {
		List<QnADataBean> qnaDto = session.selectList("QnA.getSearchTitleList", map);
		return (ArrayList<QnADataBean>) qnaDto;
	}
}
