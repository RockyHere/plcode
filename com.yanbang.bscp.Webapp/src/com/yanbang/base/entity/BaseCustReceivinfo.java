package com.yanbang.base.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * 客户收货人实体
 * 
 * @author zhouyibin
 * 
 */
@XmlRootElement(name = "BaseCustReceivinfoS")
@XmlType(name = "BaseCustReceivinfo")
@XmlAccessorType(XmlAccessType.FIELD)
public class BaseCustReceivinfo implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -4787596941499021702L;
	
	/**
	 * 主键
	 */
	@XmlElement(name = "crm_cust_receivinfo_id")
	private String crm_cust_receivinfo_id = "";
	
	/**
	 * 客户编码
	 */
	@XmlElement(name = "cust_code")
	private String cust_code = "";
	
	/**
	 * 客户名称
	 */
	@XmlElement(name = "cust_name")
	private String cust_name = "";
	
	/**
	 * 收货人姓名
	 */
	@XmlElement(name = "receive_name")
	private String receive_name = "";
	
	/**
	 * 收货人身份证号
	 */
	@XmlElement(name = "receive_idcard")
	private String receive_idcard = "";
	
	/**
	 * 收货人固话
	 */
	@XmlElement(name = "receive_phone")
	private String receive_phone = "";
	
	/**
	 * 收货人移动电话
	 */
	@XmlElement(name = "receive_mobile")
	private String receive_mobile = "";
	
	/**
	 * 收货地址
	 */
	@XmlElement(name = "receive_addr")
	private String receive_addr = "";
	
	/**
	 * 收货详细地址
	 */
	@XmlElement(name = "receive_addr_detail")
	private String receive_addr_detail = "";
	
	/**
	 * 有效标记(0为无效1为有效)
	 */
	@XmlElement(name = "useflag")
	private String useflag = "";
	
	/**
	 * 删除标识（0、否，1、是）
	 */
	@XmlElement(name = "del_flag")
	private String del_flag = "";
	
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
	 * @return the crm_cust_receivinfo_id
	 */
	public String getCrm_cust_receivinfo_id() {
		return crm_cust_receivinfo_id;
	}

	/**
	 * @param crm_cust_receivinfo_id the crm_cust_receivinfo_id to set
	 */
	public void setCrm_cust_receivinfo_id(String crm_cust_receivinfo_id) {
		this.crm_cust_receivinfo_id = crm_cust_receivinfo_id;
	}

	/**
	 * @return the cust_code
	 */
	public String getCust_code() {
		return cust_code;
	}

	/**
	 * @param cust_code the cust_code to set
	 */
	public void setCust_code(String cust_code) {
		this.cust_code = cust_code;
	}

	/**
	 * @return the cust_name
	 */
	public String getCust_name() {
		return cust_name;
	}

	/**
	 * @param cust_name the cust_name to set
	 */
	public void setCust_name(String cust_name) {
		this.cust_name = cust_name;
	}

	/**
	 * @return the receive_name
	 */
	public String getReceive_name() {
		return receive_name;
	}

	/**
	 * @param receive_name the receive_name to set
	 */
	public void setReceive_name(String receive_name) {
		this.receive_name = receive_name;
	}

	/**
	 * @return the receive_idcard
	 */
	public String getReceive_idcard() {
		return receive_idcard;
	}

	/**
	 * @param receive_idcard the receive_idcard to set
	 */
	public void setReceive_idcard(String receive_idcard) {
		this.receive_idcard = receive_idcard;
	}

	/**
	 * @return the receive_phone
	 */
	public String getReceive_phone() {
		return receive_phone;
	}

	/**
	 * @param receive_phone the receive_phone to set
	 */
	public void setReceive_phone(String receive_phone) {
		this.receive_phone = receive_phone;
	}

	/**
	 * @return the receive_mobile
	 */
	public String getReceive_mobile() {
		return receive_mobile;
	}

	/**
	 * @param receive_mobile the receive_mobile to set
	 */
	public void setReceive_mobile(String receive_mobile) {
		this.receive_mobile = receive_mobile;
	}

	/**
	 * @return the receive_addr
	 */
	public String getReceive_addr() {
		return receive_addr;
	}

	/**
	 * @param receive_addr the receive_addr to set
	 */
	public void setReceive_addr(String receive_addr) {
		this.receive_addr = receive_addr;
	}

	/**
	 * @return the receive_addr_detail
	 */
	public String getReceive_addr_detail() {
		return receive_addr_detail;
	}

	/**
	 * @param receive_addr_detail the receive_addr_detail to set
	 */
	public void setReceive_addr_detail(String receive_addr_detail) {
		this.receive_addr_detail = receive_addr_detail;
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

	

}
