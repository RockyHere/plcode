package com.yanbang.controller;


import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * The Base class of Spring Controller <br>
 * In order to provide a unified interface to the user object, unified authority
 * operation
 * 
 * @author Xu Chunfu
 * 
 */
public abstract class BaseController {
	protected static final Log log = LogFactory.getLog(BaseController.class);

	/**
	 * From Single Sign On To get the current user nickname
	 * 
	 * @param request
	 * @return
	 */
	public String getLoginUserName(HttpServletRequest request) {
//		try {
//			AttributePrincipal attrp = (AttributePrincipal) request
//					.getUserPrincipal();
//			Map<String, Object> attrMap = attrp.getAttributes();
//			return (String) attrMap.get("username");
			return (String)request.getSession().getAttribute("USERNAME");
//		} catch (Exception ex) {
//			log.error(">>>>>>>>>>>>>>" + ex.getMessage());
//			return "N/A";
//		}
	}

	/**
	 * From user Session Attribute get User Properties
	 * 
	 * @param request
	 * @return
	 */
	public Object getLoginUser(HttpServletRequest request) {
		return request.getSession().getAttribute("USER");
	}

	/**
	 * Get client network address
	 * 
	 * @param request
	 * @return
	 */
	public String getClientHostIpAddr(HttpServletRequest request) {
		String ip = request.getHeader("x-forwarded-for");
		if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown")) {
			ip = request.getHeader("Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown")) {
			ip = request.getHeader("WL-Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown")) {
			ip = request.getRemoteAddr();
		}
		return ip;
	}

}
