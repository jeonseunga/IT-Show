package member.handler;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import handler.CommandHandler;
import info.InfoDao;
import info.InfoDataBean;
import member.MemberDao;

@Controller
public class CompInfoListHandler implements CommandHandler {
	
	@Resource
	private MemberDao memberDao;

	@RequestMapping("/compInfoList.do")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		request.setCharacterEncoding("utf-8");
		String m_code = request.getParameter("m_code");
		request.setAttribute("m_code", m_code);
		if(m_code.equals("3")) {
			String id = (String) request.getSession().getAttribute("comId");
			int count = memberDao.getCounts(id);
			request.setAttribute("count", count);
			if(count != 0){
				List<InfoDataBean> infos = memberDao.getinfoM(id);
				request.setAttribute("infos", infos);
			}
		} else {
			String title = request.getParameter("title");
			request.setAttribute("title", title);
			System.out.println(title+"제목");
			int title_count = memberDao.gettitle_count(title);
			request.setAttribute("count", title_count);
			if(title_count!=0) {
				List<InfoDataBean> infos = memberDao.getinfoFind(title);
				request.setAttribute("infos", infos);
			}
		}
		return new ModelAndView("member/compInfoList");
	}

}