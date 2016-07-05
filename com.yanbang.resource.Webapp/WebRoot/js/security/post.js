function btnQuery(pagePerRows) {
	if(!$("#orgId").val()){
		alert("请先在左侧选择一个机构!");
		return;
	}
	queryForm.action = "/bscp/sysPost.do?action=findMutiCondition&curPage=1&pageRows="+ pagePerRows;
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

//进入新增岗位页面
function addPost(pageCurrent, pagePerRows){
	if(!$("#orgId").val()){
		alert("请先在左侧选择一个机构!");
		return;
	}
	art.dialog.open("/bscp/sysPost.do?action=addPost&curPage="+pageCurrent+"&pageRows="+pagePerRows+"&orgId="+$("#orgId").val(), {
		id : 'memdiv1',
		width : 370,
		height : 200,
		title : '新增岗位',
		close : function() {
			//刷新父页面
//			var win = art.dialog.open.origin;
//			win.location.reload();
//			return false;
		}
	});
}

//进入编辑岗位页面
function editPost(pageCurrent, pagePerRows){
	var chks=$("input[name$='uuid']:checked");
	if(chks.length==0){
	  tipAlert('warning','提示','请选择一笔记录!');
	}else{
		if(chks.length==1){
			var uuid = chks[0].value;
			art.dialog.open("/bscp/sysPost.do?action=editPost&uuid="+uuid+"&curPage="+pageCurrent+"&pageRows="+pagePerRows, {
				id : 'memdiv1',
				width : 370,
				height : 200,
				title : '编辑岗位',
				close : function() {
				}
			});
		}else{
		  tipAlert('warning','提示','一次只能编辑一笔记录');
		}
	}
}

//删除岗位
function delPost(pageCurrent, pagePerRows) {
	var dels = "";
	var chks = $("input[name$='uuid']:checked");
	var len = chks.length;
	for ( var i = 0; i < len; i++) {
		dels = dels + chks[i].value + ",";
	}
	if (dels != "") {
		art.dialog({
					content : "<span style='font-size:12px;'>真要删除选中岗位吗</span>",
					ok : function() {
						document.location.href = "/bscp/sysPost.do?action=delPost&uuids="
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

//保存岗位
function addSavePost(){
	if(!$("#postCode").val().trim()){
		alert("岗位代码不能为空!");
		return;
	}
	$.ajax({
		type : "POST",
		data : $('#editForm').serialize(),
		dataType : "json",
		url : "/bscp/sysPost.do?action=addSavePost",
		success : function(result) {
			if (result.result == "succ") {
				//刷新父页面
				var win = art.dialog.open.origin;
				win.location.reload();
				return false;
			} else {
				tipAlert('error','提示','新增岗位失败');
			}
		},
		error : function(result) {
			tipAlert('error','提示','新增岗位失败');
		}
	});	
}

//编辑岗位
function editSavePost(){
	$.ajax({
		type : "POST",
		data : $('#editForm').serialize(),
		dataType : "json",
		url : "/bscp/sysPost.do?action=editSavePost",
		success : function(result) {
			if (result.result == "succ") {
				//刷新父页面
				var win = art.dialog.open.origin;
				win.location.reload();
				return false;
			} else {
				tipAlert('error','提示','编辑岗位失败');
			}
		},
		error : function(result) {
			tipAlert('error','提示','编辑岗位失败');
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

