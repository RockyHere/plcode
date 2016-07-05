package com.yanbang.security.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
/**
 * 岗位员工对应表
 * @author Administrator
 *
 */
@XmlRootElement(name = "PostEmps")
@XmlType(name = "PostEmp")
@XmlAccessorType(XmlAccessType.FIELD)
public class SysPostEmp implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -9095928154370387933L;
	/**
	 * 主键UUID
	 */
	@XmlElement(name = "uuid")
	private String uuid="";
	/**
	 * 岗位uuid
	 */
	@XmlElement(name = "postId")
	private String postId="";
	/**
	 * 员工uuid
	 */
	@XmlElement(name = "empId")
	private String empId="";
	
	public String getUuid() {
		return uuid;
	}
	
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public String getPostId() {
		return postId;
	}
	public void setPostId(String postId) {
		this.postId = postId;
	}
	public String getEmpId() {
		return empId;
	}
	public void setEmpId(String empId) {
		this.empId = empId;
	}
	
}
