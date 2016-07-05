package com.yanbang.base.controller;


import java.util.Collection;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.yanbang.base.entity.BaseFinance;
import com.yanbang.base.service.IBaseFinanceService;
import com.yanbang.controller.BaseController;
import com.yanbang.page.Page;
import com.yanbang.util.AssertUtil;
import com.yanbang.view.JsonView;
import com.yanbang.security.service.ISysOrgService;

/**
 * 业务控制层<br>
 * 
 * 金融机构控制器
 * 
 * @author zhouyibin
 * 
 */
@Controller
@RequestMapping("/baseFinance.do")
@Scope("prototype")
public class BaseFinanceController extends BaseController {
	@Autowired
	private IBaseFinanceService sysJobService;
	@Autowired
	private ISysOrgService sysOrgService;
	
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
		System.out.print("金融机构初始化成功");
		return new ModelAndView("base/financeParentIndex");
	}
	
	@RequestMapping(params = "action=choice")
	public ModelAndView index1(HttpServletRequest request, ModelMap model)
			throws Exception {
		return new ModelAndView("base/financeParentChoice");
	}
	/**
     * 多条件查询、初始化查询
     */
	@RequestMapping(params = "action=findMutiConditionChoice")
	public ModelAndView findMutiConditionChoice(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows,BaseFinance finance)
			throws Exception {
		Page<BaseFinance> page = new Page<BaseFinance>(curPage, pageRows);
		page.setUrl("baseIndustry.do?action=findMutiConditionChoice");
		page = sysJobService.findAllData(finance, page);
		model.put("page", page);
		model.put("finance", finance);
		return new ModelAndView("base/financeChoice");
	}

	/**
     * 多条件查询、初始化查询
     */
	@RequestMapping(params = "action=findMutiCondition")
	public ModelAndView findMutiCondition(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows,BaseFinance finance)
			throws Exception {
		Page<BaseFinance> page = new Page<BaseFinance>(curPage, pageRows);
		page.setUrl("baseFinance.do?action=findMutiCondition");
		page = sysJobService.findAllData(finance, page);
		model.put("page", page);
		model.put("finance", finance);
		return new ModelAndView("base/financeIndex");
	}
	
	/**
	 * 添加金融机构页面
	 */
	@RequestMapping(params = "action=addSysJob")
	public ModelAndView addPost(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, String parentId) throws Exception {
		//model.put("org", sysJobService.findByPk(parentId));
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		return new ModelAndView("base/financeAdd");
	}

	/**
	 * 保存金融机构
	 */
	@RequestMapping(params = "action=addSaveSysJob")
	public JsonView addSaveSysJob(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, BaseFinance sysJob) throws Exception {
		JsonView view = new JsonView();
		try {		
			sysJob.setCreated_by_user(this.getLoginUserName(request));
			sysJobService.insByData(sysJob);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 编辑职位页面
	 */
	@RequestMapping(params = "action=editSysJob")
	public ModelAndView editSysJob(HttpServletRequest request, ModelMap model,
			String bas_financialins_id, Long curPage, Long pageRows) {
		model.put("finance",sysJobService.findByPk(bas_financialins_id));
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		return new ModelAndView("base/financeEdit");
	}

	/**
	 * 编辑职位
	 */
	@RequestMapping(params = "action=editSaveSysJob")
	public JsonView editSaveSysJob(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, BaseFinance finance) throws Exception {
		JsonView view = new JsonView();
		try {		
			finance.setUpdated_by_user(this.getLoginUserName(request));
			sysJobService.updByData(finance);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 删除职位
	 */
	@RequestMapping(params = "action=delSysJob")
	public ModelAndView delSysJob(HttpServletRequest request, ModelMap model,
			 Long curPage, Long pageRows,String uuids,BaseFinance finance)
			throws Exception {
		uuids = uuids.substring(0, uuids.lastIndexOf(","));
		String[] uuidArray = uuids.split(",");
		String updUser = this.getLoginUserName(request);
		for (int i = 0; i < uuidArray.length; i++) {
			sysJobService.delByPk(uuidArray[i],updUser);
		}
		return this.findMutiCondition(request, model, curPage, pageRows, finance);
	}
	
	/**
	 * 组织机构职位pop
	 * @param request
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=sysJobOrgPop")
	public ModelAndView sysJobOrgPop(HttpServletRequest request, ModelMap model) throws Exception {
		return new ModelAndView("base/industryParentPop");
	}
	
	/**
	 * 职位pop
	 */
	@RequestMapping(params = "action=sysJobPop")
	public ModelAndView JobPop(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows,BaseFinance sysJob) throws Exception {
		Page<BaseFinance> page = new Page<BaseFinance>(curPage, pageRows);
		page.setUrl("baseIndustry.do?action=sysJobPop");
		page = sysJobService.findAllData(sysJob, page);
		model.put("page", page);
		model.put("sysJob", sysJob);
		return new ModelAndView("base/industryPop");
	}
	
	/**
     * pop多条件查询
     */
	@RequestMapping(params = "action=sysJobPopQry")
	public ModelAndView jobPopQry(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows,BaseFinance sysJob)
			throws Exception {
		Page<BaseFinance> page = new Page<BaseFinance>(curPage, pageRows);
		page.setUrl("baseIndustry.do?action=sysJobPop");
		page = sysJobService.findAllData(sysJob, page);
		model.put("page", page);
		model.put("sysJob", sysJob);
		return new ModelAndView("base/industryPop");
	}
	
	/**
	 * 金融机构 树初始化(pop)
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
	 * 获取行业的树
	 * 
	 * @return
	 * @throws Exception
	 */
	private String getTreeStr() throws Exception {
		StringBuffer str = new StringBuffer();
		str.append("[{'id':'root','pId':'','name':'金融机构','tip':'金融机构', 'open':true}");
		// 机械表循环，无父节点，则设置pId为root。
		Collection<BaseFinance> list = sysJobService.findAllByFlag();
		for (BaseFinance org : list) {
			str.append(",{'id':'" + org.getBas_financialins_id())
					.append("', 'pId':'"
							+ (AssertUtil.isVal(org.getParentid()) ? org
									.getParentid() : "root"))
					.append("', 'name':'" + org.getFinancialins_code() + "_"
							+ org.getFinancialins_name())
					.append("', 'tip':'" + org.getFinancialins_name()).append("'}");
		}
		str.append("]");
		return str.toString();
	}
}
