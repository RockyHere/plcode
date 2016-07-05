//删除二级账号
function delAccount(pageCurrent, pagePerRows) {
	var dels = "";
	var chks = $("input[name$='crm_cust_account_id']:checked");
	var len = chks.length;
	for ( var i = 0; i < len; i++) {
		dels = dels + chks[i].value + ",";
	}
	if (dels != "") {
		art.dialog({
					content : "<span style='font-size:12px;'>真要删除选中二级账号吗</span>",
					ok : function() {
						document.location.href = "/bscp/baseCust.do?action=delAccount&uuids="
								+ dels + "&curPage="+pageCurrent+"&pageRows="+pagePerRows;
					},
					cancelVal : '关闭',
					cancel : true,
					icon:'question',
					title:"询问"
				});
	} else {
		tipAlert('warning','提示','请选择删除二级账号!');
	}
}
// 全选
function selectAll(obj) {
	if (obj.checked == true) {
		$("input[name$='crm_cust_account_id']").prop('checked', true);
	} else {
		$("input[name$='crm_cust_account_id']").prop('checked', false);
	}
}

//保存客户联系人
function addSaveContactsinfo(){
	$.ajax({
		type : "POST",
		data : $('#editForm').serialize(),
		dataType : "json",
		url : "/bscp/baseCust.do?action=addSaveContactsinfo",
		success : function(result) {
			if (result.result == "succ") {
				//刷新父页面
				var win = art.dialog.open.origin;
				win.location.reload();
				return false;
			} else {
				tipAlert('error','提示','新增联系人失败');
			}
		},
		error : function(result) {
			tipAlert('error','提示','新增行业失败');
		}
	});	
}
