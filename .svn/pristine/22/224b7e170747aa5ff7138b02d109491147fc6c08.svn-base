function btnQuery(pagePerRows) {
	if(!$("#orgId").val()){
		alert("请先在左侧选择一个行业!");
		return;
	}
	queryForm.action = "/bscp/baseIndustry.do?action=findMutiCondition&curPage=1&pageRows="+ pagePerRows;
	queryForm.submit();
}
//全选
function selectAll(obj) {
	if (obj.checked == true) {
		$("input[name$='bas_industry_id']"  ).prop('checked', true);
	} else {
		$("input[name$='bas_industry_id']").prop('checked', false);
	}
}

//进入新增行业页面
function addSysJob(pageCurrent, pagePerRows){
	if(!$("#parentId").val()){
		alert("请先在左侧选择一个行业!");
		return;
	}
	art.dialog.open("/bscp/baseIndustry.do?action=addSysJob&curPage="+pageCurrent+"&pageRows="+pagePerRows+"&parentId="+$("#parentId").val(), {
		id : 'memdiv1',
		width : 600,
		height : 180,
		title : '新增行业',
		close : function() {
			//刷新父页面
//			var win = art.dialog.open.origin;
//			win.location.reload();
//			return false;
		}
	});
	//chood();
}

//进入编辑职位页面
function editSysJob(pageCurrent, pagePerRows){
	var chks=$("input[name$='bas_industry_id']:checked");
	if(chks.length==0){
	  tipAlert('warning','提示','请选择一笔记录!');
	}else{
		if(chks.length==1){
			var uuid = chks[0].value;
			art.dialog.open("/bscp/baseIndustry.do?action=editSysJob&bas_industry_id="+uuid+"&curPage="+pageCurrent+"&pageRows="+pagePerRows, {
				id : 'memdiv1',
				width : 370,
				height : 200,
				title : '编辑行业',
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
	var chks = $("input[name$='bas_industry_id']:checked");
	var len = chks.length;
	for ( var i = 0; i < len; i++) {
		dels = dels + chks[i].value + ",";
	}
	if (dels != "") {
		art.dialog({
					content : "<span style='font-size:12px;'>真要删除选中行业吗</span>",
					ok : function() {
						document.location.href = "/bscp/baseIndustry.do?action=delSysJob&uuids="
								+ dels + "&curPage="+pageCurrent+"&pageRows="+pagePerRows+"&parentId="+$("#parentId").val();
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
	if(!$("#industry_code").val().trim()){
		alert("职位代码不能为空!");
		return;
	}
	$.ajax({
		type : "POST",
		data : $('#editForm').serialize(),
		dataType : "json",
		url : "/bscp/baseIndustry.do?action=addSaveSysJob",
		success : function(result) {
			if (result.result == "succ") {
				//刷新父页面
				var win = art.dialog.open.origin;
				win.location.reload();
				return false;
			} else {
				tipAlert('error','提示','新增行业失败');
			}
		},
		error : function(result) {
			tipAlert('error','提示','新增行业失败');
		}
	});	
}

//编辑职位
function editSaveSysJob(){
	$.ajax({
		type : "POST",
		data : $('#editForm').serialize(),
		dataType : "json",
		url : "/bscp/baseIndustry.do?action=editSaveSysJob",
		success : function(result) {
			if (result.result == "succ") {
				//刷新父页面
				var win = art.dialog.open.origin;
				win.location.reload();
				return false;
			} else {
				tipAlert('error','提示','编辑行业失败');
			}
		},
		error : function(result) {
			tipAlert('error','提示','编辑行业失败');
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

//进入选择上级行业页面
function chood(){
	art.dialog.open("/bscp/baseIndustry.do?action=choice&curPage=1&pageRows=10", {
		id : 'memdiv11',
		width : 700,
		height : 500,
		title : '选择上级行业',
		close : function() {
			//art.dialog.close();
			var storage = window.localStorage;
			$("#"+"industry_name_and_code").val(storage.getItem("industry_name_and_code"));
			$("#"+"parentId").val(storage.getItem("parentId"));
		}
	});
}

//选择上级行业选择事件
function choiceItem(id,name,code){
	var storage = window.localStorage;
	storage.setItem("industry_name_and_code",code+'-'+name);
	storage.setItem("parentId", id);
	//alert("&parentId="+id+"code"+code+"name"+name);
	 parent.art.dialog.close();
}

