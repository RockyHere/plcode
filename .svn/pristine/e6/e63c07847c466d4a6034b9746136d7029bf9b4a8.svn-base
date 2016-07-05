<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>客户管理</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<link rel="stylesheet" type="text/css"
	href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css"
	href="/resource/css/global/table.css">
<link rel="stylesheet" type="text/css"
	href="/resource/css/global/tree.css">
<link rel="stylesheet" type="text/css"
	href="/resource/comm/zTree_v3/css/demo.css">
<link rel="stylesheet" type="text/css"
	href="/resource/comm/zTree_v3/css/zTreeStyle/zTreeStyle.css">
<script type="text/javascript"
	src="/resource/comm/zTree_v3/js/jquery-1.4.4.min.js"></script>
<script
	src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script
	src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script type="text/javascript"
	src="/resource/comm/zTree_v3/js/jquery.ztree.core-3.5.js"></script>
<script language="JavaScript" src="/resource/js/base/industry.js"></script>
</head>
<body>
	<!-- <div id="title"> 
	<img src="/resource/images/portal/pageicon.jpg" align="middle"/>
   <span id="tname">客户管理</span>
</div> -->
	<div>
		<div class="treeDiv"
			style="float:left;width:15%;height:100%;margin-top:-10px;">
			<ul id="treeOrg" class="ztree"></ul>
		</div>
		<div style="margin-top:-1px;">
			<iframe id="sysJobIframe" src="" style="width:85%;height:100%;"></iframe>
		</div>
	</div>
	<script type="text/javascript">
		var setting = {
			view : {
				expandSpeed : "",
				dblClickExpand : false,
				selectedMulti : false
			},
			data : {
				key : {
					title : "tip"
					
				},
				simpleData : {
					enable : true
				}
			},

			callback : {
				//beforeDrag: function(treeId, treeNodes){return false;},
				//beforeEditName: beforeEditName,
				//beforeRemove: beforeRemove,
				//beforeRename: beforeRename,
				onClick : onClick,
			//onExpand: onClick,	//用于捕获节点被展开的事件回调函数"+"、"-"
			//onRemove: function(e, treeId, treeNode){},
			//onRename: function(e, treeId, treeNode, isCancel){return false;}
			}
		};

		/**
		 * 页面初始化
		 */
		$(document)
				.ready(
						function() {
							initOrgForm();
							//----------------------------------------------------------------------
							$
									.ajax({
										type : "POST",
										url : "/bscp/baseCust.do?action=queryPop",
										dataType : "json",
										cache : true,
										success : function(result) {
											if (result.result == "succ") {
												var zNodes = result.resultlist;
												$.fn.zTree.init($("#treeOrg"),
														setting, zNodes);
											} else {
												art
														.dialog({
															content : "<span style='font-size:12px'>客户初始化失败</span>",
															title : "错误",
															cancelVal : '关闭',
															icon : 'error'
														});
											}
										},
										error : function(result) {
											if (result.status == 200) {
												art
														.dialog({
															content : "<span style='font-size:12px'>"
																	+ result.responseText
																	+ "</span>",
															title : "错误信息",
															cancelVal : '关闭',
															icon : 'error'
														});
											} else {
												art
														.dialog({
															content : "<span style='font-size:12px'>客户初始化失败!</span>",
															title : "错误信息",
															cancelVal : '关闭',
															icon : 'error'
														});
											}
										}
									});
						});

		/**
		 * 单击事件
		 */
		function onClick(event, treeId, treeNode, clickFlag) {
			var zTree = $.fn.zTree.getZTreeObj(treeId);
			if (treeNode.isParent) {
				zTree.expandNode(treeNode);
			}
			if (treeNode.id == "root") {
				initOrgForm();
			} else {
				editOrgForm(treeNode);
			}
			return true;
		}

		/**
		 * 初始化或选择根节点 右侧赋值 
		 */
		function initOrgForm() {
			$('#sysJobIframe')
					.attr("src",
							"baseCust.do?action=findMutiCondition&curPage=1&pageRows=10");
		}

		/**
		 * 单击节点 右侧赋值 
		 * @param treeNode
		 */
		function editOrgForm(treeNode) {
			if (treeNode.pId == "790e94d26d1c462ba9abc7e7bfffc000") {
				$('#sysJobIframe').attr(
						"src",
						"baseCust.do?action=findMutiCondition&curPage=1&pageRows=10&state_code="
								+ treeNode.id);
			} else if (treeNode.country_code.indexOf("D") > -1) {
				$('#sysJobIframe').attr(
						"src",
						"baseCust.do?action=findMutiCondition&curPage=1&pageRows=10&city_code="
								+ treeNode.id);
			} else {
				$('#sysJobIframe').attr(
						"src",
						"baseCust.do?action=findMutiCondition&curPage=1&pageRows=10&region_code="
								+ treeNode.id);
			}
		}
	</script>

</body>
</html>
