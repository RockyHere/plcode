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
<script language="JavaScript" src="/resource/js/base/custReceivinfoAdd.js"></script>
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
				<td class="tabSingleHeader" width="30%">姓名</td>
				<td width="70%"><input type="text" id="receive_name"
					name="receive_name" value="" style="width:100%" /></td>
			</tr>
			<tr>
				<td class="tabSingleHeader" width="30%">身份证号</td>
				<td width="70%"><input type="text" id="receive_idcard"
					name="receive_idcard" value="" style="width:100%" /></td>
			</tr>
			<tr>
				<td class="tabSingleHeader" width="30%">固话</td>
				<td width="70%"><input type="text" id="receive_phone"
					name="receive_phone" value="" style="width:100%" /></td>
			</tr>
			<tr>
				<td class="tabSingleHeader" width="30%">移动电话</td>
				<td width="70%"><input type="text" id="receive_mobile"
					name="receive_mobile" value="" style="width:100%" /></td>
			</tr>
			<tr>
				<td class="tabSingleHeader" width="30%">收货地址</td>
				<td width="70%"><input type="text" id="receive_addr"
					name="receive_addr" value="" style="width:100%" /></td>
			</tr>
			<tr>
				<td class="tabSingleHeader" width="30%">收货详细地址</td>
				<td width="70%"><input type="text" id="receive_addr_detail"
					name="receive_addr_detail" value="" style="width:100%" /></td>
			</tr>
			
			<tr style="height:35px">
				<td colspan="4" style="text-align:center;">
					<button type="button" onclick="addSaveReceivinfo();" class="btn_bg">确&nbsp;&nbsp;定</button>&nbsp;
					<button type="button" onclick="javascript:art.dialog.close();"
						class="btn_bg">取&nbsp;&nbsp;消</button>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>
