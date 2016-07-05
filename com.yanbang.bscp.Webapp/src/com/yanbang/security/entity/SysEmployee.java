package com.yanbang.security.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
/**
 *员工信息实体 
 * 
 * @author yechuncheng
 *
 */
@XmlRootElement(name = "SysEmployees")
@XmlType(name = "SysEmployee")
@XmlAccessorType(XmlAccessType.FIELD)
public class SysEmployee implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3288623058919026461L;
	/**
	 * 流水号
	 */
	@XmlElement(name = "uuid")
	private String uuid="";
	/**
	 * 组织机构ID
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
	 * 职位id
	 */
	@XmlElement(name = "jobId")
	private String jobId="";
	/**
	 * 职位名称
	 */
	@XmlElement(name = "jobName")
	private String jobName="";
	/**
	 * 职位代码
	 */
	@XmlElement(name = "jobCode")
	private String jobCode="";
	/**
	 * 岗位id
	 */
	@XmlElement(name = "postId")
	private String postId="";
	/**
	 * 岗位代码
	 */
	@XmlElement(name = "postCode")
	private String postCode="";
	/**
	 * 岗位名称
	 */
	@XmlElement(name = "postName")
	private String postName="";
	/**
	 * 员工编号
	 */
	@XmlElement(name = "empNo")
	private String empNo="";
	/**entrydate
	 * 员工名字
	 */
	@XmlElement(name = "empName")
	private String empName="";
	/**
	 * 员工性别
	 */
	@XmlElement(name = "sex")
	private String sex="";
	/**
	 * 员工生日
	 */
	@XmlElement(name = "birthday")
	private String birthday="";
	/**
	 * 员工身份证号码
	 */
	@XmlElement(name = "card")
	private String card="";
	/**
	 * 员工电话
	 */
	@XmlElement(name = "telephone")
	private String telephone="";
	/**
	 * 学历	A:博士B 硕士C 本科D 大专E技工F初中G其他
	 */
	@XmlElement(name = "degress")
	private String degress="";
	/**
	 * 入职时间
	 */
	@XmlElement(name = "entryDate")
	private String entryDate="";
	/**
	 * 毕业院校
	 */
	@XmlElement(name = "college")
	private String college="";
	/**
	 * 有效标识（0.无效  1，。有效）
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
	/**
	 * 电子邮箱
	 */
	@XmlElement(name = "email")
	private String email="";
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
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
	public String getJobId() {
		return jobId;
	}
	public void setJobId(String jobId) {
		this.jobId = jobId;
	}
	public String getJobName() {
		return jobName;
	}
	public void setJobName(String jobName) {
		this.jobName = jobName;
	}
	public String getJobCode() {
		return jobCode;
	}
	public void setJobCode(String jobCode) {
		this.jobCode = jobCode;
	}
	public String getPostId() {
		return postId;
	}
	public void setPostId(String postId) {
		this.postId = postId;
	}
	public String getPostCode() {
		return postCode;
	}
	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}
	public String getPostName() {
		return postName;
	}
	public void setPostName(String postName) {
		this.postName = postName;
	}
	public String getEmpNo() {
		return empNo;
	}
	public void setEmpNo(String empNo) {
		this.empNo = empNo;
	}
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public String getCard() {
		return card;
	}
	public void setCard(String card) {
		this.card = card;
	}
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	public String getDegress() {
		return degress;
	}
	public void setDegress(String degress) {
		this.degress = degress;
	}
	public String getEntryDate() {
		return entryDate;
	}
	public void setEntryDate(String entryDate) {
		this.entryDate = entryDate;
	}
	public String getCollege() {
		return college;
	}
	public void setCollege(String college) {
		this.college = college;
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
