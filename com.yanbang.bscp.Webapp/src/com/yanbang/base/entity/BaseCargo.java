package com.yanbang.base.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * 货物类别实体
 * 
 * @author zhouyibin
 * 
 */
@XmlRootElement(name = "BaseCargos")
@XmlType(name = "BaseCargo")
@XmlAccessorType(XmlAccessType.FIELD)
public class BaseCargo implements Serializable {

	private static final long serialVersionUID = 2136362832196610504L;

	/**
	 * 主键
	 */
	@XmlElement(name = "bas_cargo_class_id")
	private String bas_cargo_class_id = "";

	/**
	 * 货物分类编码
	 */
	@XmlElement(name = "cargo_class_code")
	private String cargo_class_code = "cargo_class_code";

	/**
	 * 货物分类名称
	 */
	@XmlElement(name = "cargo_class_name")
	private String cargo_class_name = "";

	/**
	 * 分类英文名
	 */
	@XmlElement(name = "cargo_class_name_en")
	private String cargo_class_name_en = "";

	/**
	 * 上级货物ID
	 */
	@XmlElement(name = "parent_id")
	private String parent_id = "";

	/**
	 * 有效
	 */
	@XmlElement(name = "useflag")
	private String useflag = "";

	/**
	 * 创建人
	 */
	@XmlElement(name = "created_by_user")
	private String created_by_user = "";

	/**
	 * 创建时间
	 */
	@XmlElement(name = "created_time_zone")
	private String created_time_zone = "";

	/**
	 * 修改人
	 */
	@XmlElement(name = "updated_by_user")
	private String updated_by_user = "";

	/**
	 * 修改时间
	 */
	@XmlElement(name = "updated_by_time")
	private String updated_by_time = "";

	/**
	 * @return the bas_cargo_class_id
	 */
	public String getBas_cargo_class_id() {
		return bas_cargo_class_id;
	}

	/**
	 * @param bas_cargo_class_id
	 *            the bas_cargo_class_id to set
	 */
	public void setBas_cargo_class_id(String bas_cargo_class_id) {
		this.bas_cargo_class_id = bas_cargo_class_id;
	}

	/**
	 * @return the cargo_class_code
	 */
	public String getCargo_class_code() {
		return cargo_class_code;
	}

	/**
	 * @param cargo_class_code
	 *            the cargo_class_code to set
	 */
	public void setCargo_class_code(String cargo_class_code) {
		this.cargo_class_code = cargo_class_code;
	}

	/**
	 * @return the cargo_class_name
	 */
	public String getCargo_class_name() {
		return cargo_class_name;
	}

	/**
	 * @param cargo_class_name
	 *            the cargo_class_name to set
	 */
	public void setCargo_class_name(String cargo_class_name) {
		this.cargo_class_name = cargo_class_name;
	}

	/**
	 * @return the cargo_class_name_en
	 */
	public String getCargo_class_name_en() {
		return cargo_class_name_en;
	}

	/**
	 * @param cargo_class_name_en
	 *            the cargo_class_name_en to set
	 */
	public void setCargo_class_name_en(String cargo_class_name_en) {
		this.cargo_class_name_en = cargo_class_name_en;
	}

	/**
	 * @return the parent_id
	 */
	public String getParent_id() {
		return parent_id;
	}

	/**
	 * @param parent_id
	 *            the parent_id to set
	 */
	public void setParent_id(String parent_id) {
		this.parent_id = parent_id;
	}

	/**
	 * @return the useflag
	 */
	public String getUseflag() {
		return useflag;
	}

	/**
	 * @param useflag
	 *            the useflag to set
	 */
	public void setUseflag(String useflag) {
		this.useflag = useflag;
	}

	/**
	 * @return the created_by_user
	 */
	public String getCreated_by_user() {
		return created_by_user;
	}

	/**
	 * @param created_by_user
	 *            the created_by_user to set
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
	 * @param created_time_zone
	 *            the created_time_zone to set
	 */
	public void setCreated_time_zone(String created_time_zone) {
		this.created_time_zone = created_time_zone;
	}

	/**
	 * @return the updated_by_user
	 */
	public String getUpdated_by_user() {
		return updated_by_user;
	}

	/**
	 * @param updated_by_user
	 *            the updated_by_user to set
	 */
	public void setUpdated_by_user(String updated_by_user) {
		this.updated_by_user = updated_by_user;
	}

	/**
	 * @return the updated_by_time
	 */
	public String getUpdated_by_time() {
		return updated_by_time;
	}

	/**
	 * @param updated_by_time
	 *            the updated_by_time to set
	 */
	public void setUpdated_by_time(String updated_by_time) {
		this.updated_by_time = updated_by_time;
	}

}
