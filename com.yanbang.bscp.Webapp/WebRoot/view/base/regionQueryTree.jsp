<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>机构查询树</title>
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
<style type="text/css">
body {
	overflow: scroll;
	overflow-y: auto;
	overflow-x: hidden;
	background-color: aliceblue;
}
</style>
</head>
<body>
<input type="hidden" id="defaultId" name="defaultId" value="${defaultId}" />
<div class="treeDiv" style="float:left;width:95%;height:100%;margin-top:-10px;">
     <ul id="treeOrg" class="ztree" style="width:95%;height:98%;"></ul>
</div>
<script type="text/javascript">
//ztree配置
var setting = {
		view: {
				expandSpeed:"",
				dblClickExpand: false,
				selectedMulti: false
		},
		data: {
				key: {title:"tip"},
				simpleData: {enable: true}
		},
		
		callback: {
				//beforeDrag: function(treeId, treeNodes){return false;},
				//beforeEditName: beforeEditName,
				//beforeRemove: beforeRemove,
				//beforeRename: beforeRename,
				onClick :  onClick,
				//onExpand: onClick,	//用于捕获节点被展开的事件回调函数"+"、"-"
				//onRemove: function(e, treeId, treeNode){},
				//onRename: function(e, treeId, treeNode, isCancel){return false;}
				}
		};

	/**
	 * 页面初始化
	 */
	$(document).ready(function(){    
		//----------------------------------------------------------------------
		$.ajax({
			type: "POST",
			url: "/bscp/baseRegion.do?action=queryPop",				
			dataType: "json",
			cache: true,
			success:function(result){
				if(result.result=="succ"){
					var zNodes=result.resultlist;
					$.fn.zTree.init($("#treeOrg"), setting, zNodes);
					//树初始化选中默认值
					var defaultId = $("#defaultId").val()
					if(defaultId){
						var treeObj= $.fn.zTree.getZTreeObj("treeOrg");
						var treeNode=treeObj.getNodeByParam("id",defaultId);
						treeObj.selectNode(treeNode);
						//treeObj.setting.callback.onClick(null, treeObj.setting.treeId, treeNode);//调用事件  
					}
				}else{
					art.dialog({
	    			    content: "<span style='font-size:12px'>组织机构初始化失败</span>",			   
	    			    title:"错误",
	    			    cancelVal: '关闭',
	    			    icon: 'error'
	    			});
				}			
			},
			error: function(result){
	     		if(result.status==200){
	     			art.dialog({
	    			    content: "<span style='font-size:12px'>"+result.responseText+"</span>",			   
	    			    title:"错误信息",
	    			    cancelVal: '关闭',
	    			    icon: 'error'
	    			});
	     		}else{
	     			art.dialog({
	    			    content: "<span style='font-size:12px'>组织机构初始化失败!</span>",			   
	    			    title:"错误信息",
	    			    cancelVal: '关闭',
	    			    icon: 'error'
	    			});
	     		}
			}
		});	
	});

	/**
	 * 单击事件
	 */
	function onClick(event, treeId, treeNode, clickFlag) {
		window.parent.onClick(treeNode);
		var zTree = $.fn.zTree.getZTreeObj(treeId);
		if (treeNode.isParent) {
			zTree.expandNode(treeNode);
		} 
		if(treeNode.id=="root"){
			initOrgForm();
		}else{
			editOrgForm(treeNode);
		}
		return true;
	}
</script>
</body>
</html>
