<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>数据字典</title>
<link rel="stylesheet" type="text/css" href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/table.css">
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script language="JavaScript" src="/resource/js/dict/dict.js"></script>
</head>
<body>
	<form id="editForm" method="post">
		<input type="hidden" name="dictParentId" value="${dict.dictParentId}" /> 
		<input type="hidden" name="dictCode" value="${dict.dictCode}" />
		<input type="hidden" name="useStatus" value="${dict.useStatus}" />
		<input type="hidden" name="curPage" value="${curPage}" />
		<input type="hidden" name="pageRows" value="${pageRows}" />
		
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr style="height:25px">
				<td class="tabSingleHeader" width="30%">词条名称</td>
				<td width="70%">
					<input type="text" id="dictName" name="dictName" value="${dict.dictName}"  style="width:98%;" />
				</td>
			</tr>
			<tr style="height:25px">
				<td class="tabSingleHeader">词条关键字</td>
				<td>
					<input type="text" id="dictKey" name="dictKey" readonly value="${dict.dictKey}" style="width:98%;"/>
				</td>
			</tr>
			<tr style="height:25px">
				<td class="tabSingleHeader">词条描述</td>
				<td><input type="text" id="dictDesc" name="dictDesc" value="${dict.dictDesc}"  style="width:98%;"/></td>
			</tr>
			<tr style="height:25px">
				<td class="tabSingleHeader">排序</td>
				<td>
					<input type="text" id="orderKey" name="orderKey"  style="width:98%;" value="${dict.orderKey}" />
				</td>
			</tr>
			<tr style="height:25px">
				<td class="tabSingleHeader">词条等级</td>
				<td>
					<input type="text" id="dictGrade" name="dictGrade" readonly  style="width:98%;" value="${dict.dictGrade}" />
				</td>
			</tr>
			<tr>
				<td colspan="2" style="text-align:center;">
					<button type="button" onclick="editSaveDict();" class="btn_bg">确&nbsp;&nbsp;定</button>&nbsp;
					<button type="button" onclick="javascript:art.dialog.close();" class="btn_bg">取&nbsp;&nbsp;消</button>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>
