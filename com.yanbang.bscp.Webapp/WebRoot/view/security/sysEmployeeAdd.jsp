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
<script language="JavaScript" src="/resource/js/security/securityPop.js"></script>
</head>
<body>
	<form id="editForm" method="post">
		<input type="hidden" name="curPage" value="${curPage}" />
		<input type="hidden" name="pageRows" value="${pageRows}" />
		<table  width="100%" border="0" cellspacing="0" cellpadding="0">
			<tr style="height:25px">
				<td class="tabSingleHeader"  width="15%">工号</td>
				<td width="35%">
					<input type="text" id="empNo" name="empNo" value="" style="width:100%"/>
				</td>
				<td class="tabSingleHeader"  width="15%">姓名</td>
				<td width="35%">
					<input type="text" id="empName" name="empName" value="" style="width:100%"/>
				</td>
			</tr>
			<tr style="height:25px">
				<td class="tabSingleHeader" width="15%">性别</td>
				<td width="35%">
					<input type="radio" id="sex" name="sex" value="男" checked="checked"/>男&nbsp;&nbsp;
					<input type="radio" id="sex" name="sex" value="女" />女
				</td>
				<td class="tabSingleHeader"  width="15%">出生年月</td>
				<td width="35%">
					<input type="text" id="birthday" name="birthday" value="" style="width:100%" onfocus="WdatePicker({el:'birthday',dateFmt:'yyyy-MM-dd'})" readonly/>
				</td>
			</tr>
				
			<tr style="height:25px">
				<td class="tabSingleHeader"  width="15%">省份证号码</td>
				<td width="35%">
					<input type="text" id="card" name="card" value=""  style="width:100%" />
				</td>
				<td class="tabSingleHeader"  width="15%">联系电话</td>
				<td width="35%">
					<input type="text" id="telephone" name="telephone" value="" style="width:100%"/>
				</td>
			</tr>
			<tr style="height:25px">
				<td class="tabSingleHeader"  width="15%">学历</td>
				<td width="35%" >
                     <select id="degress" name="degress">
                      <option value="">===请选择===</option>                   
                     <c:forEach items="${sysEmployeeDegressList}" var="degress" varStatus="status">
                      <option value="${degress.dictKey}">${degress.dictName}</option>
                     </c:forEach>
                     </select>
				</td>
				<td class="tabSingleHeader"  width="15%">入职日期</td>
				<td width="35%">
					<input type="text" id="entryDate" name="entryDate" value="" style="width:100%" onfocus="WdatePicker({el:'entryDate',dateFmt:'yyyy-MM-dd'})" class="readonly"  readonly />
				</td>
			</tr>
			<tr style="height:25px">
			    <td class="tabSingleHeader"  width="15%">毕业院校</td>
				<td width="35%">
					<input type="text" id="college" name="college" value="" style="width:100%"/>
				</td>
				<td class="tabSingleHeader"  width="15%">职位</td>
				<td width="35%">
					<input type="hidden" id="jobId" name="jobId" value=""  />
					<input type="hidden" id="jobCode" name="jobCode" value=""  />
					<input type="text" id="jobName" name="jobName" value=""  style="width:80%" />
					<a onclick="sysJobPop('jobId','jobCode','jobName','','','')">选择</a>
				</td>
			</tr>
			<tr style="height:25px">
				<td class="tabSingleHeader"  width="15%">备注</td>
				<td colspan="3">
                    <input type="text" id="comments" name="comments" value="" style="width:100%" />
				</td>
			</tr>
			<tr style="height:35px">
				<td colspan="4" style="text-align:center;">
					<button type="button" onclick="addSaveSysEmployee();" class="btn_bg">确&nbsp;&nbsp;定</button>&nbsp;
					<button type="button" onclick="javascript:art.dialog.close();" class="btn_bg">取&nbsp;&nbsp;消</button>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>
