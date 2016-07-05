<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>职位信息</title>
<link rel="stylesheet" type="text/css" href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/table.css">
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script src="/resource/comm/My97DatePicker/WdatePicker.js"></script>
<script language="JavaScript" src="/resource/js/security/sysJob.js"></script>
<script language="JavaScript" src="/resource/js/security/securityPop.js"></script>
</head>
<body>
	<form id="editForm" method="post">
		<input type="hidden" name="curPage" value="${curPage}" />
		<input type="hidden" name="pageRows" value="${pageRows}" />
		<input type="hidden" id="orgId" name="orgId" value="${org.uuid}" />
		<input type="hidden" id="orgCode" name="orgCode" value="${org.orgCode}" />
		<input type="hidden" id="orgName" name="orgName" value="${org.orgName}" />
		<table  width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr style="height:25px">
				<td class="tabSingleHeader"  width="30%">组织机构</td>
				<td width="70%">
					<span>${org.orgCode}_${org.orgName}</span>
				</td>
			</tr>
			<tr style="height:25px">
				<td class="tabSingleHeader"  width="30%">职位代码</td>
				<td width="70%">
					<input type="text" id="jobCode" name="jobCode" value="" style="width:100%"/>
				</td>
			</tr>
			<tr>
				<td class="tabSingleHeader"  width="30%">职位名称</td>
				<td width="70%">
					<input type="text" id="jobName" name="jobName" value="" style="width:100%"/>
				</td>
			</tr>
			<tr style="height:25px">
				<td class="tabSingleHeader"  width="30%">备注</td>
				<td  width="70%" >
                    <input type="text" id="comments" name="comments" value="" style="width:100%"/>
				</td>
			</tr>
			<tr style="height:35px">
				<td colspan="4" style="text-align:center;">
					<button type="button" onclick="addSaveSysJob();" class="btn_bg">确&nbsp;&nbsp;定</button>&nbsp;
					<button type="button" onclick="javascript:art.dialog.close();" class="btn_bg">取&nbsp;&nbsp;消</button>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>
