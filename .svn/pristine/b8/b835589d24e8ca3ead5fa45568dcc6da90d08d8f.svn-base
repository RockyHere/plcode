<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>岗位信息编辑</title>
<link rel="stylesheet" type="text/css" href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/table.css">
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script language="JavaScript" src="/resource/js/security/post.js"></script>
</head>
<body>
	<form id="editForm" method="post">
		<input type="hidden" name="uuid" value="${post.uuid}" /> 
		<input type="hidden" name="useFlag" value="${post.useFlag}" /> 
		<input type="hidden" id="orgId" name="orgId" value="${post.orgId}" />
		<input type="hidden" id="orgCode" name="orgCode" value="${post.orgCode}" />
		<input type="hidden" id="orgName" name="orgName" value="${post.orgName}" />
		<input type="hidden" name="curPage" value="${curPage}" />
		<input type="hidden" name="pageRows" value="${pageRows}" />
		
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr style="height:25px">
				<td class="tabSingleHeader"  width="30%">组织机构</td>
				<td width="70%">
					<span>${post.orgCode}_${post.orgName}</span>
				</td>
			</tr>
			<tr style="height:25px">
				<td class="tabSingleHeader" width="30%">岗位代码</td>
				<td width="70%">
					<input type="text" id="postCode" name="postCode" value="${post.postCode}"  style="width:98%;" />
				</td>
			</tr>
			<tr style="height:25px">
				<td class="tabSingleHeader">岗位名称</td>
				<td>
					<input type="text" id="postName" name="postName" value="${post.postName}" style="width:98%;"/>
				</td>
			</tr>
			<tr style="height:25px">
				<td class="tabSingleHeader">备注</td>
				<td>
					<input type="text" id="comments" name="comments"  style="width:98%;" value="${post.comments}" />
				</td>
			</tr>
			<tr>
				<td colspan="2" style="text-align:center;">
					<button type="button" onclick="editSavePost();" class="btn_bg">确&nbsp;&nbsp;定</button>&nbsp;
					<button type="button" onclick="javascript:art.dialog.close();" class="btn_bg">取&nbsp;&nbsp;消</button>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>
