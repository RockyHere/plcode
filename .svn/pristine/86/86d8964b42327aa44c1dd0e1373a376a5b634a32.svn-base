<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>行业信息</title>
<link rel="stylesheet" type="text/css" href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/table.css">
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>

<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script language="JavaScript" src="/resource/js/global/bgrow.js"></script>
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script language="JavaScript" src="/resource/js/global/page.js"></script>
<script language="JavaScript" src="/resource/js/base/industry.js"></script>
</head>
<body>
<!-- <div id="title"> 
	<img src="/resource/images/portal/pageicon.jpg" align="middle"/>
	<span id="tname">行业信息
	</span>
</div> -->
 <div>
	<table border="0" cellpadding="0" cellspacing="0" width="100%">
		<tr>
		  <!-- <td style="padding-left:10px;" width="70px;"><img src="/resource/images/global/query.png" width="60px" height="60px"/></td> -->
		  <td>
		     <form method="post" id="queryForm">	
		     <input type="hidden" id="parentId" name="parentId" value="${sysJob.parentId}"  style="width:150px;"/>
			 <%-- <table border="0" cellpadding="0" cellspacing="0" width="100%">
				<tr> 
					<td width="30%">
					    <span id="label">职位代码:</span>
					    <input type="text" name="industry_code" value="${sysJob.industry_code}"  style="width:130px;"/>
					</td>					
					<td width="70%" rowspan="2">
					    <a href="javascript:btnQuery(${page.pagePerRows});"><img src="/resource/images/global/btnQuery.jpg"  style="border: 0px;"/></a>
					</td>
				</tr>
				<tr>
				  <td width="30%">
					    <span id="label">职位名称:</span>
					    <input type="text" name="industry_name" value="${sysJob.industry_name}"  style="width:130px;"/>
					</td>
				</tr>
			</table> --%>
		  </td>
	    </tr>
	</table>
  </form>
</div>
<table class="table" cellpadding="0" cellspacing="0" width="100%">
	<tr class="table_top" style="height:25px">
		<!-- <td class="tabSingleHeader" style="width:5%;"><input type="checkbox" onclick="selectAll(this)" name="all" style="cursor:hand"/>选择</td> -->
		<td class="tabSingleHeader" style="width:15%;">编码</td>
		<td class="tabSingleHeader" style="width:15%;">名称</td>
		<td class="tabSingleHeader" style="width:15%;">备注</td>
		<!-- <td class="tabSingleHeader" style="width:10%;">创建人</td>
		<td class="tabSingleHeader" style="width:15%;">创建时间</td>
		<td class="tabSingleHeader" style="width:10%;">更新人</td>
		<td class="tabSingleHeader" style="width:15%;">更新时间</td> -->
		
	</tr>
	<c:forEach items="${page.pageResult}" var="sysJob" varStatus="status">
		<tr onmouseover="rowmouseover(this);" onclick="choiceItem('${sysJob.bas_industry_id}','${sysJob.industry_name}','${sysJob.industry_code}')"
		   <c:if test="${status.count%2!=0}">class="tr1" onmouseout="rowmouseout(this,'tr1')"</c:if>
		   <c:if test="${status.count%2==0}">class="tr2" onmouseout="rowmouseout(this,'tr2')"</c:if>>
		  	<%-- <td align="center"><input type="checkbox" name="bas_industry_id" value="${sysJob.bas_industry_id}"/></td> --%>
		  	<td align="center">${sysJob.industry_code}</td>
		  	<td align="center">${sysJob.industry_name}</td>
		  	<td align="center">${sysJob.memo}</td>
		  	<%-- <td align="center">${sysJob.created_by_user}</td>
		  	<td align="center">${sysJob.created_time_zone}</td>
		  	<td align="center">${sysJob.updated_by_user}</td>
		  	<td align="center">${sysJob.updated_time_zone}</td> --%>
		  	
		 </tr>
	</c:forEach>
	<tr>
		<td class="tabFootBg" colspan="3">
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
