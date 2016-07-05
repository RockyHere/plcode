package com.yanbang.security.model;

import java.util.Collection;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import com.yanbang.security.entity.SysMenu;
import com.yanbang.security.entity.SysRole;

/**
 * 角色域对象
 * 
 * @author Tong Baojun
 * 
 */
@XmlRootElement(name = "RoleModels")
@XmlType(name = "RoleModel")
@XmlAccessorType(XmlAccessType.FIELD)
public class RoleModel extends SysRole {
	private static final long serialVersionUID = -4582774422667888601L;
	/**
	 * 角色对应的菜单列表
	 */
	@XmlElement(name = "menuList")
	private Collection<SysMenu> menuList;
	/**
	 * 角色对应的用户列表
	 */
	@XmlElement(name = "userList")
	private Collection<SysRole> userList;

	public Collection<SysMenu> getMenuList() {
		return menuList;
	}

	public void setMenuList(Collection<SysMenu> menuList) {
		this.menuList = menuList;
	}

	public Collection<SysRole> getUserList() {
		return userList;
	}

	public void setUserList(Collection<SysRole> userList) {
		this.userList = userList;
	}

}
