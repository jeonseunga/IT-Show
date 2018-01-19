package qna.handler;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import qna.QnADao;
import qna.QnADataBean;

@Controller
public class QnaSearchList implements CommandHandler {
	@Resource
	private QnADao qnaDao;
	
	@RequestMapping("/qnaSearchList")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		request.setCharacterEncoding("UTF-8");
		
		String keyword = request.getParameter("keyword");
		String select = request.getParameter("select");
		
		request.setAttribute("select", select);
		request.setAttribute("keyword", keyword);
		
		int pageSize = 10;		// 한 페이지에 출력할 글의 수
		int pageBlock = 5;		// 한 번에 보여줄 페이지 수
		String pageNum = null;	// 현재 페이지 ... 를 옮길때?
		int currentPage = 0;	// 현재 페이지
		int count = 0;
		int start = 0;			// 현재 페이지의 시작 rownum 
		int end = 0;			// 현재 페이지의 끝 rownum
		int number = 0;			// 글 번호 계산
		int pageCount = 0;		// 전체 페이지 수
		int startPage = 0;		// 보여줄 첫 페이지
		int endPage = 0;		// 보여줄 끝 페이지
		
		ArrayList<QnADataBean> qnaDto = new ArrayList<QnADataBean>();
		
		if(select.equals("id")) {
			count = qnaDao.getSearchCountId(keyword);			
			if(count > 0) {
				pageNum = request.getParameter("pageNum");
				if(pageNum == null) {
					pageNum = "1";
				}
				currentPage = Integer.parseInt(pageNum);
				start = (currentPage - 1) * pageSize + 1;
				end = start + pageSize - 1;
				if(end > count) {
					end = count;
				}
				number = count - (currentPage - 1) * pageSize;
				pageCount = count / pageSize + (count % pageSize > 0 ? 1 : 0);
				startPage = (currentPage / pageBlock) * pageBlock + 1;
				if(currentPage % pageBlock == 0) {
					startPage -= pageBlock;
				}
				endPage = startPage + pageBlock - 1;
				if(endPage > pageCount) {
					endPage = pageCount;
				}
			}
			
			request.setAttribute("count", count);
			request.setAttribute("pageCount", pageCount);
			request.setAttribute("pageNum", pageNum);
			request.setAttribute("pageBlock", pageBlock);
			request.setAttribute("currentPage", currentPage);
			request.setAttribute("startPage", startPage);
			request.setAttribute("endPage", endPage);
			request.setAttribute("number", number);
			
			if(count != 0) {
				Map<String, Object> map = new HashMap<String, Object>();
				map.put("start", start);
				map.put("end", end);
				map.put("keyword", keyword);
				qnaDto = qnaDao.getSeachIdList(map);
				for(int i = 0; i < qnaDto.size(); i++) {
					qnaDto.get(i).setR_count(qnaDao.getReplyCount(qnaDto.get(i).getQ_num()));
				}
				request.setAttribute("qnaDto", qnaDto);
			}
		}else {
			count = qnaDao.getSearchCountTitle(keyword);		
			if(count > 0) {
				pageNum = request.getParameter("pageNum");
				if(pageNum == null) {
					pageNum = "1";
				}
				currentPage = Integer.parseInt(pageNum);
				start = (currentPage - 1) * pageSize + 1;
				end = start + pageSize - 1;
				if(end > count) {
					end = count;
				}
				number = count - (currentPage - 1) * pageSize;
				pageCount = count / pageSize + (count % pageSize > 0 ? 1 : 0);
				startPage = (currentPage / pageBlock) * pageBlock + 1;
				if(currentPage % pageBlock == 0) {
					startPage -= pageBlock;
				}
				endPage = startPage + pageBlock - 1;
				if(endPage > pageCount) {
					endPage = pageCount;
				}
			}
			
			request.setAttribute("count", count);
			request.setAttribute("pageCount", pageCount);
			request.setAttribute("pageNum", pageNum);
			request.setAttribute("pageBlock", pageBlock);
			request.setAttribute("currentPage", currentPage);
			request.setAttribute("startPage", startPage);
			request.setAttribute("endPage", endPage);
			request.setAttribute("number", number);
			
			if(count != 0) {
				Map<String, Object> map = new HashMap<String, Object>();
				map.put("start", start);
				map.put("end", end);
				map.put("keyword", keyword);
				qnaDto = qnaDao.getSeachTitleList(map);
				for(int i = 0; i < qnaDto.size(); i++) {
					qnaDto.get(i).setR_count(qnaDao.getReplyCount(qnaDto.get(i).getQ_num()));
				}
				request.setAttribute("qnaDto", qnaDto);
			}
		}
		
		request.setAttribute("count", count);
		
		return new ModelAndView("qna/qnaSearchList");
	}
}