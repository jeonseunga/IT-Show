package handler;

import javax.sql.DataSource;

import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.view.JstlView;
import org.springframework.web.servlet.view.UrlBasedViewResolver;

import chat.ChatDBBean;
import chat.ChatDao;
import info.InfoDBBean;
import info.InfoDao;
import member.MemberDBBean;
import member.MemberDao;
import notice.NoticeDBBean;
import notice.NoticeDao;
import order.OrderDBBean;
import order.OrderDao;
import qna.QnADBBean;
import qna.QnADao;
import scrap.ScrapDBBean;
import scrap.ScrapDao;

//자바로 Bean 만들기
@Configuration
public class CreateBean {
/*	@Bean
	public DataSource dataSource() {
		BasicDataSource dataSource = new BasicDataSource();
		dataSource.setDriverClassName("oracle.jdbc.driver.OracleDriver");
		dataSource.setUrl("jdbc:oracle:thin:@localhost:1521:xe");
		dataSource.setUsername("kham");
		dataSource.setPassword("kham");
		dataSource.setInitialSize(10);
		dataSource.setMaxWait(3000);
		return dataSource;
	}
	
	@Bean
	public ChatDao chatDao() {
		ChatDBBean chatDao = new ChatDBBean();
		chatDao.setDataSource(dataSource());
		return chatDao;
	}*/
	
/*	@Bean
	public InfoDao infoDao() {
		InfoDBBean infoDao = new InfoDBBean();
		infoDao.setDataSource(dataSource());
		return infoDao;
	}
	
	@Bean
	public MemberDao memberDao() {
		MemberDBBean memberDao = new MemberDBBean();
		memberDao.setDataSource(dataSource());
		return memberDao;
	}
	
	@Bean
	public NoticeDao noticeDao() {
		NoticeDBBean noticeDao = new NoticeDBBean();
		noticeDao.setDataSource(dataSource());
		return noticeDao;
	}
	
	@Bean
	public OrderDao orderDao() {
		OrderDBBean orderDao = new OrderDBBean();
		orderDao.setDataSource(dataSource());
		return orderDao;
	}
	
	@Bean
	public QnADao qnaDao() {
		QnADBBean qnaDao = new QnADBBean();
		qnaDao.setDataSource(dataSource());
		return qnaDao;
	}
	
	@Bean
	public ScrapDao scrapDao() {
		ScrapDBBean scrapDao = new ScrapDBBean();
		scrapDao.setDataSource(dataSource());
		return scrapDao;
	}*/
	
	@Bean
	public ViewResolver viewResolver() {
		UrlBasedViewResolver viewResolver = new UrlBasedViewResolver();
		viewResolver.setViewClass(JstlView.class);
		viewResolver.setPrefix("/");
		viewResolver.setSuffix(".jsp");
		return viewResolver;
	}
}