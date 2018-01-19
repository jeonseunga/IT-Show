package info.handler;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
import info.InfoDao;
import info.InfoDataBean;

@Controller
public class InfoListHandler implements CommandHandler {
	@Resource
	private InfoDao infoDao;
	
	@RequestMapping("/infoList.do")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		request.setCharacterEncoding("UTF-8");
		
		Date day = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String today = sdf.format(day);
		
		String category = request.getParameter("category");
		String sort = request.getParameter("sort");
		String find_title = request.getParameter("find");
		String title = request.getParameter("findfind");
		
		int category_num = 0;
		if(category.equals("concert")) {
			category_num = 1;
		}else if(category.equals("musical")) {
			category_num = 2;
		}else if(category.equals("drama")) {
			category_num = 3;
		}
		
		int pageSize = 3;		// 한 페이지에 출력할 글의 수
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
		
		if(find_title!=null) {
			Map<String, Object> title_map = new HashMap<String, Object>();
			title_map.put("category", category_num);
			title_map.put("title", title);
			count = infoDao.gettitlecount(title_map);
		} else {
			count = infoDao.getCatCount(category_num);
		}
		
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
		request.setAttribute("sort", sort);
		
		if(count != 0) {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("start", start);
			map.put("end", end);
			map.put("c_category", category_num);
			map.put("sort", sort);
			if(find_title!=null) {
				map.put("title", title);
				List<InfoDataBean> infos = new ArrayList<InfoDataBean>();
				if(sort.equals("recent")) {
					infos = infoDao.getInfoListRecent_find(map);
				}else if(sort.equals("count")) {
					infos = infoDao.getInfoListCount_find(map);
				}else if(sort.equals("review")) {
					infos = infoDao.getInfoListReview_find(map);
				}
				
				for(int i = 0; i < infos.size(); i++) {
					String[] endDate = (infos.get(i).getI_period()).split("~", 0);
					Date currentDay = sdf.parse(today);
				    Date endDay = sdf.parse(endDate[1]);
				    if (currentDay.compareTo(endDay) <= 0) {
				    	//안지남
				        infos.get(i).setEndshow(1);
				    }else {
				    	//지남
				    	infos.get(i).setEndshow(0);
				    }
				}
				
				request.setAttribute("infos", infos);
			} else {
				List<InfoDataBean> infos = new ArrayList<InfoDataBean>();
				if(sort.equals("recent")) {
					infos = infoDao.getInfoListRecent(map);
				}else if(sort.equals("count")) {
					infos = infoDao.getInfoListCount(map);
				}else if(sort.equals("review")) {
					infos = infoDao.getInfoListReview(map);
				}
				
				for(int i = 0; i < infos.size(); i++) {
					String[] endDate = (infos.get(i).getI_period()).split("~", 0);
					Date currentDay = sdf.parse(today);
				    Date endDay = sdf.parse(endDate[1]);
				    if (currentDay.compareTo(endDay) <= 0) {
				    	//안지남
				        infos.get(i).setEndshow(1);
				    }else {
				    	//지남
				    	infos.get(i).setEndshow(0);
				    }
				}
				
				request.setAttribute("infos", infos);
			}
		}
		
		request.setAttribute("category", category);
		return new ModelAndView("info/infoList");
	}
}