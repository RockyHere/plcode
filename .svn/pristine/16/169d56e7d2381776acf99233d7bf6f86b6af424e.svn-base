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
import com.yanbang.security.entity.SysEmployee;
import com.yanbang.security.model.EmpModel;
import com.yanbang.security.service.ISysEmployeeService;
import com.yanbang.util.ConstantMethod;

/**
 * 业务控制层<br>
 * 
 * 港口信息控制器
 * 
 * @author solovejack
 * 
 */
@Controller
@RequestMapping("/sysEmployee.do")
@Scope("prototype")
public class SysEmployeeController extends BaseController {
	@Autowired
	private ISysEmployeeService sysEmployeeService;

	/**
	 * 港口列表界面
	 * 
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=index")
	public ModelAndView index(HttpServletRequest request, ModelMap model,
			Long curPage, Long pageRows, SysEmployee sysEmployee)
			throws Exception {
		Page<EmpModel> page = new Page<EmpModel>(curPage, pageRows);
		page.setUrl("sysEmployee.do?action=index");
		page = sysEmployeeService.findAllSysEmployeeByModel(sysEmployee, page);
		// page = sysEmployeeService.findAllSysEmployee(sysEmployee, page);
		model.put("page", page);
		model.put("sysEmployee", sysEmployee);
		model.put("sysEmployeeDegressMap",
				ConstantMethod.getSysEmployeeDegressMap());
		return new ModelAndView("security/sysEmployeeIndex");
	}

	/**
	 * 多条件查询
	 */
	@RequestMapping(params = "action=findMutiCondition")
	public ModelAndView findMutiCondition(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows, SysEmployee sysEmployee)
			throws Exception {
		Page<EmpModel> page = new Page<EmpModel>(curPage, pageRows);
		page.setUrl("sysEmployee.do?action=index");
		page = sysEmployeeService.findAllSysEmployeeByModel(sysEmployee, page);
		model.put("page", page);
		model.put("sysEmployee", sysEmployee);
		return new ModelAndView("security/sysEmployeeIndex");
	}

	/**
	 * 添加港口页面
	 */
	@RequestMapping(params = "action=addSysEmployee")
	public ModelAndView addSysEmployee(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows) throws Exception {
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		model.put("sysEmployeeDegressList",
				ConstantMethod.getSysEmployeeDegressList());
		return new ModelAndView("security/sysEmployeeAdd");
	}

	/**
	 * 保存港口
	 */
	@RequestMapping(params = "action=addSaveSysEmployee")
	public JsonView addSaveSysEmployee(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows, SysEmployee sysEmployee)
			throws Exception {
		JsonView view = new JsonView();
		try {
			sysEmployee.setUpdateUser(this.getLoginUserName(request));
			sysEmployeeService.insBySysEmployee(sysEmployee);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 编辑港口页面
	 */
	@RequestMapping(params = "action=editSysEmployee")
	public ModelAndView editSysEmployee(HttpServletRequest request,
			ModelMap model, String uuid, Long curPage, Long pageRows) {
		model.put("sysEmployee", sysEmployeeService.findByPk(uuid));
		model.put("curPage", curPage);
		model.put("pageRows", pageRows);
		model.put("sysEmployeeDegressList",
				ConstantMethod.getSysEmployeeDegressList());

		return new ModelAndView("security/sysEmployeeEdit");
	}

	/**
	 * 编辑港口
	 */
	@RequestMapping(params = "action=editSaveSysEmployee")
	public JsonView editSaveSysEmployee(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows, SysEmployee sysEmployee)
			throws Exception {
		JsonView view = new JsonView();
		try {
			sysEmployee.setUpdateUser(this.getLoginUserName(request));
			sysEmployeeService.updBySysEmployee(sysEmployee);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 删除港口
	 */
	@RequestMapping(params = "action=delSysEmployee")
	public ModelAndView delSysEmployee(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows, String uuids,
			SysEmployee sysEmployee) throws Exception {
		uuids = uuids.substring(0, uuids.lastIndexOf(","));
		String[] uuidArray = uuids.split(",");
		for (int i = 0; i < uuidArray.length; i++) {
			sysEmployeeService.delByPk(uuidArray[i]);
		}
		return this.index(request, model, curPage, pageRows, sysEmployee);
	}

	/**
	 * 港口Pop页面
	 * 
	 * @param request
	 * @param model
	 * @param curPage
	 * @param pageRows
	 * @param sysEmployee
	 * @return
	 */
	@RequestMapping(params = "action=sysEmployeePop")
	public ModelAndView sysEmployeePop(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows, SysEmployee sysEmployee) {
		Page<SysEmployee> page = new Page<SysEmployee>(curPage, pageRows);
		page.setUrl("sysEmployee.do?action=sysEmployeePop");
		page = sysEmployeeService.findAllSysEmployee(sysEmployee, page);
		model.put("page", page);
		model.put("sysEmployee", sysEmployee);
		// model.put("map", ConstantMethod.getSysEmployeeDegressMap());
		return new ModelAndView("security/sysEmployeePop");
	}

	/**
	 * 多条件查询
	 * 
	 * @param request
	 * @param model
	 * @param curPage
	 * @param pageRows
	 * @param sysEmployee
	 * @return
	 */
	@RequestMapping(params = "action=sysEmployeePopQry")
	public ModelAndView sysEmployeePopQry(HttpServletRequest request,
			ModelMap model, Long curPage, Long pageRows, SysEmployee sysEmployee) {
		Page<SysEmployee> page = new Page<SysEmployee>(curPage, pageRows);
		page.setUrl("sysEmployee.do?action=sysEmployeePopQry");
		page = sysEmployeeService.findAllSysEmployee(sysEmployee, page);
		model.put("page", page);
		model.put("sysEmployee", sysEmployee);
		return new ModelAndView("security/sysEmployeePop");

	}

}
