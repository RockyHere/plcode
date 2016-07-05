<%@ page language="java" pageEncoding="utf-8"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>增行测试</title>
<script src="/resource/comm/My97DatePicker/WdatePicker.js"></script>
<link rel="stylesheet" type="text/css"	href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css"	href="/resource/css/global/table.css">
<link rel="stylesheet" type="text/css"	href="/resource/css/global/tab.css">
<script language="JavaScript" src="/resource/js/global/bgrow.js"></script>
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script language="JavaScript" src="/resource/js/global/tools.js"></script>
<script language="JavaScript" src="/resource/js/basic/basicPop.js"></script>
<style type="text/css">
.table tbody tr td input.priceInput{
	width:70px;
}
</style>
</head>
<body>
	<table style="display:none;" class="table">
		<tr id="hidTr">
	    	<td align="center">
		  		<input type="checkbox" name="uuid" value="" checked/>
			</td>
			<td>
				<input type="hidden" id="itemId_index" name="itemId" value=""/>
				<input type="text" id="itemCode_index" name="itemCode" value=""  class="find"  title="双击选择" readonly="readonly" />
			</td>
			<td><input type="text" id="itemName_index" name="itemName" value=""  class="find"  title="双击选择" readonly="readonly" /></td>
			<td><input type="text" name="offlineUnloadYearNum" value=""/></td>
			<td><input type="text" name="onlineUnloadYearNum" value=""/></td> 
			<td><input type="text" name="offlineBoatWeight" value=""/></td> 
			<td><input type="text" name="onlineBoatWeight" value=""/></td>
			<td>
				<input type="radio" name="priceType_index" value="0" checked />
				<span>统一价:<input type="text" name="price" value="" class="priceInput" /></span>
				<input type="radio" name="priceType_index" value="1" />
				<span>内贸:<input type="text" name="domesticPrice" value="" class="priceInput" /></span>
				<span>外贸:<input type="text" name="foreignPrice" value="" class="priceInput" /></span>
			</td>
			<td><input type="text" name="comments" value=""/></td>
		</tr>
	</table>
	<div class="titlediv">增行测试</div>
	<form id="addForm" method="post">
		<div id="btnlist">
			<ul>
		   		<li><a onclick="addRow();"><img src="/resource/images/global/btnNew.jpg" align="middle" style="border:0px;"/></a></li>
		   	  	<li><a onclick="funSubmit();"><img src="/resource/images/global/btnSave2.jpg" align="middle" style="border:0px;"/></a></li>
		 		<li><span class="tip">温馨提示：当保存时，未勾选的行将删除!</span></li>
		 	</ul>
	 	</div> 
		<table id="detailTable" class="table">
			<thead>
		   	 	<tr>
		   	 		<td rowspan="2" class="tabTwoRowHeader" style="width:5%;">
		   	 			<input type="checkbox" onclick="selectAllChk(this,'chk')" name="all" style="cursor:hand"/>
	   	 			</td>
	   	 			<td colspan="2" class="tabTwoRowUp" style="width:20%;">货物信息</td>
		   		 	<td colspan="2" class="tabTwoRowUp" style="width:15%;">合同期进口量</td>
			     	<td colspan="2" class="tabTwoRowUp" style="width:15%;">合同期吞吐量</td>
			     	<td rowspan="2" class="tabTwoRowHeader" style="width:25%;">单价</td>
			     	<td rowspan="2" class="tabTwoRowHeader" style="width:20%;">备注</td>
		   		</tr>
		   		<tr>
	   				<td width="20" class="tabTwoRowDown">货物编码</td>
		    		<td width="20" class="tabTwoRowDown">货物名称</td>
		   			<td width="20" class="tabTwoRowDown">下限</td>
			    	<td width="20" class="tabTwoRowDown">上限</td>
			    	<td width="20" class="tabTwoRowDown">下限</td>
			     	<td width="20" class="tabTwoRowDown">上限</td>
		   		</tr>
		   </thead>
		   <tbody>
				<tr data-index="0">
			    	<td align="center">
				  		<input type="checkbox" name="uuid" value="" checked />
					</td>
					<td>
						<input type="hidden" id="itemId_0" name="itemId" value=""/>
						<input type="text" id="itemCode_0" name="itemCode" value="" class="find"  title="双击选择" ondblclick="itemPop('itemId_0','itemCode_0','itemName_0');" readonly="readonly" />
					</td>
					<td><input type="text" id="itemName_0" name="itemName" value="" class="find"  title="双击选择" ondblclick="itemPop('itemId_0','itemCode_0','itemName_0');" readonly="readonly"/></td>
					<td><input type="text" name="offlineUnloadYearNum" value=""/></td>
					<td><input type="text" name="onlineUnloadYearNum" value=""/></td> 
					<td><input type="text" name="offlineBoatWeight" value=""/></td> 
					<td><input type="text" name="onlineBoatWeight" value=""/></td>
					<td>
						<input type="radio" name="priceType_0" value="0" checked/>
						<span>统一价:<input type="text" name="price" value=""  class="priceInput" /></span>
						<input type="radio" name="priceType_0" value="1"/>
						<span>内贸:<input type="text" name="domesticPrice" value="" class="priceInput" /></span>
						<span>外贸:<input type="text" name="foreignPrice" value="" class="priceInput" /></span>
					</td>
					<td><input type="text" name="comments" value=""/></td>
				</tr>
		   </tbody>
	  	</table>
	</form>
