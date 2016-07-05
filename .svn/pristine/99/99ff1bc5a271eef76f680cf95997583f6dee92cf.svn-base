<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>员工岗位信息</title>
<link rel="stylesheet" type="text/css" href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/table.css">
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script language="JavaScript" src="/resource/js/global/bgrow.js"></script>
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script language="JavaScript" src="/resource/js/global/page.js"></script>
<script language="JavaScript" src="/resource/js/security/postEmp.js"></script>
</head>
<body>
<input type="hidden" id="empId" value="${empInfo.uuid}" />
 <fieldset>
    <legend>当前员工信息</legend>
    	<span>员工工号：</span><span>${empInfo.empNo}</span>
    	<span>员工姓名：</span><span>${empInfo.empName}</span>
 </fieldset>
<div id="btnlist">
  <ul>
    <li><a onclick="addPostByEmp('${empInfo.uuid}');"><img src="/resource/images/global/btnNew.jpg" align="middle" style="border:0px;"/></a></li>
    <li><a onclick="editPostByEmp('${empInfo.uuid}');"><img src="/resource/images/global/btnEdit.jpg" align="middle" style="border:0px;"/></a></li>
    <li><a onclick="delPostByEmp('${empInfo.uuid}');"><img src="/resource/images/global/btnDel.jpg" align="middle" style="border:0px;"/></a></li>
    <li><a onclick="closeDialog('${empInfo.uuid}');"><img src="/resource/images/global/close.png" align="middle" style="border:0px;"/></a></li>
  </ul>
</div>
<table id="tableMain" class="table" cellpadding="0" cellspacing="0" width="100%">
	<tr class="table_top" style="height:25px">
		<td class="tabSingleHeader" style="width:5%;"><input type="checkbox" onclick="selectAll(this)" name="all" style="cursor:hand"/></td>
		<td class="tabSingleHeader" style="width:5%;">岗位代码</td>
		<td class="tabSingleHeader" style="width:10%;">岗位名称</td>
		<td class="tabSingleHeader" style="width:10%;">组织机构代码</td>
		<td class="tabSingleHeader" style="width:10%;">组织机构名称</td>
	</tr>
	<c:forEach items="${postEmpList}" var="item" varStatus="status">
		<tr onmouseover="rowmouseover(this);"
		   <c:if test="${status.count%2!=0}">class="tr1" onmouseout="rowmouseout(this,'tr1')"</c:if>
		   <c:if test="${status.count%2==0}">class="tr2" onmouseout="rowmouseout(this,'tr2')"</c:if>>
		  	<td align="center"><input type="checkbox" name="uuid" value="${item.uuid}"/></td>
		  	<td align="center">${item.postCode}</td>
		  	<td align="center">${item.postName}</td>
		  	<td align="center">${item.orgCode}</td>
		  	<td align="center">${item.orgName}</td>
		 </tr>
	</c:forEach>
</table>	
</body>
</html>
