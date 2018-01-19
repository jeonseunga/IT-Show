package member;



import java.util.List;
import java.util.Map;
import java.util.Properties; 

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Component;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;


import db.SqlMapClient;
import info.InfoDataBean;
import order.OrderDataBean;
import order.OrderTicketDataBean;


@Component("memberDao") //componentScan을 쓰는 곳들이 가져다가 쓸수있도록 logonDao를 여기에 넣어준다 
public class MemberDBBean implements MemberDao{
	//여기에 세션을 가져온다. 
	private SqlSession session = SqlMapClient.getSession(); //getsession으로 세션을 받아온다

	public int insertMember(MemberDataBean memberDto) {
		return session.insert("Member.insertMember", memberDto);	
	}

	public int check(String m_id) {
		int count = session.selectOne("Member.check", m_id);
		return count;
	}
	public int getCount() {
		return session.selectOne("Member.getCount");
	}

	public int check(String m_id, String m_pw) {
		int result = 0;

		int count = check(m_id);
		if(count == 0) {
			// 아이디가 없다.
			result = 0;
		} else {
			// 아이디가 있다.
			MemberDataBean memberDto = getMember(m_id);
			if(m_pw.equals(memberDto.getM_pw())) {
				// 비밀번호가 같다.
				result = 1;
			} else {
				// 비밀번호가 다르다.
				result = -1;
			}
		}
		return result;
	}


	public int deleteMember(String m_id) {
		return session.delete("Member.deleteMember", m_id);
	}


	public MemberDataBean getMember(String m_id) {
		return session.selectOne("Member.getMember", m_id);

	}

	public int updateMember(MemberDataBean memberDto) {
		return session.update("Member.updateMember", memberDto);

	}

	public List<MemberDataBean> getArticles(Map<String, Integer> map){
		List<MemberDataBean> articles = session.selectList("Member.getArticles", map);
		return articles;
	}

	public List<MemberDataBean> getCArticles(Map<String, Integer> map){
		List<MemberDataBean> articles = session.selectList("Member.getCArticles", map);
		return articles;
	}

	public int sendEmail(String to, String content){
		int result = 0;
		Properties props = new Properties();
		props.setProperty("mail.transport.protocol", "smtp");
		props.setProperty("mail.host", "smtp.gmail.com");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.socketFactory.fallback", "false");
		props.setProperty("mail.smtp.quitwait", "false");

		Authenticator auth = new Authenticator(){
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("bkkoo1121ko@gmail.com","khamsmtp");//"Gmail占썩몿�뫒占쎌젧", "�뜝�럥�넮�뜝�럥裕욃뜝�럩�쐳�뜝�럥援�"
			}
		};

