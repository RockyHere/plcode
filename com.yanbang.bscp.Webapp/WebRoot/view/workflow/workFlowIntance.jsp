<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>业务流程管理</title>
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
<script language="JavaScript" src="/resource/js/flow/flowdefine.js"></script>
</head>
<body>
<div id="title"> 
  <img src="/resource/images/portal/pageicon.jpg" align="middle"/>
   <span id="tname">流程实例管理</span>
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
		      <td width="30%">
		         <span id="label" style="padding-right:15px;">流程编号:</span>
		         <input type="text" name="flowId"  style="width:150px" value="${instance.flowId}"/>
		      </td>
		      <td width="70%" rowspan="2">
		        <a onclick="btnQuery(${page.pagePerRows})" style="cursor:hand;"><img src="/resource/images/global/btnQuery.jpg"/></a>
		      </td>
	     </tr>
	      <tr>
	          <td><span id="label" style="padding-right:15px;">流程类型:</span>
	            <select name="flowType" style="width:150px">
	                <option value="all">==全部==</option>
		            <c:forEach items="${ftlist}" var="item">
					   <option value="${item.dictName}" ${instance.flowType==item.dictName?"selected":"" }>${item.dictName}</option>
				    </c:forEach>
	            </select>
	          </td>
		      <td>&nbsp;</td>
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
			<td width="13%" class="tabSingleHeader">流程类型</td>
			<td width="13%" class="tabSingleHeader">流程编号</td>
			<td width="8%" class="tabSingleHeader">发起人</td>
			<td width="12%" class="tabSingleHeader">启动时间</td>
			<td width="12%" class="tabSingleHeader">当前结点</td>
			<td width="11%" class="tabSingleHeader">处理人</td>
			<td width="11%" class="tabSingleHeader">实例图</td>			
			<td width="15%" class="tabSingleHeader">操作</td>
		</tr>
		<c:forEach items="${page.pageResult}" var="wfi" varStatus="status">
		  <tr onmouseover="rowmouseover(this)" <c:if test="${status.count%2==0}">class="tr1" onmouseout="rowmouseout(this,'tr1')"</c:if> <c:if test="${status.count%2!=0}">class="tr2" onmouseout="rowmouseout(this,'tr2')"</c:if>>
			<td align="center">${status.count}</td>
			<td align="center">${wfi.flowType}</td>
			<td align="center">${wfi.flowId}</td>
			<td align="center">${wfi.startUsr}</td>
			<td align="center">${wfi.startDate}</td>
			<td align="center" style="color='red'">${wfi.curFlowNodeName}</td>
			<td align="center" style="color='red'">${wfi.curTaskUserNickName}</td>
			<td align="center">
			    <img src="/resource/images/global/flow.png" onclick="funViewFlowIntance('${wfi.flowId}','${wfi.flowName}','${wfi.flowKey}','${wfi.flowVersion}')" title="查看实例图"/>
			    <img src="/resource/images/flowgray/curactivity.png" style="padding-left:5px;width:24px;height:24px;" onclick="funViewHistoryProc('${wfi.flowId}')" title="执行过程"/></td>
			<td align="center">
			       <button class='btn_bg2' type="button" onclick="funNextStepFlowIntance('${wfi.curTaskId}','${wfi.flowId}','${wfi.flowKey}','${wfi.flowVersion}')">前进</button>
			       <button class='btn_bg2' type="button" onclick="funBackStepFlowIntance('${wfi.curTaskId}','${wfi.flowKey}','${wfi.flowId}','${wfi.flowVersion}')">回退</button>
			       <button class='btn_bg2' type="button" onclick="funEndFlowIntance('${wfi.flowId}','${wfi.curTaskId}')">终止</button>
			       <button class='btn_bg2' type="button" onclick="funDeleteFlowIntance('${wfi.flowId}')">删除</button>
			</td>
		  </tr>
		</c:forEach>
		<tr>
			<td class="tabFootBg" colspan="9">
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
