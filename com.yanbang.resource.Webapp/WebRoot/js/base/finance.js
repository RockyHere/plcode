function btnQuery(pagePerRows) {
	if (!$("#orgId").val()) {
		alert("请先在左侧选择一个行业!");
		return;
	}
	queryForm.action = "/bscp/baseIndustry.do?action=findMutiCondition&curPage=1&pageRows="
			+ pagePerRows;
	queryForm.submit();
}
// 全选
function selectAll(obj) {
	if (obj.checked == true) {
		$("input[name$='bas_financialins_id']").prop('checked', true);
	} else {
		$("input[name$='bas_financialins_id']").prop('checked', false);
	}
}

// 进入新增金融机构页面
function addSysJob(pageCurrent, pagePerRows) {
	art.dialog.open("/bscp/baseFinance.do?action=addSysJob&curPage="
			+ pageCurrent + "&pageRows=" + pagePerRows, {
		id : 'memdiv1',
		width : 600,
		height : 300,
		title : '新增金融机构',
		close : function() {
			// 刷新父页面
			// var win = art.dialog.open.origin;
			// win.location.reload();
			// return false;
		}
	});
	// chood();
}

// 进入编辑职位页面
function editSysJob(pageCurrent, pagePerRows) {
	var chks = $("input[name$='bas_financialins_id']:checked");
	if (chks.length == 0) {
		tipAlert('warning', '提示', '请选择一个金融机构!');
	} else {
		if (chks.length == 1) {
			var uuid = chks[0].value;
			art.dialog.open(
					"/bscp/baseFinance.do?action=editSysJob&bas_financialins_id="
							+ uuid + "&curPage=" + pageCurrent + "&pageRows="
							+ pagePerRows, {
						id : 'memdiv1',
						width : 600,
						height : 300,
						title : '编辑金融机构',
						close : function() {
						}
					});
		} else {
			tipAlert('warning', '提示', '一次只能编辑一个金融机构');
		}
	}
}

// 删除金融机构
function delSysJob(pageCurrent, pagePerRows) {
	var dels = "";
	var chks = $("input[name$='bas_financialins_id']:checked");
	var len = chks.length;
	for (var i = 0; i < len; i++) {
		dels = dels + chks[i].value + ",";
	}
	if (dels != "") {
		art
				.dialog({
					content : "<span style='font-size:12px;'>真要删除选中金融机构吗</span>",
					ok : function() {
						document.location.href = "/bscp/baseFinance.do?action=delSysJob&uuids="
								+ dels
								+ "&curPage="
								+ pageCurrent
								+ "&pageRows="
								+ pagePerRows
								+ "&parentid="
								+ $("#parentid").val();
					},
					cancelVal : '关闭',
					cancel : true,
					icon : 'question',
					title : "询问"
				});
	} else {
		tipAlert('warning', '提示', '请选择要删除的金融机构!');
	}
}

// 保存金融机构
function addSaveSysJob() {
	$.ajax({
		type : "POST",
		data : $('#editForm').serialize(),
		dataType : "json",
		url : "/bscp/baseFinance.do?action=addSaveSysJob",
		success : function(result) {
			if (result.result == "succ") {
				// 刷新父页面
				var win = art.dialog.open.origin;
				win.location.reload();
				return false;
			} else {
				tipAlert('error', '提示', '新增金融机构失败');
			}
		},
		error : function(result) {
			tipAlert('error', '提示', '新增金融机构失败');
		}
	});
}

// 编辑职位
function editSaveSysJob() {
	$.ajax({
		type : "POST",
		data : $('#editForm').serialize(),
		dataType : "json",
		url : "/bscp/baseFinance.do?action=editSaveSysJob",
		success : function(result) {
			if (result.result == "succ") {
				// 刷新父页面
				var win = art.dialog.open.origin;
				win.location.reload();
				return false;
			} else {
				tipAlert('error', '提示', '编辑金融机构失败');
			}
		},
		error : function(result) {
			tipAlert('error', '提示', '编辑金融机构失败');
		}
	});
}

function tipAlert(tipIcon, tiptitle, msg) {
	art.dialog({
		content : "<span style='font-size:12px'>" + msg + "</span>",
		id : 'EF893L',
		title : tiptitle,
		icon : tipIcon
	});
}

// 进入选择上级金融机构页面
function chood() {
	var storage = window.localStorage;
	storage.setItem("financialins_name", $("#" + "parentname").val());
	storage.setItem("finance_bas_financialins_id", $("#" + "parentid").val());
	art.dialog.open("/bscp/baseFinance.do?action=choice&curPage=1&pageRows=10",
			{
				id : 'memdiv11',
				width : 800,
				height : 500,
				title : '选择上级金融机构',
				close : function() {
					// art.dialog.close();
					var storage = window.localStorage;
					$("#" + "parentname").val(
							storage.getItem("financialins_name"));
					$("#" + "parentid").val(
							storage.getItem("finance_bas_financialins_id"));
				}
			});
}

// 选择上级即金融机构选择事件
function choiceItem(id, name) {
	var storage = window.localStorage;
	storage.setItem("financialins_name", name);
	storage.setItem("finance_bas_financialins_id", id);
	alert("Id=" + id + "name=" + name);
	parent.art.dialog.close();
}