		try {

			Session sess = Session.getDefaultInstance(props,auth);
			MimeMessage message = new MimeMessage(sess);
			message.setSubject(javax.mail.internet.MimeUtility.encodeText("ITSHOW 인증 메일 입니다.", "UTF-8", "B"));
			message.setRecipient(Message.RecipientType.TO, new InternetAddress(to));
			message.setContent(content, "text/html; charset=utf-8");
			Transport.send(message);
			result = 1;
		}catch(Exception e){
			e.printStackTrace();
		}
		return result;
	}
	
	public int sendEmailPw(String to, String content){
		int result = 0;
		Properties props = new Properties();
		props.setProperty("mail.transport.protocol", "smtp");
		props.setProperty("mail.host", "smtp.gmail.com");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", "465");
		props.put("mail.smtp.socketFactory.port", "465");
		props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.socketFactory.fallback", "false");
		props.setProperty("mail.smtp.quitwait", "false");

		Authenticator auth = new Authenticator(){
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("bkkoo1121ko@gmail.com","khamsmtp");//"Gmail占썩몿�뫒占쎌젧", "�뜝�럥�넮�뜝�럥裕욃뜝�럩�쐳�뜝�럥援�"
			}
		};

		try {

			Session sess = Session.getDefaultInstance(props,auth);
			MimeMessage message = new MimeMessage(sess);
			message.setSubject(javax.mail.internet.MimeUtility.encodeText("ITSHOW 비밀번호 찾기", "UTF-8", "B"));
			message.setRecipient(Message.RecipientType.TO, new InternetAddress(to));
			message.setContent(content, "text/html; charset=utf-8");
			Transport.send(message);
			result = 1;
		}catch(Exception e){
			e.printStackTrace();
		}
		return result;
	}


	public MemberDataBean getName(String m_name) {
		return session.selectOne("Member.getName", m_name);

	}

	public int findCheck(String m_name, String m_email) {
		int result = 0;
		int count = check(m_name);
		if(count == 0) {
			// 이름 없
			result = 0;
		} else {
			// 이름 있
			MemberDataBean memberDto = getName(m_name);
			if(m_email.equals(memberDto.getM_email())) {
				// 이메일 있.
				result = 1;
			} else {
				// 이메일 없.
				result = -1;
			}
		}
		return result;
	}

	public int findId(Map<String, String> map){
		return session.selectOne("Member.findId", map);
	}

	public MemberDataBean getId(Map<String, String> map) {
		return session.selectOne("Member.getId", map);
	}

	public MemberDataBean getpId(String m_id) {
		return session.selectOne("Member.getpId", m_id);

	}

	public int findPw(Map<String, String>map){
		return session.selectOne("Member.findPw", map);
	}

	public MemberDataBean getPw(Map<String, String>map){
		return session.selectOne("Member.getPw", map);
	}

	@Override
	public int getCode(String m_id) {
		return session.selectOne("Member.getCode", m_id);
	}

	@Override
	public int getCounts(String id) {
		return session.selectOne("Member.getCounts", id);
	}

	@Override
	public List<InfoDataBean> getinfoM(String id) {
		return session.selectList("Member.getinfoM" ,id);
	}

	@Override
	public List<OrderDataBean> getOrder(Map<String, Object> map) {
		return session.selectList("Member.getOrder",map);
	}

	@Override
	public int orderCount(Map<String, Object> map) {
		return session.selectOne("Member.ordercount",map);
	}

	@Override
	public String getSeat(String num) {
		return session.selectOne("Member.getSeat",num);
	}

	@Override
	public String getImg(String title) {
		return session.selectOne("Member.getImg",title);
	}

	@Override
	public List<OrderDataBean> egetOrder(Map<String, Object> map) {
		return session.selectList("Member.egetOrder",map);
	}

	@Override
	public int eorderCount(Map<String, Object> map) {
		return session.selectOne("Member.eordercount",map);
	}

	@Override
	public int getInum(String title) {
		return session.selectOne("Member.getInum",title);
	}

	@Override
	public List<OrderDataBean> getOrderList(String daylater) {
		return session.selectList("Member.getOrderList",daylater);
	}

	@Override
	public String getEmail(String id) {
		return session.selectOne("Member.getEmail",id);
	}

	@Override
	public List<OrderTicketDataBean> getSeatOrder(int o_num) {
		return session.selectList("Member.getSeatOrder",o_num);
	}

	@Override
	public int getOrderCount(String daylater) {
		return session.selectOne("Member.getOrderCount", daylater);
	}

	@Override
	public void updateOrder(int o_num) {
		session.update("Member.updateOrder",o_num);
	}
	
	public int mailCheck(String email) {
		int count = session.selectOne("Member.mailCheck", email);
	    return count;
	}
	
	public int gettitle_count(String title) {
		System.out.println(title+"멤버메서드");
		return session.selectOne("Member.gettitle_count", title);
	}
	
	public List<InfoDataBean> getinfoFind(String title) {
		return session.selectList("Member.getinfoFind", title);
	}
	
	/*** 공연 삭제 ***/
	/*공연리뷰*/
	public int check1(String m_id){
		int count = session.selectOne("Member.check1", m_id);
		return count;
	}
	public int deleteinfore(String m_id){
		return session.delete("Member.deleteinfore", m_id);
	}

	/*문의사항*/
	public int check2(String m_id){
		int count = session.selectOne("Member.check2", m_id);
		return count;
	}
	public List<Integer>getQnums(String m_id){
		List<Integer> article =  session.selectList("Member.getQnums",m_id);
		return (List<Integer>) article;
	}
	public int deleteQnum(int q_num){
		return session.delete("Member.deleteQnum", q_num);
	}

	public int deleteqna(String m_id){
		return session.delete("Member.deleteqna", m_id);
	}

	/*예매*/
	public int check4(String m_id){
		int count = session.selectOne("Member.check4", m_id);
		return count;
	}
	public List<Integer>getdOrder(String m_id){
		List<Integer> article =  session.selectList("Member.getdOrder",m_id);
		return (List<Integer>) article;
	}
	public int deleteTicket(int o_num){
		return session.delete("Member.deleteTicket", o_num);
	}
	public int deleteOnum(int o_num){
		return session.delete("Member.deleteOnum", o_num);
	}
	public int deleteOrder(String m_id){
		return session.delete("Member.deleteOrder", m_id);
	}

	/*스크랩*/
	public int check5(String m_id){
		int count = session.selectOne("Member.check5", m_id);
		return count;
	}
	public int deleteScrap(String m_id){
		return session.delete("Member.deleteScrap", m_id);
	}
	
	/*채팅*/
	@Override
	public List<Integer> getChatRoom(String m_id) {
		return session.selectList("Member.getChatRoom", m_id);
	}

	@Override
	public void deleteChat(int ch_room) {
		session.delete("Member.deleteChat", ch_room);
	}

	/*공연업체*/
	public int Cominfo(String m_id){
		int count = session.selectOne("Member.Cominfo", m_id);
		return count;
	}
	public List<Integer> getComdin(String m_id){
		List<Integer> article =  session.selectList("Member.getComdin",m_id);
		return (List<Integer>) article;
	}
	//스크랩
	public void deleteScrapNum(int i_num) {
		session.delete("Member.deleteScrapNum", i_num);
	}
	//공연 리뷰
	public void deleteInfoReview(int i_num) {
		session.delete("Member.deleteInfoReview", i_num);
	}
	//공연 상세 정보
	public void deleteInfoContent(int i_num) {
		session.delete("Member.deleteInfoContent", i_num);
	}
	//공연 좌석 이미지
	public void deleteInfoSeatImg(int i_num) {
		session.delete("Member.deleteInfoSeatImg", i_num);
	}
	
	public List<Integer> getDateNumbers(int i_num) {
		return session.selectList("Member.getDateNumbers", i_num);
	}
	public List<Integer> getTimeNumbers(int i_d_num) {
		return session.selectList("Member.getTimeNumbers", i_d_num);
	}
	public List<Integer> getSeatNumbers(int i_t_num) {
		return session.selectList("Member.getSeatNumbers", i_t_num);
	}
	public List<Integer> getSeatOrderNumbers(int i_s_num) {
		return session.selectList("Member.getSeatOrderNumbers", i_s_num);
	}
	
	public void deleteSeatOrder(int i_s_num) {
		session.delete("Member.deleteSeatOrder", i_s_num);
	}
	public void deleteSeat(int i_t_num) {
		session.delete("Member.deleteSeat", i_t_num);
	}
	public void deleteTime(int i_d_num) {
		session.delete("Member.deleteTime", i_d_num);
	}
	public void deleteDate(int i_num) {
		session.delete("Member.deleteDate", i_num);
	}
	
	public int deleteInfo(String m_id){
		return session.delete("Member.deleteInfo", m_id);
	}
}