<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>员工信息</title>
<link rel="stylesheet" type="text/css" href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/table.css">
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script src="/resource/comm/My97DatePicker/WdatePicker.js"></script>
<script language="JavaScript" src="/resource/js/security/employee.js"></script>
<script language="JavaScript" src="/resource/js/basic/basicPop.js"></script>
<script type="text/javascript"> 
function hhh(){
	var sex=$("#testsex").val();
   var radios=document.getElementsByName("sex");
    for(var i=0;i<radios.length;i++)
    {
        if(sex==radios[i].value)
        {
            radios[i].checked=true;
        }
    }
}
</script>
</head>
<body onload="hhh();">
	<form id="editForm" method="post" >
		<input type="hidden" id="testsex" name="sex1" value="${sysEmployee.sex}"  /> 
		<input type="hidden" name="uuid" value="${sysEmployee.uuid}" /> 
		<input type="hidden" name="useFlag" value="${sysEmployee.useFlag}" /> 
		<input type="hidden" name="curPage" value="${curPage}" />
		<input type="hidden" name="pageRows" value="${pageRows}" />
		
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr style="height:25px">
				<td class="tabSingleHeader"  width="15%">工号</td>
				<td width="35%">
					<input type="text" id="empNo" name="empNo" value="${sysEmployee.empNo }"  style="width:100%" />
				</td>
				<td class="tabSingleHeader"  width="15%">姓名</td>
				<td width="35%">
					<input type="text" id="empName" name="empName" value="${sysEmployee.empName }" style="width:100%"/>
				</td>
			</tr>
			<tr style="height:25px">
				<td class="tabSingleHeader">性别</td>
				<td>
				    <input type="radio" id="sex" name="sex" value="男" />男&nbsp;&nbsp;
					<input type="radio" id="sex" name="sex" value="女" />女
				</td>
				<td class="tabSingleHeader"  width="15%">出生年月</td>
				<td width="35%">
					<input type="text" id="birthday" name="birthday" value="${sysEmployee.birthday }" style="width:100%"  onfocus="WdatePicker({el:'birthday',dateFmt:'yyyy-MM-dd'})" class="readonly"  readonly/>
				</td>
			</tr>
			<tr style="height:25px">
				<td class="tabSingleHeader"  width="15%">身份证号</td>
				<td width="35%">
					<input type="text" id="card" name="card" value="${sysEmployee.card }"  style="width:100%" />
				</td>
				<td class="tabSingleHeader"  width="15%">联系电话</td>
				<td width="35%">
					<input type="text" id="telephone" name="telephone" value="${sysEmployee.telephone }" style="width:100%" />
				</td>
			</tr>
			<tr style="height:25px">
			    <td class="tabSingleHeader"  width="15%">学历</td>
				<td width="35%" >
                     <select id="degress" name="degress">
                      <option value="">===请选择===</option>                   
                     <c:forEach items="${sysEmployeeDegressList}" var="degress" varStatus="status">
                      <option value="${degress.dictKey}" <c:if test="${degress.dictKey==sysEmployee.degress}">selected</c:if>>${degress.dictName}</option>
                     </c:forEach>
                     </select>
				</td>
				<td class="tabSingleHeader"  width="15%">入职日期</td>
				<td width="35%">
					<input type="text" id="entryDate" name="entryDate" value="${sysEmployee.entryDate }" style="width:100%"  onfocus="WdatePicker({el:'entryDate',dateFmt:'yyyy-MM-dd'})" readonly/>
				</td>
			</tr>
			<tr style="height:25px">
				<td class="tabSingleHeader"  width="15%">毕业院校</td>
				<td width="35%">
					<input type="text" id="college" name="college" value="${sysEmployee.college }"  style="width:100%" />
				</td>
				<td class="tabSingleHeader"  width="15%">职位</td>
				<td width="35%">
					<input type="hidden" id="jobId" name="jobId" value=""  />
					<input type="text" id="jobName" name="jobName" value="${sysEmployee.jobName }"  style="width:100%" />
				</td>
			</tr>
			<tr style="height:25px">
				<td class="tabSingleHeader"  width="15%">备注</td>
				<td colspan="3" >
                    <input type="text" id="comments" name="comments" value="${sysEmployee.comments }"  style="width:100%" />
				</td>
			</tr>
			<tr style="height:25px">
				<td class="tabSingleHeader"  width="15%">更新人</td>
				<td width="35%">
					<input type="text" id="updateUser" name="updateUser" value="${sysEmployee.updateUser }"  style="width:100%" disabled/>
				</td>
				<td class="tabSingleHeader"  width="15%">更新时间</td>
				<td width="35%">
					<input type="text" id="updateTime" name="updateTime" value="${sysEmployee.updateTime }" style="width:100%" disabled/>
				</td>
			</tr>
			<tr>
				<td colspan="4" style="text-align:center;">
					<button type="button" onclick="editSaveSysEmployee();" class="btn_bg">确&nbsp;&nbsp;定</button>&nbsp;
					<button type="button" onclick="javascript:art.dialog.close();" class="btn_bg">取&nbsp;&nbsp;消</button>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>
