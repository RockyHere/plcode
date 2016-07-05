<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>业务流程设计</title>
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
<script language="JavaScript" src="/resource/js/flow/flowdesign.js"></script>
</head>
<body>
<div id="title"> 
   <img src="/resource/images/portal/pageicon.jpg" align="middle"/>
   <span id="tname">业务流程设计</span>
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
		      <td width="25%"><span id="label">流程名称:</span><input type="text" name="name" value="${fd.name}"/></td>
		      <td width="25%"><span id="label">流程关键字:</span><input type="text" name="key" value="${fd.key}"/></td>
		      <td width="50%" rowspan="2">
		        <a onclick="btnQuery(${page.pagePerRows})" style="cursor:hand;"><img src="/resource/images/global/btnQuery.jpg"/></a>
		      </td>
	     </tr>
	      <tr>
	          <td><span id="label">流程类型:</span>
	            <select name="flowType" style="width:150px">
	                <option value="-2">==全部==</option>
		            <c:forEach items="${ftlist}" var="item">
					   <option value="${item.dictKey}" ${fd.flowType==item.dictKey?"selected":"" }>${item.dictName}</option>
				    </c:forEach>
	            </select>
	          </td>
		      <td><span id="label" style="padding-right:5px;">流程状态:</span>
		      <input type="radio" name="status" value="-2" ${fd.status==-2?"checked":"" }/><span id="label">全部</span>
		      <input type="radio" name="status" value="0"  ${fd.status==0?"checked":"" }/><span id="label">未部署</span>
		      <input type="radio" name="status" value="1"  ${fd.status==1?"checked":"" }/><span id="label">已部署</span>
		      
		      </td>
	     </tr>
      </table>
      </form>
   </td>
   </tr>
   </table>
 </div>
   <div id="btnlist">
    <ul>
      <li><a onclick="funDesign()"><img src="/resource/images/global/btnNew.jpg" align="middle"/></a></li>
      <li><a onclick="fundel(${page.pageCurrent},${page.pagePerRows})"><img src="/resource/images/global/btnDel.jpg" align="middle"/></a></li>
    </ul>
    </div>
	<table class="table" cellpadding="0" cellspacing="0" width="100%">
		<tr>
			<td width="3%" class="tabSingleHeader">
			 <input type="checkbox" onclick="selAll(this)" style="cursor:hand"/>
			</td>
			<td width="5%" class="tabSingleHeader">流程图</td>
			<td width="12%" class="tabSingleHeader">流程名称</td>
			<td width="11%" class="tabSingleHeader">流程关键字</td>
			<td width="5%" class="tabSingleHeader">流程版本</td>
			<td width="5%" class="tabSingleHeader">设计用户</td>
			<td width="13%" class="tabSingleHeader">设计时间</td>
			<td width="10%" class="tabSingleHeader">流程类型</td>
			<td width="5%" class="tabSingleHeader">流程状态</td>
			<td width="6%" class="tabSingleHeader">部署编号</td>
			<td width="12%" class="tabSingleHeader">部署时间</td>
			<td width="5%" class="tabSingleHeader">部署用户</td>
			<td width="8%" class="tabSingleHeader">操作</td>
		</tr>
		<c:forEach items="${page.pageResult}" var="fd" varStatus="status">
		  <tr onmouseover="rowmouseover(this)" <c:if test="${status.count%2==0}">class="tr1" onmouseout="rowmouseout(this,'tr1')"</c:if> <c:if test="${status.count%2!=0}">class="tr2" onmouseout="rowmouseout(this,'tr2')"</c:if>>
			<td align="center"><input name="fdcheck" ${fd.status==0?"":"disabled"} type="checkbox" value="${fd.name}" ver="${fd.version}"/></td>
			<td align="center"><img src="/resource/images/global/flow.png" onclick="funView('${fd.name}','${fd.version}')" title="查看流程图"/></td>
			<td align="left">${fd.name}</td>
			<td align="left">${fd.key}</td>
			<td align="center">${fd.version}</td>
			<td align="center">${fd.createusername}</td>
			<td align="center">${fd.createdatetime}</td>
			<td align="center">${fd.flowType}</td>
			<td align="center">${fd.status==0?"<font color='red'>未部署</font>":"已部署"}</td>
			<td align="center">${fd.deployId=="N/A"?"<font color='red'>-</font>":fd.deployId}</td>
			<td align="center">${fd.deployDatetime=="N/A"?"<font color='red'>-</font>":fd.deployDatetime}</td>
			<td align="center">${fd.deployUsername=="N/A"?"<font color='red'>-</font>":fd.deployUsername}</td>
			<td align="center">
			  <c:if test="${fd.status==0}">
			      <button class='btn_bg2' type="button" onclick="funView('${fd.name}','${fd.version}')">查看</button>
			      <button class='btn_bg2' type="button" onclick="openDesign('${fd.name}','${fd.version}')">设计</button>
			      <button class='btn_bg2' type="button" onclick="deployFlow('${fd.name}','${fd.version}')">部署</button>
			 </c:if>
			  <c:if test="${fd.status==1}">
			      <button class='btn_bg2' type="button" onclick="funView('${fd.name}','${fd.version}')">查看</button>
			      <button class='btn_bg2' type="button" style="color:#cccccc">设计</button>
			      <button class='btn_bg2' type="button" style="color:#cccccc">部署</button>
			 </c:if>
			</td>
		  </tr>
		</c:forEach>
		<tr>
			<td class="tabFootBg" colspan="13">
			   <input type="hidden" id="page_per_num" value="${page.pagePerRows}"/>
			   <span style="margin-right:20px;">共有&nbsp;&nbsp;<font color="red">${page.totalRowsCount}&nbsp;</font>&nbsp;&nbsp;条信息，每页&nbsp;&nbsp;<font color="red">${page.pagePerRows}</font>&nbsp;&nbsp;条，当前&nbsp;&nbsp;<font color="red">${page.pageCurrent}&nbsp;/&nbsp;${page.totalPageCount}</font>&nbsp;&nbsp;页</span>
			   <span style="padding-right:30px;">
			      <img style="cursor:hand;margin-right:10px;" src="/resource/images/global/first.gif" onclick="navigationPage('${page.url}',${page.topPageNo},'queryForm')" title="第一页"/>
	              <img style="cursor:hand;margin-right:10px;" src="/resource/images/global//prev.gif" onclick="navigationPage('${page.url}',${page.previousPageNo},'queryForm')"  title="上一页"/>
	              <img style="cursor:hand;margin-right:10px;" src="/resource/images/global//next.gif" onclick="navigationPage('${page.url}',${page.nextPageNo},'queryForm')"  title="下一页"/>
	              <img style="cursor:hand;margin-right:10px;" src="/resource/images/global//last.gif" onclick="navigationPage('${page.url}',${page.bottomPageNo},'queryForm')"  title="最后页"/>
			   </span>
			</td>			
		</tr>
	</table>
</body>
</html>
