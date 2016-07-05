package com.yanbang.security.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yanbang.page.Page;
import com.yanbang.security.dao.ISysUserDAO;
import com.yanbang.security.entity.SysUser;
import com.yanbang.util.Md5Util;

@Service
@Transactional
public class ISysUserServiceImpl implements ISysUserService {
	@Autowired
	private ISysUserDAO sysUserDAO;

	@Override
	public Collection<SysUser> findAllUsers(SysUser user) {
		return sysUserDAO.findAllUsers(user);
	}

	@Override
	public Page<SysUser> findAllUsers(Page<SysUser> page, SysUser user) {
		return sysUserDAO.findAllUsers(page, user);
	}

	@Override
	public SysUser findUserById(Long uuId) {
		return sysUserDAO.findUserById(uuId);
	}

	@Override
	public SysUser findUserByUserCode(String userCode) {
		return sysUserDAO.findUserByUserCode(userCode);
	}

	@Override
	public SysUser findUserByUserCodeOrNickName(String userCodeOrNickName) {
		return sysUserDAO.findUserByUserCodeOrNickName(userCodeOrNickName);
	}

	@Override
	public Long findUserMaxCode() {
		return sysUserDAO.findUserMaxCode();
	}

	@Override
	public void saveUser(SysUser user) {
		sysUserDAO.saveUser(user);
	}

	@Override
	public void updateUser(Long uuId, SysUser user) {
		sysUserDAO.updateUser(uuId, user);
	}

	@Override
	public void updateUserPwd(Long uuId, String userNewPwd) {
		// md5加密
		userNewPwd = Md5Util.md5(userNewPwd);
		sysUserDAO.updateUserPwd(uuId, userNewPwd);
	}

	@Override
	public void updateUserPwd(String userCode, String userNewPwd) {
		// md5加密
		userNewPwd = Md5Util.md5(userNewPwd);
		sysUserDAO.updateUserPwd(userCode, userNewPwd);
	}

	@Override
	public void deleteUser(String userCode) {
		sysUserDAO.deleteUser(userCode);
	}

	@Override
	public void deleteUserRole(String userCode) {
		sysUserDAO.deleteUserRole(userCode);
	}

	@Override
	public void saveUserRole(String userCode, String roleIds) {
		sysUserDAO.saveUserRole(userCode, roleIds);
	}

	@Override
	public Collection<SysUser> findUserByRole(String roleValue) {
		return sysUserDAO.findUserByRole(roleValue);
	}

	@Override
	public Collection<SysUser> findAllUsers() {
		return sysUserDAO.findAllUsers();
	}

	@Override
	public boolean invalidPwd(String userCode, String userPwd) {
		return sysUserDAO.invalidPwd(userCode, userPwd);
	}
}
