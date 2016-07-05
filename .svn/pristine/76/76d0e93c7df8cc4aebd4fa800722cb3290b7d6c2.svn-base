function btnQuery(pagePerRows) {
	queryForm.action = "/bscp/sysEmployee.do?action=findMutiCondition&curPage=1&pageRows="+ pagePerRows;
	queryForm.submit();
}
//全选
function selectAll(obj) {
	if (obj.checked == true) {
		$("input[name$='uuid']").prop('checked', true);
	} else {
		$("input[name$='uuid']").prop('checked', false);
	}
}

//进入新增员工页面
function addSysEmployee(pageCurrent, pagePerRows){
	art.dialog.open("/bscp/sysEmployee.do?action=addSysEmployee&curPage="+pageCurrent+"&pageRows="+pagePerRows, {
		id : 'memdiv1',
		width : 800,
		height : 300,
		title : '新增员工',
		close : function() {
			//刷新父页面
//			var win = art.dialog.open.origin;
//			win.location.reload();
//			return false;
		}
	});
}

//进入编辑员工页面
function editSysEmployee(pageCurrent, pagePerRows){
	var chks=$("input[name$='uuid']:checked");
	if(chks.length==0){
	  tipAlert('warning','提示','请选择一笔记录!');
	}else{
		if(chks.length==1){
				var uuid = chks[0].value;
				art.dialog.open("/bscp/sysEmployee.do?action=editSysEmployee&uuid="+uuid+"&curPage="+pageCurrent+"&pageRows="+pagePerRows, {
					id :'jjjj' ,
					width : 800,
					height : 300,
					title : '编辑员工',
					close : function() {
					}
				});
		}else{
		  tipAlert('warning','提示','一次只能编辑一笔记录');
		}
		
	}
}

function checks(sex)
{
    var radios=document.getElementById("sex");
    for(var i=0;i<radios.length;i++)
    {
        if(sex==radios[i].value)
        {
            radios[i].checked==true;
        }
    }
}

//删除员工
function delSysEmployee(pageCurrent, pagePerRows) {
	var dels = "";
	var chks = $("input[name$='uuid']:checked");
	var len = chks.length;
	for ( var i = 0; i < len; i++) {
		dels = dels + chks[i].value + ",";
	}
	if (dels != "") {
		art.dialog({
					content : "<span style='font-size:12px;'>真要删除选中员工吗</span>",
					ok : function() {
						document.location.href = "/bscp/sysEmployee.do?action=delSysEmployee&uuids="
								+ dels + "&curPage="+pageCurrent+"&pageRows="+pagePerRows;
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

//保存员工
function addSaveSysEmployee(){
	if(!$("#empNo").val().trim()){
		alert("员工代码不能为空!");
		return;
	}
	$.ajax({
		type : "POST",
		data : $('#editForm').serialize(),
		dataType : "json",
		url : "/bscp/sysEmployee.do?action=addSaveSysEmployee",
		success : function(result) {
			if (result.result == "succ") {
				//刷新父页面
				var win = art.dialog.open.origin;
				win.location.reload();
				return false;
			} else {
				tipAlert('error','提示','新增员工失败');
			}
		},
		error : function(result) {
			tipAlert('error','提示','新增员工失败');
		}
	});	
}

//编辑员工
function editSaveSysEmployee(){
	$.ajax({
		type : "POST",
		data : $('#editForm').serialize(),
		dataType : "json",
		url : "/bscp/sysEmployee.do?action=editSaveSysEmployee",
		success : function(result) {
			if (result.result == "succ") {
				//刷新父页面
				var win = art.dialog.open.origin;
				win.location.reload();
				return false;
			} else {
				tipAlert('error','提示','编辑员工失败');
			}
		},
		error : function(result) {
			tipAlert('error','提示','编辑员工失败');
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

/**
 * 员工岗位信息
 * @param empId
 */
function getEmpPost(empId){
	//弹出员工的岗位组织列表pop(postEmpOne.jsp)
	art.dialog.open('/bscp/sysPostEmp.do?action=queryPostByEmp&empId='+empId, {
		id : 'empPost',
		width : 1000,
		height : 450,
		title : '岗位维护',
		cancel:false,
		close : function() {
			//table中该员工的岗位图标变换
			var length = art.dialog.data("length");
			art.dialog.removeData("length");
			if(length){
				$("#img"+empId).attr("src","/resource/images/global/arrow.gif");
			}else{
				$("#img"+empId).attr("src","/resource/images/global/redarrow.gif");
			}
		}
    });
}
