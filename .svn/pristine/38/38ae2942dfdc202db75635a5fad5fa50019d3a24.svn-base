//删除
function del(name) {
	var chks = $("input[name$='" + name + "']:checked");
	var len = chks.length;
	if (len == 0) {
		alert("请选择要删除的数据！");
		return;
	}
	art.dialog({
		content : "<span style='font-size:12px;'>真要删除选中数据吗</span>",
		ok : function() {
			for (var i = 0; i < len; i++) {
				$("#" + chks[i].value).parent().remove(); // temp为td的id
			}
			//$("input[name$='all']").prop('checked', false);

		},
		cancelVal : '关闭',
		cancel : true,
		icon : 'question',
		title : "询问"
	});

}
// 全选
function selectAll(obj, name) {
	if (obj.checked == true) {
		$("input[name$='"+name+"']").prop('checked', true);
	} else {
		$("input[name$='"+name+"']").prop('checked', false);
	}
}
// 新增一条收货人信息
var receNumber = 0;
var receTrClass;
function addReceivinfo() {
	if (receNumber % 2 == 0) {
		receTrClass = "tr1";
	} else {
		receTrClass = "tr2";
	}
	receNumber++;
	$("#receTable")
			.append(
					"<tr class='"
							+ receTrClass
							+ "'>"
							+ "<td align='center'  id='"
							+ receNumber
							+ "rece"
							+ "'>"
							+ "<input type='checkbox' name='rece' value='"
							+ receNumber
							+ "rece"
							+ "'/>"
							+ "</td>"
							+ "<td align='center'><input name='receive_name' style='width:100%;border-style:none;height:100%;background-color:transparent;text-align:center'></input></td>"
							+ "<td align='center'><input name='receive_idcard' style='width:100%;border-style:none;height:100%;background-color:transparent;text-align:center'></input></td>"
							+ "<td align='center'><input name='receive_phone' style='width:100%;border-style:none;height:100%;background-color:transparent;text-align:center'></input></td>"
							+ "<td align='center'><input name='receive_mobile' style='width:100%;border-style:none;height:100%;background-color:transparent;text-align:center'></input></td>"
							+ "<td align='center'><input name='receive_addr' style='width:100%;border-style:none;height:100%;background-color:transparent;text-align:center'></input></td>"
							+ "<td align='center'><input name='receive_addr_detail' style='width:100%;border-style:none;height:100%;background-color:transparent;text-align:center'></input></td>"
							+ "</tr>");
}

var conNumber = 0;
var conTrClass;
function addContactsinfo() {// 添加联系人信息
	if (conNumber % 2 == 0) {
		conTrClass = "tr1";
	} else {
		conTrClass = "tr2";
	}
	conNumber++;
	$("#conTable")
			.append(
					"<tr class='"
							+ conTrClass
							+ "'>"
							+ "<td align='center'  id='"
							+ conNumber
							+ "con"
							+ "'>"
							+ "<input type='checkbox' name='con' value='"
							+ conNumber
							+ "con"
							+ "'/>"
							+ "</td>"
							+ "<td align='center'><input name='linkman' style='width:100%;border-style:none;height:100%;background-color:transparent;text-align:center'></input></td>"
							+ "<td align='center'><input name='position' style='width:100%;border-style:none;height:100%;background-color:transparent;text-align:center'></input></td>"
							+ "<td align='center'><input name='mobilephone' style='width:100%;border-style:none;height:100%;background-color:transparent;text-align:center'></input></td>"
							+ "<td align='center'><input name='tel' style='width:100%;border-style:none;height:100%;background-color:transparent;text-align:center'></input></td>"
							+ "<td align='center'><input name='fax' style='width:100%;border-style:none;height:100%;background-color:transparent;text-align:center'></input></td>"
							+ "<td align='center'><input name='email' style='width:100%;border-style:none;height:100%;background-color:transparent;text-align:center'></input></td>"
							+ "</tr>");
}

var accNumber = 0;
var accTrClass;
function addAccount() {// 添加二级账号
	if (accNumber % 2 == 0) {
		accTrClass = "tr1";
	} else {
		accTrClass = "tr2";
	}
	accNumber++;
	$("#accTable")
			.append(
					"<tr class='"
							+ accTrClass
							+ "'>"
							+ "<td align='center'  id='"
							+ accNumber
							+ "acc"
							+ "'>"
							+ "<input type='checkbox' name='acc' value='"
							+ accNumber
							+ "acc"
							+ "'/>"
							+ "</td>"
							+ "<td align='center'><input name='cust_account_no' style='width:100%;border-style:none;height:100%;background-color:transparent;text-align:center'></input></td>"
							+ "<td align='center'><input name='cust_account_name' style='width:100%;border-style:none;height:100%;background-color:transparent;text-align:center'></input></td>"
							+ "<td align='center'><input name='memo' style='width:100%;border-style:none;height:100%;background-color:transparent;text-align:center'></input></td>"
							+ "</tr>");
}

