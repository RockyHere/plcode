package com.yanbang.exception;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yanbang.security.entity.SysUser;
import com.yanbang.util.AssertUtil;

public class LogonFilter implements Filter {

	@Override
	public void destroy() {
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;
		String usrName = (String) req.getSession().getAttribute("USERNAME");
		SysUser user = (SysUser) req.getSession().getAttribute("USER");
		if (AssertUtil.isVal(usrName) && AssertUtil.isVal(user)) {
			chain.doFilter(request, response);
		} else {
			String url = req.getRequestURI();
			if (url.contains("/bscp/portal.do")
					|| url.contains("/bscp/sendRedirect.jsp") || url.endsWith("/bscp/") ) {
				chain.doFilter(request, response);
			} else {
				res.sendRedirect("/bscp/sendRedirect.jsp");
			}
		}
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {

	}

}
