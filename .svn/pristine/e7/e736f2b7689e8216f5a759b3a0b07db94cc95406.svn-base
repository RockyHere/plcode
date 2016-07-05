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
<script language="JavaScript" src="/resource/js/base/finance.js"></script>
<script language="JavaScript" src="/resource/js/security/securityPop.js"></script>
</head>
<body>
	<form id="editForm" method="post">
		<input type="hidden" id="curPage" name="curPage" value="${curPage}" />
		<input type="hidden" id="pageRows" name="pageRows" value="${pageRows}" />
		<input type="hidden" id="parentid" name="parentid"
			value="${finance.parentid}" />
			<input type="hidden" id="bas_financialins_id" name="bas_financialins_id"
			value="${finance.bas_financialins_id}" />
		<div style="width:100%;float:left;margin-bottom: 10px;margin-top: 10px;">
			<div style="float:left;width:50%;height:27px;">
				<div class="tabSingleHeader"
					style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
					名称</div>
				<div style="width:60%;float:left;height:100%">
					<input type="text" id="financialins_name" name="financialins_name"
						value="${finance.financialins_name}" style="width:100%;height:100%" />
				</div>
			</div>
			<div style="float:left;width:50%;height:27px;">
				<div class="tabSingleHeader"
					style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
					编码</div>
				<div style="width:68%;float:left;height:100%">
					<input type="text" id="financialins_code" name="financialins_code"
						value="${finance.financialins_code}" style="width:100%;height:100%" />
				</div>
			</div>
		</div>

		<div style="width:100%;float:left;margin-bottom: 10px;">
			<div style="float:left;width:50%;height:27px;">
				<div class="tabSingleHeader"
					style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
					电话</div>
				<div style="width:60%;float:left;height:100%">
					<input type="text" id="tel" name="tel" value="${finance.tel}"
						style="width:100%;height:100%" />
				</div>
			</div>
			<div style="float:left;width:50%;height:27px;">
				<div class="tabSingleHeader"
					style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
					传真</div>
				<div style="width:68%;float:left;height:100%">
					<input type="text" id="tax" name="tax" value="${finance.tax}"
						style="width:100%;height:100%" />
				</div>
			</div>
		</div>

		<div style="width:100%;float:left;margin-bottom: 10px;">
			<div style="float:left;width:50%;height:27px;">
				<div class="tabSingleHeader"
					style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
					联系人</div>
				<div style="width:60%;float:left;height:100%">
					<input type="text" id="link_man" name="link_man" value="${finance.link_man}"
						style="width:100%;height:100%" />
				</div>
			</div>
			<div style="float:left;width:50%;height:27px;">
				<div class="tabSingleHeader"
					style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
					境内外</div>
				<div style="width:68%;float:left;height:100%">
					<select name="in_flag" style="width:100%;height:100%">
						<option value="境内">境内</option>
						<option value="境外">境外</option>
					</select>
				</div>
			</div>
		</div>

		<div style="width:100%;float:left;margin-bottom: 10px;">
			<div style="float:left;width:60%;height:27px;" onclick="chood();">
				<div class="tabSingleHeader"
					style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
					上级机构</div>
				<div style="width:60%;float:left;height:100%">
					<input type="text" id="parentname" name="parentname" value="${finance.parentname}"
						style="width:100%;height:100%" />
				</div>
			</div>
			<div style="float:left;width:40%;height:27px;">
				<div style="float: left;margin-left: 5px;">
					<input name="is_bank" type="radio" value="否" />集团内部金融
				</div>
				<div style="float:left;margin-right: 10px;margin-left: 5px;">
					<input name="is_bank" type="radio" value="是" checked="checked" />银行
				</div>
			</div>
		</div>

		<div style="width:100%;float:left;margin-bottom: 10px;">
			<div style="float:left;width:100%;height:27px;">
				<div class="tabSingleHeader"
					style="float:left;width:10%;text-align: center; line-height:27px;overflow:hidden;">
					详细地址</div>
				<div style="width:89%;float:left;height:100%">
					<input type="text" id="financialins_addr" name="financialins_addr"
						value="" style="width:100%;height:100%" />
				</div>
			</div>
		</div>

		<div style="width:100%;float:left;margin-bottom: 10px;">
			<div style="float:left;width:100%;height:56px;">
				<div class="tabSingleHeader2"
					style="float:left;width:10%;text-align: center; line-height:56px;overflow:hidden;">
					备注</div>
				<div style="width:89%;float:left;height:100%">
					<textarea id="memo" name="memo" value="${finance.memo}"
						style="width:100%;height:100%" rows="3"></textarea>
				</div>
			</div>
		</div>

		<div style="text-align:center;">
			<button type="button" onclick="editSaveSysJob();" class="btn_bg">确&nbsp;&nbsp;定</button>
			&nbsp;
			<button type="button" onclick="javascript:art.dialog.close();"
				class="btn_bg">取&nbsp;&nbsp;消</button>
		</div>
	</form>
</body>
</html>
