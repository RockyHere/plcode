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
<title>他人事务</title>
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
	 <div id="title"> 
	   <img src="/resource/images/admin/pageicon.jpg" align="middle"/>
	   <span id="tname">他人事务</span> 
	 </div>
	<div id="main">
	 <table class="table" cellpadding="0" cellspacing="0" width="100%">
		  <tr  class="table_top" style="height:25px">
		  	 <td  class="tabSingleHeader" style="width:4%;">
				 <span>序号</span>
			 </td>
			 <td  class="tabSingleHeader" style="width:20%;">
				 <span>单位名称</span>
			  </td>
			  <td  class="tabSingleHeader" style="width:10%;">
				 <span>任务类型</span>
			  </td>
			  <td  class="tabSingleHeader" style="width:10%;">
				 <span>流程名称</span>
			  </td>
			  <td  class="tabSingleHeader" style="width:8%;">
				 <span>流程关键字</span>
			  </td>
			  <td  class="tabSingleHeader" style="width:10%;">
				 <span>流程编号</span>
			  </td>
			  <td  class="tabSingleHeader" style="width:8%;">
				 <span>任务编号</span>
			  </td>
			   <td  class="tabSingleHeader" style="width:8%;">
				 <span>任务节点</span>
			  </td>		
			  <td  class="tabSingleHeader" style="width:5%;">
				 <span>任务处理人</span>
			  </td>
			  <td  class="tabSingleHeader"  style="width:10%;">
				 <span>任务开始时间</span>
			  </td>
			  <td  class="tabSingleHeader"  style="width:5%;">
				 <span>实例图</span>
			  </td>
		  </tr>
		  
		  <c:forEach items="${wftlist}" var="task" varStatus="status">
		  	<tr onmouseover="rowmouseover(this);"
		  		<c:if test="${status.count%2==0}">class="tr1" onmouseout="rowmouseout(this,'tr1')"</c:if>
		  		<c:if test="${status.count%2!=0}">class="tr2" onmouseout="rowmouseout(this,'tr2')"</c:if>
		  		 
		  		 <c:if test="${task.taskFlowTypeId=='FLOW_TYPE_FLOW_TYPE3'}">
		  		     ondblclick="funViewPrjectStep()"
		  		  </c:if>
		  		  
		  		>
		  		<td align="center">
		  			${status.count}
		  		</td>
		  		<td align="left">${task.taskFlowUnitName }</td>
		  		<td align="left">${task.taskFlowTypeName }</td>
		  		<td align="center">${task.taskFlowName }</td>
		  		<td align="center">${task.taskFLowKey }</td>
		  		<td align="center">${task.taskExecuteId }</td>
		  		<td align="center">${task.taskId }</td>
		  		<td align="center" style="color:red">${task.curNodeName }</td>
		  		<td align="center" style="color:red">${task.assignee }</td>
		  		<td align="center">${task.taskCreateDate}</td>
		  		<td align="center">
			       <img src="/resource/images/admin/flow.png" onclick="funViewFlowIntance('${task.taskExecuteId}','${task.taskFlowName}','${task.taskFLowKey}')" title="查看流程图"/>
			       <img src="/resource/images/flowgray/curactivity.png" style="padding-left:5px;width:24px;height:24px;" onclick="funViewHistoryProc('${task.taskExecuteId}')" title="执行过程"/>
			    </td>
		  	</tr>
		  </c:forEach>
		  <tr>
			<td class="tabFootBg" colspan="11">
			   <span style="margin-right:20px;">双击查看流程实例图，共有&nbsp;&nbsp;<font color="red">${fn:length(wftlist)}&nbsp;</font>&nbsp;&nbsp;条信息</span>
			</td>			
		</tr>
		</table>
	</div>
</body>
</html>
