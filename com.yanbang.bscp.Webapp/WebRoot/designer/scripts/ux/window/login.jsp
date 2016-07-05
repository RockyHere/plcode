{success:true}
<%
    String username = request.getParameter("j_username");
    if (username == null) {
        username = "guest";
    }
    session.setAttribute("username", username);
%>
