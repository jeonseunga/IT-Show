package info.handler;

import java.util.ArrayList;
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
import info.InfoDateDataBean;
import info.InfoSeatDataBean;
import info.InfoTimeDataBean;

@Controller
public class InfoSalesStatusHandler implements CommandHandler {
	@Resource
	private InfoDao infoDao;
	
	@RequestMapping("infoSalesStatus")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int i_num = Integer.parseInt(request.getParameter("num"));
		//공연 기본 정보
		InfoDataBean infoDto = infoDao.getInfoDetail(i_num);
		request.setAttribute("infoDto", infoDto);
		
		//공연 날짜 정보
		List<InfoDateDataBean> infoDates = infoDao.getDate(i_num);
		request.setAttribute("infoDates", infoDates);
		
		//공연 시간 정보		
		List<InfoTimeDataBean> infoTimes = new ArrayList<InfoTimeDataBean>();
		for(int i = 0; i < infoDates.size(); i++) {
			//List<Integer> i_d_num = infoDao.getTnums(infoDate.get(i).getI_d_num());
			List<InfoTimeDataBean> infoTime = infoDao.getTimeList(infoDates.get(i).getI_d_num());
			infoTimes.addAll(infoTime);
		}
		request.setAttribute("infoTimes", infoTimes);
		
		//공연 좌석 정보
		List<InfoSeatDataBean> infoSeats = new ArrayList<InfoSeatDataBean>();
		for(int j = 0; j < infoTimes.size(); j++) {
			List<InfoSeatDataBean> infoSeat = infoDao.getSeat(infoTimes.get(j).getI_t_num());
			infoSeats.addAll(infoSeat);
		}
		request.setAttribute("infoSeats", infoSeats);
		
		return new ModelAndView("info/infoSalesStatus");
	}

}
