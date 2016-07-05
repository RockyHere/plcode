package com.yanbang.security.model;

import java.util.Collection;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import com.yanbang.security.entity.SysUser;

/**
 * 用户域对象
 * 
 * @author Tong Baojun
 * 
 */
@XmlRootElement(name = "UserModels")
@XmlType(name = "UserModel")
@XmlAccessorType(XmlAccessType.FIELD)
public class UserModel extends SysUser {
	private static final long serialVersionUID = 5486559709729713193L;
	/**
	 * 用户的角色列表
	 */
	@XmlElement(name = "roleList")
	private Collection<RoleModel> roleList;

	public Collection<RoleModel> getRoleList() {
		return roleList;
	}

	public void setRoleList(Collection<RoleModel> roleList) {
		this.roleList = roleList;
	}

}
