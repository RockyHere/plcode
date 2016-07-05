package com.yanbang.security.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * 系统菜单实体
 * 
 * @author Tong Baojun
 * 
 */
@XmlRootElement(name = "SysMenus")
@XmlType(name = "SysMenu")
@XmlAccessorType(XmlAccessType.FIELD)
public class SysMenu implements Serializable {
	private static final long serialVersionUID = 4187987862132960660L;
	/**
	 * 菜单编号
	 */
	@XmlElement(name = "menuId")
	private Long menuId;
	/**
	 * 菜单名称
	 */
	@XmlElement(name = "menuName")
	private String menuName;
	/**
	 * 菜单地址
	 */
	@XmlElement(name = "menuURL")
	private String menuURL;
	/**
	 * 当前等级
	 */
	@XmlElement(name = "menuGrade")
	private Long menuGrade;
	/**
	 * 上级编号(顶级=-1)
	 */
	@XmlElement(name = "menuParentId")
	private Long menuParentId;
	/**
	 * 是否最后节点(0是1不是)
	 */
	@XmlElement(name = "menuIsLastNode")
	private Long menuIsLastNode;
	/**
	 * 菜单状态(0使用1不使用)
	 */
	@XmlElement(name = "menuStatus")
	private Long menuStatus;

	/**
	 * 排序字
	 */
	@XmlElement(name = "menuOrder")
	private Long menuOrder;

	/**
	 * 显示目标对象
	 */
	@XmlElement(name = "menuTarget")
	private String menuTarget;

	public Long getMenuId() {
		return menuId;
	}

	public void setMenuId(Long menuId) {
		this.menuId = menuId;
	}

	public String getMenuName() {
		return menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public String getMenuURL() {
		return menuURL;
	}

	public void setMenuURL(String menuURL) {
		this.menuURL = menuURL;
	}

	public Long getMenuGrade() {
		return menuGrade;
	}

	public void setMenuGrade(Long menuGrade) {
		this.menuGrade = menuGrade;
	}

	public Long getMenuParentId() {
		return menuParentId;
	}

	public void setMenuParentId(Long menuParentId) {
		this.menuParentId = menuParentId;
	}

	public Long getMenuIsLastNode() {
		return menuIsLastNode;
	}

	public void setMenuIsLastNode(Long menuIsLastNode) {
		this.menuIsLastNode = menuIsLastNode;
	}

	public Long getMenuStatus() {
		return menuStatus;
	}

	public void setMenuStatus(Long menuStatus) {
		this.menuStatus = menuStatus;
	}

	public Long getMenuOrder() {
		return menuOrder;
	}

	public void setMenuOrder(Long menuOrder) {
		this.menuOrder = menuOrder;
	}

	public String getMenuTarget() {
		return menuTarget;
	}

	public void setMenuTarget(String menuTarget) {
		this.menuTarget = menuTarget;
	}

}
