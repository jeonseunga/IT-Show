package qna;

import java.util.ArrayList;
import java.util.Map;

public interface QnADao {
	public int getCount();
	public int insertArticle(QnADataBean qnaDto);
	public ArrayList<QnADataBean> getArticles(Map<String, Integer> map);
	public QnADataBean getArticle(int q_num);
	public int updateArticle(QnADataBean qnaDto);
	public int deleteArticle(int q_num);
	public int deleteArticleReply(int q_num);
	
	public int insertReply(QnAReplyDataBean qnaReplyDto);
	public int getQ_Re_num();
	public int updateReply(QnAReplyDataBean qnaReplyDto);
	public int deleteReply(int q_num);
	public ArrayList<QnAReplyDataBean> getReplyList(int q_re_num);
	
	public int getReplyCount(int q_num);
	
	public String getPasswd(String m_id);
	
	//search
	public int getSearchCountId(String keyword);
	public int getSearchCountTitle(String keyword);
	
	public ArrayList<QnADataBean> getSeachIdList(Map<String, Object> map);
	public ArrayList<QnADataBean> getSeachTitleList(Map<String, Object> map);
}
