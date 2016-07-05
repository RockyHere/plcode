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

//进入新增客户二级账号页面
function addAccount(pageCurrent, pagePerRows) {
	art.dialog.open("/bscp/baseCust.do?action=addAccount&curPage="
			+ pageCurrent + "&pageRows=" + pagePerRows + "&crm_cust_id="
			+ $("#crm_cust_id").val(), {
		id : 'memdiv1',
		width : 600,
		height : 180,
		title : '新增客户收货人',
		close : function() {
			// 刷新父页面
			// var win = art.dialog.open.origin;
			// win.location.reload();
			// return false;
		}
	});
}

//进入二级账号页面
function editAccount(pageCurrent, pagePerRows) {
	var chks = $("input[name$='crm_cust_account_id']:checked");
	if (chks.length == 0) {
		tipAlert('warning', '提示', '请选择一个账号!');
	} else {
		if (chks.length == 1) {
			var uuid = chks[0].value;
			art.dialog.open("/bscp/baseCust.do?action=editAccount&curPage=" + pageCurrent
					+ "&pageRows=" + pagePerRows+"&crm_cust_id="+uuid, {
				id : 'memdiv1',
				width : 600,
				height : 180,
				title : '编辑账号',
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
			tipAlert('warning', '提示', '一次只能编辑一个账号');
		}
	}
}

//编辑二级账号
function editSaveAccount(){
	$.ajax({
		type : "POST",
		data : $('#editForm').serialize(),
		dataType : "json",
		url : "/bscp/baseCust.do?action=editSaveAccount",
		success : function(result) {
			if (result.result == "succ") {
				//刷新父页面
				var win = art.dialog.open.origin;
				win.location.reload();
				return false;
			} else {
				tipAlert('error','提示','编辑客户失败');
			}
		},
		error : function(result) {
			tipAlert('error','提示','编辑客户失败');
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
