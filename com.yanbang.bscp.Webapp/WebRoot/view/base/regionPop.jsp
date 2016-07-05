<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>机构信息pop</title>
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
<script type="text/javascript" src="/resource/comm/zTree_v3/js/jquery.ztree.excheck-3.5.js"></script>
<script type="text/javascript" src="/resource/comm/zTree_v3/js/jquery.ztree.exedit-3.5.js"></script>
</head>
<body>
<div id="treeMaindiv">
   <div class="treeDiv" style="float:left;">
	  <ul id="treeOrg" class="ztree"></ul>
   </div>
   <div id="editdiv">
        <input type="hidden" id="uuid" name="uuid" value=""/>
        <ul>
          <li>
               <span>代 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;码：</span>
               <input type="text" id="orgCode" name="orgCode" value="" class="inputText" readonly/>
           </li>
          <li>
              <span>名 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;称：</span>
              <input type="text" id="orgName" name="orgName" value="" class="inputText" readonly/>
          </li>
          <li style="text-align:center">
              <button id="btnOK" onclick="selectOrg();" class="btn_bg">选&nbsp;&nbsp;择</button>
          </li>
        </ul>
   </div> 
</div>
<script type="text/javascript">
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
		initOrgForm();
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
				}else{
					art.dialog({
	    			    content: "<span style='font-size:12px'>机构初始化失败</span>",			   
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
	    			    content: "<span style='font-size:12px'>机构初始化失败!</span>",			   
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

	/**
	 * 选择按钮func
	 */
	function selectOrg() {
		var uuid = $("#uuid").val();
		if(uuid=="root" || !uuid){
			alert("请选择一条记录！");
			return;
		}
	    //传递返回的值
	    var retData = {"orgId":$("#uuid").val(),"orgCode":$("#orgCode").val(),"orgName":$("#orgName").val()};
	    art.dialog.data("retData", retData);
		art.dialog.close();
	}

	/**
	 * 初始化或选择根节点 右侧赋值 
	 */
	function initOrgForm(){
		$("#uuid").val("root");	
		$("#orgCode").val("");	
		$("#orgName").val("");
	}

	/**
	 * 单击节点 右侧赋值 
	 * @param treeNode
	 */
	function editOrgForm(treeNode){
		$('#uuid').val(treeNode.id);
		$('#orgCode').val(treeNode.name.substring(0,treeNode.name.indexOf("_")));	
		$('#orgName').val(treeNode.name.substring(treeNode.name.indexOf("_")+1));
	}
</script>
</body>
</html>
