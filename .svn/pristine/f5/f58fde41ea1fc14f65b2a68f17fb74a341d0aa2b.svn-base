package com.yanbang.base.controller;


import java.util.Collection;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.yanbang.base.entity.BaseIndustry;
import com.yanbang.base.service.IBaseIndustryService;
import com.yanbang.controller.BaseController;
import com.yanbang.page.Page;
import com.yanbang.util.AssertUtil;
import com.yanbang.view.JsonView;
import com.yanbang.security.entity.SysJob;
import com.yanbang.security.entity.SysOrg;
import com.yanbang.security.service.ISysJobService;
import com.yanbang.security.service.ISysOrgService;

/**
 * 业务控制层<br>
 * 
 * 行业信息控制器
 * 
 * @author zhouyibin
 * 
 */
@Controller
@RequestMapping("/baseIndustry.do")
@Scope("prototype")
public class BaseIndustryController extends BaseController {
	@Autowired
	private IBaseIndustryService sysJobService;
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
		return new ModelAndView("base/industryParentIndex");
	}
	
	@RequestMapping(params = "action=choice")
	public ModelAndView index1(HttpServletRequest request, ModelMap model)
			throws Exception {
		return new ModelAndView("base/industryParentChoice");
	}
	/**
     * 多条件查询、初始化查询
     */
	@RequestMapping(params = "action=findMutiConditionChoice")
	public ModelAndView findMutiConditionChoice(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows,BaseIndustry sysJob)
			throws Exception {
		Page<BaseIndustry> page = new Page<BaseIndustry>(curPage, pageRows);
		page.setUrl("baseIndustry.do?action=findMutiConditionChoice");
		page = sysJobService.findAllSysJob(sysJob, page);
		model.put("page", page);
		model.put("sysJob", sysJob);
		return new ModelAndView("base/industryChoice");
	}

	/**
     * 多条件查询、初始化查询
     */
	@RequestMapping(params = "action=findMutiCondition")
	public ModelAndView findMutiCondition(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows,BaseIndustry sysJob)
			throws Exception {
		Page<BaseIndustry> page = new Page<BaseIndustry>(curPage, pageRows);
		page.setUrl("baseIndustry.do?action=findMutiCondition");
		page = sysJobService.findAllSysJob(sysJob, page);
		model.put("page", page);
		model.put("sysJob", sysJob);
		return new ModelAndView("base/industryIndex");
	}
	
	/**
	 * 添加行业页面
	 */
	@RequestMapping(params = "action=addSysJob")
	public ModelAndView addPost(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, String parentId) throws Exception {
		model.put("org", sysJobService.findByPk(parentId));
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		return new ModelAndView("base/industryAdd");
	}

	/**
	 * 保存职位
	 */
	@RequestMapping(params = "action=addSaveSysJob")
	public JsonView addSaveSysJob(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, BaseIndustry sysJob) throws Exception {
		JsonView view = new JsonView();
		try {		
			sysJob.setUpdated_by_user(this.getLoginUserName(request));
			sysJobService.insBySysJob(sysJob);
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
			String bas_industry_id, Long curPage, Long pageRows) {
		model.put("baseIndustry",sysJobService.findByPk(bas_industry_id));
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		return new ModelAndView("base/industryEdit");
	}

	/**
	 * 编辑职位
	 */
	@RequestMapping(params = "action=editSaveSysJob")
	public JsonView editSaveSysJob(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, BaseIndustry sysJob) throws Exception {
		JsonView view = new JsonView();
		try {		
			sysJob.setUpdated_by_user(this.getLoginUserName(request));
			sysJobService.updBySysJob(sysJob);
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
			 Long curPage, Long pageRows,String uuids,BaseIndustry sysJob)
			throws Exception {
		uuids = uuids.substring(0, uuids.lastIndexOf(","));
		String[] uuidArray = uuids.split(",");
		String updUser = this.getLoginUserName(request);
		for (int i = 0; i < uuidArray.length; i++) {
			sysJobService.delByPk(uuidArray[i],updUser);
		}
		return this.findMutiCondition(request, model, curPage, pageRows, sysJob);
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
			Long curPage, Long pageRows,BaseIndustry sysJob) throws Exception {
		Page<BaseIndustry> page = new Page<BaseIndustry>(curPage, pageRows);
		page.setUrl("baseIndustry.do?action=sysJobPop");
		page = sysJobService.findAllSysJob(sysJob, page);
		model.put("page", page);
		model.put("sysJob", sysJob);
		return new ModelAndView("base/industryPop");
	}
	
	/**
     * pop多条件查询
     */
	@RequestMapping(params = "action=sysJobPopQry")
	public ModelAndView jobPopQry(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows,BaseIndustry sysJob)
			throws Exception {
		Page<BaseIndustry> page = new Page<BaseIndustry>(curPage, pageRows);
		page.setUrl("baseIndustry.do?action=sysJobPop");
		page = sysJobService.findAllSysJob(sysJob, page);
		model.put("page", page);
		model.put("sysJob", sysJob);
		return new ModelAndView("base/industryPop");
	}
	
	/**
	 * 行业机构 树初始化(pop)
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
		str.append("[{'id':'root','pId':'','name':'行业','tip':'行业', 'open':true}");
		// 机械表循环，无父节点，则设置pId为root。
		Collection<BaseIndustry> list = sysJobService.findAllByFlag();
		for (BaseIndustry org : list) {
			str.append(",{'id':'" + org.getBas_industry_id())
					.append("', 'pId':'"
							+ (AssertUtil.isVal(org.getParentId()) ? org
									.getParentId() : "root"))
					.append("', 'name':'" + org.getIndustry_code() + "_"
							+ org.getIndustry_name())
					.append("', 'tip':'" + org.getIndustry_name()).append("'}");
		}
		str.append("]");
		return str.toString();
	}
}
