<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>行业信息</title>
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
<script language="JavaScript" src="/resource/js/base/industry.js"></script>
<script language="JavaScript" src="/resource/js/security/securityPop.js"></script>
</head>
<body>
	<form id="editForm" method="post">
		<input type="hidden" id="curPage" name="curPage" value="${curPage}" /> <input
			type="hidden" id="pageRows" name="pageRows" value="${pageRows}" /> <input
			type="hidden" id="parentId" name="parentId" style="width:100%"
			value="${org.bas_industry_id}" />
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr style="height:25px">
				<td class="tabSingleHeader" width="30%">编码</td>
				<td width="70%"><input type="text" id="industry_code"
					name="industry_code" value="" style="width:100%" /></td>
			</tr>
			<tr>
				<td class="tabSingleHeader" width="30%">名称</td>
				<td width="70%"><input type="text" id="industry_name"
					name="industry_name" value="" style="width:100%" /></td>
			</tr>
			<tr style="height:25px" onclick="chood();">
				<td class="tabSingleHeader" width="30%">上级行业</td>
				<td width="70%"><input type="text" value="${org.industry_code}_${org.industry_name}" id="industry_name_and_code" disabled style="width:100%;background-color: #ffffff"/>
				</td>
			</tr>
			<tr style="height:35px">
				<td class="tabSingleHeader" width="30%" height=100%>备注</td>
				<td width="70%"><textarea rows="2" cols="20" id="memo" name="memo"
					value="" style="width:100%" ></textarea></td>
			</tr>
			<tr style="height:35px">
				<td colspan="4" style="text-align:center;">
					<button type="button" onclick="addSaveSysJob();" class="btn_bg">确&nbsp;&nbsp;定</button>&nbsp;
					<button type="button" onclick="javascript:art.dialog.close();"
						class="btn_bg">取&nbsp;&nbsp;消</button>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>
