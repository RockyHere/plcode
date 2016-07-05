package com.yanbang.security.model;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import com.yanbang.security.entity.SysEmployee;

/**
 * 员工对象(补充)
 * 
 * @author solovejack
 * 
 */
@XmlRootElement(name = "EmpModel")
@XmlType(name = "EmpModel")
@XmlAccessorType(XmlAccessType.FIELD)
public class EmpModel extends SysEmployee {

	/**
	 * 
	 */
	private static final long serialVersionUID = 750975960961948737L;

	/**
	 * 员工对应岗位数量
	 */
	private Integer postNum;

	public Integer getPostNum() {
		return postNum;
	}

	public void setPostNum(Integer postNum) {
		this.postNum = postNum;
	}
}
