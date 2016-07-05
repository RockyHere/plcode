<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>执行过程</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<link rel="stylesheet" type="text/css" href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/table.css">
<script src="/resource/dialog/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/dialog/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script language="JavaScript" src="/resource/js/global/bgrow.js"></script>
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script language="JavaScript" src="/resource/js/workflow/flowdefine.js"></script>

</head>
<body onload="message();">
	<div id="main">
	 <table class="table" cellpadding="0" cellspacing="0" width="100%">
		  <tr  class="table_top" style="height:25px">
		  	 <td  class="tabSingleHeader" style="width:4%;">
				 <span>序号</span>
			 </td>
			  <td  class="tabSingleHeader" style="width:10%;">
				 <span>任务步骤</span>
			  </td>
			  <td  class="tabSingleHeader" style="width:8%;">
				 <span>处理用户</span>
			  </td>
			   <td  class="tabSingleHeader"  style="width:10%;">
				 <span>开始时间</span>
			  </td>
			  <td  class="tabSingleHeader"  style="width:10%;">
				 <span>结束时间</span>
			  </td>
			   <td  class="tabSingleHeader"  style="width:8%;">
				 <span>间隔时间</span>
			  </td>
			  <td  class="tabSingleHeader" style="width:8%;">
				 <span>处理过程</span>
			  </td>
			  <td  class="tabSingleHeader" style="width:8%;">
				 <span>处理状态</span>
			  </td>
			  <td  class="tabSingleHeader" style="width:34%;">
				 <span>处理意见</span>
			  </td>
			  
		  </tr>
		  
		  <c:forEach items="${historyTaskProcList}" var="taskProc" varStatus="status">
		  	<tr onmouseover="rowmouseover(this);" 
		  		<c:if test="${status.count%2==0}">class="tr1" onmouseout="rowmouseout(this,'tr1')"</c:if>
		  		<c:if test="${status.count%2!=0}">class="tr2" onmouseout="rowmouseout(this,'tr2')"</c:if>>
		  		<td align="center">
		  			${status.count}
		  		</td>
		  		<td align="center">${taskProc.activityName}</td>
		  		<td align="center">${taskProc.assignee}</td>
		  		<td align="center">${taskProc.taskStartTime}</td>
		  		<td align="center">${taskProc.taskendTime}</td>
		  		<td align="center">${taskProc.taskDurTime}</td>
		  		<td align="center">${taskProc.processOper}</td>
		  		<td align="center">${taskProc.taskState}</td>
		  		<td align="left">${taskProc.processSuggestion}</td>
		  	</tr>
		  </c:forEach>
		  <tr>
			<td class="tabFootBg" colspan="10">
			   <span style="margin-right:20px;">&nbsp;</span>
			</td>			
		</tr>
		</table>
	</div>
</body>
</html>
