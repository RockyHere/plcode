package com.yanbang.portal.biz;

import java.util.Collection;

import com.yanbang.security.entity.SysMenu;
import com.yanbang.security.entity.SysRole;
import com.yanbang.security.entity.SysUser;

/**
 * 业务实现层 <br>
 * 
 * 导航业务
 * 
 * @author Tong Baojun
 * 
 */
public interface IPortalBiz {
	/**
	 * 根据用户编号查询用户
	 * 
	 * @param userCode
	 * @return
	 */
	public SysUser findUserByUserCode(String userCode);

	/**
	 * 根据用户Id查询用户
	 * 
	 * @param uuId
	 * @return
	 */
	public SysUser findUserById(Long uuId);

	/**
	 * 根据用户编号或者用户呢称查询用户
	 * 
	 * @param userCodeOrNickName
	 * @return
	 */
	public SysUser findUserByUserCodeOrNickName(String userCodeOrNickName);

	/**
	 * 根据用户编号查询用户角色列表
	 * 
	 * @param userCode
	 * @return
	 */
	public Collection<SysRole> findRolesByUserCode(String userCode);

	/**
	 * 修改用户密码
	 * 
	 * @param uuId
	 * @param userNewPwd
	 */
	public void updateUserPwd(Long uuId, String userNewPwd);

	/**
	 * 根据菜单ID列表查询对应的菜单
	 * 
	 * @param menuIds
	 * @return
	 */
	public Collection<SysMenu> findMenusByListId(String menuIds);

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
	 * 获取授权码
	 * 
	 * @return
	 */
	public String getLicences();

	/**
	 * 获取服务器地址
	 * 
	 * @return
	 */
	public String getServerAddr();
}
