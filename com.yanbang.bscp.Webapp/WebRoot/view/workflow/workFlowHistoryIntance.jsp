<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>历史流程管理</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<link rel="stylesheet" type="text/css" href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/table.css">
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script language="JavaScript" src="/resource/js/global/bgrow.js"></script>
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script language="JavaScript" src="/resource/js/global/page.js"></script>
<script src="/resource/comm/My97DatePicker/WdatePicker.js"></script>
<script language="JavaScript" src="/resource/js/flow/flowdefine.js"></script>
</head>
<body>
<div id="title"> 
  <img src="/resource/images/portal/pageicon.jpg" align="middle"/>
   <span id="tname">历史流程管理</span>
 </div>
  <div id="querybar">
   <table  cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td style="padding-left:10px;" width="70px;">
         <img src="/resource/images/global/query.png" width="60px" height="60px"/>
      </td>
    <td>
    <form  id="queryForm"  method="post">
      <table cellpadding="0" cellspacing="0" width="100%">
	     <tr>
		      <td width="25%"><span id="label" style="padding-right:15px;">流程类型:</span>
		         <select name="flowTypeId" style="width:150px">
	                <option value="">==全部==</option>
		            <c:forEach items="${ftlist}" var="item">
					   <option value="${item.dictKey}" ${wfhp.flowTypeId==item.dictKey?"selected":"" }>${item.dictName}</option>
				    </c:forEach>
	             </select>
		      </td>
		      <td width="25%">&nbsp;</td>
		      <td width="50%" rowspan="2">
		        <a onclick="btnQuery2(${page.pagePerRows})" style="cursor:hand;"><img src="/resource/images/global/btnQuery.jpg"/></a>
		      </td>
	     </tr>
	      <tr>
	          <td><span id="label" style="padding-right:10px;">开始时间:</span>
	            <input type="text" name="startTime" value="${wfhp.startTime}" style="width:150px;cursor:hand" 
			      	 	class="Wdate" id="startTime" onfocus="WdatePicker({el:'startTime',dateFmt:'yyyy-MM-dd'})"/>
	          </td>
		      <td><span id="label" style="padding-right:10px;">结束时间:</span>
	            <input type="text" name="endTime" value="${wfhp.endTime}" style="width:150px;cursor:hand" 
			      	 	class="Wdate" id="endTime" onfocus="WdatePicker({el:'endTime',dateFmt:'yyyy-MM-dd'})"/>
	            </td>
	     </tr>
      </table>
      </form>
   </td>
   </tr>
   </table>
 </div>
	<table class="table" cellpadding="0" cellspacing="0" width="100%">
		<tr>
			<td width="5%" class="tabSingleHeader">序号</td>
			<td width="20%" class="tabSingleHeader">流程类型</td>
			<td width="8%" class="tabSingleHeader">关键字</td>
			<td width="8%" class="tabSingleHeader">流程版本</td>
			<td width="11%" class="tabSingleHeader">实例编号</td>
			<td width="12%" class="tabSingleHeader">开始时间</td>			
			<td width="12%" class="tabSingleHeader">结束时间</td>
			<td width="8%" class="tabSingleHeader">间隔时间</td>
			<td width="8%" class="tabSingleHeader">实例状态</td>
			<td width="8%" class="tabSingleHeader">实例图</td>			
		</tr>
		<c:forEach items="${page.pageResult}" var="wfhp" varStatus="status">
		  <tr onmouseover="rowmouseover(this)" <c:if test="${status.count%2==0}">class="tr1" onmouseout="rowmouseout(this,'tr1')"</c:if> <c:if test="${status.count%2!=0}">class="tr2" onmouseout="rowmouseout(this,'tr2')"</c:if>>
			<td align="center">${status.count}</td>
			<td align="center">${wfhp.flowTypeName}</td>
			<td align="center">${wfhp.key}</td>
			<td align="center">${wfhp.version}</td>
			<td align="center">${wfhp.instanceId}</td>
			<td align="center">${wfhp.startTime}</td>
			<td align="center">${wfhp.endTime}</td>
			<td align="center">${wfhp.duration}</td>
			<td align="center">${wfhp.state}</td>
			<td align="center">
			 <img src="/resource/images/global/flow.png" onclick="funViewHistoryFlowIntance('${wfhp.instanceId}','${wfhp.flowName}','${wfhp.key}','${wfhp.version}')" title="查看流程图"/>
			 <img src="/resource/images/flowgray/curactivity.png" style="padding-left:5px;width:24px;height:24px;" onclick="funViewHistoryProc('${wfhp.instanceId}')" title="执行过程"/>
			 </td>
		  </tr>
		</c:forEach>
		<tr>
			<td class="tabFootBg" colspan="10">
			   <input type="hidden" id="page_per_num" value="${page.pagePerRows}"/>
			   <span style="margin-right:20px;">共有&nbsp;&nbsp;<font color="red">${page.totalRowsCount}&nbsp;</font>&nbsp;&nbsp;条信息，每页&nbsp;&nbsp;<font color="red">${page.pagePerRows}</font>&nbsp;&nbsp;条，当前&nbsp;&nbsp;<font color="red">${page.pageCurrent}&nbsp;/&nbsp;${page.totalPageCount}</font>&nbsp;&nbsp;页</span>
			   <span style="padding-right:30px;">
			      <img style="cursor:hand;margin-right:10px;" src="/resource/images/global/first.gif" onclick="navigationPage('${page.url}',${page.topPageNo},'queryForm')" title="第一页"/>
	              <img style="cursor:hand;margin-right:10px;" src="/resource/images/global/prev.gif" onclick="navigationPage('${page.url}',${page.previousPageNo},'queryForm')"  title="上一页"/>
	              <img style="cursor:hand;margin-right:10px;" src="/resource/images/global/next.gif" onclick="navigationPage('${page.url}',${page.nextPageNo},'queryForm')"  title="下一页"/>
	              <img style="cursor:hand;margin-right:10px;" src="/resource/images/global/last.gif" onclick="navigationPage('${page.url}',${page.bottomPageNo},'queryForm')"  title="最后页"/>
			   </span>
			</td>			
		</tr>
	</table>
</body>
</html>
