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
import com.yanbang.security.entity.SysMenu;
import com.yanbang.security.entity.SysRole;
import com.yanbang.security.service.ISysMenuService;
import com.yanbang.security.service.ISysRoleService;
import com.yanbang.security.service.ISysUserService;

/**
 * 业务控制层<br>
 * 
 * 系统菜单控制器
 * 
 * @author Tong Baojun
 * 
 */
@Controller
@RequestMapping("/sysMenu.do")
@Scope("prototype")
public class SysMenuController extends BaseController {
	@Autowired
	private ISysMenuService sysMenuService;
	@Autowired
	private ISysUserService sysUserService;
	@Autowired
	private ISysRoleService sysRoleService;

	/**
	 * 系统菜单首页
	 */
	@RequestMapping(params = "action=sysMenuIndex")
	public ModelAndView sysMenuIndex(HttpServletRequest request, Long curPage,
			Long pageRows) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		try {
			SysMenu menu = new SysMenu();
			Page<SysMenu> page = new Page<SysMenu>(curPage, pageRows);
			page.setUrl("sysMenu.do?action=sysMenuIndex");
			page = sysMenuService.findAllSysMenus(page);
			menu.setMenuStatus(-2l);
			map.put("menu", menu);
			map.put("page", page);
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return new ModelAndView("security/sysMenuIndex", map);

	}

	/**
	 * 系统菜单多条件查询
	 */
	@RequestMapping(params = "action=findByMutilSysMenu")
	public ModelAndView findByMutilSysMenu(HttpServletRequest request,
			Long curPage, Long pageRows, SysMenu menu) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		try {
			Page<SysMenu> page = new Page<SysMenu>(curPage, pageRows);
			page.setUrl("sysMenu.do?action=findByMutilSysMenu");
			page = sysMenuService.findAllByMutiConditon(page, menu);
			map.put("page", page);
			map.put("menu", menu);
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return new ModelAndView("security/sysMenuIndex", map);
	}

	/**
	 * 添加系统菜单首页
	 */
	@RequestMapping(params = "action=sysMenuAddIndex")
	public ModelAndView sysMenuAddIndex(HttpServletRequest request)
			throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		Collection<SysMenu> menulist = sysMenuService.findAllSysMenu();
		map.put("menulist", menulist);
		return new ModelAndView("security/sysMenuAddIndex", map);
	}

	/**
	 * 保存系统菜单
	 */
	@RequestMapping(params = "action=sysMenuSave")
	public JsonView sysMenuSave(HttpServletRequest request, SysMenu menu)
			throws Exception {
		JsonView view = new JsonView();
		try {
			sysMenuService.saveSysMenu(menu);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 编辑系统菜单首页
	 */
	@RequestMapping(params = "action=sysMenuEditIndex")
	public ModelAndView sysMenuEditIndex(HttpServletRequest request,
			String menuId) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		SysMenu menu = sysMenuService.findSysMenuById(menuId);
		Collection<SysMenu> menulist = sysMenuService.findAllSysMenu();
		map.put("menulist", menulist);
		map.put("menu", menu);
		return new ModelAndView("security/sysMenuEditIndex", map);
	}

	/**
	 * 更新系统菜单
	 */
	@RequestMapping(params = "action=sysMenuEdit")
	public JsonView sysMenuEdit(HttpServletRequest request, SysMenu menu)
			throws Exception {
		JsonView view = new JsonView();
		try {
			sysMenuService.updateSysMenu(menu);
			view.setProperty("result", "succ");
		} catch (Exception ex) {
			view.setProperty("result", "error");
		}
		return view;
	}

	/**
	 * 系统系统菜单树
	 */
	@RequestMapping(params = "action=sysMenuTree")
	public ModelAndView sysMenuTree(HttpServletRequest request, String roleId)
			throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("roleId", roleId);
		return new ModelAndView("security/sysMenuTree", map);

	}

	/**
	 * 系统菜单树查询数据
	 */
	@RequestMapping(params = "action=sysMenuTreeData")
	public JsonView sysMenuTreeData(HttpServletRequest request, String roleId)
			throws Exception {
		JsonView view = new JsonView();
		try {
			SysRole role = sysRoleService.findSysRoleById(roleId);
			Collection<SysMenu> roleMenulist = sysMenuService
					.findMenusByListId(role.getRoleMenus());
			Collection<SysMenu> allMenulist = sysMenuService.findAllUsefulSysMenu();
			StringBuffer jsonstr = new StringBuffer(
					"[{id:-1,pId:-2,name:'系统菜单',tip:'系统菜单', open:true,iconOpen:'/resource/js/ztree/css/zTreeStyle/img/diy/1_open.png', iconClose:'/resource/js/ztree/css/zTreeStyle/img/diy/1_close.png'},");
			for (SysMenu menu : allMenulist) {
				boolean isparent = menu.getMenuIsLastNode() == 0 ? false : true;
				boolean isChecked = false;
				try {
					for (SysMenu roleMenu : roleMenulist) {
						if (roleMenu.getMenuId().equals(menu.getMenuId())) {
							isChecked = true;
							break;
						} else {
							isChecked = false;
						}
					}
				} catch (Exception ex) {
					System.out.println("error:" + ex.getMessage());
					//view.setProperty("error", ex.getMessage());
				}
				jsonstr.append("{id:" + menu.getMenuId() + ", pId:"
						+ menu.getMenuParentId() + ", name:'"
						+ menu.getMenuName() + "',isParent:" + isparent
						+ ",checked:" + isChecked + "},");
			}
			jsonstr.append("]");
			view.setProperty("result", "succ");
			view.setProperty("resultlist", jsonstr.toString());
		} catch (Exception ex) {
			ex.printStackTrace();
			view.setProperty("result", "error");
		}
		return view;
	}
}
