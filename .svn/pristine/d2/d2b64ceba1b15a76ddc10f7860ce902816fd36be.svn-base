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
<script language="JavaScript" src="/resource/js/base/cust.js"></script>
</head>
<body>
	<div id="querybar">
		<form method="post" id="queryForm">
			<input type="hidden" id="state_code" name="state_code"
				value="${sysJob.state_code}" style="width:150px;" />
				<input type="hidden" id="city_code" name="city_code"
				value="${sysJob.city_code}" style="width:150px;" />
			<div style="float:left;margin-right: 20px;">
				<img src="/resource/images/global/query.png" width="60px"
					height="60px" />
				</td>
			</div>

			<div style="float:left;">
				<div>
					<div style="float:left;margin-top: 10px;">
						<span id="label">客户类型:</span> <select name="cust_type"
							style="width:150px;">
							<option value="0">全部</option>
							<option value="1">经销商</option>
							<option value="2">代理商</option>
							<option value="3">内部</option>
						</select>
					</div>
					<div style="float:left;margin-left: 20px;margin-top: 10px;margin-right: 20px;">
						<span id="label">客户代码:</span> <input type="text" name="cust_code"
							value="" style="width:150px;" />
					</div>
				</div>
				<div style="margin-top: 10px;margin-right: 10px;">
					<span>客户名称:</span> <input type="text"
						name="cust_name" value="" style="width:300px;" />
				</div>
			</div>

			<div style="float:left;">
				<a href="javascript:btnQuery(${page.pagePerRows});"><img
					src="/resource/images/global/btnQuery.jpg" style="border: 0px;" /></a>
			</div>
		</form>
	</div>
	<div id="btnlist">
		<ul>
			<li><a
				onclick="addSysJob(${page.pageCurrent},${page.pagePerRows});"><img
					src="/resource/images/global/btnNew.jpg" align="middle"
					style="border:0px;" /></a></li>
			<li><a
				onclick="editSysJob(${page.pageCurrent},${page.pagePerRows});"><img
					src="/resource/images/global/btnEdit.jpg" align="middle"
					style="border:0px;" /></a></li>
			<li><a
				onclick="delSysJob(${page.pageCurrent},${page.pagePerRows});"><img
					src="/resource/images/global/btnDel.jpg" align="middle"
					style="border:0px;" /></a></li>
		</ul>
	</div>
	<table class="table" cellpadding="0" cellspacing="0">
		<tr class="table_top" style="height:25px">
			<td class="tabSingleHeader" style="width:20px"><input
				type="checkbox" onclick="selectMainAll(this)" name="all"
				style="cursor:hand" /></td>

			<td class="tabSingleHeader" style="width:300px">全称</td>
			<td class="tabSingleHeader" style="width:300px">企业类型</td>
			<td class="tabSingleHeader" style="width:300px">集团</td>
			<td class="tabSingleHeader" style="width:300px">注册资本</td>
			<td class="tabSingleHeader" style="width:300px">成立时间</td>
			<td class="tabSingleHeader" style="width:300px">工商注册码</td>
			<td class="tabSingleHeader" style="width:300px">税务登记号</td>
			<td class="tabSingleHeader" style="width:300px">主营产品</td>
			<td class="tabSingleHeader" style="width:300px">所属行业</td>


		</tr>
		<c:forEach items="${page.pageResult}" var="sysJob" varStatus="status">
			<tr onmouseover="rowmouseover(this);"
				<c:if test="${status.count%2!=0}">class="tr1" onmouseout="rowmouseout(this,'tr1')"</c:if>
				<c:if test="${status.count%2==0}">class="tr2" onmouseout="rowmouseout(this,'tr2')"</c:if>>
				<td align="center"><input type="checkbox" name="crm_cust_id"
					value="${sysJob.crm_cust_id}" /></td>
				<td align="center">${sysJob.cust_name}</td>
				<td align="center">${sysJob.cust_pro}</td>
				<td align="center">${sysJob.cust_group}</td>
				<td align="center">${sysJob.reg_capital}</td>
				<td align="center">${sysJob.establish_date}</td>
				<td align="center">${sysJob.ic_reg_code}</td>
				<td align="center">${sysJob.fax_no}</td>
				<td align="center">${sysJob.cust_primarybusiness}</td>
				<td align="center">${sysJob.relate_industry}</td>
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
