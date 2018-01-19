package info.handler;

import java.util.ArrayList;
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
import info.InfoContentDataBean;
import info.InfoDao;
import info.InfoDataBean;
import info.InfoDateDataBean;
import info.InfoSeatDataBean;
import info.InfoSeatImgDataBean;
import info.InfoTimeDataBean;
import notice.NoticeDao;
import notice.NoticeDataBean;
import qna.QnAReplyDataBean;
@Controller
public class InfoModifyViewHandler implements CommandHandler {
	@Resource
	private InfoDao infoDao;
	
	@RequestMapping("/infoModifyView")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		request.setCharacterEncoding("utf-8");
		int num = Integer.parseInt(request.getParameter("num"));
		String m_id = (String)request.getSession().getAttribute("comId");
		String m_code = request.getParameter("m_code");
		String title = request.getParameter("title");
		request.setAttribute("m_code", m_code);
		request.setAttribute("title", title);
		request.setAttribute("num", num);
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("i_num", num);
		String Write_id = infoDao.getWriterid(map);
		if(m_code.equals("3")) {
			if(m_id.equals(Write_id)) {
				InfoDataBean infoDto = infoDao.getModiArticle(num);
				ArrayList<InfoContentDataBean> contentDto = infoDao.getinfocon(num);
				ArrayList<InfoSeatImgDataBean> seatimgDto = infoDao.getinfosimg(num);
				int size = contentDto.size()-1;
				int length = seatimgDto.size()-1;
				request.setAttribute("infoDto", infoDto);
				request.setAttribute("size", size);
				request.setAttribute("contentDto", contentDto);
				request.setAttribute("length", length);
				request.setAttribute("seatimgDto", seatimgDto);
			}
		} else {
			InfoDataBean infoDto = infoDao.getModiArticle(num);
			ArrayList<InfoContentDataBean> contentDto = infoDao.getinfocon(num);
			ArrayList<InfoSeatImgDataBean> seatimgDto = infoDao.getinfosimg(num);
			System.out.println(seatimgDto.size()+"yyy");
			int size = contentDto.size()-1;
			int length = seatimgDto.size()-1;
			request.setAttribute("infoDto", infoDto);
			request.setAttribute("size", size);
			request.setAttribute("contentDto", contentDto);
			request.setAttribute("length", length);
			request.setAttribute("seatimgDto", seatimgDto);
		}
		return new ModelAndView("info/infoModifyView");
	}

}