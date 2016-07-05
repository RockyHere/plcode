package com.yanbang.base.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * 客户企业类型实体
 * 
 * @author zhouyibin
 * 
 */
@XmlRootElement(name = "BaseCustEnterprisetypes")
@XmlType(name = "BaseCustEnterprisetype")
@XmlAccessorType(XmlAccessType.FIELD)
public class BaseCustEnterprisetype implements Serializable{

	private static final long serialVersionUID = 3735523332451050455L;
	
	/**
	 * 主键
	 */
	@XmlElement(name = "bas_enterprisetype_id")
	private String bas_enterprisetype_id = "";
	
	/**
	 * 编码
	 */
	@XmlElement(name = "enterprisetype_code")
	private String enterprisetype_code = "";
	
	/**
	 * 名称
	 */
	@XmlElement(name = "enterprisetype_name")
	private String enterprisetype_name = "";
	
	/**
	 * 创建时间
	 */
	@XmlElement(name = "created_time_zone")
	private String created_time_zone="";
	
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
	 * @return the bas_enterprisetype_id
	 */
	public String getBas_enterprisetype_id() {
		return bas_enterprisetype_id;
	}

	/**
	 * @param bas_enterprisetype_id the bas_enterprisetype_id to set
	 */
	public void setBas_enterprisetype_id(String bas_enterprisetype_id) {
		this.bas_enterprisetype_id = bas_enterprisetype_id;
	}

	/**
	 * @return the enterprisetype_code
	 */
	public String getEnterprisetype_code() {
		return enterprisetype_code;
	}

	/**
	 * @param enterprisetype_code the enterprisetype_code to set
	 */
	public void setEnterprisetype_code(String enterprisetype_code) {
		this.enterprisetype_code = enterprisetype_code;
	}

	/**
	 * @return the enterprisetype_name
	 */
	public String getEnterprisetype_name() {
		return enterprisetype_name;
	}

	/**
	 * @param enterprisetype_name the enterprisetype_name to set
	 */
	public void setEnterprisetype_name(String enterprisetype_name) {
		this.enterprisetype_name = enterprisetype_name;
	}

	

}
