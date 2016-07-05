<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>pop测试页面</title>
<link rel="stylesheet" type="text/css" href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css" href="/resource/css/global/table.css">
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script language="JavaScript" src="/resource/js/global/bgrow.js"></script>
<script language="JavaScript" src="/resource/js/global/page.js"></script>
<script language="JavaScript" src="/resource/js/basic/basicPop.js"></script>
<script language="JavaScript" src="/resource/js/business/businessPop.js"></script>
<script language="JavaScript" src="/resource/js/security/securityPop.js"></script>
<script language="JavaScript" src="/resource/js/plan/planPop.js"></script>
<script language="JavaScript" src="/resource/js/task/taskPop.js"></script>
<script language="JavaScript" src="/resource/js/inventory/inventoryPop.js"></script>
<script language="JavaScript" src="/resource/js/intXT/intXTPop.js"></script>
<script language="JavaScript" src="/resource/js/intHG/intHGPop.js"></script>
</head>
<body>
   <fieldset>
     <legend>堆位匹配_int00</legend>
     	堆场ID: <input type="text" id="storeId_int00" name="storeId_int00" value="">
     	堆场Code：<input type="text" id="storeCode_int00"  name="storeCode_int00" value="">
     	 堆场名称：<input type="text" id="storeName_int00"  name="storeName_int00" value="">
     	堆位ID：  <input type="text" id="locationId_int00" name="locationId_int00" value="">
     	堆位Code：<input type="text" id="locationCode_int00"  name="locationCode_int00" value="">
     	堆位名称：<input type="text" id="locationName_int00" name="locationName_int00" value="">
     	<a onclick="matchLocationPop('storeId_int00','storeName_int00','locationId_int00','locationName_int00','storeCode_int00','locationCode_int00')">选择</a>
   </fieldset>
   <fieldset>
     <legend>堆存信息_inv00</legend>
     	堆场ID: <input type="text" id="storeId_inv00" name="storeId_inv00" value="">
     	堆场Code：<input type="text" id="storeCode_inv00"  name="storeCode_inv00" value="">
     	 堆场名称：<input type="text" id="storeName_inv00"  name="storeName_inv00" value="">
     	堆位ID：  <input type="text" id="locationId_inv00" name="locationId_inv00" value="">
     	堆位Code：<input type="text" id="locationCode_inv00"  name="locationCode_inv00" value="">
     	堆位名称：<input type="text" id="locationName_inv00" name="locationName_inv00" value="">
     	<a onclick="locationPop('storeId_inv00','storeName_inv00','locationId_inv00','locationName_inv00','storeCode_inv00','locationCode_inv00')">选择</a>
   </fieldset>
   <fieldset>
     <legend>堆存信息_inv01</legend>
     	堆场ID: <input type="text" id="storeId_inv01" name="storeId_inv01" value="">
     	 堆场名称：<input type="text" id="storeName_inv01"  name="storeName_inv01" value="">
     	堆位ID：  <input type="text" id="locationId_inv01" name="locationId_inv01" value="">
     	堆位名称：<input type="text" id="locationName_inv01" name="locationName_inv01" value="">
     	<a onclick="storeLocationPop('','','storeId_inv01','storeName_inv01','locationId_inv01','locationName_inv01')">选择</a>
   </fieldset>
   <fieldset>
     <legend>海关匹配堆场堆位信息_inv02</legend>
     	堆场ID: <input type="text" id="storeId_inv02" name="storeId_inv02" value="">
     	堆场Code：<input type="text" id="storeCode_inv02"  name="storeCode_inv02" value="">
     	 堆场名称：<input type="text" id="storeName_inv02"  name="storeName_inv02" value="">
     	堆位Code：<input type="text" id="locationCode_inv02"  name="locationCode_inv02" value="">
     	<a onclick="matchLocationPop('storeId_inv02','storeCode_inv02','storeName_inv02','locationCode_inv02')">选择</a>
   </fieldset>
   
   <fieldset>
    <legend>国籍信息_bas01</legend>
		    国籍id：<input type="text" id="countryId_bas01" name="countryId_bas01" value=""/>
		    国籍编码：<input type="text" id="countryCode_bas01" name="countryCode_bas01" value=""/>
		    国籍名称：<input type="text" id="countryName_bas01" name="countryName_bas01" value=""/>
      	<a onclick="countryPop('countryId_bas01','countryCode_bas01','countryName_bas01')">选择</a>
  </fieldset>
   <fieldset>
    <legend>港口信息_bas02</legend>
		    港口id：<input type="text" id="portId_bas02" name="portId_bas02" value=""/>
		    港口code：<input type="text" id="portCode_bas02" name="portCode_bas02" value=""/>
		    港口name：<input type="text" id="portName_bas02" name="portName_bas02" value=""/>
		    所属国籍id：<input type="text" id="ctryId_bas02" name="ctryId_bas02" value=""/>
		    所属国籍name：<input type="text" id="ctryName_bas02" name="ctryName_bas02" value=""/>
      	<a onclick="portPop('portId_bas02','portCode_bas02','portName_bas02','ctryId_bas02','ctryName_bas02')">选择</a>
  </fieldset>
  <fieldset>
    <legend>泊位信息_bas03</legend>
    	    泊位id：<input type="text" id="berthuuid_bas03" name="berthuuid_bas03" value=""/>
		    港口code：<input type="text" id="berthCode_bas03" name="berthCode_bas03" value=""/>
		    港口name：<input type="text" id="berthName_bas03" name="berthName_bas03" value=""/>
		    港口id：<input type="text" id="portId_bas03" name="portId_bas03" value=""/>
		    港口code：<input type="text" id="portName_bas03" name="portName_bas03" value=""/>
		    港口name：<input type="text" id="compId_bas03" name="compId_bas03" value=""/>
		    所属国籍id：<input type="text" id="compCode_bas03" name="compCode_bas03" value=""/>
		    所属国籍name：<input type="text" id="compName_bas03" name="compName_bas03" value=""/>
      	<a onclick="berthPop('berthuuid_bas03','berthCode_bas03','berthName_bas03','portId_bas03','portName_bas03','compId_bas03','compCode_bas03','compName_bas03')">选择</a>
  </fieldset>
  <fieldset>
    <legend>机械信息_bas04</legend>
		   机械id：<input type="text" id="machineId_bas04" name="machineId_bas04" value=""/>
		   机械code：<input type="text" id="machineCode_bas04" name="machineCode_bas04" value=""/>
		   机械name：<input type="text" id="machineName_bas04" name="machineName_bas04" value=""/>
      	<a onclick="machinePop('machineId_bas04','machineCode_bas04','machineName_bas04')">选择</a>
  </fieldset>
  <fieldset>
    <legend>货物信息_bas05</legend>
		   货物id：<input type="text" id="itemId_bas05" name="itemId_bas05" value=""/>
		   货物code：<input type="text" id="itemCode_bas05" name="itemCode_bas05" value=""/>
		   货物name：<input type="text" id="itemName_bas05" name="itemName_bas05" value=""/>
      	<a onclick="itemPop('itemId_bas05','itemCode_bas05','itemName_bas05')">选择</a>
  </fieldset>
  <fieldset>
    <legend>铁路局信息_bas06</legend>
		   铁路局id：<input type="text" id="rlwayId_bas06" name="rlwayId_bas06" value=""/>
		   铁路局code：<input type="text" id="rlwayCode_bas06" name="rlwayCode_bas06" value=""/>
		   铁路局name：<input type="text" id="rlwayName_bas06" name="rlwayName_bas06" value=""/>
      	<a onclick="railWayPop('rlwayId_bas06','rlwayCode_bas06','rlwayName_bas06','1')">选择</a>
  </fieldset>
   <fieldset>
    <legend>车队信息_bas07</legend>
		   车队id：<input type="text" id="motorcadeId_bas07" name="motorcadeId_bas07" value=""/>
		   车队code：<input type="text" id="motorcadeCode_bas07" name="motorcadeCode_bas07" value=""/>
		   车队name：<input type="text" id="motorcadeName_bas07" name="motorcadeName_bas07" value=""/>
      	<a onclick="motorPop('motorcadeId_bas07','motorcadeCode_bas07','motorcadeName_bas07')">选择</a>
  </fieldset>
  <fieldset>
    <legend>车辆信息_bas08</legend>
    	车辆id：<input type="text" id="carId_bas08" name="carId_bas08" value=""/>
    	车牌号：<input type="text" id="carNo_bas08" name="carNo_bas08" value=""/>
    	车队id：<input type="text" id="motorcadeId_bas08" name="motorcadeId_bas08" value=""/>
   		车队name：<input type="text" id="motorcadeName_bas08" name="motorcadeName_bas08" value=""/>    
      <a onclick="carInfoPop('carId_bas08','carNo_bas08','motorcadeId_bas08','motorcadeName_bas08')">选择</a>
  </fieldset>
  <fieldset>
    <legend>产地信息_bas09</legend>
    	产地id：<input type="text" id="orginId_bas09" name="orginId_bas09" value=""/>
    	产地代码：<input type="text" id="orginCode_bas09" name="orginCode_bas09" value=""/>
    	产地名称：<input type="text" id="originName_bas09" name="originName_bas09" value=""/>
    	所属国籍：<input type="text" id="ctryId_bas09" name="ctryId_bas09" value=""/>  
   		所属国籍名称：<input type="text" id="ctryName_bas09" name="ctryName_bas09" value=""/>    
      <a onclick="originPop('orginId_bas09','orginCode_bas09','originName_bas09','ctryId_bas09','ctryName_bas09')">选择</a>
  </fieldset>
   <fieldset>
    <legend>台办费用_bas10</legend>
    	台班费用uuid：<input type="text" id="uuid_bas10" name="uuid_bas10" value=""/>
    	机械uuid：<input type="text" id="machId_bas10" name="machId_bas10" value=""/>
    	机械代码：<input type="text" id="machCode_bas10" name="machCode_bas10" value=""/>
    	机械名称：<input type="text" id="machName_bas10" name="machName_bas10" value=""/>
      <a onclick="machineTeamFeePop('uuid_bas10','machId_bas10','machCode_bas10','machName_bas10','','')">选择</a>
  </fieldset>
  <fieldset>
    <legend>机械选择_bas11</legend>
		机械uuid：<input type="text" id="machId" name="machId" value="" />
		机械code：<input type="text" id="machCode" name="machCode" value="" />
		机械名称：<input type="text" id="machName" name="machName" value="" />
  	<a onclick="machineOnePop('machId','machCode','machName')">选择</a>
  </fieldset>
    <legend>皮带秤信息_bas11</legend>
		   皮带id：<input type="text" id="beltId_bas11" name="beltId_bas11" value=""/>
		   皮带code：<input type="text" id="beltCode_bas11" name="beltCode_bas11" value=""/>
		   皮带name：<input type="text" id="beltName_bas11" name="beltName_bas11" value=""/>
      	<a onclick="beltPop('beltId_bas11','beltCode_bas11','beltName_bas11')">选择</a>
  </fieldset>
  <fieldset>
    <legend>作业地点信息_bas12</legend>
		   作业地点id：<input type="text" id="taskAdressId_bas12" name="taskAdressId_bas12" value=""/>
		   作业地点code：<input type="text" id="taskAdressCode_bas12" name="taskAdressCode_bas12" value=""/>
		   作业地点name：<input type="text" id="taskAdressName_bas12" name="taskAdressName_bas12" value=""/>
      	<a onclick="taskAdressPop('taskAdressId_bas12','taskAdressCode_bas12','taskAdressName_bas12')">选择</a>
  </fieldset>
  <fieldset>
    <legend>作业要求_bas13</legend>
    	作业要求id：<input type="text" id="requirementId" name="requirementId" value=""/>
    	排序字:<input type="text" id="requirementOrd" name="requirementOrd" value=""/>
    	作业要求：<input type="text" id="requirementTask" name="requirementTask" value=""/>
      <a onclick="requirementPop('requirementId','requirementOrd','requirementTask')">选择</a>
  </fieldset>
   <fieldset>
    <legend>客户(企业、公司)信息_bus01</legend>
		    客户id：<input type="text" id="customId_bus01" name="customId_bus01" value=""/>
		    客户代码：<input type="text" id="customCode_bus01" name="customCode_bus01" value=""/>
		    客户名称：<input type="text" id="customName_bus01" name="customName_bus01" value=""/>
		    客户简称：<input type="text" id="simpleName_bus01" name="simpleName_bus01" value=""/>
		    联系人：<input type="text" id="linkMan_bus01" name="linkMan_bus01" value=""/>
		    联系电话：<input type="text" id="telephone_bus01" name="telephone_bus01" value=""/>
      	<a onclick="customPop('customId_bus01','customCode_bus01','customName_bus01','simpleName_bus01','linkMan_bus01','telephone_bus01')">选择</a>
  </fieldset>
  <fieldset>
    <legend>操作过程信息_bus02</legend>
     	 操作过程名称：<input type="text" id="operationName_bus02" name="operationName_bus02" value=""/>
        <a onclick="operationPop('operationName_bus02')">选择</a>
  </fieldset>
   <fieldset>
    <legend>合同信息_bus03</legend>
    	合同id:<input  type="text" id="contractId_bus03",name="contractId_bus03" value=""> 
    	合同代码：<input type="text" id="contractCode_bus03" name="contractCode_bus03" value=""/>
    	合同名称：<input type="text" id="contractName_bus03" name="contractName_bus03" value=""/>
    	合同类型code：<input type="text" id="contractTypeCode_bus03" name="contractTypeCode_bus03" value=""/>
    	合同类型：<input type="text" id="contractTypeName_bus03" name="contractTypeName_bus03" value=""/>
      <a onclick="contractPop('contractId_bus03','contractCode_bus03','contractName_bus03','contractTypeCode_bus03','contractTypeName_bus03');">选择</a>
   </fieldset>
   <legend>合同信息_bus04</legend>
    	合同id:<input  type="text" id="contractId_bus04",name="contractId_bus04" value=""> 
    	合同代码：<input type="text" id="contractCode_bus04" name="contractCode_bus04" value=""/>
    	合同名称：<input type="text" id="contractName_bus04" name="contractName_bus04" value=""/>
    	乙方id：<input type="text" id="BCustomId_bus04" name="BCustomId_bus04" value=""/>
    	乙方Code：<input type="text" id="BCustomCode_bus04" name="BCustomCode_bus04" value=""/>
    	乙方Name：<input type="text" id="BCustomName_bus04" name="BCustomName_bus04" value=""/>
      <a onclick="contractPayPop('contractId_bus04','contractCode_bus04','contractName_bus04','BCustomId_bus04','BCustomCode_bus04','BCustomName_bus04');">选择</a>
   </fieldset>
   
   <fieldset>
    <legend>员工信息_sys01</legend>
    	员工id：<input type="text" id="empuuid_sys01" name="empuuid_sys01 value=""/>
    	员工工号：<input type="text" id="empNo_sys01" name="empNo_sys01" value=""/>
    	员工姓名：<input type="text" id="empName_sys01" name="empName_sys01" value=""/>
      <a onclick="empPop('empuuid_sys01','empNo_sys01','empName_sys01')">选择</a>
  </fieldset>
   <fieldset>
    <legend>岗位信息_sys02</legend>
    	岗位id：<input type="text" id="postId_sys02" name="postId_sys02" value=""/>
    	岗位Code：<input type="text" id="postCode_sys02" name="postCode_sys02" value=""/>
    	岗位Name：<input type="text" id="postName_sys02" name="postName_sys02" value=""/>
    	机构id：<input type="text" id="orgId_sys02" name="orgId_sys02" value=""/>
    	机构Code：<input type="text" id="orgCode_sys02" name="orgCode_sys02" value=""/>
    	机构Name：<input type="text" id="orgName_sys02" name="orgName_sys02" value=""/>
      <a onclick="postPop('postId_sys02','postCode_sys02','postName_sys02','orgId_sys02','orgCode_sys02','orgName_sys02')">选择</a>
  </fieldset>
  <fieldset>
    <legend >机构pop_sys03</legend>
    	机构id：<input type="text" id="orgId_sys03" name="orgId_sys03" value=""/>
    	机构Code：<input type="text" id="orgCode_sys03" name="orgCode_sys03" value=""/>
    	机构Name：<input type="text" id="orgName_sys03" name="orgName_sys03" value=""/>
      <a onclick="orgPop('orgId_sys03','orgCode_sys03','orgName_sys03')">选择</a>
  </fieldset>
  <fieldset>
    <legend>船舶信息_plan01</legend>
    	船舶id：<input type="text" id="boatId_plan01" name="boatId_plan01" value=""/>
    	船舶代码：<input type="text" id="chineseName_plan01" name="chineseName_plan01" value=""/>
    	船舶名称：<input type="text" id="englishName_plan01" name="englishName_plan01" value=""/>
    	IMO：<input type="text" id="iMO_plan01" name="iMO_plan01" value=""/>
    	MMSI：<input type="text" id="mMSI_plan01" name="mMSI_plan01" value=""/>
      <a onclick="boatPop('boatId_plan01','chineseName_plan01','englishName_plan01','iMO_plan01','mMSI_plan01')">选择</a>
  </fieldset>
   <fieldset>
    <legend>船舶预报_plan02</legend>
    	船舶当前状态：<input type="text" id="finishFlag_plan02" name="finishFlag_plan02" value=""/>
    	预报id：<input type="text" id="forecastId_plan02" name="forecastId_plan02" value=""/>
    	预报编号：<input type="text" id="forecastCode_plan02" name="forecastCode_plan02" value=""/>
    	船舶中文名称：<input type="text" id="chineseName_plan02" name="chineseName_plan02" value=""/>
       	船舶英文名称：<input type="text" id="englishName_plan02" name="englishName_plan02" value=""/>
       	航次号：<input type="text" id="voyageNo_plan02" name="voyageNo_plan02" value=""/>
    	预计停靠泊位ID：<input type="text" id="planBerthId_plan02" name="planBerthId_plan02" value=""/>
                        预计停靠泊位名称：<input type="text" id="planBerthName_plan02" name="planBerthName_plan02" value=""/>
                        预计抵港日期：<input type="text" id="planArriveDate_plan02" name="planArriveDate_plan02" value=""/>              
    	实际停靠泊位ID：<input type="text" id="realBerthId_plan02" name="realBerthId_plan02" value=""/>
                        实际停靠泊位名称：<input type="text" id="realBerthName_plan02" name="realBerthName_plan02" value=""/>
                        实际抵港日期：<input type="text" id="realArriveDate_plan02" name="realArriveDate_plan02" value=""/>
                        贸易类型：<input type="text" id="tradeCode_plan02" name="tradeCode_plan02" value=""/>
               <input type="text" id="tradeName_plan02" name="tradeName_plan02" value=""/>         
                        船舶总吨数：<input type="text" id="gross_plan02" name="gross_plan02" value=""/>
                        进出口类型：<input type="text" id="impTypeCode_plan02" name="impTypeCode_plan02" value=""/>
                <input type="text" id="impTypeName_plan02" name="impTypeName_plan02" value=""/> 
      <a onclick="boatForecastPop('B','finishFlag_plan02','forecastId_plan02','forecastCode_plan02','chineseName_plan02','englishName_plan02','voyageNo_plan02','planBerthId_plan02','planBerthName_plan02','planArriveDate_plan02','realBerthId_plan02','realBerthName_plan02','realArriveDate_plan02','tradeCode_plan02','tradeName_plan02','gross_plan02','impTypeCode_plan02','impTypeName_plan02')">选择</a>
      <hr>
                 货物明细id：<input type="text" id="forecastItemId_plan02" name="forecastItemId_plan02" value=""/>
    	货物id：<input type="text" id="itemId_plan02" name="itemId_plan02" value=""/>
    	货物code：<input type="text" id="itemCode_plan02" name="itemCode_plan02" value=""/>
       	货物name：<input type="text" id="itemName_plan02" name="itemName_plan02" value=""/>
       	货代：<input type="text" id="itemAgentName_plan02" name="itemAgentName_plan02" value=""/>
       	货物比重：<input type="text" id="proportion_plan02" name="proportion_plan02" value=""/>
       	报关单号：<input type="text" id="declareNo_plan02" name="declareNo_plan02" value=""/>
       	货主：<input type="text" id="ownerName_plan02" name="ownerName_plan02" value=""/>
       	产地：<input type="text" id="originName_plan02" name="originName_plan02" value=""/>
       	提单数：<input type="text" id="ladingBillton_plan02" name="ladingBillton_plan02" value=""/>
       	<a onclick="selBoatForecastItemPop()">货物明细选择</a>
  </fieldset>
  <fieldset>
    <legend>船舶预报(卸船/已预报、抵港)_plan03</legend>
    	预报id：<input type="text" id="forecastId_plan03" name="forecastId_plan03" value=""/>
    	预报编号：<input type="text" id="forecastCode_plan03" name="forecastCode_plan03" value=""/>
    	船舶中文名称：<input type="text" id="chineseName_plan03" name="chineseName_plan03" value=""/>
       	船舶英文名称：<input type="text" id="englishName_plan03" name="englishName_plan03" value=""/>
       	航次号：<input type="text" id="voyageNo_plan03" name="voyageNo_plan03" value=""/>
      <a onclick="boatForecastOnePop('forecastId_plan03','forecastCode_plan03','chineseName_plan03','englishName_plan03','voyageNo_plan03')">选择</a>
  </fieldset>
  <fieldset>
    <legend>船舶舱号Pop_plan04</legend>
    	舱号Code：<input type="text" id="itemClassNoCode_plan04" name="itemClassNoCode_plan04" value=""/>
    	舱号Name：<input type="text" id="itemClassNoName_plan04" name="itemClassNoName_plan04" value=""/>
      <a onclick="itemClassNoPop('itemClassNoCode_plan04','itemClassNoName_plan04')">选择</a>
  </fieldset>
  <fieldset>
    <legend>卸船预报明细_plan05</legend>
    	预报id：<input type="text" id="forecastId_plan05" name="forecastId_plan05" value=""/>
    	预报明细id：<input type="text" id="forecastItemId_plan05" name="forecastItemId_plan05" value=""/>
    	提运单号：<input type="text" id="loadingNo_plan05" name="loadingNo_plan05" value=""/>
       	货主：<input type="text" id="ownerName_plan05" name="ownerName_plan05" value=""/>
       	货物Name：<input type="text" id="itemName_plan05" name="itemName_plan05" value=""/>
       	船舶名称：<input type="text" id="chineseName_plan05" name="chineseName_plan05" value=""/>
       	货物id：<input type="text" id="itemId_plan05" name="itemId_plan05" value=""/>
       	预报code：<input type="text" id="forecastCode_plan05" name="forecastCode_plan05" value=""/>
      <a onclick="forecastItemPop('forecastId_plan05','forecastItemId_plan05','loadingNo_plan05','ownerName_plan05','itemName_plan05','chineseName_plan05','itemId_plan05','forecastCode_plan05')">选择</a>
  </fieldset>
  <fieldset>
    <legend>港口作业合同_task01</legend>
    	港口作业合同id：<input type="text" id="loadShipAssignId_task01" name="loadShipAssignId_task01" value=""/>
    	预报id：<input type="text" id="forecastId_task01" name="forecastId_task01" value=""/>
    	预报货物明细id：<input type="text" id="forecastItemId_task01" name="forecastItemId_task01" value=""/>
       	货物id：<input type="text" id="itemId_task01" name="itemId_task01" value=""/>
       	货物code：<input type="text" id="itemCode_task01" name="itemCode_task01" value=""/>
       	货物name：<input type="text" id="itemName_task01" name="itemName_task01" value=""/>
       	计划量：<input type="text" id="planTon_task01" name="planTon_task01" value=""/>
       	委托人id：<input type="text" id="customId_task01" name="customId_task01" value=""/>
       	委托人code：<input type="text" id="customCode_task01" name="customCode_task01" value=""/>
       	委托人name：<input type="text" id="customName_task01" name="customName_task01" value=""/>
       	提运单号：<input type="text" id="assignLoadingNo_task01" name="assignLoadingNo_task01" value=""/>
       	报关单号：<input type="text" id="assignDeclareNo_task01" name="assignDeclareNo_task01" value=""/>
      <a onclick="loadShipAssignFuncPop(loadShipAssignFunc)">选择</a>
  </fieldset>
  <fieldset>
    <legend>开工机械Pop_task02</legend>
    	机械Code：<input type="text" id="beginWorkMachineCode_task02" name="beginWorkMachineCode_task02" value=""/>
    	机械Name：<input type="text" id="beginWorkMachineName_task02" name="beginWorkMachineName_task02" value=""/>
      <a onclick="beginWorkMachinePop('A','beginWorkMachineCode_task02','beginWorkMachineName_task02')">选择</a>
  </fieldset>
  <fieldset>
    <legend>货物明细Pop</legend>
    	预报id：<input type="text" id="forecastId_item01" name="forecastId_item01" value=""/>
    	船舶中文名：<input type="text" id="chineseName_item01" name="chineseName_item01" value=""/>
    	船舶英文名：<input type="text" id="englishName_item01" name="englishName_item01" value=""/>
    	航次号：<input type="text" id="voyageNo_item01" name="voyageNo_item01" value=""/>
       	货物code：<input type="text" id="itemCode_item01" name="itemCode_item01" value=""/>
       	货物name：<input type="text" id="itemName_item01" name="itemName_item01" value=""/>
       	ciq：<input type="text" id="cIQ_item01" name="cIQ_item01" value=""/>
       	提单量：<input type="text" id="ladingBillton_item01" name="ladingBillton_item01" value=""/>
       	实际吨数：<input type="text" id="realOutputNum_item01" name="realOutputNum_item01" value=""/>
       	委托书编号：<input type="text" id="unloadShipAssignCode_item01" name="unloadShipAssignCode_item01" value=""/>
       	作业类别：<input type="text" id="taskTypeCode_item01" name="taskTypeCode_item01" value=""/>
       	船主：<input type="text" id="ownerName_item01" name="ownerName_item01" value=""/>
       	船主代码：<input type="text" id="ownerCode_item01" name="ownerCode_item01" value=""/>
       	付款人code：<input type="text" id="customCode_item01" name="customCode_item01" value=""/>
       	付款人name：<input type="text" id="customName_item01" name="customName_item01" value=""/>
       <a onclick="boatForecastItemStorePop('forecastId_item01','chineseName_item01','englishName_item01','voyageNo_item01','itemCode_item01','itemName_item01','cIQ_item01','ladingBillton_item01','realOutputNum_item01','unloadShipAssignCode_item01','customCode_item01','customName_item01','taskTypeCode_item01','ownerName_item01','ownerCode_item01')">选择</a>
  </fieldset>
  <fieldset>
    <legend>港口作业协议信息_bus04</legend>
    	合同id:<input  type="text" id="contractId_bus04",name="contractId_bus04" value=""> 
    	合同代码：<input type="text" id="contractCode_bus04" name="contractCode_bus04" value=""/>
    	合同名称：<input type="text" id="contractName_bus04" name="contractName_bus04" value=""/>
    	结算类型：<input type="text" id="contractTypeCode_bus04" name="contractTypeCode_bus04" value=""/>
    	单价：<input type="text" id="contractTypeName_bus04" name="contractTypeName_bus04" value=""/>
      <a onclick="portcontractPop('contractId_bus04','contractCode_bus04','contractName_bus04','contractTypeCode_bus04','contractTypeName_bus04','');">选择</a>
   </fieldset>
     <fieldset>
    <legend>港口作业协议信息_bus04</legend>
    	合同id:<input  type="text" id="contractId_bus05",name="contractId_bus05" value=""> 
    	合同代码：<input type="text" id="contractCode_bus05" name="contractCode_bus05" value=""/>
    	合同名称：<input type="text" id="contractName_bus05" name="contractName_bus05" value=""/>
    	结算类型：<input type="text" id="contractTypeCode_bus05" name="contractTypeCode_bus05" value=""/>
    	合同类型名称：<input type="text" id="contractTypeName_bus05" name="contractTypeName_bus05" value=""/>
    	统一价：<input type="text" id="Price_bus05" name="Price_bus05" value=""/>
    	内贸价格：<input type="text" id="domPrice_bus05" name="domPrice_bus05" value=""/>
    	外贸价格：<input type="text" id="foreignPrice_bus05" name="foreignPrice_bus05" value=""/>
    	价格类型：<input type="text" id="priceType_bus05" name="priceType_bus05" value=""/>
      <a onclick="incrcontractPop('','contractId_bus05','contractName_bus05','Price_bus05','priceType_bus05','contractCode_bus05','','','','','','','','');">选择</a>
   </fieldset>
     <fieldset>
    <legend>作业要求_bas13</legend>
    	作业要求id：<input type="text" id="manipulationuuid" name="manipulationuuid" value=""/>
    	排序字:<input type="text" id="manipulationorderKey" name="manipulationorderKey" value=""/>
    	作业要求：<input type="text" id="manipulation" name="manipulation" value=""/>
      <a onclick="manipulationPop('manipulationuuid','manipulationorderKey','manipulation')">选择</a>
  </fieldset>
  <fieldset>
    <legend>码头出仓申请单_int01</legend>
    	订单号:<input  type="text" id="orderNo_int01",name="orderNo_int01" value=""> 
    	物流任务单号：<input type="text" id="subOrderNo_int01" name="subOrderNo_int01" value=""/>
      	<a onclick="vwPortOutsPop('orderNo_int01','subOrderNo_int01');">选择</a>
   </fieldset>
</body>
<script type="text/javascript">
//货物明细pop
function selBoatForecastItemPop(){
	boatForecastItemPop($("#forecastId_plan02").val(),'forecastItemId_plan02','itemId_plan02','itemCode_plan02','itemName_plan02','itemAgentName_plan02','proportion_plan02','declareNo_plan02','ownerName_plan02','originName_plan02','ladingBillton_plan02');
}

function loadShipAssignFunc(retData){
	console.log(retData);
	$("#loadShipAssignId_task01").val(retData.uuid);
	$("#forecastId_task01").val(retData.forecastId);
	$("#forecastItemId_task01").val(retData.forecastItemId);
	$("#itemId_task01").val(retData.itemId);
	$("#itemCode_task01").val(retData.itemCode);
	$("#itemName_task01").val(retData.itemName);
	$("#planTon_task01").val(retData.planTon);
	$("#customId_task01").val(retData.customId);
	$("#customCode_task01").val(retData.customCode);
	$("#customName_task01").val(retData.customName);
	$("#assignLoadingNo_task01").val(retData.assignLoadingNo);
	$("#assignDeclareNo_task01").val(retData.assignDeclareNo);
	
}
</script>
</html>
