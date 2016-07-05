<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>行业信息</title>
<link rel="stylesheet" type="text/css"
	href="/resource/css/global/base.css">
<link rel="stylesheet" type="text/css"
	href="/resource/css/global/table.css">
<link rel="stylesheet" type="text/css"
	href="/resource/css/global/easyui.css">
<!-- Bootstrap -->
<link href="/resource/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="/resource/bootstrap/css/bootstrap-switch.css"
	rel="stylesheet">
<script language="JavaScript" src="/resource/js/global/jquery.min.js"></script>
<script language="JavaScript"
	src="/resource/js/global/jquery.easyui-1.2.4.js"></script>
<script
	src="/resource/comm/artDialog4.1.7/artDialog.source.js?skin=blue"></script>
<script
	src="/resource/comm/artDialog4.1.7/plugins/iframeTools.source.js"></script>
<script src="/resource/comm/My97DatePicker/WdatePicker.js"></script>
<script language="JavaScript" src="/resource/js/base/industry.js"></script>
<script language="JavaScript" src="/resource/js/security/securityPop.js"></script>
<script language="JavaScript"
	src="/resource/bootstrap/js/bootsrap.min.js"></script>
<script language="JavaScript" src="/resource/js/base/custEdit.js"
	charset="UTF-8"></script>
