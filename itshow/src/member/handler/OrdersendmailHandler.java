package member.handler;

import java.util.Properties;

import javax.activation.CommandMap;
import javax.activation.DataHandler;
import javax.activation.FileDataSource;
import javax.activation.MailcapCommandMap;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

//import com.sun.xml.internal.messaging.saaj.packaging.mime.internet.MimeUtility;

import handler.CommandHandler;
import member.MemberDao;

import javax.mail.Authenticator;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

@Controller
public class OrdersendmailHandler implements CommandHandler{

   @Resource
   private MemberDao memberDao;

   @RequestMapping("/ordersendmail")
   @Override
   public ModelAndView process(HttpServletRequest request, HttpServletResponse response) throws Throwable {

      request.setCharacterEncoding("UTF-8");
      response.setCharacterEncoding("UTF-8");
      
      
      String to = request.getParameter("email");
      String content = request.getParameter("content");
      String imgsrc = request.getParameter("imgsrc");
      int o_num = Integer.parseInt(request.getParameter("o_num"));

      Properties props = new Properties();
      props.setProperty("mail.transport.protocol", "smtp");
      props.setProperty("mail.host", "smtp.gmail.com");
      props.put("mail.smtp.auth", "true");
      props.put("mail.smtp.port", "465");
      props.put("mail.smtp.socketFactory.port", "465");
      props.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
      props.put("mail.smtp.socketFactory.fallback", "false");
      props.setProperty("mail.smtp.quitwait", "false");

      Authenticator auth = new Authenticator(){
         protected PasswordAuthentication getPasswordAuthentication() {
            return new PasswordAuthentication("bkkoo1121ko@gmail.com","khamsmtp");
         }
      };

      try {

         Session sess = Session.getDefaultInstance(props,auth);
         MimeMessage message = new MimeMessage(sess);
         
         message.setSubject(javax.mail.internet.MimeUtility.encodeText("ITSHOW 예매 알림서비스 입니다.", "UTF-8", "B"));
         message.setRecipient(Message.RecipientType.TO, new InternetAddress(to));

         //
         // This HTML mail have to 2 part, the BODY and the embedded image
         //
         MimeMultipart multipart = new MimeMultipart("related");

         // first part  (the html)
         BodyPart messageBodyPart = new MimeBodyPart();
         //String htmlText = "<H1>안녕하세요. ITSHOW 입니다.</H1><img src=\"cid:image\"><br>"+content;
         String htmlText = content;
         messageBodyPart.setContent(htmlText, "text/html; charset=UTF-8");

         // add it
         multipart.addBodyPart(messageBodyPart);

         // second part (the image)
         messageBodyPart = new MimeBodyPart();
         
         javax.activation.DataSource fds = new FileDataSource(
               request.getSession().getServletContext().getRealPath("/upload/" + imgsrc));
         messageBodyPart.setDataHandler(new DataHandler(fds));
         messageBodyPart.setHeader("Content-ID","<image1>");

         // add it
         multipart.addBodyPart(messageBodyPart);

         // put everything together
         message.setContent(multipart);

         MailcapCommandMap mc = (MailcapCommandMap) CommandMap.getDefaultCommandMap(); 
         mc.addMailcap("text/html;; x-java-content-handler=com.sun.mail.handlers.text_html"); 
         mc.addMailcap("text/xml;; x-java-content-handler=com.sun.mail.handlers.text_xml"); 
         mc.addMailcap("text/plain;; x-java-content-handler=com.sun.mail.handlers.text_plain"); 
         mc.addMailcap("multipart/*;; x-java-content-handler=com.sun.mail.handlers.multipart_mixed"); 
         mc.addMailcap("message/rfc822;; x-java-content- handler=com.sun.mail.handlers.message_rfc822"); 

         Transport.send(message);
       
         memberDao.updateOrder(o_num);
         StringBuffer result = new StringBuffer("");
         result.append("{data:[");
         
            result.append("{status : 'ss'}");

         result.append("]}");
         request.setAttribute("result", result.toString());

      }catch(Exception e){
         e.printStackTrace();
         
         StringBuffer result = new StringBuffer("");
         result.append("{data:[");
         
            result.append("{status : 'fs'}");

         result.append("]}");
         request.setAttribute("result", result.toString());
         
      }

      return new ModelAndView("member/ordersendmail");
   }

}