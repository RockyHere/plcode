<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>系统菜单</title>
<link rel="stylesheet" type="text/css" href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/table.css">
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script language="JavaScript" src="/resource/js/global/bgrow.js"></script>
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script language="JavaScript" src="/resource/js/global/page.js"></script>
<script language="JavaScript" src="/resource/js/security/sysmenu.js"></script>
</head>
<body>
<div id="title"> 
   <img src="/resource/images/portal/pageicon.jpg" align="middle"/>
   <span id="tname">系统菜单</span>
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
		      <td width="25%"><span id="label">菜单编号:</span><input type="text" name="menuId" value="${menu.menuId}"/></td>
		      <td width="25%"><span id="label">菜单名称:</span><input type="text" name="menuName" value="${menu.menuName}"/></td>
		      <td width="50%" rowspan="2">
		        <a onclick="btnQuery(${page.pagePerRows})" style="cursor:hand;"><img src="/resource/images/global/btnQuery.jpg"/></a>
		      </td>
	     </tr>
	      <tr>
		      <td><span id="label">菜单等级:</span>
		        <select  name="menuGrade" style="width:150px;">
		          <option value="-1">选择等级</option>	
		          <option value="1" ${menu.menuGrade==1?"selected":""}>一级菜单</option>	
		          <option value="2" ${menu.menuGrade==2?"selected":""}>二级菜单</option>
		          <option value="3" ${menu.menuGrade==3?"selected":""}>三级菜单</option>
			  </select>
		      </td>
		      <td><span id="label">菜单状态:</span>
		      <input type="radio" name="menuStatus" value="-2" ${menu.menuStatus==-2?"checked":""}/><span id="label">全部</span>
		      <input type="radio" name="menuStatus" value="0"  ${menu.menuStatus==0?"checked":""}/><span id="label">启用</span>
		      <input type="radio" name="menuStatus" value="1"  ${menu.menuStatus==1?"checked":""}/><span id="label">停用</span>
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
      <li><a onclick="funAdd()"><img src="/resource/images/global/btnNew.jpg" align="middle"/></a></li>
      <li><a onclick="funEdit(${page.pageCurrent},${page.pagePerRows})"><img src="/resource/images/global/btnEdit.jpg" align="middle"/></a></li>
    </ul>
    </div>
	<table class="table" cellpadding="0" cellspacing="0" width="100%">
		<tr>
			<td width="5%" class="tabSingleHeader">&nbsp;</td>
			<td width="8%" class="tabSingleHeader">菜单编号</td>
			<td width="20%" class="tabSingleHeader">菜单名称</td>
			<td width="8%" class="tabSingleHeader">菜单等级</td>
			<td width="8%" class="tabSingleHeader">排序字</td>
			<td width="45%" class="tabSingleHeader">菜单地址</td>
			<td width="6%" class="tabSingleHeader">菜单状态</td>
		</tr>
		<c:forEach items="${page.pageResult}" var="menu" varStatus="status">
		  <tr onmouseover="rowmouseover(this)" <c:if test="${status.count%2==0}">class="tr2" onmouseout="rowmouseout(this,'tr2')"</c:if> <c:if test="${status.count%2!=0}">class="tr1" onmouseout="rowmouseout(this,'tr1')"</c:if>>
			<td align="center"><input name="menucheck" type="radio" value="${menu.menuId}"/></td>
			<td align="center">${menu.menuId}</td>
			<td align="center">${menu.menuName}</td>
			<td align="center">${menu.menuGrade}</td>
			<td align="center">${menu.menuOrder}</td>
			<td align="left">${menu.menuTarget=='desktop'?"内嵌显示":"独立显示"}:&nbsp;&nbsp;[${menu.menuURL}]</td>
			<td align="center">
			<c:if test="${menu.menuStatus==1}">
			    <img src="/resource/images/global/disenable.png" style="border:none;width:16px;height:16px;" alt="停用"/>
			</c:if>
			<c:if test="${menu.menuStatus==0}">
				<img src="/resource/images/global/enable.png" style="border:none;width:16px;height:16px;" alt="启用"/>
			</c:if>
			</td>
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
