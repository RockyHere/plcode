String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, '');
};
var setting = {
	view : {
		expandSpeed : "",
		addHoverDom : addHoverDom,
		removeHoverDom : removeHoverDom,
		dblClickExpand : false,
		selectedMulti : false
	},
	edit : {
		enable : true,
		editNameSelectAll : false,
		removeTitle : "删除此节点",
		renameTitle : "编辑此节点",
		showRemoveBtn : function(treeId, treeNode) {
			if (treeNode.level >= 1) {
				return true;
			} else {
				return false;
			}
		},
		showRenameBtn : function(treeId, treeNode) {
			if (treeNode.level >= 1) {
				return true;
			} else {
				return false;
			}
		}
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
		beforeDrag : function(treeId, treeNodes) {
			return false;
		},
		beforeEditName : beforeEditName,
		beforeRemove : beforeRemove,
		beforeRename : beforeRename,
		onClick : onClick,
		// onExpand: onClick, //用于捕获节点被展开的事件回调函数"+"、"-"
		onRemove : function(e, treeId, treeNode) {
		},
		onRename : function(e, treeId, treeNode, isCancel) {
			return false;
		}
	}
};

/**
 * 页面初始化
 */
$(document)
		.ready(
				function() {
					initOrgForm();
					// ----------------------------------------------------------------------
					$
							.ajax({
								type : "POST",
								url : "/bscp/baseRegion.do?action=query",
								dataType : "json",
								cache : true,
								success : function(result) {
									if (result.result == "succ") {
										var zNodes = result.resultlist;
										$.fn.zTree.init($("#treeOrg"), setting,
												zNodes);
									} else {
										art
												.dialog({
													content : "<span style='font-size:12px'>组织机构初始化失败</span>",
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
													content : "<span style='font-size:12px'>组织机构初始化失败!</span>",
													title : "错误信息",
													cancelVal : '关闭',
													icon : 'error'
												});
									}
								}
							});
				});

var log, className = "dark";
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
 * 节点编辑前事件
 * 
 * @param treeId
 * @param treeNode
 * @returns {Boolean}
 */
function beforeEditName(treeId, treeNode) {
	var treeObj = $.fn.zTree.getZTreeObj("treeOrg");
	treeObj.selectNode(treeNode);
	editOrgForm(treeNode);
	return false;
}

/**
 * 节点删除前事件
 * 
 * @param treeId
 * @param treeNode
 * @returns {Boolean}
 */
function beforeRemove(treeId, treeNode) {
	// art.dialog({
	// content : "<span style='font-size:12px;'>真要删除该机械信息（包含所有下属机械信息）吗</span>",
	// ok : function() {
	className = (className === "dark" ? "" : "dark");
	var zTree = $.fn.zTree.getZTreeObj(treeId);
	zTree.selectNode(treeNode);
	// =============================================
	$.ajax({
		type : "POST",
		url : "/bscp/baseRegion.do?action=delOrg&uuid=" + treeNode.id,
		dataType : "json",
		success : function(result) {
			if (result.result == "succ") {
				var treeObj = $.fn.zTree.getZTreeObj("treeOrg");
				var pNode = treeNode.getParentNode();
				treeObj.removeNode(treeNode);
				pNode.finalLevel = true;
				treeObj.updateNode(pNode);
				treeObj.selectNode(pNode);
				if (pNode.id == "root") {
					initOrgForm();
				} else {
					editOrgForm(pNode);
				}
			} else {
				art.dialog({
					content : "<span style='font-size:12px'>删除机械信息错误</span>",
					title : "错误",
					cancelVal : '关闭',
					icon : 'error'
				});
			}
		},
		error : function(result) {
			art.dialog({
				content : "<span style='font-size:12px'>删除组织机构信息Ajax错误</span>",
				title : "错误信息",
				cancelVal : '关闭',
				icon : 'error'
			});
		}
	});
	return false;
	// },
	// cancelVal : '关闭',
	// cancel : true,
	// icon:'question',
	// title:"询问"
	// });
}

/**
 * 节点编辑保存前事件
 * 
 * @param treeId
 * @param treeNode
 * @param newName
 * @param isCancel
 * @returns {Boolean}
 */
function beforeRename(treeId, treeNode, newName, isCancel) {
	className = (className === "dark" ? "" : "dark");
	if (newName.length == 0) {
		alert("节点名称不能为空.");
		var zTree = $.fn.zTree.getZTreeObj("treeOrg");
		setTimeout(function() {
			zTree.editName(treeNode);
		}, 10);
		return false;
	}
	return true;
}

// var newCount = 1;
/**
 * 节点鼠标覆盖事件
 */
