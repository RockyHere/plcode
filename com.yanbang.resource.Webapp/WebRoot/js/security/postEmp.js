//全选
function selectAll(obj) {
	if (obj.checked == true) {
		$("input[name$='uuid']").prop('prop', true);
	} else {
		$("input[name$='uuid']").prop('prop', false);
	}
}

//进入新增员工岗位页面
function addPostByEmp(empId){
	art.dialog.open('/bscp/sysPost.do?action=indexPop&curPage=1&pageRows=10', {
		id : 'pop1',
		width : 800,
		height : 500,
		title : '岗位pop',
		close : function() {
			//获取返回的值
			var retData = art.dialog.data("retData");
			if(retData){
				//删除art.dialog缓存
				art.dialog.removeData('retData');
				//调用ajax
				var dataSrc ="empId="+empId+"&postId="+retData.postId;
				$.ajax({
					type : "POST",
					data : dataSrc,
					dataType : "json",
					url : "/bscp/sysPostEmp.do?action=addSavePostByEmp",
					success : function(result) {
						if (result.result == "succ") {
							window.location.reload();
							return false;
						} else {
							tipAlert('error','提示','新增员工岗位失败');
						}
					},
					error : function(result) {
						tipAlert('error','提示','新增员工岗位失败');
					}
				});
			}
		}
    });
}

//进入编辑员工岗位页面
function editPostByEmp(empId){
	var chks=$("input[name$='uuid']:checked");
	if(chks.length==0){
	  tipAlert('warning','提示','请选择一笔记录!');
	}else{
		if(chks.length==1){
				var uuid = chks[0].value;
				art.dialog.open('/bscp/sysPost.do?action=indexPop&curPage=1&pageRows=10', {
					id : 'pop1',
					width : 800,
					height : 500,
					title : '岗位pop',
					close : function() {
					    //获取返回的值
						var retData = art.dialog.data("retData");
						if(retData){
							//删除art.dialog缓存
							art.dialog.removeData('retData');
				            //调用ajax
							var dataSrc ="empId="+empId+"&postId="+retData.postId+"&uuid="+uuid;
							$.ajax({
								type : "POST",
								data : dataSrc,
								dataType : "json",
								url : "/bscp/sysPostEmp.do?action=editSavePostByEmp",
								success : function(result) {
									if (result.result == "succ") {
//										var win = art.dialog.open.origin;
										window.location.reload();
										return false;
									} else {
										tipAlert('error','提示','编辑员工岗位失败');
									}
								},
								error : function(result) {
									tipAlert('error','提示','编辑员工岗位失败');
								}
							});
						}
					}
			    });
		}else{
		  tipAlert('warning','提示','一次只能编辑一笔记录');
		}
	}
}

//删除员工岗位信息
function delPostByEmp(empId) {
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
						document.location.href = "/bscp/sysPostEmp.do?action=delPostByEmp&uuids="
								+ dels+"&empId="+empId;
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

//关闭按钮功能
function closeDialog(empId){
	//tr数量去掉首行
	var length=$("#tableMain tr").length-1;
	art.dialog.data("length",length);
	art.dialog.close();
}

function tipAlert(tipIcon,tiptitle,msg){
	art.dialog({ 
		content :"<span style='font-size:12px'>"+msg+"</span>",
		id : 'EF893L',
		title : tiptitle,
		icon : tipIcon
	});
}
