function btnQuery(pagePerRows) {
	if(!$("#orgId").val()){
		alert("请先在左侧选择一个机构!");
		return;
	}
	queryForm.action = "/bscp/sysJob.do?action=findMutiCondition&curPage=1&pageRows="+ pagePerRows;
	queryForm.submit();
}
//全选
function selectAll(obj) {
	if (obj.checked == true) {
		$("input[name$='uuid']"  ).prop('checked', true);
	} else {
		$("input[name$='uuid']").prop('checked', false);
	}
}

//进入新增职位页面
function addSysJob(pageCurrent, pagePerRows){
	if(!$("#orgId").val()){
		alert("请先在左侧选择一个机构!");
		return;
	}
	art.dialog.open("/bscp/sysJob.do?action=addSysJob&curPage="+pageCurrent+"&pageRows="+pagePerRows+"&orgId="+$("#orgId").val(), {
		id : 'memdiv1',
		width : 370,
		height : 200,
		title : '新增职位',
		close : function() {
			//刷新父页面
//			var win = art.dialog.open.origin;
//			win.location.reload();
//			return false;
		}
	});
}

//进入编辑职位页面
function editSysJob(pageCurrent, pagePerRows){
	var chks=$("input[name$='uuid']:checked");
	if(chks.length==0){
	  tipAlert('warning','提示','请选择一笔记录!');
	}else{
		if(chks.length==1){
			var uuid = chks[0].value;
			art.dialog.open("/bscp/sysJob.do?action=editSysJob&uuid="+uuid+"&curPage="+pageCurrent+"&pageRows="+pagePerRows, {
				id : 'memdiv1',
				width : 370,
				height : 200,
				title : '编辑职位',
				close : function() {
				}
			});
		}else{
		  tipAlert('warning','提示','一次只能编辑一笔记录');
		}
	}
}

//删除职位
function delSysJob(pageCurrent, pagePerRows) {
	var dels = "";
	var chks = $("input[name$='uuid']:checked");
	var len = chks.length;
	for ( var i = 0; i < len; i++) {
		dels = dels + chks[i].value + ",";
	}
	if (dels != "") {
		art.dialog({
					content : "<span style='font-size:12px;'>真要删除选中职位吗</span>",
					ok : function() {
						document.location.href = "/bscp/sysJob.do?action=delSysJob&uuids="
								+ dels + "&curPage="+pageCurrent+"&pageRows="+pagePerRows+"&orgId="+$("#orgId").val();
					},
					cancelVal : '关闭',
					cancel : true,
					icon:'question',
					title:"询问"
				});
	} else {
		tipAlert('warning','提示','请选择删除记录!');
	}
}

//保存职位
function addSaveSysJob(){
	if(!$("#jobCode").val().trim()){
		alert("职位代码不能为空!");
		return;
	}
	$.ajax({
		type : "POST",
		data : $('#editForm').serialize(),
		dataType : "json",
		url : "/bscp/sysJob.do?action=addSaveSysJob",
		success : function(result) {
			if (result.result == "succ") {
				//刷新父页面
				var win = art.dialog.open.origin;
				win.location.reload();
				return false;
			} else {
				tipAlert('error','提示','新增职位失败');
			}
		},
		error : function(result) {
			tipAlert('error','提示','新增职位失败');
		}
	});	
}

//编辑职位
function editSaveSysJob(){
	$.ajax({
		type : "POST",
		data : $('#editForm').serialize(),
		dataType : "json",
		url : "/bscp/sysJob.do?action=editSaveSysJob",
		success : function(result) {
			if (result.result == "succ") {
				//刷新父页面
				var win = art.dialog.open.origin;
				win.location.reload();
				return false;
			} else {
				tipAlert('error','提示','编辑职位失败');
			}
		},
		error : function(result) {
			tipAlert('error','提示','编辑职位失败');
		}
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

