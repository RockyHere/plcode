/**
 * 员工pop
 * @param empuuidInput 员工id
 * @param empNoInput 员工工号
 * @param empNameInput 员工姓名
 */
function empPop(empuuidInput,empNoInput,empNameInput){
	art.dialog.open('/bscp/sysEmployee.do?action=sysEmployeePop&curPage=1&pageRows=10', {
		id : 'empPop',
		width : 800,
		height : 500,
		title : '员工信息pop',
		close : function() {
		    //获取返回的值
			var retData = art.dialog.data("retData");
			//栏位赋值
			if(retData){
				if(empuuidInput){
					$("#"+empuuidInput).val(retData.empuuid);
				}
				if(empNoInput){
					$("#"+empNoInput).val(retData.empNo);
				}
				if(empNameInput){
					$("#"+empNameInput).val(retData.empName);
				}
			}
			//删除art.dialog缓存
			art.dialog.removeData('retData');
		}
    });
}

/**
 * 岗位pop
 * @param postIdInput 岗位id
 * @param postCodeInput 岗位code
 * @param postNameInput 岗位name
 * @param orgIdInput 机构id
 * @param orgCodeInput 机构code
 * @param orgNameInput 机构name
 */
function postPop(postIdInput,postCodeInput,postNameInput,orgIdInput,orgCodeInput,orgNameInput){
	art.dialog.open('/bscp/sysPost.do?action=indexPop&curPage=1&pageRows=10', {
		id : 'postPop',
		width : 800,
		height : 500,
		title : '机构岗位pop',
		close : function() {
		    //获取返回的值
			var retData = art.dialog.data("retData");
			//栏位赋值
			if(retData){
				if(postIdInput){
					$("#"+postIdInput).val(retData.postId);
				}
				if(postCodeInput){
					$("#"+postCodeInput).val(retData.postCode);
				}
				if(postNameInput){
					$("#"+postNameInput).val(retData.postName);
				}
				if(orgIdInput){
					$("#"+orgIdInput).val(retData.orgId);
				}
				if(orgCodeInput){
					$("#"+orgCodeInput).val(retData.orgCode);
				}
				if(orgNameInput){
					$("#"+orgNameInput).val(retData.orgName);
				}
			}
			//删除art.dialog缓存
			art.dialog.removeData('retData');
		}
    });
}


/**
 * 职位pop
 * @param jobIdInput 职位id
 * @param jobCodeInput 职位code
 * @param jobNameInput 职位name
 * @param orgIdInput 机构id
 * @param orgCodeInput 机构code
 * @param orgNameInput 机构name
 */
function sysJobPop(jobIdInput,jobCodeInput,jobNameInput,orgIdInput,orgCodeInput,orgNameInput){
	art.dialog.open('/bscp/sysJob.do?action=sysJobOrgPop&curPage=1&pageRows=10', {
		id : 'sysJobPop',
		width : 800,
		height : 500,
		title : '机构职位pop',
		close : function() {
		    //获取返回的值
			var retData = art.dialog.data("retData");
			//栏位赋值
			if(retData){
				if(jobIdInput){
					$("#"+jobIdInput).val(retData.jobId);
				}
				if(jobCodeInput){
					$("#"+jobCodeInput).val(retData.jobCode);
				}
				if(jobNameInput){
					$("#"+jobNameInput).val(retData.jobName);
				}
				if(orgIdInput){
					$("#"+orgIdInput).val(retData.orgId);
				}
				if(orgCodeInput){
					$("#"+orgCodeInput).val(retData.orgCode);
				}
				if(orgNameInput){
					$("#"+orgNameInput).val(retData.orgName);
				}
			}
			//删除art.dialog缓存
			art.dialog.removeData('retData');
		}
    });
}

/**
 * 机构pop
 * @param orgIdInput 机构id
 * @param orgCodeInput 机构code
 * @param orgNameInput 机构name
 */
function orgPop(orgIdInput,orgCodeInput,orgNameInput){
	art.dialog.open('/bscp/sysOrg.do?action=indexPop', {
		id : 'orgPop',
		width : 800,
		height : 500,
		title : '机构pop',
		close : function() {
		    //获取返回的值
			var retData = art.dialog.data("retData");
			//栏位赋值
			if(retData){
				if(orgIdInput){
					$("#"+orgIdInput).val(retData.orgId);
				}
				if(orgCodeInput){
					$("#"+orgCodeInput).val(retData.orgCode);
				}
				if(orgNameInput){
					$("#"+orgNameInput).val(retData.orgName);
				}
			}
			//删除art.dialog缓存
			art.dialog.removeData('retData');
		}
    });
}