function upAccountMessage() {// 提交二级账号数据
	// alert("调用");
	var obj = "[";
	var nameInit = $("input[name$='cust_account_name']");
	var noInit = $("input[name$='cust_account_no']");
	var memoInit = $("input[name$='memo']");
	var nameLen = nameInit.length;
	for (var i = 0; i < nameLen; i++) {
		if (i == 0) {
			obj = obj + "{cust_account_name:'" + nameInit[i].value
					+ "',cust_account_no:'" + noInit[i].value + "',memo:'"
					+ memoInit[i].value + "'}";
		} else {
			obj = obj + ",{cust_account_name:'" + nameInit[i].value
					+ "',cust_account_no:'" + noInit[i].value + "',memo:'"
					+ memoInit[i].value + "'}";
		}
	}
	obj = obj + "]";
	alert("表一" + obj);
	return obj;
}

function upConMessage() {// 提交联系人数据
	var obj = "[";
	var linkman = $("input[name$='linkman']");
	var position = $("input[name$='position']");
	var mobilephone = $("input[name$='mobilephone']");
	var tel = $("input[name$='tel']");
	var fax = $("input[name$='fax']");
	var email = $("input[name$='email']");
	var linkmanLen = linkman.length;
	for (var i = 0; i < linkmanLen; i++) {
		if (i == 0) {
			obj = obj + "{linkman:'" + linkman[i].value + "',position:'"
					+ position[i].value + "',mobilephone:'"
					+ mobilephone[i].value + "',tel:'" + tel[i].value
					+ "',fax:'" + fax[i].value + "',email:'" + email[i].value
					+ "'}";
		} else {
			obj = obj + ",{linkman:'" + linkman[i].value + "',position:'"
					+ position[i].value + "',mobilephone:'"
					+ mobilephone[i].value + "',tel:'" + tel[i].value
					+ "',fax:'" + fax[i].value + "',email:'" + email[i].value
					+ "'}";
		}
	}
	obj = obj + "]";
	alert("表二" + obj);
	return obj;
}

function upReceMessage() {// 提交收货人数据
	var obj = "[";
	var receive_name = $("input[name$='receive_name']");
	var receive_idcard = $("input[name$='receive_idcard']");
	var receive_phone = $("input[name$='receive_phone']");
	var receive_mobile = $("input[name$='receive_mobile']");
	var receive_addr = $("input[name$='receive_addr']");
	var receive_addr_detail = $("input[name$='receive_addr_detail']");
	var receive_nameLen = receive_name.length;
	for (var i = 0; i < receive_nameLen; i++) {
		if (i == 0) {
			obj = obj + "{receive_name:'" + receive_name[i].value
					+ "',receive_idcard:'" + receive_idcard[i].value
					+ "',receive_phone:'" + receive_phone[i].value
					+ "',receive_mobile:'" + receive_mobile[i].value
					+ "',receive_addr:'" + receive_addr[i].value
					+ "',receive_addr_detail:'" + receive_addr_detail[i].value
					+ "'}";
		} else {
			obj = obj + ",{receive_name:'" + receive_name[i].value
					+ "',receive_idcard:'" + receive_idcard[i].value
					+ "',receive_phone:'" + receive_phone[i].value
					+ "',receive_mobile:'" + receive_mobile[i].value
					+ "',receive_addr:'" + receive_addr[i].value
					+ "',receive_addr_detail:'" + receive_addr_detail[i].value
					+ "'}";
		}
	}
	obj = obj + "]";
	alert("表三" + obj);
	return obj;
}

function getEnterprisetype(){//获取企业类型
	var data = {
			pId : "",
		};
	$.ajax({
		type : "POST",
		data : data,
		dataType : "json",
		url : "/bscp/baseCust.do?action=enterprisetype",
		success : function(result) {
			if (result.result == "succ") {
				var objSelectNow = document.getElementById("cust_pro");
				var inner = "";
				$(result.resultlist).each(
						function() {
							inner = inner + "<option value='" + this.name + "'>"
									+ this.name + "</option>";

						});
				objSelectNow.innerHTML = inner;
				return false;
			} else {
				
			}
		},
		error : function(result) {
		}
	});
}

function getProvince(mpId,obj) {// 获取区域
	var data = {
		pId : mpId,
	};
	$.ajax({
		type : "POST",
		data : data,
		dataType : "json",
		url : "/bscp/baseCust.do?action=getProvince",
		success : function(result) {
			if (result.result == "succ") {
				var objSelectNow = document.getElementById(obj);
				var inner = "";
				$(result.resultlist).each(
						function() {
							inner = inner + "<option value='" + this.id + "'>"
									+ this.name + "</option>";

						});
				objSelectNow.innerHTML = inner;
				if(obj=="privince"){
					getProvince($('#privince').val(),"city");
				}
				if(obj=="city"){
					getProvince($('#city').val(),"county");
				}
				return false;
			} else {
				
			}
		},
		error : function(result) {
			
		}
	});
}

$(document).ready(function(){
	getProvince("790e94d26d1c462ba9abc7e7bfffc000","privince");
	getEnterprisetype();
	$('#privince').change(function () {
		getProvince($('#privince').val(),"city");
		});
	$('#city').change(function () {
		getProvince($('#city').val(),"county");
		});
});

