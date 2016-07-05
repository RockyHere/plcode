<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>test包装类型信息</title>
<link rel="stylesheet" type="text/css" href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/table.css">
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script language="JavaScript" src="/resource/js/test/testSelIndex.js"></script>
</head>
<body>
	<form id="editForm" method="post">
		<table  width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr style="height:25px">
				<td class="tabSingleHeader">a包装类型名称</td>
				<td>
					 <select id="apackTypeName" name="apackTypeName" style="width:100%">
                      <option value="">===请选择===</option>                   
                     <c:forEach items="${alist}" var="apackType" varStatus="status">
                      <option value="${apackType.uuid}">${apackType.packTypeName}</option>
                     </c:forEach>
				</td>
			</tr>
			<tr style="height:25px">
				<td class="tabSingleHeader">f包装类型名称</td>
				<td>
					 <select id="fpackTypeName" name="fpackTypeName" style="width:100%">
                      <option value="">===请选择===</option>                   
                     <c:forEach items="${flist}" var="fpackType" varStatus="status">
                      <option value="${fpackType.uuid}">${fpackType.packTypeName}</option>
                     </c:forEach>
				</td>
			</tr>
			
			<!-- <tr>
				<td colspan="2" style="text-align:center;">
					<button type="button" onclick="addSaveImpType();" class="btn_bg">确&nbsp;&nbsp;定</button>&nbsp;
					<button type="button" onclick="javascript:art.dialog.close();" class="btn_bg">取&nbsp;&nbsp;消</button>
				</td>
			</tr> -->
		</table>
	</form>
</body>
</html>
