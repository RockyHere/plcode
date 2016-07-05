package com.yanbang.base.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * 客户二级账号实体
 * 
 * @author zhouyibin
 * 
 */
@XmlRootElement(name = "BaseCustAccounts")
@XmlType(name = "BaseCustAccount")
@XmlAccessorType(XmlAccessType.FIELD)
public class BaseCustAccount implements Serializable{
	private static final long serialVersionUID = -7240645554847812451L;
	
	/**
	 * 主键
	 */
	@XmlElement(name = "crm_cust_account_id")
	private String crm_cust_account_id = "";
	
	/**
	 * 账号编码
	 */
	@XmlElement(name = "cust_account_no")
	private String cust_account_no = "";
	
	/**
	 * 账号名称
	 */
	@XmlElement(name = "cust_account_name")
	private String cust_account_name = "";
	
	/**
	 * @return the cust_account_name
	 */
	public String getCust_account_name() {
		return cust_account_name;
	}

	/**
	 * @param cust_account_name the cust_account_name to set
	 */
	public void setCust_account_name(String cust_account_name) {
		this.cust_account_name = cust_account_name;
	}

	/**
	 * 删除标志
	 */
	@XmlElement(name = "del_flag")
	private String del_flag = "";
	
	/**
	 * 有效标记(0为无效1为有效)
	 */
	@XmlElement(name = "useflag")
	private String useflag = "";
	
	/**
	 * 备注
	 */
	@XmlElement(name = "memo")
	private String memo = "";
	
	/**
	 * 父ID
	 */
	@XmlElement(name = "crm_cust_id")
	private String crm_cust_id = "";
	
	/**
	 * 创建时间
	 */
	@XmlElement(name = "created_time_zone")
	private String created_time_zone="";
	
	/**
	 * 创建者
	 */
	@XmlElement(name = "created_by_user")
	private String created_by_user="";
	
	/**
	 * @return the created_by_user
	 */
	public String getCreated_by_user() {
		return created_by_user;
	}

	/**
	 * @param created_by_user the created_by_user to set
	 */
	public void setCreated_by_user(String created_by_user) {
		this.created_by_user = created_by_user;
	}

	/**
	 * @return the created_time_zone
	 */
	public String getCreated_time_zone() {
		return created_time_zone;
	}

	/**
	 * @param created_time_zone the created_time_zone to set
	 */
	public void setCreated_time_zone(String created_time_zone) {
		this.created_time_zone = created_time_zone;
	}

	/**
	 * @return the crm_cust_id
	 */
	public String getCrm_cust_id() {
		return crm_cust_id;
	}

	/**
	 * @param crm_cust_id the crm_cust_id to set
	 */
	public void setCrm_cust_id(String crm_cust_id) {
		this.crm_cust_id = crm_cust_id;
	}

	/**
	 * @return the crm_cust_account_id
	 */
	public String getCrm_cust_account_id() {
		return crm_cust_account_id;
	}

	/**
	 * @param crm_cust_account_id the crm_cust_account_id to set
	 */
	public void setCrm_cust_account_id(String crm_cust_account_id) {
		this.crm_cust_account_id = crm_cust_account_id;
	}

	/**
	 * @return the cust_account_no
	 */
	public String getCust_account_no() {
		return cust_account_no;
	}

	/**
	 * @param cust_account_no the cust_account_no to set
	 */
	public void setCust_account_no(String cust_account_no) {
		this.cust_account_no = cust_account_no;
	}

	/**
	 * @return the del_flag
	 */
	public String getDel_flag() {
		return del_flag;
	}

	/**
	 * @param del_flag the del_flag to set
	 */
	public void setDel_flag(String del_flag) {
		this.del_flag = del_flag;
	}

	/**
	 * @return the useflag
	 */
	public String getUseflag() {
		return useflag;
	}

	/**
	 * @param useflag the useflag to set
	 */
	public void setUseflag(String useflag) {
		this.useflag = useflag;
	}

	/**
	 * @return the memo
	 */
	public String getMemo() {
		return memo;
	}

	/**
	 * @param memo the memo to set
	 */
	public void setMemo(String memo) {
		this.memo = memo;
	}

}
