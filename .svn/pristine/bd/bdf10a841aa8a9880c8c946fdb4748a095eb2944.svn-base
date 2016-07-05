package com.yanbang.security.service;

import java.util.Collection;

import com.yanbang.page.Page;
import com.yanbang.security.entity.SysMenu;

/**
 * 服务层接口
 * 
 * 菜单服务接口
 * 
 * @author Tong Baojun
 * 
 */
public interface ISysMenuService {
	/**
	 * 查询所有菜单
	 * 
	 * @return
	 */
	public Collection<SysMenu> findAllSysMenu();
	
	/**
	 * 查询所有有效菜单
	 * 
	 * @return
	 */
	public Collection<SysMenu> findAllUsefulSysMenu();

	/**
	 * 查询所有的菜单
	 * 
	 * @param page
	 * @return
	 */
	public Page<SysMenu> findAllSysMenus(Page<SysMenu> page);

	/**
	 * 多条件查询系统菜单
	 * 
	 * @param page
	 * @param menu
	 * @return
	 */
	public Page<SysMenu> findAllByMutiConditon(Page<SysMenu> page, SysMenu menu);

	/**
	 * 根据菜单父类编号查询子菜单
	 * 
	 * @param menuParentId
	 * @param menuIds
	 * @return
	 */
	public Collection<SysMenu> findAllChildMenus(Long menuParentId,
			String menuIds);

	/**
	 * 根据菜单ID列表查询对应的菜单
	 * 
	 * @param menuIds
	 * @return
	 */
	public Collection<SysMenu> findMenusByListId(String menuIds);

	/**
	 * 根据编号查询菜单
	 * 
	 * @param menuId
	 * @return
	 */
	public SysMenu findSysMenuById(String menuId);

	/**
	 * 保存系统菜单
	 * 
	 * @param menu
	 */
	public void saveSysMenu(SysMenu menu);

	/**
	 * 更新系统菜单
	 * 
	 * @param menu
	 */
	public void updateSysMenu(SysMenu menu);
}