</head>
<body style="overflow: hidden;">
	<div style="height:200px;">
		<form id="editForm" method="post">
			<input type="hidden" name="rece" id="rece"> <input
				type="hidden" name="con" id="con"> <input type="hidden"
				name="acc" id="acc"> <input type="hidden" name="crm_cust_id"
				id="crm_cust_id" value="${baseCust.crm_cust_id}">
			<div style="background-color:#EFF5F5;margin-bottom: 20px;">
				<button type="button" onclick="editSaveCust();" class="btn_bg"
					style="margin-left: 10px;">提&nbsp;&nbsp;交</button>
				&nbsp;
			</div>
			<div style="width:100%;float:left;margin-bottom: 10px;">
				<div style="float:left;width:25%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
						客户类型</div>
					<div style="width:60%;float:left;height:100%">
						<select id="cust_type" name="cust_type"
							style="width:100%;height:100%">
							<option value="1">经销商</option>
							<option value="2">代理商</option>
							<option value="3">内部</option>
						</select>
					</div>
				</div>
				<div style="float:left;width:25%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:33%;text-align: center; line-height:27px;overflow:hidden;">
						名称</div>
					<div style="width:60%;float:left;height:100%">
						<input type="text" id="cust_name" name="cust_name"
							value="${baseCust.cust_name}" style="width:100%;height:100%" />
					</div>
				</div>
				<div style="float:left;width:25%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
						英文名称</div>
					<div style="width:60%;float:left;height:100%">
						<input type="text" id="cust_name_en" name="cust_name_en"
							value="${baseCust.cust_name_en}" style="width:100%;height:100%" />
					</div>
				</div>
				<div style="float:left;width:25%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
						企业类型</div>
					<div style="width:60%;float:left;height:100%">
						<select id="cust_pro" name="cust_pro"
							style="width:100%;height:100%">
						</select>
					</div>
				</div>
			</div>

			<div style="width:100%;float:left;margin-bottom: 10px;">
				<div style="float:left;width:25%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
						用户代码</div>
					<div style="width:60%;float:left;height:100%">
						<input type="text" id="cust_code" name="cust_code"
							value="${baseCust.cust_code}" style="width:100%;height:100%" />
					</div>
				</div>
				<div style="float:left;width:25%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:33%;text-align: center; line-height:27px;overflow:hidden;">
						集团</div>
					<div style="width:60%;float:left;height:100%">
						<input type="text" id="cust_group" name="cust_group"
							value="${baseCust.cust_group}" style="width:100%;height:100%" />
					</div>
				</div>
				<div style="float:left;width:25%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
						法人代表</div>
					<div style="width:60%;float:left;height:100%">
						<input type="text" id="legal_representative"
							name="legal_representative"
							value="${baseCust.legal_representative}"
							style="width:100%;height:100%" />
					</div>
				</div>
				<div style="float:left;width:25%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
						注册资本</div>
					<div style="width:60%;float:left;height:100%">
						<input type="text" id="reg_capital" name="reg_capital"
							value="${baseCust.reg_capital}" style="width:100%;height:100%" />
					</div>
				</div>
			</div>

			<div style="width:100%;float:left;margin-bottom: 10px;">
				<div style="float:left;width:25%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
						简称</div>
					<div style="width:60%;float:left;height:100%">
						<input type="text" id="cust_alias" name="cust_alias"
							value="${baseCust.cust_alias}" style="width:100%;height:100%" />
					</div>
				</div>
				<div style="float:left;width:25%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:33%;text-align: center; line-height:27px;overflow:hidden;">
						所属行业</div>
					<div style="width:60%;float:left;height:100%">
						<input type="text" id="relate_industry" name="relate_industry"
							value="${baseCust.relate_industry}"
							style="width:100%;height:100%" />
					</div>
				</div>
				<div style="float:left;width:25%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
						税务登记号</div>
					<div style="width:60%;float:left;height:100%">
						<input type="text" id="fax_no" name="fax_no"
							value="${baseCust.fax_no}" style="width:100%;height:100%" />
					</div>
				</div>
				<div style="float:left;width:25%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
						组织机构码</div>
					<div style="width:60%;float:left;height:100%">
						<input type="text" id="org_code" name="org_code"
							value="${baseCust.org_code}" style="width:100%;height:100%" />
					</div>
				</div>
			</div>

			<div style="width:100%;float:left;margin-bottom: 10px;">
				<div style="float:left;width:25%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
						成立时间</div>
					<div style="width:60%;float:left;height:100%">
						<select id="establish_date" name="establish_date"
							style="width:100%;height:100%">
							<option value="2016">2016</option>
							<option value="2015">2015</option>
							<option value="2014">2014</option>
							<option value="2013">2013</option>
							<option value="2012">2012</option>
							<option value="2011">2011</option>
							<option value="2010">2010</option>
							<option value="2009">2009</option>
							<option value="2008">2008</option>
							<option value="2007">2007</option>
							<option value="2006">2006</option>
							<option value="2005">2005</option>
							<option value="2004">2004</option>
							<option value="2003">2003</option>
							<option value="2002">2002</option>
							<option value="2001">2001</option>
							<option value="2000">2000</option>
							<option value="1999">1999</option>
						</select>
						<!-- <input type="text" name="establish_date" value=""
							style="width:100%;height:100%;cursor:hand" class="Wdate"
							id="establish_date"
							onfocus="WdatePicker({el:'establish_date',dateFmt:'yyyy-MM-dd'})" />
						<input type="text" id="industry_code" name="industry_code"
							value="" style="width:100%;height:100%" /> -->
					</div>
				</div>
				<div style="float:left;width:25%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:33%;text-align: center; line-height:27px;overflow:hidden;">
						工商注册码</div>
					<div style="width:60%;float:left;height:100%">
						<input type="text" id="ic_reg_code" name="ic_reg_code"
							value="${baseCust.ic_reg_code}" style="width:100%;height:100%" />
					</div>
				</div>
				<div style="float:left;width:16%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:33%;text-align: center; line-height:27px;overflow:hidden;">
						是否卖家</div>
					<div style="width:60%;float:left;height:100%">
						<div style="float: left;margin-left: 5px;">
							<input id="is_sale1" name="is_sale" type="radio" value="1" />是
						</div>
						<div style="float:left;margin-right: 10px;margin-left: 5px;">
							<input id="is_sale0" name="is_sale" type="radio" value="0" />否
						</div>
					</div>
				</div>
				<div style="float:left;width:16%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:33%;text-align: center; line-height:27px;overflow:hidden;">
						是否买家</div>
					<div style="width:60%;float:left;height:100%">
						<div style="float: left;margin-left: 5px;">
							<input id="is_buy1" name="is_buy" type="radio" value="1" che />是
						</div>
						<div style="float:left;margin-right: 10px;margin-left: 5px;">
							<input id="is_buy0" name="is_buy" type="radio" value="0" />否
						</div>
					</div>
				</div>
				<div style="float:left;width:17%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:33%;text-align: center; line-height:27px;overflow:hidden;">
						是否物流公司</div>
					<div style="width:60%;float:left;height:100%">
						<div style="float: left;margin-left: 5px;">
							<input id="is_logistics1" name="is_logistics" type="radio"
								value="1" />是
						</div>
						<div style="float:left;margin-right: 10px;margin-left: 5px;">
							<input id="is_logistics0" name="is_logistics" type="radio"
								value="0" />否
						</div>
					</div>
				</div>
			</div>

			<div style="width:100%;float:left;margin-bottom: 10px;">
				<div style="float:left;width:25%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
						所属国家</div>
					<div style="width:60%;float:left;height:100%">
						<select name="country_code" style="width:100%;height:100%">
							<option value="790e94d26d1c462ba9abc7e7bfffc000">中国</option>
						</select>
					</div>
				</div>
				<div style="float:left;width:25%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:33%;text-align: center; line-height:27px;overflow:hidden;">
						所属省份</div>
					<div style="width:60%;float:left;height:100%">
						<select id="state_code" name="state_code"
							style="width:100%;height:100%">

						</select>
					</div>
				</div>
				<div style="float:left;width:25%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
						所属城市</div>
					<div style="width:60%;float:left;height:100%">
						<select id="city_code" name="city_code"
							style="width:100%;height:100%">
						</select>
					</div>
				</div>
				<div style="float:left;width:25%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:30%;text-align: center; line-height:27px;overflow:hidden;">
						所属县城</div>
					<div style="width:60%;float:left;height:100%">
						<select id="region_code" name="region_code"
							style="width:100%;height:100%">
						</select>
					</div>
				</div>
			</div>

			<div style="width:100%;float:left;margin-bottom: 10px;">
				<div style="float:left;width:100%;height:27px;">
					<div class="tabSingleHeader"
						style="float:left;width:10%;text-align: center; line-height:27px;overflow:hidden;">
						详细地址</div>
					<div style="width:89%;float:left;height:100%">
						<input type="text" id="cust_addr_cn" name="cust_addr_cn"
							value="${baseCust.cust_addr_cn}" style="width:100%;height:100%" />
					</div>
				</div>
			</div>

			<div style="width:100%;float:left;margin-bottom: 10px;">
				<div style="float:left;width:100%;height:56px;">
					<div class="tabSingleHeader2"
						style="float:left;width:10%;text-align: center; line-height:56px;overflow:hidden;">
						公司简介</div>
					<div style="width:89%;float:left;height:100%">
						<textarea id="cust_description" name="cust_description"
							style="width:100%;height:100%" rows="3">${baseCust.cust_description}</textarea>
					</div>
				</div>
			</div>

			<div style="width:100%;float:left;margin-bottom: 10px;">
				<div style="float:left;width:100%;height:56px;">
					<div class="tabSingleHeader2"
						style="float:left;width:10%;text-align: center; line-height:56px;overflow:hidden;">
						主营产品</div>
					<div style="width:89%;float:left;height:100%">
						<textarea id="cust_primarybusiness" name="cust_primarybusiness"
							style="width:100%;height:100%" rows="3">${baseCust.cust_primarybusiness}</textarea>
					</div>
				</div>
			</div>

			<div style="width:100%;float:left;margin-bottom: 20px;">
				<div style="float:left;width:100%;height:56px;">
					<div class="tabSingleHeader2"
						style="float:left;width:10%;text-align: center; line-height:56px;overflow:hidden;">
						备注</div>
					<div style="width:89%;float:left;height:100%">
						<textarea id="memo" name="memo" value=""
							style="width:100%;height:100%" rows="3">${baseCust.memo}</textarea>
					</div>
				</div>
			</div>
		</form>
	</div>


	<div id="tt" class="easyui-tabs" style="width:2000px;height:30px;">
		<div title="联系人" style="padding:5px;display:none;"></div>
		<div title="收货人" data-options="closable:true"
			style="overflow:auto;padding:20px;display:none;"></div>
		<div title="客户二级账号" data-options="iconCls:'icon-reload',closable:true"
			style="padding:20px;display:none;"></div>
	</div>

	<div style="margin-top:-1px;">
		<input type="hidden" id="tempState" value="${baseCust.state_code}">
		<input type="hidden" id="tempCity" value="${baseCust.city_code}">
		<input type="hidden" id="tempCounty" value="${baseCust.region_code}">
		<input type="hidden" id="tempCustPro" value="${baseCust.cust_pro}">

		<iframe id="sysJobIframe" src="" style="width:100%;height:200px;"
			frameborder="no"></iframe>
		<iframe id="receIframe" src="" style="width:100%;height:200px;"
			frameborder="no"></iframe>
		<iframe id="accIframe" src="" style="width:100%;height:200px;"
			frameborder="no"></iframe>
	</div>
