//删除职位
function delContactsinfo(pageCurrent, pagePerRows) {
	var dels = "";
	var chks = $("input[name$='crm_cust_contactsinfo_id']:checked");
	var len = chks.length;
	for ( var i = 0; i < len; i++) {
		dels = dels + chks[i].value + ",";
	}
	if (dels != "") {
		art.dialog({
					content : "<span style='font-size:12px;'>真要删除选中联系人吗</span>",
					ok : function() {
						document.location.href = "/bscp/baseCust.do?action=delContactsinfo&uuids="
								+ dels + "&curPage="+pageCurrent+"&pageRows="+pagePerRows;
					},
					cancelVal : '关闭',
					cancel : true,
					icon:'question',
					title:"询问"
				});
	} else {
		tipAlert('warning','提示','请选择删除联系人!');
	}
}
// 全选
function selectAll(obj) {
	if (obj.checked == true) {
		$("input[name$='crm_cust_contactsinfo_id']").prop('checked', true);
	} else {
		$("input[name$='crm_cust_contactsinfo_id']").prop('checked', false);
	}
}

//进入新增客户联系人页面
function addContactsinfo(pageCurrent, pagePerRows){
	art.dialog.open("/bscp/baseCust.do?action=addContactsinfo&curPage="+pageCurrent+"&pageRows="+pagePerRows+"&crm_cust_id="+$("#crm_cust_id").val(), {
		id : 'memdiv1',
		width : 600,
		height : 250,
		title : '新增客户联系人',
		close : function() {
			//刷新父页面
//			var win = art.dialog.open.origin;
//			win.location.reload();
//			return false;
		}
	});
}

//进入客户联系人编辑页面
function editContactsinfo(pageCurrent, pagePerRows) {
	var chks = $("input[name$='crm_cust_contactsinfo_id']:checked");
	if (chks.length == 0) {
		tipAlert('warning', '提示', '请选择一位联系人!');
	} else {
		if (chks.length == 1) {
			var uuid = chks[0].value;
			art.dialog.open("/bscp/baseCust.do?action=editContactsinfo&curPage=" + pageCurrent
					+ "&pageRows=" + pagePerRows+"&crm_cust_id="+uuid, {
				id : 'memdiv1',
				width : 600,
				height : 250,
				title : '编辑联系人',
				close : function() {
					// 刷新父页面
					// var win = art.dialog.open.origin;
					// win.location.reload();
					// return false;
				}
			});
			
			/*art.dialog.open(
					"/bscp/baseIndustry.do?action=editSysJob&bas_industry_id="
							+ uuid + "&curPage=" + pageCurrent + "&pageRows="
							+ pagePerRows, {
						id : 'memdiv1',
						width : 370,
						height : 200,
						title : '编辑行业',
						close : function() {
						}
					});*/
		} else {
			tipAlert('warning', '提示', '一次只能编辑一位联系人');
		}
	}

}

//编辑联系人
function eidtSaveContactsinfo(){
	$.ajax({
		type : "POST",
		data : $('#editForm').serialize(),
		dataType : "json",
		url : "/bscp/baseCust.do?action=editSaveContactsinfo",
		success : function(result) {
			if (result.result == "succ") {
				//刷新父页面
				var win = art.dialog.open.origin;
				win.location.reload();
				return false;
			} else {
				tipAlert('error','提示','编辑联系人失败');
			}
		},
		error : function(result) {
			tipAlert('error','提示','编辑联系人失败');
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