<script type="text/javascript">
//明细新增
function addRow(){
	var random = new Date().valueOf().toString()+Math.floor(Math.random()*100).toString();
	var $clone = $("#hidTr").clone(true).removeAttr("id").attr("data-index",random);
	var newTr = $clone.html($clone.html().replace(new RegExp("_index","gm"),"_"+random));
	$("#detailTable tbody").append(newTr);
	$("#itemCode_"+random).on("dblclick",function(){
		itemPop('itemId_'+random,'itemCode_'+random,'itemName_'+random);
	});
	$("#itemName_"+random).on("dblclick",function(){
		itemPop('itemId_'+random,'itemCode_'+random,'itemName_'+random);
	});
	//刷新table样式
	refreshTable("detailTable");
 }
 
function funSubmit(){
	var json="[";
	var $chks=$("#detailTable tbody tr input[name='uuid']:checked");
	$chks.each(function(){
		var $parent = $(this).parent().parent();
		var index = $parent.attr("data-index");
		var itemId = $parent.find("input[name='itemId']").val();
		var itemCode = $parent.find("input[name='itemCode']").val();
		var itemName = $parent.find("input[name='itemName']").val();
		var priceType = $parent.find("input[name='priceType_"+index+"']:checked").val();
		var offlineUnloadYearNum = $parent.find("input[name='offlineUnloadYearNum']").val();
		var onlineUnloadYearNum = $parent.find("input[name='onlineUnloadYearNum']").val();
		var offlineBoatWeight = $parent.find("input[name='offlineBoatWeight']").val();
		var onlineBoatWeight = $parent.find("input[name='onlineBoatWeight']").val();
		var price = $parent.find("input[name='price']").val();
		var domesticPrice = $parent.find("input[name='domesticPrice']").val();
		var foreignPrice = $parent.find("input[name='foreignPrice']").val();
		var comments = $parent.find("input[name='comments']").val();
	   	json+="{'offlineUnloadYearNum':'"+offlineUnloadYearNum
	   		+"','onlineUnloadYearNum':'"+onlineUnloadYearNum
	   		+"','offlineBoatWeight':'"+offlineBoatWeight
	   		+"','onlineBoatWeight':'"+onlineBoatWeight
	   		+"','itemId':'"+itemId
	   		+"','itemCode':'"+itemCode
	   		+"','itemName':'"+itemName
	   		+"','priceType':'"+priceType
	   		+"','price':'"+price
	   		+"','domesticPrice':'"+domesticPrice
	   		+"','foreignPrice':'"+foreignPrice
	   		+"','comments':'"+comments+"'},";
	});
	json+="]";
	alert(json);
 }
</script>
<script language="JavaScript" src="/resource/js/global/toolInit.js"></script>	
</body>
</html>
						      