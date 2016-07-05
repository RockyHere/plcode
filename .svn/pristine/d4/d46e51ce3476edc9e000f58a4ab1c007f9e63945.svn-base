package com.yanbang.base.controller;

import java.util.Collection;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.yanbang.base.entity.BaseCust;
import com.yanbang.base.entity.BaseCustAccount;
import com.yanbang.base.entity.BaseCustContactsinfo;
import com.yanbang.base.entity.BaseCustEnterprisetype;
import com.yanbang.base.entity.BaseCustReceivinfo;
import com.yanbang.base.entity.BaseRegion;
import com.yanbang.base.service.IBaseCustService;
import com.yanbang.base.service.IBaseRegionService;
import com.yanbang.controller.BaseController;
import com.yanbang.page.Page;
import com.yanbang.util.AssertUtil;
import com.yanbang.view.JsonView;

/**
 * 业务控制层<br>
 * 
 * 客户管理控制器
 * 
 * @author zhouyibin
 * 
 */
@Controller
@RequestMapping("/baseCust.do")
@Scope("prototype")
public class BaseCustController extends BaseController {
	@Autowired
	private IBaseCustService sysJobService;
	@Autowired
	private IBaseRegionService sysOrgService;

	/**
	 * 职位列表界面
	 * 
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=index")
	public ModelAndView index(HttpServletRequest request, ModelMap model)
			throws Exception {
		return new ModelAndView("base/custParentIndex");
	}

	/**
	 * 多条件查询、初始化查询
	 */
	@RequestMapping(params = "action=findMutiCondition")
	public ModelAndView findMutiCondition(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows, BaseCust sysJob)
			throws Exception {
		Page<BaseCust> page = new Page<BaseCust>(curPage, pageRows);
		page.setUrl("baseCust.do?action=findMutiCondition");
		page = sysJobService.findAllSysJob(sysJob, page);
		model.put("page", page);
		model.put("sysJob", sysJob);
		return new ModelAndView("base/custIndex");
	}

	/**
	 * 添加行业页面
	 */
	@RequestMapping(params = "action=addSysJob")
	public ModelAndView addPost(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, String parentId) throws Exception {
		//model.put("org", sysJobService.findByPk(parentId));
		//model.put("curPage", curPage);
		//model.put("pageRows", pageRows);
		return new ModelAndView("base/custAdd");
	}

