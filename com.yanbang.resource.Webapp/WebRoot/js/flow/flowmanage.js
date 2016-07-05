function btnQuery(pagePerRows) {
	queryForm.action = "workflowManage.do?action=findByWorkFlowManageMutil&curPage=1&pageRows="
			+ pagePerRows;
	queryForm.submit();
}
function funView(flowName, version) {
	$.ajax({
		type : "POST",
		data : "flowName=" + flowName + "&version=" + version,
		dataType : "json",
		url : "/bscp/workflowDesign.do?action=previewJpdlImage",
		success : function(result) {
			if (result.success) {
				art.dialog({
					padding : 0,
					title : '查看流程图片',
					content : '<img src=' + result.image_url + ' />',
					lock : false
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

function funStopFlow(deployId) {
	$.post("workflowManage.do?action=suspendFlow", {
		deploymentId : deployId
	}, function(data, status) {
		var result = eval("(" + data + ")");
		alert(result.result);
		var win = art.dialog.open.origin;
		win.location.reload();
	});
}
function funRestoreFlow(deployId) {
	$.post("workflowManage.do?action=resumeFlow", {
		deploymentId : deployId
	}, function(data, status) {
		var result = eval("(" + data + ")");
		alert(result.result);
		var win = art.dialog.open.origin;
		win.location.reload();
	});
}
function funDeleteFlow(deployId, flowname, version, status) {
	art.dialog({   
	    content: "<span style='font-size:12px'>您确定要删除流程定义吗?</span>",   
	    ok: function () {   
	        //=====================================
	    	$.post("workflowManage.do?action=deleteFlow", {
	    		deploymentId : deployId,
	    		flowname : flowname,
	    		version : version,
	    		flowStatus : status
	    	}, function(data, status) {
	    		var result = eval("(" + data + ")");
	    		alert(result.result);
	    		var win = art.dialog.open.origin;
	    		win.location.reload();
	    	});
	    	//=====================================
	    },   
	    cancelVal: '返回',   
	    cancel: true,
	    icon:'question',
	    title:'询问'
	});
}
function funStartFlow(flowKey, flowDeployId) {
	$.post("workflowManage.do?action=startWorkFlow", {
		flowKey : flowKey,
		deploymentId : flowDeployId
	}, function(data, status) {
		var result = eval("(" + data + ")");
		alert(result.result);
		// var win = art.dialog.open.origin;
		// win.location.reload();
	});
}