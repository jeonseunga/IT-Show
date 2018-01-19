package qna.handler;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import qna.QnADao;
import qna.QnAReplyDataBean;

@Controller
public class QnaReplyWriteHandler implements CommandHandler {
	@Resource
	private QnADao qnaDao;
	
	@RequestMapping("/qnaReplyWrite")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		//문의사항 글 번호 가져오기
		int num = Integer.parseInt(request.getParameter("num"));
		String content = request.getParameter("content");
		Timestamp date = new Timestamp(System.currentTimeMillis());
		String id = (String)request.getSession().getAttribute("adminId");
		
		QnAReplyDataBean qnaReplyDto = new QnAReplyDataBean();
		qnaReplyDto.setQ_re_content(content);
		qnaReplyDto.setQ_re_date(date);
		qnaReplyDto.setQ_num(num);
		qnaReplyDto.setM_id(id);
		
		int result = qnaDao.insertReply(qnaReplyDto);
		int q_re_num = qnaDao.getQ_Re_num();
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		
		StringBuffer data = new StringBuffer("");
		data.append("{reply:[{result : " + result + ", " + "num : " + q_re_num + ", " + "id : '" + id + "', " 
					+ "content : '" + content + "', " + "date : '" + sdf.format(date) + "'}]}");
		
		System.out.println("data");
		
		request.setAttribute("result", data.toString());
		
		return new ModelAndView("qna/qnaReplyWrite");
	}
}
