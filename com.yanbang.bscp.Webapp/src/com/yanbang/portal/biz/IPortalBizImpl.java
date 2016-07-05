package com.yanbang.portal.biz;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.yanbang.config.service.ISysConfigService;
import com.yanbang.security.entity.SysMenu;
import com.yanbang.security.entity.SysRole;
import com.yanbang.security.entity.SysUser;
import com.yanbang.security.service.ISysMenuService;
import com.yanbang.security.service.ISysRoleService;
import com.yanbang.security.service.ISysUserService;

@Component
public class IPortalBizImpl implements IPortalBiz {
	@Autowired
	private ISysUserService sysUserService;
	@Autowired
	private ISysRoleService sysRoleService;
	@Autowired
	private ISysMenuService sysMenuService;
	@Autowired
	private ISysConfigService sysConfigService;

	@Override
	public SysUser findUserByUserCode(String userCode) {
		return sysUserService.findUserByUserCode(userCode);
	}

	@Override
	public SysUser findUserById(Long uuId) {
		return sysUserService.findUserById(uuId);
	}

	@Override
	public SysUser findUserByUserCodeOrNickName(String userCodeOrNickName) {
		return sysUserService.findUserByUserCodeOrNickName(userCodeOrNickName);
	}

	@Override
	public Collection<SysRole> findRolesByUserCode(String userCode) {
		return sysRoleService.findAllRoleByUserUUID(sysUserService
				.findUserByUserCode(userCode).getUuId());
	}

	@Override
	public void updateUserPwd(Long uuId, String userNewPwd) {
		sysUserService.updateUserPwd(uuId, userNewPwd);
	}

	@Override
	public Collection<SysMenu> findAllChildMenus(Long menuParentId,
			String menuIds) {
		return sysMenuService.findAllChildMenus(menuParentId, menuIds);
	}

	@Override
	public Collection<SysMenu> findMenusByListId(String menuIds) {
		return sysMenuService.findMenusByListId(menuIds);
	}

	@Override
	public String getLicences() {
		return sysConfigService.findValueBykey(ISysConfigService.SOFT_LICENCES);
	}

	@Override
	public String getServerAddr() {
		return sysConfigService
				.findValueBykey(ISysConfigService.SERVER_ADDRESS);
	}
}
