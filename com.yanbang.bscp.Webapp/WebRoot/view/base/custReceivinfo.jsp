<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>行业信息</title>
<link rel="stylesheet" type="text/css"
	href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css"
	href="/resource/css/global/table.css">
<script
	src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script
	src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script language="JavaScript" src="/resource/js/global/bgrow.js"></script>
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script language="JavaScript" src="/resource/js/global/page.js"></script>
<script language="JavaScript" src="/resource/js/base/custReceivinfo.js"></script>
</head>
<body>
	<!-- <div id="title"> 
	<img src="/resource/images/portal/pageicon.jpg" align="middle"/>
	<span id="tname">行业信息
	</span>
</div> -->

	<div id="btnlist">
		<ul>
			<li><a onclick="addReceivinfo(${page.pageCurrent},${page.pagePerRows})"><img
					src="/resource/images/global/btnNew.jpg" align="middle"
					style="border:0px;" /></a></li>
			<li><a onclick="delReceivinfo(${page.pageCurrent},${page.pagePerRows})"><img
					src="/resource/images/global/btnDel.jpg" align="middle"
					style="border:0px;" /></a></li>
			<li><a onclick="editReceivinfo(${page.pageCurrent},${page.pagePerRows});"><img
					src="/resource/images/global/btnEdit.jpg" align="middle"
					style="border:0px;" /></a></li>
		</ul>
	</div>
	<input type="hidden" id="crm_cust_id"
				value="${receivinfo.crm_cust_id}">
	<table class="table" cellpadding="0" cellspacing="0">
	<tr class="table_top" style="height:25px">
		<td class="tabSingleHeader" style="width:20px"><input type="checkbox" onclick="selectAll(this)" name="all" style="cursor:hand"/></td>
		<td class="tabSingleHeader" style="width:10%;">收货人姓名</td>
			<td class="tabSingleHeader" style="width:20%;">收货人身份证号</td>
			<td class="tabSingleHeader" style="width:10%;">收货人固话</td>
			<td class="tabSingleHeader" style="width:10%;">收货人移动电话</td>
			<td class="tabSingleHeader" style="width:15%;">收货地址</td>
			<td class="tabSingleHeader" style="width:30%;">收货详细地址</td>
	</tr>
	<c:forEach items="${page.pageResult}" var="receivinfo" varStatus="status">
		<tr onmouseover="rowmouseover(this);"
		   <c:if test="${status.count%2!=0}">class="tr1" onmouseout="rowmouseout(this,'tr1')"</c:if>
		   <c:if test="${status.count%2==0}">class="tr2" onmouseout="rowmouseout(this,'tr2')"</c:if>>
		  	<td align="center"><input type="checkbox" name="crm_cust_receivinfo_id" value="${receivinfo.crm_cust_receivinfo_id}"/></td>
		  	<td align="center">${receivinfo.receive_name}</td>
		  	<td align="center">${receivinfo.receive_idcard}</td>
		  	<td align="center">${receivinfo.receive_phone}</td>
		  	<td align="center">${receivinfo.receive_mobile}</td>
		  	<td align="center">${receivinfo.receive_addr}</td>
		  	<td align="center">${receivinfo.receive_addr_detail}</td>
		 </tr>
	</c:forEach>
	<tr>
		<td class="tabFootBg" colspan="29">
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
