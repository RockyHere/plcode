
//进入进出口类型下拉页面
function impTypeList(){
	art.dialog.open("/bscp/testSel.do?action=impTypeList", {
		id : 'memdiv1',
		width : 370,
		height : 250,
		title : '进口类型下拉列表',
		close : function() {}
	});
}

//进入贸易类型下拉页面
function tradeTypeList(){
	art.dialog.open("/bscp/testSel.do?action=tradeTypeList", {
		id : 'memdiv1',
		width : 370,
		height : 250,
		title : '贸易类型下拉列表',
		close : function() {}
	});
}
//进入合同类型下拉页面
function contractTypeList(){
	art.dialog.open("/bscp/testSel.do?action=contractTypeList", {
		id : 'memdiv1',
		width : 370,
		height : 250,
		title : '合同类型下拉列表',
		close : function() {}
	});
}

//进入作业类型下拉页面
function taskTypeList(){
	art.dialog.open("/bscp/testSel.do?action=taskTypeList", {
		id : 'memdiv1',
		width : 370,
		height : 250,
		title : '作业类型下拉列表',
		close : function() {}
	});
}

//进入包装类型下拉页面
function packTypeList(){
	art.dialog.open("/bscp/testSel.do?action=packTypeList", {
		id : 'memdiv1',
		width : 370,
		height : 250,
		title : '包装类型下拉列表',
		close : function() {}
	});
}


function tipAlert(tipIcon,tiptitle,msg){
	art.dialog({
		content :"<span style='font-size:12px'>"+msg+"</span>",
		id : 'EF893L',
		title : tiptitle,
		icon : tipIcon
	});
}