package com.yanbang.security.controller;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.yanbang.controller.BaseController;
import com.yanbang.view.JsonView;
import com.yanbang.security.entity.SysPostEmp;
import com.yanbang.security.service.ISysEmployeeService;
import com.yanbang.security.service.ISysPostEmpService;

/**
 * 业务控制层<br>
 * 
 * 岗位人员关系表控制器
 * 
 * @author solovejack
 * 
 */
@Controller
@RequestMapping("/sysPostEmp.do")
@Scope("prototype")
public class SysPostEmpController extends BaseController {
	@Autowired
	private ISysEmployeeService sysEmployeeService;
	@Autowired
	private ISysPostEmpService sysPostEmpService;

	/**
	 * 岗位列表界面（根据员工查询）
	 * 
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(params = "action=queryPostByEmp")
	public ModelAndView queryPostByEmp(HttpServletRequest request, ModelMap model,String empId) throws Exception {
		model.put("postEmpList", sysPostEmpService.queryPostByEmp(empId));
		model.put("empInfo",sysEmployeeService.findByPk(empId));
		return new ModelAndView("security/postEmpOne");
	}

	/**
	 * 新增岗位
	 */
	@RequestMapping(params = "action=addSavePostByEmp")
	public JsonView addSavePostByEmp(HttpServletRequest request, ModelMap model,SysPostEmp postEmp) throws Exception {
		JsonView view = new JsonView();
		try {		
			sysPostEmpService.insByPostEmp(postEmp);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}
	
	/**
	 * 保存岗位
	 */
	@RequestMapping(params = "action=editSavePostByEmp")
	public JsonView editSavePostByEmp(HttpServletRequest request, ModelMap model,SysPostEmp postEmp) throws Exception {
		JsonView view = new JsonView();
		try {		
			sysPostEmpService.updByPostEmp(postEmp);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}
	
	/**
	 * 删除岗位
	 */
	@RequestMapping(params = "action=delPostByEmp")
	public ModelAndView delPostByEmp(HttpServletRequest request, ModelMap model,String uuids,String empId) throws Exception {
		uuids = uuids.substring(0, uuids.lastIndexOf(","));
		String[] uuidArray = uuids.split(",");
		for (int i = 0; i < uuidArray.length; i++) {
			sysPostEmpService.delByPk(uuidArray[i]);
		}
		return this.queryPostByEmp(request, model, empId);
	}
}
