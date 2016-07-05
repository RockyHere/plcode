package com.yanbang.security.controller;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.yanbang.controller.BaseController;
import com.yanbang.page.Page;
import com.yanbang.view.JsonView;
import com.yanbang.security.entity.SysRole;
import com.yanbang.security.service.ISysRoleService;
import com.yanbang.security.service.ISysUserService;

/**
 * 业务控制层<br>
 * 
 * 系统角色控制器
 * 
 * @author Tong Baojun
 * 
 */
@Controller
@RequestMapping("/sysRole.do")
@Scope("prototype")
public class SysRoleController extends BaseController {
	@Autowired
	private ISysRoleService sysRoleService;
	@Autowired
	private ISysUserService sysUserService;

	/**
	 * 系统角色首页
	 */
	@RequestMapping(params = "action=sysRoleIndex")
	public ModelAndView sysRoleIndex(HttpServletRequest request, Long curPage,
			Long pageRows) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		Page<SysRole> page = new Page<SysRole>(curPage, pageRows);
		page.setUrl("sysRole.do?action=sysRoleIndex");
		page = sysRoleService.findAllSysRoles(page);
		SysRole role = new SysRole();
		role.setRoleStatus(-2l);
		map.put("role", role);
		map.put("page", page);
		return new ModelAndView("security/sysRoleIndex", map);
	}

	/**
	 * 多条件查询角色
	 */
	@RequestMapping(params = "action=findByMutilSysRole")
	public ModelAndView findByMutilSysRole(HttpServletRequest request,
			Long curPage, Long pageRows, SysRole role) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		Page<SysRole> page = new Page<SysRole>(curPage, pageRows);
		page.setUrl("sysRole.do?action=findByMutilSysRole");
		page = sysRoleService.findAllByMutiConditon(page, role);
		map.put("page", page);
		map.put("role", role);
		return new ModelAndView("security/sysRoleIndex", map);
	}

	/**
	 * 添加角色首页
	 */
	@RequestMapping(params = "action=sysRoleAddIndex")
	public ModelAndView sysRoleAddIndex(HttpServletRequest request)
			throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("RoleId", sysRoleService.findMaxRoleId());
		return new ModelAndView("security/sysRoleAddIndex", map);
	}

	/**
	 * 保存系统角色
	 */
	@RequestMapping(params = "action=sysRoleSave")
	public JsonView sysRoleSave(HttpServletRequest request, SysRole role)
			throws Exception {
		JsonView view = new JsonView();
		try {
			sysRoleService.saveSysRole(role);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 编辑系统角色首页
	 */
	@RequestMapping(params = "action=sysRoleEditIndex")
	public ModelAndView sysRoleEditIndex(HttpServletRequest request,
			String roleId) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		SysRole role = sysRoleService.findSysRoleById(roleId);
		map.put("role", role);
		return new ModelAndView("security/sysRoleEditIndex", map);
	}

	/**
	 * 编辑系统角色
	 */
	@RequestMapping(params = "action=sysRoleEdit")
	public JsonView sysRoleEdit(HttpServletRequest request, SysRole role)
			throws Exception {
		JsonView view = new JsonView();
		try {
			sysRoleService.updateSysRole(role);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 删除系统角色
	 */
	@RequestMapping(params = "action=deleteSysRole")
	public JsonView deleteSysRole(HttpServletRequest request, String roleId)
			throws Exception {
		JsonView view = new JsonView();
		try {
			sysRoleService.deleteSysRole(roleId);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 查询所有角色
	 */
	@RequestMapping(params = "action=sysRoleList")
	public ModelAndView sysRoleList(HttpServletRequest request, String userCode)
			throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("userCode", userCode);
		Collection<SysRole> allRoleList = sysRoleService.findAllSysRole();
		map.put("roleList", allRoleList);
		Collection<SysRole> userRoleLists = sysRoleService
				.findAllRoleByUserUUID(sysUserService.findUserByUserCode(
						userCode).getUuId());
		for (SysRole role : allRoleList) {
			int flag = 0;
			for (SysRole usrRole : userRoleLists) {
				if (role.getRoleCode().equals(usrRole.getRoleCode())) {
					flag = 1;
					break;
				}
			}
			role.setIsChecked(flag);
		}
		return new ModelAndView("security/sysRoleList", map);
	}

	/**
	 * 分配角色菜单
	 */
	@RequestMapping(params = "action=grantRoleMenus")
	public JsonView grantRoleMenus(HttpServletRequest request, String roleId,
			String menuIds) {
		JsonView view = new JsonView();
		try {
			sysRoleService.updateRoleMenus(roleId, menuIds);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	@RequestMapping(params = "action=findAllRoles")
	public JsonView findAllRoles(HttpServletRequest request) throws Exception {
		JsonView view = new JsonView();
		try {
			view.setProperty("roleList", sysRoleService.findAllRoles());
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}
}
