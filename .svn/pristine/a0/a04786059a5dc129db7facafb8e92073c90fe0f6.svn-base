function btnQuery(pagePerRows) {
	queryForm.action = "workflowDesign.do?action=findByMutil&curPage=1&pageRows="
			+ pagePerRows;
	queryForm.submit();
}
function selAll(obj) {
	if (obj.checked) {
		$("[name='fdcheck']").attr("checked", 'true');
	} else {
		$("[name='fdcheck']").removeAttr("checked");
	}
}
function funDesign() {
	window.location.href = "/bscp/designer/index.jsp";
}
function fundel(curPage, pageRows) {
	var flowNames = "";
	var versions="";
	var count = 0;
	$("[name='fdcheck'][checked]").each(function() {
		flowNames += $(this).val() + "#";
		versions += $(this).attr("ver") + "#";
		count++;
	});
	if (flowNames == "") {
		art.dialog({
			content : "<span style='font-size:12px'>请选择记录！</span>",
			title : "提示",
			cancelVal : '关闭',
			icon : 'warning'
		});
	} else {
		$.ajax({
			type : "POST",
			data : "flowNames=" + flowNames+"&versions="+versions,
			dataType : "json",
			url : "/bscp/workflowDesign.do?action=deleteFlowDesign",
			success : function(result) {
				if (result.result == "succ") {
					// 刷新父页面
					var win = art.dialog.open.origin;
					win.location.reload();
					return false;
				} else {
					art.dialog({
						content : '删除流程设计失败',
						id : 'EF893L',
						title : '错误',
						icon : 'error'
					});
				}
			},
			error : function(result) {
				art.dialog({
					content : '删除流程设计',
					id : 'EF893L',
					title : '错误提示',
					icon : 'error'
				});
			}
		});
	}
}

function openDesign(flowName,version){
	window.location.href ="/bscp/designer/open.jsp?flowName="+flowName+"&version="+version;
}

function funView(flowName,version){
	$.ajax({
		type : "POST",
		data : "flowName=" + flowName+"&version="+version,
		dataType : "json",
		url : "/bscp/workflowDesign.do?action=previewJpdlImage",
		success : function(result) {
			if (result.success) {
				art.dialog({
				    padding: 0,
				    title: '查看流程图片',
				    content: '<img src='+result.image_url+' />',
				    lock: false
				});
			} else {
				art.dialog({
					content : "<span style='font-size:12px'>查看流程图片失败</span>",
					id : 'EF893L',
					title : '错误',
					icon : 'error'
				});
			}
		},
		error : function(result) {
			art.dialog({
				content : "<span style='font-size:12px'>查看流程图片失败</span>",
				id : 'EF893L',
				title : '错误提示',
				icon : 'error'
			});
		}
	});
}

function deployFlow(flowName,version){
	$.ajax({
		type : "POST",
		data : "flowName=" + flowName+"&version="+version,
		dataType : "json",
		url : "/bscp/workflowManage.do?action=deployFlow",
		success : function(result) {
			art.dialog({
				content : "<span style='font-size:12px'>"+result.result+"</span>",
				title : "提示",
				cancelVal : '关闭',
				icon : 'warning'
			});
			var win = art.dialog.open.origin;
			win.location.reload();
		},
		error : function(result) {
			art.dialog({
				content : "<span style='font-size:12px'>流程部署失败</span>",
				title : '错误提示',
				icon : 'error'
			});
		}
	});
}