<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>岗位主pop</title>
<link rel="stylesheet" type="text/css" href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/table.css">
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script language="JavaScript" src="/resource/js/global/bgrow.js"></script>
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script language="JavaScript" src="/resource/js/global/page.js"></script>
</head>
<body>
 <div id="querybar">
	<form method="post" id="queryForm">	
	<input type="hidden" id="orgId" name="orgId" value="${post.orgId}"  style="width:150px;"/>
	<table border="0" cellpadding="0" cellspacing="0" width="100%">
		<tr>
		  <td style="padding-left:10px;" width="70px;"><img src="/resource/images/global/query.png" width="60px" height="60px"/></td>
		  <td>
			 <table border="0" cellpadding="0" cellspacing="0" width="100%">
				<tr>
					<td width="25%">
					    <span id="label">岗位代码:</span>
					    <input type="text" name="postCode" value="${post.postCode}"  style="width:150px;"/>
					</td>
					<td width="25%">
					    <span id="label">岗位名称:</span>
					    <input type="text" name="postName" value="${post.postName}"  style="width:150px;"/>
					</td>
					<td width="50%">
					    <a href="javascript:btnPopQuery(${page.pagePerRows});"><img src="/resource/images/global/btnQuery.jpg"  style="border: 0px;"/></a>
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
		<td class="tabSingleHeader" style="width:10%;">岗位代码</td>
		<td class="tabSingleHeader" style="width:15%;">岗位名称</td>
		<td class="tabSingleHeader" style="width:10%;">机构代码</td>
		<td class="tabSingleHeader" style="width:15%;">机构名称</td>
		<td class="tabSingleHeader" style="width:10%;">更新人</td>
		<td class="tabSingleHeader" style="width:15%;">更新时间</td>
		<td class="tabSingleHeader" style="width:15%;">备注</td>
	</tr>
	<c:forEach items="${page.pageResult}" var="item" varStatus="status">
		<tr onmouseover="rowmouseover(this);" ondblclick="retPostPop('${item.uuid}','${item.postCode}','${item.postName}','${item.orgId}','${item.orgCode}','${item.orgName}')"
		   <c:if test="${status.count%2!=0}">class="tr1" onmouseout="rowmouseout(this,'tr1')"</c:if>
		   <c:if test="${status.count%2==0}">class="tr2" onmouseout="rowmouseout(this,'tr2')"</c:if>>
		  	<td align="left">${item.postCode}</td>
		  	<td align="left">${item.postName}</td>
		    <td align="left">${item.orgCode}</td>
		  	<td align="left">${item.orgName}</td>
		  	<td align="left">${item.updateUser}</td>
		  	<td align="center">${item.updateTime}</td>
		  	<td align="center">${item.comments}</td>
		 </tr>
	</c:forEach>
	<tr>
		<td class="tabFootBg" colspan="8">
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
function btnPopQuery(pagePerRows) {
	queryForm.action = "/bscp/sysPost.do?action=postPopQry&curPage=1&pageRows="+ pagePerRows;
	queryForm.submit();
}
//pop双击返回
function retPostPop(postId,postCode,postName,orgId,orgCode,orgName){
    //传递返回的值
    var parentDialog = window.parent.art.dialog;
    var retData = {"postId":postId,"postCode":postCode,"postName":postName,"orgId":orgId,"orgCode":orgCode,"orgName":orgName};
    parentDialog.data("retData", retData);  
    parentDialog.close();
};
</script>
</html>
