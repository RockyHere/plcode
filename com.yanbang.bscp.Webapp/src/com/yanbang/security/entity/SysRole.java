package com.yanbang.security.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * 系统角色实体
 * 
 * @author Tong Baojun
 * 
 */
@XmlRootElement(name = "SysRoles")
@XmlType(name = "SysRole")
@XmlAccessorType(XmlAccessType.FIELD)
public class SysRole implements Serializable {
	private static final long serialVersionUID = -3146667493538774225L;
	/**
	 * 角色编号
	 */
	@XmlElement(name = "roleCode")
	private Long roleCode;
	/**
	 * 角色名称
	 */
	@XmlElement(name = "roleName")
	private String roleName;
	/**
	 * 角色备注
	 */
	@XmlElement(name = "roleRemark")
	private String roleRemark;
	/**
	 * 角色状态
	 */
	@XmlElement(name = "roleStatus")
	private Long roleStatus;
	/**
	 * 角色对应菜单列表
	 */
	@XmlElement(name = "roleMenus")
	private String roleMenus;
	/**
	 * 是否分配角色
	 */
	@XmlElement(name = "isChecked")
	private Integer isChecked;

	public Long getRoleCode() {
		return roleCode;
	}

	public void setRoleCode(Long roleCode) {
		this.roleCode = roleCode;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getRoleRemark() {
		return roleRemark;
	}

	public void setRoleRemark(String roleRemark) {
		this.roleRemark = roleRemark;
	}

	public String getRoleMenus() {
		return roleMenus;
	}

	public void setRoleMenus(String roleMenus) {
		this.roleMenus = roleMenus;
	}

	public Long getRoleStatus() {
		return roleStatus;
	}

	public void setRoleStatus(Long roleStatus) {
		this.roleStatus = roleStatus;
	}

	public Integer getIsChecked() {
		return isChecked;
	}

	public void setIsChecked(Integer isChecked) {
		this.isChecked = isChecked;
	}

}
