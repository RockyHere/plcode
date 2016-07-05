package com.yanbang.security.dao;

import java.util.Collection;

import com.yanbang.page.Page;
import com.yanbang.security.entity.SysRole;

/**
 * 持久层接口
 * 
 * 角色DAO接口
 * 
 * @author Tong Baojun
 * 
 */
public interface ISysRoleDAO {
	/**
	 * 查询系统角色
	 * 
	 * @param page
	 * @return
	 */
	public Page<SysRole> findAllSysRoles(Page<SysRole> page);

	/**
	 * 多条件查询角色
	 * 
	 * @param page
	 * @param role
	 * @return
	 */
	public Page<SysRole> findAllByMutiConditon(Page<SysRole> page, SysRole role);

	/**
	 * 根据Id查询系统角色
	 * 
	 * @param roleId
	 * @return
	 */
	public SysRole findSysRoleById(String roleId);

	/**
	 * 根据用户UUID查询对应的角色
	 * 
	 * @param userUUID
	 * @return
	 */
	public Collection<SysRole> findAllRoleByUserUUID(Long userUUID);

	/**
	 * 查询所有系统角色
	 * 
	 * @return
	 */
	public Collection<SysRole> findAllSysRole();

	/**
	 * 保存系统角色
	 * 
	 * @param role
	 */
	public void saveSysRole(SysRole role);

	/**
	 * 更新系统角色
	 * 
	 * @param role
	 */
	public void updateSysRole(SysRole role);

	/**
	 * 删除系统角色
	 * 
	 * @param roleId
	 */
	public void deleteSysRole(String roleId);

	/**
	 * 查询最大的角色编号
	 * 
	 * @return
	 */
	public Long findMaxRoleId();

	/**
	 * 分配角色菜单
	 * 
	 * @param roleId
	 * @param menuIds
	 */
	public void updateRoleMenus(String roleId, String menuIds);

	/**
	 * 查询所有角色
	 * 
	 * @return
	 */
	public Collection<SysRole> findAllRoles();
}
