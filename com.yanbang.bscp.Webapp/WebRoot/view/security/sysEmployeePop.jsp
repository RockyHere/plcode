<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>员工信息</title>
<link rel="stylesheet" type="text/css" href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/table.css">
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script language="JavaScript" src="/resource/js/global/bgrow.js"></script>
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script language="JavaScript" src="/resource/js/global/page.js"></script>
<script language="JavaScript" src="/resource/js/security/securityPop.js"></script>
</head>
<body>
<div id="title"> 
	<img src="/resource/images/portal/pageicon.jpg" align="middle"/>
	<span id="tname">员工信息
	</span>
</div>
 <div id="querybar">
	<form method="post" id="queryForm">	
	<table border="0" cellpadding="0" cellspacing="0" width="100%">
		<tr>
		  <td style="padding-left:10px;" width="70px;"><img src="/resource/images/global/query.png" width="60px" height="60px"/></td>
		  <td>
			 <table border="0" cellpadding="0" cellspacing="0" width="100%">
				<tr>
					<td width="25%">
					    <span id="label">工号:</span>
					    <input type="text" name="empNo" value="${sysEmployee.empNo}"  style="width:150px;"/>
					</td>
					<td width="25%">
					    <span id="label">姓名:</span>
					    <input type="text" name="empName" value="${sysEmployee.empName}"  style="width:150px;"/>
					</td>
					<td width="50%">
					    <a href="javascript:btnSysEmpPopQuery(${page.pagePerRows});"><img src="/resource/images/global/btnQuery.jpg"  style="border: 0px;"/></a>
					</td>
				</tr>
			</table>
		  </td>
	    </tr>
	</table>
  </form>
</div>
<table class="table" cellpadding="0" cellspacing="0" width="100%">
	<tr class="table_top" style="height:25px">
		<td class="tabSingleHeader" style="width:35%;">员工ID</td>
		<td class="tabSingleHeader" style="width:30%;">工号</td>
		<td class="tabSingleHeader" style="width:35%;">姓名</td>
	</tr>
	<c:forEach items="${page.pageResult}" var="sysEmployee" varStatus="status">
		<tr onmouseover="rowmouseover(this);" ondblclick="retSysEmpPop('${sysEmployee.uuid}','${sysEmployee.empNo}','${sysEmployee.empName}')" 
		   <c:if test="${status.count%2!=0}">class="tr1" onmouseout="rowmouseout(this,'tr1')"</c:if>
		   <c:if test="${status.count%2==0}">class="tr2" onmouseout="rowmouseout(this,'tr2')"</c:if>>
		    <td align="left">${sysEmployee.uuid}</td>
		  	<td align="left">${sysEmployee.empNo}</td>
		  	<td align="left">${sysEmployee.empName}</td>
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
<script type="text/javascript">
function btnSysEmpPopQuery(pagePerRows) {
	queryForm.action = "/bscp/sysEmployee.do?action=sysEmployeePopQry&curPage=1&pageRows="+ pagePerRows;
	queryForm.submit();
}

//pop双击返回
function retSysEmpPop(empuuid,empNo,empName){	  
    //传递返回的值
    var retData = {"empuuid":empuuid,"empNo":empNo,"empName":empName};
    art.dialog.data("retData", retData);
	art.dialog.close();
}
</script>
</html>
