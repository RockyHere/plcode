package com.yanbang.security.model;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * 用户角色对应域对象
 * 
 * @author Tong Baojun
 * 
 */
@XmlRootElement(name = "UserRoleModels")
@XmlType(name = "UserRoleModel")
@XmlAccessorType(XmlAccessType.FIELD)
public class UserRoleModel implements Serializable {
	private static final long serialVersionUID = -5978409473286647229L;
	/**
	 * 用户流水号
	 */
	@XmlElement(name = "UserUUId")
	private Long UserUUId;
	/**
	 * 角色编号
	 */
	@XmlElement(name = "roleCode")
	private Long roleCode;

	public Long getUserUUId() {
		return UserUUId;
	}

	public void setUserUUId(Long userUUId) {
		UserUUId = userUUId;
	}

	public Long getRoleCode() {
		return roleCode;
	}

	public void setRoleCode(Long roleCode) {
		this.roleCode = roleCode;
	}
}
