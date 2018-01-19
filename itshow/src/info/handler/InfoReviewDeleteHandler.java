package info.handler;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import info.InfoDao;

@Controller
public class InfoReviewDeleteHandler implements CommandHandler {
	@Resource
	private InfoDao infoDao;
	
	@RequestMapping("/infoReviewDelete")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int i_re_num = Integer.parseInt(request.getParameter("num"));
		int i_num = infoDao.getINumber(i_re_num);
		int result = 0;
		try {
			String id = (String) request.getSession().getAttribute("memId");
			if(id.equals(infoDao.getReviewWriter(i_re_num))) {
				result = infoDao.deleteInfoReview(i_re_num);
			}
			//리뷰 삭제할 때 마다 평점 계산하기
			infoDao.updateScore(i_num);
		}catch(Exception e) {
			try {
				String id = (String) request.getSession().getAttribute("adminId");
				if(id.equals("admin")) {
					result = infoDao.deleteInfoReview(i_re_num);
				}
				//리뷰 삭제할 때 마다 평점 계산하기
				infoDao.updateScore(i_num);
			}catch(Exception ee) {
				result = 2;
			}
		}
		
		request.setAttribute("result", result);
		return new ModelAndView("info/infoReviewDelete");
	}
}