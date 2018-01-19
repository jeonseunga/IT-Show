package member.handler;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import member.MemberDao;

@Controller
public class MemberAdminDeleteProHandler implements CommandHandler{
	@Resource
	private MemberDao memberDao;

	@RequestMapping("/memberAdminDeletePro")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		String m_id = request.getParameter("m_id");

		//아이디가 있는지 확인
		int resultCheck = memberDao.check(m_id);
		int result = 0;

		if(resultCheck == 1) {
			//아이디가 있으면
			//멤버 코드 체크
			int m_code = memberDao.getCode(m_id);
			if(m_code == 2){
				//일반회원일때

				//공연 리뷰 카운트
				int infoReplyCount =  memberDao.check1(m_id);
				if(infoReplyCount > 0) {
					//공연 리뷰가 있으면
					//m_id로 info_reply 삭제
					int result1 = memberDao.deleteinfore(m_id);
					request.setAttribute("result2", result1);
				}

				//문의 사항 카운트
				int qnaCount = memberDao.check2(m_id);
				if(qnaCount > 0) {
					List<Integer> article = memberDao.getQnums(m_id);
					for(int q_num=0; q_num<article.size();q_num++){
						int result2 = memberDao.deleteQnum(article.get(q_num));
						request.setAttribute("result2", result2);
					}
					int result3 = memberDao.deleteqna(m_id);
					request.setAttribute("result3", result3);
				}

				//예매
				int OrderCount = memberDao.check4(m_id);
				if(OrderCount > 0){
					List<Integer> article = memberDao.getdOrder(m_id);
					for(int o_num=0; o_num<article.size(); o_num++){
						int result4 = memberDao.deleteTicket(article.get(o_num));
						request.setAttribute("result4", result4);
						int result5 = memberDao.deleteOnum(article.get(o_num));
						request.setAttribute("result5", result5); 
					}
					int result6 = memberDao.deleteOrder(m_id);
					request.setAttribute("result6", result6);
				}

				//스크랩
				int ScrapCount = memberDao.check5(m_id);
				if(ScrapCount > 0){
					int result7 = memberDao.deleteScrap(m_id);
					request.setAttribute("result7", result7);
				}

				//채팅
				List<Integer> chatRooms = memberDao.getChatRoom(m_id);
				for(int i = 0; i < chatRooms.size(); i++) {
					memberDao.deleteChat(chatRooms.get(i));
				}
				
				result = memberDao.deleteMember( m_id );
			}else if(m_code == 3){
				//업체일때
				int CominfoCount = memberDao.Cominfo(m_id);
				if(CominfoCount > 0){
					/*** 공연 삭제 ***/
					//i_num 가져오기
					List<Integer> infoNumbers = memberDao.getComdin(m_id);
					for(int i = 0; i < infoNumbers.size(); i++) {
						//스크랩 삭제
						memberDao.deleteScrapNum(infoNumbers.get(i));
						//리뷰 삭제
						memberDao.deleteInfoReview(infoNumbers.get(i));
						//상세정보삭제
						memberDao.deleteInfoContent(infoNumbers.get(i));
						//좌석이미지삭제
						memberDao.deleteInfoSeatImg(infoNumbers.get(i));
					}

					List<Integer> dateNumbers = new ArrayList<Integer>();
					for(int i = 0; i < infoNumbers.size(); i++) {
						List<Integer> dateNumber = memberDao.getDateNumbers(infoNumbers.get(i));
						dateNumbers.addAll(dateNumber);
					}

					List<Integer> timeNumbers = new ArrayList<Integer>();
					for(int i = 0; i < dateNumbers.size(); i++) {
						List<Integer> timeNumber = memberDao.getTimeNumbers(dateNumbers.get(i));
						timeNumbers.addAll(timeNumber);
					}

					List<Integer> seatNumbers = new ArrayList<Integer>();
					for(int i = 0; i < timeNumbers.size(); i++) {
						List<Integer> seatNumber = memberDao.getSeatNumbers(timeNumbers.get(i));
						seatNumbers.addAll(seatNumber);
					}

					List<Integer> seatOrderNumbers = new ArrayList<Integer>();
					for(int i = 0; i < seatNumbers.size(); i++) {
						List<Integer> seatOrderNumber = memberDao.getSeatOrderNumbers(seatNumbers.get(i));
						seatOrderNumbers.addAll(seatOrderNumber);
					}

					for(int i = 0 ; i < seatOrderNumbers.size(); i++) {
						memberDao.deleteSeatOrder(seatOrderNumbers.get(i));
					}

					for(int i = 0 ; i < seatNumbers.size(); i++) {
						memberDao.deleteSeat(seatNumbers.get(i));
					}

					for(int i = 0 ; i < timeNumbers.size(); i++) {
						memberDao.deleteTime(timeNumbers.get(i));
					}

					for(int i = 0 ; i < dateNumbers.size(); i++) {
						memberDao.deleteDate(dateNumbers.get(i));
					}

					for(int i = 0; i < infoNumbers.size(); i++) {
						memberDao.deleteInfo(m_id);
					}
				}
				
				//문의 사항
				int qnaCount = memberDao.check2(m_id);
				if(qnaCount > 0) {
					List<Integer> article = memberDao.getQnums(m_id);
					for(int q_num=0; q_num<article.size();q_num++){
						memberDao.deleteQnum(article.get(q_num));
					}
					memberDao.deleteqna(m_id);
				}

				//채팅
				List<Integer> chatRooms = memberDao.getChatRoom(m_id);
				for(int i = 0; i < chatRooms.size(); i++) {
					memberDao.deleteChat(chatRooms.get(i));
				}

				result = memberDao.deleteMember(m_id);
			}
			request.setAttribute("m_code", m_code);
			request.setAttribute("result", result);
			request.setAttribute("resultCheck", resultCheck);
		}
		return new ModelAndView("member/memberAdminDeletePro");
	}
}