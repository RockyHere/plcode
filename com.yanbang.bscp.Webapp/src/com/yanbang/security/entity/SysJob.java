package com.yanbang.security.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
/**
 * 职位信息实体
 * @autho yechuncheng
 */
@XmlRootElement(name = "SysJobs")
@XmlType(name = "SysJob")
@XmlAccessorType(XmlAccessType.FIELD)
public class SysJob implements Serializable{


	private static final long serialVersionUID = 2514903950138370162L;
	
	/**
	 * 主键UUID
	 */
	@XmlElement(name = "uuid")
	private String uuid="";
	
	/**
	 * 组织id
	 */
	@XmlElement(name = "orgId")
	private String orgId="";
	/**
	 * 组织代码
	 */
	@XmlElement(name = "orgCode")
	private String orgCode="";
	/**
	 * 组织名称
	 */
	@XmlElement(name = "orgName")
	private String orgName="";
	/**
	 * 职位代码
	 */
	@XmlElement(name = "jobCode")
	private String jobCode="";
	
	/**
	 * 职位名称
	 */
	@XmlElement(name = "jobName")
	private String jobName="";
	
	/**
	 * 有效标识
	 */
	@XmlElement(name = "useFlag")
	private String useFlag="";
	
	/**
	 * 备注
	 */
	@XmlElement(name = "comments")
	private String comments="";
	/**
	 * 更新人
	 */
	@XmlElement(name = "updateUser")
	private String updateUser="";
	
	/**
	 * 更新时间
	 */
	@XmlElement(name = "updateTime")
	private String updateTime="";
	
	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getOrgId() {
		return orgId;
	}

	public void setOrgId(String orgId) {
		this.orgId = orgId;
	}

	public String getOrgCode() {
		return orgCode;
	}

	public void setOrgCode(String orgCode) {
		this.orgCode = orgCode;
	}

	public String getOrgName() {
		return orgName;
	}

	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}

	public String getJobCode() {
		return jobCode;
	}

	public void setJobCode(String jobCode) {
		this.jobCode = jobCode;
	}

	public String getJobName() {
		return jobName;
	}

	public void setJobName(String jobName) {
		this.jobName = jobName;
	}

	public String getUseFlag() {
		return useFlag;
	}

	public void setUseFlag(String useFlag) {
		this.useFlag = useFlag;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getUpdateUser() {
		return updateUser;
	}

	public void setUpdateUser(String updateUser) {
		this.updateUser = updateUser;
	}

	public String getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(String updateTime) {
		this.updateTime = updateTime;
	}


	
}
