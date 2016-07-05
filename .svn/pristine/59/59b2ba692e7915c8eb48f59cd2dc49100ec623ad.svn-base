function btnQuery(pagePerRows) {
	queryForm.action = "/bscp/dict.do?action=findMutiCondition&curPage=1&pageRows="+ pagePerRows;
	queryForm.submit();
}
//全选
function selectAll(obj) {
	if (obj.checked == true) {
		$("input[name$='dictCodes']").prop('checked', true);
	} else {
		$("input[name$='dictCodes']").prop('checked', false);
	}
}
// 查询子词条
function findChildsDict(dictCode, pageCurrent, pagePerRows) {
	document.location.href = "/bscp/dict.do?action=findChildsDict&dictCode="
			+ dictCode + "&curPage=" + pageCurrent + "&pageRows=" + pagePerRows;
}
//新增词条
function addDict(pageCurrent, pagePerRows){
	art.dialog.open("/bscp/dict.do?action=addDict&dictParentId="+$("#dictParentId").val()+"&curPage="+pageCurrent+"&pageRows="+pagePerRows, {
		id : 'memdiv1',
		width : 370,
		height : 200,
		title : '新增词条',
		close : function() {
			//刷新父页面
			var win = art.dialog.open.origin;
			win.location.reload();
			return false;
		}
	});
}
//保存词条
function saveDict(){
	editForm.action="/bscp/dict.do?action=saveDict";
	editForm.submit();
}
//编辑词条
function editDict(pageCurrent, pagePerRows){
	var chkDictCodes=$("input[name$='dictCodes']:checked");
	if(chkDictCodes.length==0){
	  tipAlert('warning','提示','选择编辑词条!');
	}else{
		if(chkDictCodes.length==1){
			var dictCode = chkDictCodes[0].value;
			art.dialog.open("/bscp/dict.do?action=editDict&dictCode="+dictCode+"&curPage="+pageCurrent+"&pageRows="+pagePerRows, {
				id : 'memdiv1',
				width : 370,
				height : 200,
				title : '编辑词条',
				close : function() {
				}
			});
		}else{
		  tipAlert('warning','提示','一次只能编辑一个词条');
		}
	}
}
//编辑词条
function editSaveDict(){
	$.ajax({
		type : "POST",
		data : $('#editForm').serialize(),
		dataType : "json",
		url : "/bscp/dict.do?action=editSaveDict",
		success : function(result) {
			if (result.result == "succ") {
				//刷新父页面
				var win = art.dialog.open.origin;
				win.location.reload();
				return false;
			} else {
				tipAlert('error','提示','编辑词条失败');
			}
		},
		error : function(result) {
			tipAlert('error','提示','编辑词条失败');
		}
	});	
}
// 删除词条
function deleteDict(pageCurrent, pagePerRows) {
	var dictCodes = "";
	var chkDictCodes = $("input[name$='dictCodes']:checked");
	var len = chkDictCodes.length;
	for ( var i = 0; i < len; i++) {
		dictCodes = dictCodes + chkDictCodes[i].value + ",";
	}
	if (dictCodes != "") {
		art.dialog({
					content : "<span style='font-size:12px;'>真要删除选中词条吗</span>",
					ok : function() {
						var dictParentId = $("#dictParentId").val();
						document.location.href = "/bscp/dict.do?action=deleteDict&dictCodes="
								+ dictCodes + "&dictParentId=" + dictParentId+"&curPage="+pageCurrent+"&pageRows="+pagePerRows;
					},
					cancelVal : '关闭',
					cancel : true,
					icon:'question',
					title:"询问"
				});
	} else {
		tipAlert('warning','提示','请选择删除词条!');
	}
}

function tipAlert(tipIcon,tiptitle,msg){
	art.dialog({
		content :"<span style='font-size:12px'>"+msg+"</span>",
		id : 'EF893L',
		title : tiptitle,
		icon : tipIcon
	});
}