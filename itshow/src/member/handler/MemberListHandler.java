package member.handler;



import java.util.HashMap; 
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import member.MemberDao;
import member.MemberDataBean;

@Controller
public class MemberListHandler implements CommandHandler{
  @Resource
  private MemberDao memberDao;
	@Override
	@RequestMapping("/memberList")
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		request.setCharacterEncoding( "utf-8" );
		
		MemberDataBean memberDto = new MemberDataBean();
		int pageSize = 10;  	// 한 페이지에 출력할 글의 수
		int pageBlock = 3;		// 한 페이지에 보여줄 페이지 수 
		int count = 0;			//
		String pageNum = null; 	//
		int currentPage = 0;   	// 현재 페이지 
		int start = 0;			// 현재 페이지의 시작 rownum
		int end = 0;			// 현재 페이지의 끝 rownum
		int number = 0;			// 글 번호 계산 S
		int pageCount = 0 ;		//전체 페이지 수 
		int startPage = 0;		//보여줄 첫 페이지 
		int endPage = 0;		//보여줄 끝 페이지 
		//湲��씠 紐뉕컻 �엳�뒗吏� Dao濡� �븣�븘蹂닿린

		count = memberDao.getCount();
		if(count > 0 ){
			pageNum = request.getParameter( "pageNum" );
			if( pageNum == null ){
				pageNum = "1" ;
			}
			currentPage = Integer.parseInt( pageNum );
			start = ( currentPage - 1 ) * pageSize + 1;
					// �삁 : ( 5 - 1 ) * 10 + 1 = 41
						//	( 1 - 1 ) * 10 + 1 = 1 
			end = start + pageSize - 1;		
					// �삁 : 41 + 10 - 1  = 50
						//	1 + 10 - 1 = 10
			if( end > count ) {
			     end = count; 
			}
			number = count - ( currentPage - 1 )* pageSize; 
			pageCount = count / pageSize + (count % pageSize > 0 ? 1 : 0);
			startPage = (currentPage / pageBlock ) * pageBlock + 1;
					//�삁 : ( 15/ 10 ) * 10 + 1 = 11
						// ( 1 / 3 ) * 3 + 1 = 1
						// ( 2 / 3 ) * 3 + 1 = 1
						// ( 3 / 3 ) * 3 + 1 = 4
						// ( 4 / 3 ) * 3 + 1 = 4
			if( currentPage % pageBlock == 0 ) startPage -= pageBlock;
				//�삁 : ( 3 / 3 == 0 ) �씪�븣 startPage瑜� 4-=3�쑝濡� �븳�떎. 
					
			endPage = startPage + pageBlock - 1;
					//�삁 : 11 + 10 - 1 = 20
			if(endPage > pageCount ) endPage = pageCount;
		} 
		
		request.setAttribute("pageBlock", pageBlock);
		request.setAttribute("count", count);
		request.setAttribute("pageNum", pageNum);
		request.setAttribute("currentPage", currentPage);
		request.setAttribute("number", number);
		request.setAttribute("pageCount", pageCount);
		request.setAttribute("startPage", startPage);
		request.setAttribute("endPage", endPage);
		
		if( count != 0 ){
			Map<String, Integer> map = new HashMap<String, Integer>();
			map.put("start", start);
			map.put("end", end);
			List<MemberDataBean> articles = memberDao.getArticles(map);
			request.setAttribute("articles", articles);
		}
		memberDto.setM_code(2);

		return new ModelAndView("member/memberList") ;
	}

}
