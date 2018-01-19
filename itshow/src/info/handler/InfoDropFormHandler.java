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
import info.InfoContentDataBean;
import info.InfoDao;
import info.InfoDataBean;
import info.InfoDateDataBean;
import info.InfoSeatDataBean;
import info.InfoSeatImgDataBean;
import info.InfoTimeDataBean;
import qna.QnAReplyDataBean;
@Controller
public class InfoDropFormHandler implements CommandHandler {
	@Resource
	private InfoDao infoDao;
	
	@RequestMapping("/infoDropForm")
	@Override
	public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		int i_num = Integer.parseInt(request.getParameter("num"));
		System.out.println(i_num);
		StringBuffer result = new StringBuffer("");
		List<Integer> i_d_num = infoDao.getDnums(i_num);
		
		List<Integer> i_s_num = new ArrayList<Integer>();
		
		List<Integer> i_c_num = infoDao.getCnums(i_num);
		List<Integer> i_si_num = infoDao.getSInums(i_num);
		
		ArrayList<InfoSeatImgDataBean> infosimgDto = infoDao.getinfosimg(i_num);
		ArrayList<InfoContentDataBean> infoconDto = infoDao.getinfocon(i_num);
		ArrayList<InfoDateDataBean> infodateDto = infoDao.getinfodate(i_num);
		
		ArrayList<InfoTimeDataBean> is_info_time = new ArrayList<InfoTimeDataBean>();
		ArrayList<InfoSeatDataBean> is_info_seat = new ArrayList<InfoSeatDataBean>();

		String str = "";

		if(i_d_num.size() == 0) {
			request.setAttribute("result", "");
		}else {
			str +="{Data:[";
				str += "{dnumsize :[";
				for(int i=0;i<i_d_num.size();i++) {
					str += i_d_num.get(i);
					if(i != i_d_num.size()-1) {
						str += ",";
					}
				}
				str += "]},";
				str += "{tnumsize : [";
				for(int i=0;i<i_d_num.size();i++) {
					List<Integer> i_t_num = infoDao.getTnums(i_d_num.get(i));
					str += i_t_num.size();
					if(i != i_d_num.size()-1) {
						str += ",";
					}
				}
				str += "]},";
				str += "{snumsize : [";
				for(int i=0;i<i_d_num.size();i++) {
					List<Integer> i_t_num = infoDao.getTnums(i_d_num.get(i));
					for(int j=0; j<i_t_num.size();j++) {
						i_s_num = infoDao.getSnums(i_t_num.get(j));
						str += i_s_num.size();
						if(i == i_d_num.size()-1 && j == infoDao.getTnums(i_d_num.get(i)).size()-1) {
							str += "";  
						} else {
							str += ",";  
						}
					}
				}	
				str += "]},";
				str += "{i_c_num_size : " + i_c_num.size() + "},";
				str += "{i_si_num_size : " + i_si_num.size() + "},";
				str += "{infosiDTO : [";
				for(int i=0;i<infosimgDto.size();i++) {
					str += "{sihall : '"+infosimgDto.get(i).getS_img_hall()+"',";
					str += "path : '" + infosimgDto.get(i).getS_img_path() + "'";
					if(i != infosimgDto.size()-1) {
						str += "},";
					} else {
						str += "}";
					}
				}
				str += "]},";
				str += "{infoconDto : [";
				for(int i=0; i<infoconDto.size();i++) {
					str += "{content : '"+infoconDto.get(i).getI_c_content()+"',";
					str += "path : '" + infoconDto.get(i).getI_c_img_path() + "'";
					if(i != infoconDto.size()-1) {
						str += "},";
					} else {
						str += "}";
					}
				}
				str += "]},";
				str += "{infodateDto : [";
				for(int i=0; i<infodateDto.size();i++) {
					str += "{date : '" + infodateDto.get(i).getI_date() + "'";
					if(i != infodateDto.size()-1) {
						str += "},";
					} else {
						str += "}";
					}
				}
				str += "]},";
				str += "{infotimeDto : [";
				for(int i=0;i<i_d_num.size();i++) {
					is_info_time = infoDao.getis_info_time(i_d_num.get(i));
					for(int j=0; j<is_info_time.size();j++) {
						str += "{i_t_time : '" + is_info_time.get(j).getI_t_time() + "',";
						str += "i_t_hall : '" + is_info_time.get(j).getI_t_hall() + "',";
						str += "i_t_duration :'" + is_info_time.get(j).getI_t_duration() +"'}";
						if(i == i_d_num.size()-1 && j == is_info_time.size()-1) {
							str += "";
						} else {
							str += ",";
						}
					}
				}
				str += "]},";
				str += "{infoseatDto : [";
				for(int i=0;i<i_d_num.size();i++) {
					List<Integer> i_t_num = infoDao.getTnums(i_d_num.get(i));
					for(int j=0;j<i_t_num.size();j++) {
						is_info_seat = infoDao.getis_info_seat(i_t_num.get(j));
						for(int k=0;k<is_info_seat.size();k++) {
							str += "{i_s_floor : " + is_info_seat.get(k).getI_s_floor() + ",";
							str += "i_s_level : '" + is_info_seat.get(k).getI_s_level() + "',";
							str += "i_s_name : '" + is_info_seat.get(k).getI_s_name() + "',";
							str += "i_s_price : " + is_info_seat.get(k).getI_s_price() + ",";
							str += "i_s_start : " + is_info_seat.get(k).getI_s_start() + ",";
							str += "i_s_end : " + is_info_seat.get(k).getI_s_end() + "}";
							if(i == i_d_num.size()-1 &&
								is_info_seat.get(k).getI_t_num() == i_t_num.get(infoDao.getTnums(i_d_num.get(i_d_num.size()-1)).size()-1)
								&& k == is_info_seat.size()-1) {
								System.out.println(i_d_num.size()+"ttt");
								str += "";
							} else {
								str += ",";
							}
						}
					}
				}
				str += "]}";
				str += "]}";
			System.out.println(str);
			result.append(str);
			request.setAttribute("result", result.toString());
		}
		
		return new ModelAndView("info/infoDropForm");
	}

}


















