<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>数据字典</title>
<link rel="stylesheet" type="text/css" href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/table.css">
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script language="JavaScript" src="/resource/js/global/bgrow.js"></script>
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script language="JavaScript" src="/resource/js/global/page.js"></script>
<script language="JavaScript" src="/resource/js/dict/dict.js"></script>
</head>
<body>
<div id="title"> 
	<img src="/resource/images/portal/pageicon.jpg" align="middle"/>
	<span id="tname">数据字典
	<a href="/bscp/dict.do?action=index&curPage=${page.pageCurrent}&pageRows=${page.pagePerRows}" style="text-decoration:none">根目录&gt;&gt;</a>
		<c:forEach items="${parentDicts}" var="dict">
		   &nbsp;<a href="javaScript:findChildsDict(${dict.dictCode},${page.pageCurrent},${page.pagePerRows});" style="text-decoration:none">${dict.dictName}&gt;&gt;</a>
		</c:forEach>
	 </span>
</div>
 <div id="querybar">
	<form method="post" id="queryForm">
	<input type="hidden" id="dictParentId" name="dictParentId" value="${dict.dictParentId}" />
	<table border="0" cellpadding="0" cellspacing="0" width="100%">
		<tr>
		  <td style="padding-left:10px;" width="70px;"><img src="/resource/images/global/query.png" width="60px" height="60px"/></td>
		  <td>
			 <table border="0" cellpadding="0" cellspacing="0" width="100%">
				<tr>
					<td width="25%">
					    <span id="label">词条名称:</span>
					    <input type="text" name="dictName" value="${dict.dictName}"  style="width:150px;"/>
					</td>
					<td width="25%">
					    <span id="label">关键字:</span>
					    <input type="text" name="dictKey" value="${dict.dictKey}"  style="width:150px;"/>
					</td>
					<td width="50%" rowspan="2">
					    <a href="javascript:btnQuery(${page.pagePerRows});"><img src="/resource/images/global/btnQuery.jpg"  style="border: 0px;"/></a>
					</td>
				</tr>
				<tr>
				    <td colspan="2">
				        <span id="label">词条描述:</span>
					    <input type="text" name="dictDesc" value="${dict.dictDesc}"  style="width:388px;"/>
				    </td>
				 </tr>
			</table>
		  </td>
	    </tr>
	</table>
  </form>
</div>
<div id="btnlist">
  <ul>
    <li><a onclick="addDict(${page.pageCurrent},${page.pagePerRows});"><img src="/resource/images/global/btnNew.jpg" align="middle" style="border:0px;"/></a></li>
    <li><a onclick="editDict(${page.pageCurrent},${page.pagePerRows});"><img src="/resource/images/global/btnEdit.jpg" align="middle" style="border:0px;"/></a></li>
    <li><a onclick="deleteDict(${page.pageCurrent},${page.pagePerRows});"><img src="/resource/images/global/btnDel.jpg" align="middle" style="border:0px;"/></a></li>
  </ul>
</div>
<table class="table" cellpadding="0" cellspacing="0" width="100%">
	<tr class="table_top" style="height:25px">
		<td class="tabSingleHeader" style="width:5%;"><input type="checkbox" onclick="selectAll(this)" name="all" style="cursor:hand"/></td>
		<td class="tabSingleHeader" style="width:25%;">名称</td>
		<td class="tabSingleHeader" style="width:15%;">关键字</td>
		<td class="tabSingleHeader" style="width:35%;">描述</td>
		<td class="tabSingleHeader" style="width:5%;">等级</td>
		<td class="tabSingleHeader" style="width:5%;">排序</td>
		<td class="tabSingleHeader" style="width:10%;">状态</td>
	</tr>
	<c:forEach items="${page.pageResult}" var="dict" varStatus="status">
		<tr onmouseover="rowmouseover(this);" ondblclick="findChildsDict(${dict.dictCode},${page.pageCurrent},${page.pagePerRows});"
		   <c:if test="${status.count%2!=0}">class="tr1" onmouseout="rowmouseout(this,'tr1')"</c:if>
		   <c:if test="${status.count%2==0}">class="tr2" onmouseout="rowmouseout(this,'tr2')"</c:if>>
		  	<td align="center"><input type="checkbox" name="dictCodes" value="${dict.dictCode}"/></td>
		  	<td align="left">${dict.dictName}</td>
		  	<td align="left">${dict.dictKey}</td>
		  	<td align="left">${dict.dictDesc}</td>
		  	<td align="center">${dict.dictGrade}</td>
		  	<td align="center">${dict.orderKey}</td>
		  	<td align="center">${dict.useStatus==1?"已使用":"未使用"}</td>
		 </tr>
	</c:forEach>
	<tr>
		<td class="tabFootBg" colspan="7">
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
