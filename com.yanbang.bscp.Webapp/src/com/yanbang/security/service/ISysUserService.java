package com.yanbang.security.service;

import java.util.Collection;

import com.yanbang.page.Page;
import com.yanbang.security.entity.SysUser;

/**
 * 服务层接口
 * 
 * 用户服务接口
 * 
 * @author Tong Baojun
 * 
 */
public interface ISysUserService {
	/**
	 * 查询所有用户
	 * 
	 * @param user
	 * @return
	 */
	public Collection<SysUser> findAllUsers(SysUser user);

	/**
	 * 查询用户信息
	 * 
	 * @param page
	 * @param user
	 *            动态查询条件
	 * @return
	 */
	public Page<SysUser> findAllUsers(Page<SysUser> page, SysUser user);

	/**
	 * 根据用户Id查询用户
	 * 
	 * @param uuId
	 * @return
	 */
	public SysUser findUserById(Long uuId);

	/**
	 * 根据用户编号查询用户
	 * 
	 * @param userCode
	 * @return
	 */
	public SysUser findUserByUserCode(String userCode);

	/**
	 * 根据用户编号或者用户呢称查询用户
	 * 
	 * @param userCodeOrNickName
	 * @return
	 */
	public SysUser findUserByUserCodeOrNickName(String userCodeOrNickName);

	/**
	 * 查询最大用户编号
	 * 
	 * @return
	 */
	public Long findUserMaxCode();

	/**
	 * 保存用户
	 * 
	 * @param user
	 */
	public void saveUser(SysUser user);

	/**
	 * 更新用户信息
	 * 
	 * <br>
	 * 更新内容:用户名称,用户呢称,类型,状态,备注,电话,邮箱
	 * 
	 * @param uuId
	 * @param user
	 */
	public void updateUser(Long uuId, SysUser user);

	/**
	 * 修改用户密码
	 * 
	 * @param uuId
	 * @param userNewPwd
	 */
	public void updateUserPwd(Long uuId, String userNewPwd);
	
	/**
	 * 修改用户密码
	 * 
	 * @param userCode 编码
	 * @param userNewPwd 密码
	 */
	public void updateUserPwd(String userCode, String userNewPwd);

	/**
	 * 删除用户信息
	 * 
	 * @param userCode
	 */
	public void deleteUser(String userCode);

	/**
	 * 删除用户的角色关系
	 * 
	 * @param userCode
	 */
	public void deleteUserRole(String userCode);

	/**
	 * 保存用户的角色关系
	 * 
	 * @param userCode
	 * @param roleIds
	 */
	public void saveUserRole(String userCode, String roleIds);

	/**
	 * 根据角色值查询对应的用户
	 * 
	 * @param roleValue
	 * @return
	 */
	public Collection<SysUser> findUserByRole(String roleValue);

	/**
	 * 查询所有用户
	 * 
	 * @return
	 */
	public Collection<SysUser> findAllUsers();
	
	/**
	 * 验证密码
	 * @param userCode
	 * @param userPwd
	 * @return
	 */
	public boolean invalidPwd(String userCode,String userPwd);
}
