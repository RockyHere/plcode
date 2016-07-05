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
<script language="JavaScript"
	src="/resource/js/base/custContactsinfo.js"></script>
</head>
<body>
	<!-- <div id="title"> 
	<img src="/resource/images/portal/pageicon.jpg" align="middle"/>
	<span id="tname">行业信息
	</span>
</div> -->

	<div id="btnlist">
		<ul>
			<li><a
				onclick="addContactsinfo(${page.pageCurrent},${page.pagePerRows})"><img
					src="/resource/images/global/btnNew.jpg" align="middle"
					style="border:0px;" /></a></li>
			<li><a
				onclick="delContactsinfo(${page.pageCurrent},${page.pagePerRows})"><img
					src="/resource/images/global/btnDel.jpg" align="middle"
					style="border:0px;" /></a></li>
			<li><a onclick="editContactsinfo(${page.pageCurrent},${page.pagePerRows});"><img
					src="/resource/images/global/btnEdit.jpg" align="middle"
					style="border:0px;" /></a></li>
		</ul>
	</div>
	<input type="hidden" id="crm_cust_id"
				value="${contactsinfo.crm_cust_id}">
	<table class="table" cellpadding="0" cellspacing="0">
		<tr class="table_top" style="height:25px">
			<td class="tabSingleHeader" style="width:20px"><input
				type="checkbox" onclick="selectAll(this)" name="all"
				style="cursor:hand" /></td>
			<td class="tabSingleHeader" style="width:10%;">姓名</td>
			<td class="tabSingleHeader" style="width:20%;">职位</td>
			<td class="tabSingleHeader" style="width:10%;margin: 3px;">移动电话</td>
			<td class="tabSingleHeader" style="width:10%;">电话</td>
			<td class="tabSingleHeader" style="width:15%;">传真</td>
			<td class="tabSingleHeader" style="width:30%;">邮箱</td>
		</tr>
		<c:forEach items="${page.pageResult}" var="contactsinfo"
			varStatus="status">
			<tr onmouseover="rowmouseover(this);"
				<c:if test="${status.count%2!=0}">class="tr1" onmouseout="rowmouseout(this,'tr1')"</c:if>
				<c:if test="${status.count%2==0}">class="tr2" onmouseout="rowmouseout(this,'tr2')"</c:if>>
				<td align="center"><input type="checkbox"
					name="crm_cust_contactsinfo_id"
					value="${contactsinfo.crm_cust_contactsinfo_id}" /></td>
				<td align="center">${contactsinfo.linkman}</td>
				<td align="center">${contactsinfo.position}</td>
				<td align="center">${contactsinfo.mobilephone}</td>
				<td align="center">${contactsinfo.tel}</td>
				<td align="center">${contactsinfo.fax}</td>
				<td align="center">${contactsinfo.email}</td>
			</tr>
		</c:forEach>
		<tr>
			<td class="tabFootBg" colspan="29"><input type="hidden"
				id="page_per_num" value="${page.pagePerRows}" /> <span
				style="margin-right:20px;">共有&nbsp;&nbsp;<font color="red">${page.totalRowsCount}&nbsp;</font>&nbsp;&nbsp;条信息，每页&nbsp;&nbsp;<font
					color="red">${page.pagePerRows}</font>&nbsp;&nbsp;条，当前&nbsp;&nbsp;<font
					color="red">${page.pageCurrent}&nbsp;/&nbsp;${page.totalPageCount}</font>&nbsp;&nbsp;页
			</span> <span style="padding-right:30px;"> <img
					style="cursor:hand;margin-right:10px;"
					src="/resource/images/global/first.gif"
					onclick="navigationPage('${page.url}',${page.topPageNo},'queryForm')"
					title="第一页" /> <img style="cursor:hand;margin-right:10px;"
					src="/resource/images/global/prev.gif"
					onclick="navigationPage('${page.url}',${page.previousPageNo},'queryForm')"
					title="上一页" /> <img style="cursor:hand;margin-right:10px;"
					src="/resource/images/global/next.gif"
					onclick="navigationPage('${page.url}',${page.nextPageNo},'queryForm')"
					title="下一页" /> <img style="cursor:hand;margin-right:10px;"
					src="/resource/images/global/last.gif"
					onclick="navigationPage('${page.url}',${page.bottomPageNo},'queryForm')"
					title="最后页" />
			</span></td>
		</tr>
	</table>
</body>
</html>
