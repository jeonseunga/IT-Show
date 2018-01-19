package info.handler;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import info.InfoDao;
import info.InfoReplyDataBean;

@Controller
public class InfoReviewWriteHandler implements CommandHandler {
	@Resource
	private InfoDao infoDao;
	
	@RequestMapping("/infoReviewWrite")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int i_num = Integer.parseInt(request.getParameter("num"));
		String m_id = (String) request.getSession().getAttribute("memId"); 
		//String m_id = "aaa";
		String i_re_content = request.getParameter("content");
		int i_re_score = Integer.parseInt(request.getParameter("rate"));
		Timestamp date = new Timestamp(System.currentTimeMillis());
		
		InfoReplyDataBean infoReplyDto = new InfoReplyDataBean();
		infoReplyDto.setI_re_content(i_re_content);
		infoReplyDto.setI_re_date(date);
		infoReplyDto.setI_re_score(i_re_score);
		infoReplyDto.setI_num(i_num);
		infoReplyDto.setM_id(m_id);
		
		//나중에 지우기..?
		infoReplyDto.setI_re_category(0);
		
		int result = infoDao.insertInfoReply(infoReplyDto);
		
		if(result == 1) {
			//리뷰 쓸 때 마다 평점 계산하기
			infoDao.updateScore(i_num);
		}
		
		int i_re_num = infoDao.getI_Re_num();
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		
		StringBuffer data = new StringBuffer("");
		data.append("{review :[{result : " + result + ", " 
							+ "num : " + i_re_num + ", " 
							+ "id : '" + m_id + "', " 
							+ "rate : '" + i_re_score + "', " 
							+ "content : '" + i_re_content + "', " 
							+ "date : '" + sdf.format(date) + "'}]}");
		
		request.setAttribute("result", data.toString());
		
		return new ModelAndView("info/infoReviewWrite");
	}

}
