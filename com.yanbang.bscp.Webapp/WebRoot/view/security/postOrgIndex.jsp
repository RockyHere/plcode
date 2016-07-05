<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>岗位维护</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<link rel="stylesheet" type="text/css" href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/table.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/tree.css">
<link rel="stylesheet" type="text/css" href="/resource/comm/zTree_v3/css/demo.css">
<link rel="stylesheet" type="text/css" href="/resource/comm/zTree_v3/css/zTreeStyle/zTreeStyle.css">
<script type="text/javascript" src="/resource/comm/zTree_v3/js/jquery-1.4.4.min.js"></script>
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script type="text/javascript" src="/resource/comm/zTree_v3/js/jquery.ztree.core-3.5.js"></script>
<script language="JavaScript" src="/resource/js/security/post.js"></script>
</head>
<body style="overflow-x:hidden;overflow-y:hidden;">
  <input type="hidden" id="defaultId" name="defaultId" value="${defaultId}">
  <div style="float:left;width:20%;height:99.5%">
      <iframe id="frameLeft" name="frameLeft" height="99%" width="100%" frameborder=”no” border=”0″ scrolling=auto src=""></iframe>
  </div>
  <div style="float:left;width:80%;height:99.5%">
      <iframe id="frameRight" name="frameRight" height="99%" width="100%" frameborder=”no” border=”0″ scrolling=auto src=""></iframe>
  </div>
<script type="text/javascript">
	/**
	 * 页面初始化
	 */
	$(document).ready(function(){
		var defaultId = $("#defaultId").val();
		console.log("postOrgIndex--defaultId--"+defaultId);
		initFrameLeft(defaultId);
		initFrameRight(defaultId);
	});	

	/**
	 * 单击事件
	 */
	function onClick(treeNode) {
		initFrameRight(treeNode.id);
		return true;
	}

	/**
	 * 初始化或选择根节点 右侧赋值 
	 */
	function initFrameLeft(defaultId){
		$('#frameLeft').attr("src","sysOrg.do?action=orgQueryTree&defaultId="+defaultId);
	}

	/**
	 * 单击节点 右侧赋值 
	 * @param treeNode
	 */
	function initFrameRight(defaultId){
		$('#frameRight').attr("src","sysPost.do?action=findMutiCondition&curPage=1&pageRows=10&orgId="+defaultId);
	}
</script>
</body>
</html>