	/**addSaveSysJob
	 * 保存职位
	 */
	@RequestMapping(params = "action=addSaveSysJob")
	public JsonView addSaveSysJob(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, BaseCust sysJob) throws Exception {
		JsonView view = new JsonView();
		try {
			sysJob.setCreated_by_user(this.getLoginUserName(request));
			sysJobService.insBySysJob(sysJob);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 编辑客户页面
	 */
	@RequestMapping(params = "action=editSysJob")
	public ModelAndView editSysJob(HttpServletRequest request, ModelMap model,
			String crm_cust_id, Long curPage, Long pageRows) {
		BaseCust cust=sysJobService.findByPk(crm_cust_id);
		if(cust.getIs_buy()==null){
			cust.setIs_buy("0");
		}
		if(cust.getIs_logistics()==null){
			cust.setIs_logistics("0");
		}
		if(cust.getIs_sale()==null){
			cust.setIs_sale("0");
		}
		model.put("baseCust", cust);
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		model.put("crm_cust_id", crm_cust_id);
		System.out.print(cust.getIs_buy()+"buy");
		return new ModelAndView("base/custEdit");
	}

	/**
	 * 编辑职位
	 */
	@RequestMapping(params = "action=editSaveSysJob")
	public JsonView editSaveSysJob(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, BaseCust sysJob) throws Exception {
		JsonView view = new JsonView();
		try {
			sysJob.setAudit_user(this.getLoginUserName(request));
			sysJobService.updBySysJob(sysJob);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 编辑客户联系人页面
	 */
	@RequestMapping(params = "action=editContactsinfo")
	public ModelAndView editContactsinfo(HttpServletRequest request, ModelMap model,
			String crm_cust_id, Long curPage, Long pageRows) {
		model.put("contactsinfo", sysJobService.findContactsinfoByPk(crm_cust_id));
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		model.put("crm_cust_id", crm_cust_id);
		return new ModelAndView("base/custContactsinfoEdit");
	}
	
	/**
	 * 编辑客户二级账号页面
	 */
	@RequestMapping(params = "action=editAccount")
	public ModelAndView editAccount(HttpServletRequest request, ModelMap model,
			String crm_cust_id, Long curPage, Long pageRows) {
		model.put("account", sysJobService.findAccountByPk(crm_cust_id));
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		model.put("crm_cust_id", crm_cust_id);
		return new ModelAndView("base/custAccountEdit");
	}
	
	/**
	 * 编辑客户二级账号页面
	 */
	@RequestMapping(params = "action=editReceivinfo")
	public ModelAndView editReceivinfo(HttpServletRequest request, ModelMap model,
			String crm_cust_id, Long curPage, Long pageRows) {
		model.put("receivinfo", sysJobService.findReceivinfoByPk(crm_cust_id));
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		model.put("crm_cust_id", crm_cust_id);
		return new ModelAndView("base/custReceivinfoEdit");
	}
	
	/**
	 * 删除职位
	 */
	@RequestMapping(params = "action=delSysJob")
	public ModelAndView delSysJob(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, String crm_cust_id, BaseCust sysJob)
			throws Exception {
		crm_cust_id = crm_cust_id.substring(0, crm_cust_id.lastIndexOf(","));
		String[] uuidArray = crm_cust_id.split(",");
		String updUser = this.getLoginUserName(request);
		for (int i = 0; i < uuidArray.length; i++) {
			 sysJobService.delByPk(uuidArray[i],updUser);
		}
		return this
				.findMutiCondition(request, model, curPage, pageRows, sysJob);
	}
	
	/**
	 * 删除客户联系人
	 */
	@RequestMapping(params = "action=delContactsinfo")
	public ModelAndView delContactsinfo(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, String uuids, BaseCustContactsinfo contactsinfo)
			throws Exception {
		uuids = uuids.substring(0, uuids.lastIndexOf(","));
		String[] uuidArray = uuids.split(",");
		String updUser = this.getLoginUserName(request);
		for (int i = 0; i < uuidArray.length; i++) {
			 sysJobService.delContactsinfoByPk(uuidArray[i],updUser);
		}
		return this
				.findMutiConditionCon(request, model, curPage, pageRows,contactsinfo.getCrm_cust_id(), contactsinfo);
	}
	
	/**
	 * 删除客户二级账号
	 */
	@RequestMapping(params = "action=delAccount")
	public ModelAndView delAccount(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, String uuids, BaseCustAccount account)
			throws Exception {
		uuids = uuids.substring(0, uuids.lastIndexOf(","));
		String[] uuidArray = uuids.split(",");
		String updUser = this.getLoginUserName(request);
		for (int i = 0; i < uuidArray.length; i++) {
			 sysJobService.delAccountByPk(uuidArray[i],updUser);
		}
		return this
				.findMutiConditionAcc(request, model, curPage, pageRows,account.getCrm_cust_id(), account);
	}
	
	
	/**
	 * 删除客户收货人
	 */
	@RequestMapping(params = "action=delReceivinfo")
	public ModelAndView delReceivinfo(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, String uuids, BaseCustReceivinfo receivinfo)
			throws Exception {
		uuids = uuids.substring(0, uuids.lastIndexOf(","));
		String[] uuidArray = uuids.split(",");
		String updUser = this.getLoginUserName(request);
		for (int i = 0; i < uuidArray.length; i++) {
			 sysJobService.delReceivinfoByPk(uuidArray[i],updUser);
		}
		return this
				.findMutiConditionRece(request, model, curPage, pageRows,receivinfo.getCrm_cust_id(), receivinfo);
	}

	/**
	 * 组织机构职位pop
	 * 
	 * @param request
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=sysJobOrgPop")
	public ModelAndView sysJobOrgPop(HttpServletRequest request, ModelMap model)
			throws Exception {
		return new ModelAndView("base/industryParentPop");
	}

	/**
	 * 职位pop
	 */
	@RequestMapping(params = "action=sysJobPop")
	public ModelAndView JobPop(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, BaseCust sysJob) throws Exception {
		Page<BaseCust> page = new Page<BaseCust>(curPage, pageRows);
		/*
		 * page.setUrl("baseIndustry.do?action=sysJobPop"); page =
		 * sysJobService.findAllSysJob(sysJob, page); model.put("page", page);
		 * model.put("sysJob", sysJob);
		 */
		return new ModelAndView("base/industryPop");
	}

	/**
	 * pop多条件查询
	 */
	@RequestMapping(params = "action=sysJobPopQry")
	public ModelAndView jobPopQry(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, BaseCust sysJob) throws Exception {
		Page<BaseCust> page = new Page<BaseCust>(curPage, pageRows);
		page.setUrl("baseIndustry.do?action=sysJobPop");
		// page = sysJobService.findAllSysJob(sysJob, page);
		model.put("page", page);
		model.put("sysJob", sysJob);
		return new ModelAndView("base/industryPop");
	}

	/**
	 * 区域 树初始化(pop)
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=queryPop")
	public JsonView queryPop(HttpServletRequest request) throws Exception {
		JsonView view = new JsonView();
		try {
			view.setProperty("resultlist", this.getTreeStr());
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 获取组织机构的树
	 * 
	 * @return
	 * @throws Exception
	 */
	private String getTreeStr() throws Exception {
		StringBuffer str = new StringBuffer();
		//790e94d26d1c462ba9abc7e7bfffc000
		str.append("[{'id':'790e94d26d1c462ba9abc7e7bfffc000','pId':'','name':'客户','country_code_name_eg':'','memo':'','tip':'客户', 'country_code':''}");
		// 机械表循环，无父节点，则设置pId为root。
		Collection<BaseRegion> list = sysOrgService.findAllByFlag();
		for (BaseRegion org : list) {
			if(AssertUtil.isVal(org.getParentId())){//只获取第二级
				str.append(",{'id':'" + org.getBas_region_id())
				.append("', 'pId':'"
						+ (AssertUtil.isVal(org.getParentId()) ? org
								.getParentId() : "root"))
				.append("', 'name':'" + org.getCountry_name())
				.append("', 'country_code_name_eg':'"
						+ org.getCountry_name_eg())
				.append("', 'memo':'" + org.getMemo())
				.append("', 'tip':'" + org.getCountry_name())
				.append("', 'country_code':'" + org.getCountry_code())
				.append("'}");
			}
			
		}
		str.append("]");
		return str.toString();
	}
	
	
	/**
	 * 收货人多条件查询、初始化查询
	 */
	@RequestMapping(params = "action=findMutiConditionRece")
	public ModelAndView findMutiConditionRece(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows, String crm_cust_id, BaseCustReceivinfo receivinfo)
			throws Exception {
		Page<BaseCustReceivinfo> page = new Page<BaseCustReceivinfo>(curPage, pageRows);
		page.setUrl("baseCust.do?action=findMutiConditionRece");
		page = sysJobService.findAllReceivinfo(receivinfo, page);
		model.put("page", page);
		model.put("crm_cust_id", crm_cust_id);
		model.put("receivinfo", receivinfo);
		return new ModelAndView("base/custReceivinfo");
	}
	
	/**
	 * 联系人多条件查询、初始化查询
	 */
	@RequestMapping(params = "action=findMutiConditionCon")
	public ModelAndView findMutiConditionCon(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows, String crm_cust_id, BaseCustContactsinfo contactsinfo)
			throws Exception {
		Page<BaseCustContactsinfo> page = new Page<BaseCustContactsinfo>(curPage, pageRows);
		page.setUrl("baseCust.do?action=findMutiConditionCon");
		page = sysJobService.findAllContactsinfo(contactsinfo, page);
		model.put("page", page);
		model.put("contactsinfo", contactsinfo);
		model.put("crm_cust_id", crm_cust_id);
		return new ModelAndView("base/custContactsinfo");
	}
	
	/**
	 * 客户二级账号多条件查询、初始化查询
	 */
	@RequestMapping(params = "action=findMutiConditionAcc")
	public ModelAndView findMutiConditionAcc(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows,String crm_cust_id, BaseCustAccount account)
			throws Exception {
		Page<BaseCustAccount> page = new Page<BaseCustAccount>(curPage, pageRows);
		page.setUrl("baseCust.do?action=findMutiConditionAcc");
		page = sysJobService.findAllAccount(account, page);
		model.put("page", page);
		model.put("account", account);
		model.put("crm_cust_id", crm_cust_id);
		return new ModelAndView("base/custAccount");
	}
	
	/**
	 * 获取省份
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=getProvince")
	public JsonView getProvince(HttpServletRequest request) throws Exception {
		String pId=request.getParameter("pId");
		JsonView view = new JsonView();
		try {
			view.setProperty("resultlist", this.provinces(pId));
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	
	/**
	 * 获取省份函数
	 * 
	 * @return
	 * @throws Exception
	 */
	private String provinces(String pId) throws Exception {
		StringBuffer str = new StringBuffer();
		// 机械表循环，无父节点，则设置pId为root。
		Collection<BaseRegion> list = sysJobService.findAllRegionByParentId(pId);
		int size=0;
		str.append("[");
		for (BaseRegion org : list) {
			if(size==0){
				str.append("{'id':'" + org.getBas_region_id())
				.append("', 'name':'" + org.getCountry_name())
				.append("'}");
			}else{
				str.append(",{'id':'" + org.getBas_region_id())
				.append("', 'name':'" + org.getCountry_name())
				.append("'}");
			}
			size++;
		}
		str.append("]");
		return str.toString();
	}
	
	/**
	 * 获取企业类型
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=enterprisetype")
	public JsonView getEnterprisetype(HttpServletRequest request) throws Exception {
		JsonView view = new JsonView();
		try {
			view.setProperty("resultlist", this.enterprisetypes());
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}
	
	/**
	 * 获取企业类型函数
	 * 
	 * @return
	 * @throws Exception
	 */
	private String enterprisetypes() throws Exception {
		StringBuffer str = new StringBuffer();
		// 机械表循环，无父节点，则设置pId为root。
		Collection<BaseCustEnterprisetype> list = sysJobService.findAllEnterprisetype();
		int size=0;
		str.append("[");
		for (BaseCustEnterprisetype org : list) {
			if(size==0){
				str.append("{'code':'" + org.getEnterprisetype_code())
				.append("', 'name':'" + org.getEnterprisetype_name())
				.append("'}");
			}else{
				str.append(",{'code':'" + org.getEnterprisetype_code())
				.append("', 'name':'" + org.getEnterprisetype_name())
				.append("'}");
			}
			size++;
		}
		str.append("]");
		return str.toString();
	}
	
	/**
	 * 添加单笔客户联系人页面
	 */
	@RequestMapping(params = "action=addContactsinfo")
	public ModelAndView addContactsinfo(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, String crm_cust_id) throws Exception {
		model.put("crm_cust_id",crm_cust_id);
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		return new ModelAndView("base/custContactsinfoAdd");
	}
	
	/**
	 * 添加单笔客户收货人页面
	 */
	@RequestMapping(params = "action=addReceivinfo")
	public ModelAndView addReceivinfo(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, String crm_cust_id) throws Exception {
		model.put("crm_cust_id",crm_cust_id);
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		return new ModelAndView("base/custReceivinfoAdd");
	}
	
	/**
	 * 添加单笔客户二级账号页面
	 */
	@RequestMapping(params = "action=addAccount")
	public ModelAndView addAccount(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, String crm_cust_id) throws Exception {
		model.put("crm_cust_id",crm_cust_id);
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		return new ModelAndView("base/custAccountAdd");
	}
	
	
	/**addSaveReceivinfo
	 * 保存客户收货人
	 */
	@RequestMapping(params = "action=addSaveReceivinfo")
	public JsonView addSaveReceivinfo(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, BaseCustReceivinfo receivinfo) throws Exception {
		JsonView view = new JsonView();
		try {
			receivinfo.setCreated_by_user(this.getLoginUserName(request));
			sysJobService.insByReceivinfo(receivinfo);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}
	
	/**addSaveContactsinfo
	 * 保存客户联系人
	 */
	@RequestMapping(params = "action=addSaveContactsinfo")
	public JsonView addSaveContactsinfo(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, BaseCustContactsinfo contactsinfo) throws Exception {
		JsonView view = new JsonView();
		try {
			contactsinfo.setCreated_by_user(this.getLoginUserName(request));
			sysJobService.insByContactsinfo(contactsinfo);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}
	
	/**addSaveAccount
	 * 保存客户二级账号
	 */
	@RequestMapping(params = "action=addSaveAccount")
	public JsonView addSaveAccount(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, BaseCustAccount account) throws Exception {
		JsonView view = new JsonView();
		try {
			account.setCreated_by_user(this.getLoginUserName(request));
			sysJobService.insByAccount(account);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}
	
	
	/**
	 * 编辑收货人
	 */
	@RequestMapping(params = "action=editSaveReceivinfo")
	public JsonView editSaveReceivinfo(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, BaseCustReceivinfo receivinfo) throws Exception {
		JsonView view = new JsonView();
		try {
			//receivinfo.setAudit_user(this.getLoginUserName(request));
			sysJobService.updByReceivinfo(receivinfo);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}
	
	/**
	 * 编辑二级账号
	 */
	@RequestMapping(params = "action=editSaveAccount")
	public JsonView editSaveAccount(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, BaseCustAccount account) throws Exception {
		JsonView view = new JsonView();
		try {
			//receivinfo.setAudit_user(this.getLoginUserName(request));
			sysJobService.updByAccount(account);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}
	
	/**
	 * 编辑收货人
	 */
	@RequestMapping(params = "action=editSaveContactsinfo")
	public JsonView editSaveContactsinfo(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, BaseCustContactsinfo contactsinfo) throws Exception {
		JsonView view = new JsonView();
		try {
			//receivinfo.setAudit_user(this.getLoginUserName(request));
			sysJobService.updBySContactsinfo(contactsinfo);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}
	
	
}