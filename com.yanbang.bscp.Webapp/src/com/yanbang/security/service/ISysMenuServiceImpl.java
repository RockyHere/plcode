package com.yanbang.security.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.page.Page;
import com.yanbang.security.dao.ISysMenuDAO;
import com.yanbang.security.entity.SysMenu;

@Service
@Transactional
public class ISysMenuServiceImpl implements ISysMenuService {
	@Autowired
	private ISysMenuDAO sysMenuDAO;

	@Override
	public Collection<SysMenu> findAllChildMenus(Long menuParentId,
			String menuIds) {
		return sysMenuDAO.findAllChildMenus(menuParentId, menuIds);
	}

	@Override
	public Collection<SysMenu> findMenusByListId(String menuIds) {
		return sysMenuDAO.findMenusByListId(menuIds);
	}

	@Override
	public Collection<SysMenu> findAllSysMenu() {
		return sysMenuDAO.findAllSysMenu();
	}

	@Override
	public Collection<SysMenu> findAllUsefulSysMenu() {
		return sysMenuDAO.findAllUsefulSysMenu();
	}
	
	@Override
	public Page<SysMenu> findAllSysMenus(Page<SysMenu> page) {
		return sysMenuDAO.findAllSysMenus(page);
	}

	@Override
	public Page<SysMenu> findAllByMutiConditon(Page<SysMenu> page, SysMenu menu) {
		return sysMenuDAO.findAllByMutiConditon(page, menu);
	}

	@Override
	public SysMenu findSysMenuById(String menuId) {
		return sysMenuDAO.findSysMenuById(menuId);
	}

	@Override
	public void saveSysMenu(SysMenu menu) {
		sysMenuDAO.saveSysMenu(menu);
	}

	@Override
	public void updateSysMenu(SysMenu menu) {
		sysMenuDAO.updateSysMenu(menu);
	}
}
