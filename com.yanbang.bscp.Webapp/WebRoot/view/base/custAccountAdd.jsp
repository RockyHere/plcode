<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>添加客户联系人</title>
<link rel="stylesheet" type="text/css"
	href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css"
	href="/resource/css/global/table.css">
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script
	src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script
	src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script src="/resource/comm/My97DatePicker/WdatePicker.js"></script>
<script language="JavaScript" src="/resource/js/base/custAccountAdd.js"></script>
<script language="JavaScript" src="/resource/js/security/securityPop.js"></script>
</head>
<body>
	<form id="editForm" method="post">
		<input type="hidden" id="curPage" name="curPage" value="${curPage}" /> <input
			type="hidden" id="pageRows" name="pageRows" value="${pageRows}" /> <input
			type="hidden" id="crm_cust_id" name="crm_cust_id" style="width:100%"
			value="${crm_cust_id}" />
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr style="height:25px">
				<td class="tabSingleHeader" width="30%">账号名称</td>
				<td width="70%"><input type="text" id="cust_account_name"
					name="cust_account_name" value="" style="width:100%" /></td>
			</tr>
			<tr>
				<td class="tabSingleHeader" width="30%">账号编码</td>
				<td width="70%"><input type="text" id="cust_account_no"
					name="cust_account_no" value="" style="width:100%" /></td>
			</tr>
			<tr>
				<td class="tabSingleHeader" width="30%">备注</td>
				<td width="70%"><input type="text" id="memo"
					name="memo" value="" style="width:100%" /></td>
			</tr>
			
			<tr style="height:35px">
				<td colspan="4" style="text-align:center;">
					<button type="button" onclick="addSaveAccount();" class="btn_bg">确&nbsp;&nbsp;定</button>&nbsp;
					<button type="button" onclick="javascript:art.dialog.close();"
						class="btn_bg">取&nbsp;&nbsp;消</button>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>
