package chat.handler;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import chat.ChatDao;
import chat.ChatDataBean;
import handler.CommandHandler;

@Controller
public class ChatUsersHandler implements CommandHandler {
	@Resource
	private ChatDao chatDao;
	
	@RequestMapping("/chatUsers")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int count = 0;
		int start = 0;			// 현재 페이지의 시작 rownum 
		int end = 0;			// 현재 페이지의 끝 rownum
		
		/*if(count > 0) {
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
		}*/
		
		StringBuffer result = new StringBuffer("");
		/*result.append("{data : [");	    
		result.append("{count : " + count + " ,");
		result.append("pageCount : " + pageCount + " ,");
		result.append("pageNum : '" + pageNum + "' ,");
		result.append("pageBlock : " + pageBlock + " ,");
		
		result.append("currentPage : " + currentPage + " ,");
		result.append("startPage : " + startPage + " ,");
		result.append("endPage : " + endPage + " ,");
		result.append("number : " + number + " }");
		result.append("], ");*/
		count = chatDao.getCount();
		result.append("{");
		if(count != 0) {
			Map<String, Integer> map = new HashMap<String, Integer>();
			map.put("start", start);
			map.put("end", end);
			ArrayList<ChatDataBean> idList = chatDao.getIdList(map);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			if(idList.size() == 0) {
				
			}else {
				result.append("list : [");
				for(int i = 0; i < idList.size(); i++) {    
					result.append("{id : '" + idList.get(i).getM_id() + "' ,");
					result.append("room : " + idList.get(i).getCh_room() + " ,");
					result.append("state : " + idList.get(i).getCh_state() + " ,");
					result.append("date : '" + sdf.format(idList.get(i).getCh_date()) + "' }");
					if(i != idList.size()-1) {
						result.append(",");
					}
				}
				result.append("], ");	    
				result.append("count : " + count + "}");
			}
		}else {
			result.append("count : " + count + "}");
		}
		request.setAttribute("result", result.toString());
		return new ModelAndView("chat/chatUsers");
	}

}