function addHoverDom(treeId, treeNode) {
	var sObj = $("#" + treeNode.tId + "_span");
	if (treeNode.editNameFlag || $("#addBtn_" + treeNode.id).length > 0)
		return;

	if (treeNode.level >= 1) {
		var add1Str = "<span class='button adde' id='addBtne_" + treeNode.id
				+ "' title='增加同级节点' onfocus='this.blur();'></span>";
		sObj.append(add1Str);
	}
	if (treeNode.level >= 1) {
		var addStr = "<span class='button add' id='addBtn_" + treeNode.id
				+ "' title='增加下级节点' onfocus='this.blur();'></span>";
		sObj.append(addStr);
	}
	// 点击增加同级按钮
	var btn1 = $("#addBtne_" + treeNode.id);
	if (btn1)
		btn1.bind("click", function() {
			insOrgForm(treeNode.getParentNode());
			return false;
		});

	// 点击增加下级按钮
	var btn = $("#addBtn_" + treeNode.id);
	if (btn)
		btn.bind("click", function() {
			insOrgForm(treeNode);
			return false;
		});
};

/**
 * 节点鼠标移除事件
 * 
 * @param treeId
 * @param treeNode
 */
function removeHoverDom(treeId, treeNode) {
	if (treeNode.level > 0) {
		$("#addBtne_" + treeNode.id).unbind().remove();
		$("#addBtn_" + treeNode.id).unbind().remove();
	}
};

/**
 * 右侧编辑区中保存按钮func
 */
function editOrg() {
	var uuid = $('#uuid').val();
	var parentId = $('#parentId').val();
	// 若uuid为root,即为根节点
	if ($('#uuid').val() == "root") {
		uuid = "";
		parentId = "";
	}
	if ($('#parentId').val() == "root") {
		parentId = "";
	}
	var data = "Bas_region_id=" + uuid + "&parentId=" + parentId
			+ "&country_code=" + $('#country_code').val() + "&country_name="
			+ $('#country_name').val() + "&country_name_eg="
			+ $('#country_name_eg').val() + "&memo=" + $('#memo').val();
	$.ajax({
		type : "POST",
		data : data,
		url : "/bscp/baseRegion.do?action=saveOrg",
		dataType : "json",
		success : function(result) {
			if (result.result == "succ") {
				// --------------------------------------------------
				var treeObj = $.fn.zTree.getZTreeObj("treeOrg");
				var treeNode = treeObj.getNodeByParam("id", $('#uuid').val());
				if ($('#uuid').val() == "root" || treeNode == null) {
					var ptreeNode = treeObj.getNodeByParam("id",
							($('#parentId').val() ? $('#parentId').val()
									: "root"));
					ptreeNode.finalLevel = false;
					treeObj.updateNode(ptreeNode);
					var newNode = treeObj.addNodes(ptreeNode, {
						isParent : false,
						id : result.uuid,
						pId : ptreeNode.id,
						name : $('#country_code').val() + "_"
								+ $('#country_name').val()
					});
					treeObj.selectNode(newNode[0]);
				} else {
					treeNode.name = $('#country_code').val() + "_"
							+ $('#country_name').val();
					treeObj.updateNode(treeNode);
					treeObj.selectNode(treeNode);
				}
				alert("操作成功");
				// --------------------------------------------------
			} else {
				art.dialog({
					content : "<span style='font-size:12px'>保存错误</span>",
					title : "错误",
					cancelVal : '关闭',
					icon : 'error'
				});
			}
		},
		error : function(result) {
			art.dialog({
				content : "<span style='font-size:12px'>保存错误</span>",
				title : "错误信息",
				cancelVal : '关闭',
				icon : 'error'
			});
		}
	});
}

/**
 * 初始化或选择根节点 右侧赋值
 */
function initOrgForm() {
	$('#oprNodeName').text("国家");
	$('#oprNodeType').text("新增");
	$('#uuid').val("root");
	$('#parentId').val("");
	$('#country_code').val("");
	$('#country_name').val("");
	$('#country_name_eg').val("");
	$('#memo').val("");
}

/**
 * 新增节点（非根节点） 右侧赋值
 * 
 * @param treeNode
 */
function insOrgForm(treeNode) {
	$('#oprNodeName').text(treeNode.name);
	$('#oprNodeType').text("新增");
	$('#uuid').val("");
	$('#parentId').val(treeNode.id);
	$('#country_code').val("");
	$('#country_name').val("");
	$('#country_name_eg').val("");
	$('#memo').val("");
}

/**
 * 编辑节点 右侧赋值
 * 
 * @param treeNode
 */
function editOrgForm(treeNode) {
	$('#uuid').val(treeNode.id);
	$('#parentId').val(treeNode.pId);
	$('#oprNodeName').text(treeNode.name);
	$('#oprNodeType').text("编辑");
	$('#country_code').val(
			treeNode.name.substring(0, treeNode.name.indexOf("_")));
	$('#country_name').val(
			treeNode.name.substring(treeNode.name.indexOf("_") + 1));
	if (treeNode.country_name_eg!= "\"null\""){
		$('#country_name_eg').val(treeNode.country_name_eg);
	}else{
		$('#country_name_eg').val("");
	}
	if (treeNode.memo != "\"null\""){
		$('#memo').val(treeNode.memo);
	}else{
		$('#memo').val("");
	}
	
	

}
