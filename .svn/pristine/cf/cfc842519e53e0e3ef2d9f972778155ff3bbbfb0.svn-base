function btnQuery(pagePerRows) {

	queryForm.action = "/bscp/baseCust.do?action=findMutiCondition&curPage=1&pageRows="
			+ pagePerRows;
	queryForm.submit();

}

// 选中所有
function selectMainAll(obj) {
	if (obj.checked == true) {
		$("input[name$='crm_cust_id']").prop('checked', true);
	} else {
		$("input[name$='crm_cust_id']").prop('checked', false);
	}
}

// 进入新增行业页面
function addSysJob(pageCurrent, pagePerRows) {
	// alert("开发中!");
	art.dialog.open("/bscp/baseCust.do?action=addSysJob&curPage=" + pageCurrent
			+ "&pageRows=" + pagePerRows, {
		id : 'memdiv1',
		width : 1000,
		height : 700,
		title : '新增客户',
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
	var chks = $("input[name$='crm_cust_id']:checked");
	if (chks.length == 0) {
		tipAlert('warning', '提示', '请选择一位客户!');
	} else {
		if (chks.length == 1) {
			var uuid = chks[0].value;
			art.dialog.open("/bscp/baseCust.do?action=editSysJob&curPage="
					+ pageCurrent + "&pageRows=" + pagePerRows
					+ "&crm_cust_id=" + uuid, {
				id : 'memdiv1',
				width : 1000,
				height : 700,
				title : '编辑客户',
				close : function() {
					// 刷新父页面
					// var win = art.dialog.open.origin;
					// win.location.reload();
					// return false;
				}
			});

			/*
			 * art.dialog.open(
			 * "/bscp/baseIndustry.do?action=editSysJob&bas_industry_id=" + uuid +
			 * "&curPage=" + pageCurrent + "&pageRows=" + pagePerRows, { id :
			 * 'memdiv1', width : 370, height : 200, title : '编辑行业', close :
			 * function() { } });
			 */
		} else {
			tipAlert('warning', '提示', '一次只能编辑一位客户');
		}
	}

}

// 删除职位
function delSysJob(pageCurrent, pagePerRows) {
	var dels = "";
	var chks = $("input[name$='crm_cust_id']:checked");
	var len = chks.length;
	for (var i = 0; i < len; i++) {
		dels = dels + chks[i].value + ",";
	}
	if (dels != "") {
		art
				.dialog({
					content : "<span style='font-size:12px;'>真要删除选中行业吗</span>",
					ok : function() {
						document.location.href = "/bscp/baseCust.do?action=delSysJob&crm_cust_id="
								+ dels
								+ "&curPage="
								+ pageCurrent
								+ "&pageRows=" + pagePerRows;
					},
					cancelVal : '关闭',
					left : '10%',
					cancel : true,
					icon : 'question',
					title : "询问"
				});
	} else {
		tipAlert('warning', '提示', '请选择删除记录!');
	}
}

// 保存职位
function addSaveCust() {
	$('#rece').val(upReceMessage());
	$('#con').val(upConMessage());
	$('#acc').val(upAccountMessage());

	$.ajax({
		type : "POST",
		data : $('#editForm').serialize(),
		dataType : "json",
		url : "/bscp/baseCust.do?action=addSaveSysJob",
		success : function(result) {
			if (result.result == "succ") {
				// 刷新父页面
				var win = art.dialog.open.origin;
				win.location.reload();
				return false;
			} else {
				tipAlert('error', '提示', '新增客户失败');
			}
		},
		error : function(result) {
			tipAlert('error', '提示', '新增客户失败');
		}
	});
}

/*
 * // 编辑职位 function editSaveSysJob() { $.ajax({ type : "POST", data :
 * $('#editForm').serialize(), dataType : "json", url :
 * "/bscp/baseIndustry.do?action=editSaveSysJob", success : function(result) {
 * if (result.result == "succ") { // 刷新父页面 var win = art.dialog.open.origin;
 * win.location.reload(); return false; } else { tipAlert('error', '提示',
 * '编辑行业失败'); } }, error : function(result) { tipAlert('error', '提示', '编辑行业失败'); }
 * }); }
 */

function tipAlert(tipIcon, tiptitle, msg) {
	art.dialog({
		content : "<span style='font-size:12px'>" + msg + "</span>",
		id : 'EF893L',
		title : tiptitle,
		left : '10%',
		icon : tipIcon
	});
}

// 进入选择上级行业页面
function chood() {
	art.dialog.open(
			"/bscp/baseIndustry.do?action=choice&curPage=1&pageRows=10", {
				id : 'memdiv11',
				width : 700,
				height : 500,
				title : '选择上级行业',
				close : function() {
					// art.dialog.close();
					var storage = window.localStorage;
					$("#" + "industry_name_and_code").val(
							storage.getItem("industry_name_and_code"));
					$("#" + "parentId").val(storage.getItem("parentId"));
				}
			});
}

// 选择上级行业选择事件
function choiceItem(id, name, code) {
	var storage = window.localStorage;
	storage.setItem("industry_name_and_code", code + '-' + name);
	storage.setItem("parentId", id);
	parent.art.dialog.close();
}

function initConForm() {// 获取联系人信息列表
	$('#sysJobIframe').attr("src",
			"baseCust.do?action=findMutiConditionCon&curPage=1&pageRows=10");
}
function initReceForm() {// 获取收货人信息列表
	$('#receIframe').attr("src",
			"baseCust.do?action=findMutiConditionRece&curPage=1&pageRows=10");
}

function initAccForm() {// 获取客户二级账号列表
	$('#accIframe').attr("src",
			"baseCust.do?action=findMutiConditionAcc&curPage=1&pageRows=10");
}
initReceForm();
initConForm();
initAccForm();