</body>
<script type="text/javascript">
	$(document)
			.ready(
					function() {//初始化界面
						$('#tt')
								.tabs(
										{
											border : false,
											onSelect : function(title) {
												if (title == "联系人") {
													document
															.getElementById("sysJobIframe").style.display = "";
													document
															.getElementById("receIframe").style.display = "none";
													document
															.getElementById("accIframe").style.display = "none";
												} else if (title == "收货人") {
													document
															.getElementById("sysJobIframe").style.display = "none";
													document
															.getElementById("receIframe").style.display = "";
													document
															.getElementById("accIframe").style.display = "none";

												} else if (title == "客户二级账号") {
													document
															.getElementById("sysJobIframe").style.display = "none";
													document
															.getElementById("receIframe").style.display = "none";
													document
															.getElementById("accIframe").style.display = "";
												}
											}

										});
						initReceForm();
						initConForm();
						initAccForm();
						if (${baseCust.is_sale} == "1") {//是否卖家
							$("#is_sale1").prop('checked', true);
						} else if (${baseCust.is_sale} == "0") {
							$("#is_sale0").prop('checked', true);
						}
						if (${baseCust.is_buy} == "1") {//是否买家
							$("#is_buy1").prop('checked', true);
						} else if (${baseCust.is_buy} == "0") {
							$("#is_buy0").prop('checked', true);
						}
						if (${baseCust.is_logistics} == "1") {//是否物流公司
							$("#is_logistics1").prop('checked', true);
						} else if (${baseCust.is_logistics} == "0") {
							$("#is_logistics0").prop('checked', true);
						}
						$("#cust_type").val(${baseCust.cust_type});//客户类型
						$("#establish_date").val(${baseCust.establish_date});//创建时间
					});
</script>

</html>
