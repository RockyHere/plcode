package com.yanbang.view;

import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.web.servlet.View;

/**
 * Spring MVC 视图
 * 
 * 提供返回对话框对象
 * 
 * @author 徐春福
 * 
 */
public class JSAlertView implements View {
	/**
	 * 要提示的内容
	 */
	private String alertContent;

	@Override
	public String getContentType() {
		return "text/plain;charset=UTF-8";
	}

	public JSAlertView(String alertContent) {
		this.alertContent = StringUtils.trimToEmpty(alertContent);
	}

	@Override
	public void render(Map<String, ?> map, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		StringBuffer script = new StringBuffer();
		script.append("<script language='javascript'>");
		if (StringUtils.isNotBlank(alertContent)) {
			script.append("try{base.alert('" + alertContent
					+ "');}catch(e){alert('" + alertContent + "');}");
		}
		script.append("window.history.back();");
		script.append("</script>");
		response.setContentType(this.getContentType());
		response.setHeader("Pragma", "No-cache");
		response.setHeader("Cache-Control", "no-cache");
		response.setDateHeader("Expires", 0);
		PrintWriter out = response.getWriter();
		out.write(script.toString());
		out.close();
	}

}
