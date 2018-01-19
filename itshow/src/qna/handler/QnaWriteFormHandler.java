package qna.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;

@Controller
public class QnaWriteFormHandler implements CommandHandler {
	@RequestMapping("/qnaWriteForm")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		String pageNum = request.getParameter("pageNum");
		//수정 : 세션으로 로그인한 회원 아이디 가져온 뒤 넘겨준다
		request.setAttribute("pageNum", pageNum);
		return new ModelAndView("qna/qnaWriteForm");
	}

}
