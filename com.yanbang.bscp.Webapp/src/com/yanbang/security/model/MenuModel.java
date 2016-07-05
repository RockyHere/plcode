package com.yanbang.security.model;

import java.util.ArrayList;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import com.yanbang.security.entity.SysMenu;

/**
 * 菜单域对象
 * 
 * @author Tong Baojun
 * 
 */
@XmlRootElement(name = "MenuModels")
@XmlType(name = "MenuModel")
@XmlAccessorType(XmlAccessType.FIELD)
public class MenuModel extends SysMenu {
	private static final long serialVersionUID = -8528767957808547276L;
	/**
	 * 子菜单列表
	 */
	private ArrayList<MenuModel> childMenuList;

	public ArrayList<MenuModel> getChildMenuList() {
		return childMenuList;
	}

	public void setChildMenuList(ArrayList<MenuModel> childMenuList) {
		this.childMenuList = childMenuList;
	}

}
