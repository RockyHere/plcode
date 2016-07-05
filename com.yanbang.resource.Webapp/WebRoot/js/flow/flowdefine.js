function btnQuery(pagePerRows) {
	queryForm.action = "workflowInstance.do?action=workFlowInstanceMutil&curPage=1&pageRows="
			+ pagePerRows;
	queryForm.submit();
}
//历史流程信息查询
function btnQuery2(pagePerRows) {
	queryForm.action = "workflowHistory.do?action=findHistoryFlowInstanceByMutil&curPage=1&pageRows="
			+ pagePerRows;
	queryForm.submit();
}
// 查看
function funViewFlowIntance(processId, flowname,flowKey,version) {
	var url = "/bscp/workflowTrace.do?action=workFlowTrace&flowName="
			+ flowname + "&processId=" + processId+"&flowKey="+flowKey+"&version="+version;
	art.dialog.open(url, {title : '查看流程实例图'});
}
//查看历史流程图
function funViewHistoryFlowIntance(processId, flowname,flowKey,version) {
	var url = "/bscp/workflowTrace.do?action=workFlowHistoryTrace&flowName="
			+ flowname + "&processId=" + processId+"&flowKey="+flowKey+"&version="+version;
	art.dialog.open(url, {title : '查看流程实例图'});
}
//查看执行过程
function funViewHistoryProc(executId) {
	var url = "/bscp/workflowHistory.do?action=findHistoryTaskProc&executId="+executId;
	art.dialog.open(url,{id:'memdiv',width :700,title:'查看执行过程'});
}
//查看
function funTest(deployId) {
	var url = "/bscp/workflowTrace.do?action=findImage&deploymentId=" + deployId;
	art.dialog.open(url, {title : '读取流程实例图'});
}

// 前进
function funNextStepFlowIntance(taskId,processInstanceId,flowKey,version) {
	$.post("workflowInstance.do?action=nextStepFlowIntance", {
		taskId : taskId,
		processInstanceId:processInstanceId,
		flowKey:flowKey,
		version:version
	}, function(data, status) {
		var result = eval("(" + data + ")");
		alert(result.result);
		var win = art.dialog.open.origin;
		win.location.reload();
	});
}
// 回退
function funBackStepFlowIntance(taskId, flowKey,processInstanceId,version) {
	$.post("workflowInstance.do?action=backStepFlowIntance", {
		taskId : taskId,
		flowKey : flowKey,
		version:version,
		processInstanceId:processInstanceId
	}, function(data, status) {
		var result = eval("(" + data + ")");
		alert(result.result);
		var win = art.dialog.open.origin;
		win.location.reload();
	});
}
// 终止
function funEndFlowIntance(processInstanceId,taskId) {
	$.post("workflowInstance.do?action=endFlowIntance", {
		processInstanceId : processInstanceId,
		taskId:taskId
	}, function(data, status) {
		var result = eval("(" + data + ")");
		alert(result.result);
		var win = art.dialog.open.origin;
		win.location.reload();
	});
}
// 删除
function funDeleteFlowIntance(processInstanceId) {
	$.post("workflowInstance.do?action=deleteFlowInstance", {
		processInstanceId : processInstanceId
	}, function(data, status) {
		var result = eval("(" + data + ")");
		alert(result.result);
		var win = art.dialog.open.origin;
		win.location.reload();
	});
}
//流程审批之查看项目管理流程
function funViewPrjectStep(){
	var url = "/projectWebApp/projectCheck.do?action=projectCheckIndex";
	window.location.href = url;
}
//指标管理申请表单
function funViewIndexStep(bussId){
	if(bussId.substr(0,1)=='s'){
		var url = "/indicatorWebApp/indexSwapReq.do?action=indexSwapView&type=0&bussId="+bussId.substr(1);
		window.location.href = url;
	}else{
		var url = "/indicatorWebApp/indexAttachReq.do?action=indexAttachView&type=0&bussId="+bussId.substr(1);
		window.location.href = url;
	}
}

//报销申请表单
function funViewReimburseStep(bussId){
	var url = "/reimburseWebApp/reimburseApply.do?action=findReimburseApplyDetail&btype=allTask&type=0&applyId="+bussId;
	window.location.href = url;
}