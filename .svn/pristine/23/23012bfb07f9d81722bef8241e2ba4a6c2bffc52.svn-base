package com.yanbang.security.controller;


import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.yanbang.controller.BaseController;
import com.yanbang.page.Page;
import com.yanbang.view.JsonView;
import com.yanbang.security.entity.SysJob;
import com.yanbang.security.service.ISysJobService;
import com.yanbang.security.service.ISysOrgService;

/**
 * 业务控制层<br>
 * 
 * 职位信息控制器
 * 
 * @author xiaoqiao wu
 * 
 */
@Controller
@RequestMapping("/sysJob.do")
@Scope("prototype")
public class SysJobController extends BaseController {
	@Autowired
	private ISysJobService sysJobService;
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
		return new ModelAndView("security/sysJobOrgIndex");
	}

	/**
     * 多条件查询、初始化查询
     */
	@RequestMapping(params = "action=findMutiCondition")
	public ModelAndView findMutiCondition(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows,SysJob sysJob)
			throws Exception {
		Page<SysJob> page = new Page<SysJob>(curPage, pageRows);
		page.setUrl("sysJob.do?action=findMutiCondition");
		page = sysJobService.findAllSysJob(sysJob, page);
		model.put("page", page);
		model.put("sysJob", sysJob);
		return new ModelAndView("security/sysJobIndex");
	}
	
	/**
	 * 添加职位页面
	 */
	@RequestMapping(params = "action=addSysJob")
	public ModelAndView addPost(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, String orgId) throws Exception {
		model.put("org", sysOrgService.findByPk(orgId));
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		return new ModelAndView("security/sysJobAdd");
	}

	/**
	 * 保存职位
	 */
	@RequestMapping(params = "action=addSaveSysJob")
	public JsonView addSaveSysJob(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, SysJob sysJob) throws Exception {
		JsonView view = new JsonView();
		try {		
			sysJob.setUpdateUser(this.getLoginUserName(request));
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
			String uuid, Long curPage, Long pageRows) {
		model.put("sysJob",sysJobService.findByPk(uuid));
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		return new ModelAndView("security/sysJobEdit");
	}

	/**
	 * 编辑职位
	 */
	@RequestMapping(params = "action=editSaveSysJob")
	public JsonView editSaveSysJob(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, SysJob sysJob) throws Exception {
		JsonView view = new JsonView();
		try {		
			sysJob.setUpdateUser(this.getLoginUserName(request));
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
			 Long curPage, Long pageRows,String uuids,SysJob sysJob)
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
		return new ModelAndView("security/sysJobOrgPop");
	}
	
	/**
	 * 职位pop
	 */
	@RequestMapping(params = "action=sysJobPop")
	public ModelAndView JobPop(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows,SysJob sysJob) throws Exception {
		Page<SysJob> page = new Page<SysJob>(curPage, pageRows);
		page.setUrl("sysJob.do?action=sysJobPop");
		page = sysJobService.findAllSysJob(sysJob, page);
		model.put("page", page);
		model.put("sysJob", sysJob);
		return new ModelAndView("security/sysJobPop");
	}
	
	/**
     * pop多条件查询
     */
	@RequestMapping(params = "action=sysJobPopQry")
	public ModelAndView jobPopQry(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows,SysJob sysJob)
			throws Exception {
		Page<SysJob> page = new Page<SysJob>(curPage, pageRows);
		page.setUrl("sysJob.do?action=sysJobPop");
		page = sysJobService.findAllSysJob(sysJob, page);
		model.put("page", page);
		model.put("sysJob", sysJob);
		return new ModelAndView("security/sysJobPop");
	}
}
