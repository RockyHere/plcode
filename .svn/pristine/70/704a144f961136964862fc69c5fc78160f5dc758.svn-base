
<%
	String sessionid = request.getSession().getId();
	final String url = request.getContextPath()
			+ "/portal.do?action=logon&sessionKey=" + sessionid;
	response.sendRedirect(response.encodeURL(url));
%>
