package com.yanbang.base.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * 金融机构实体
 * 
 * @author zhouyibin
 * 
 */
@XmlRootElement(name = "BaseFinances")
@XmlType(name = "BaseFinance")
@XmlAccessorType(XmlAccessType.FIELD)
public class BaseFinance implements Serializable {

	private static final long serialVersionUID = 4611123760316590055L;

	/**
	 * 主键
	 */
	@XmlElement(name = "bas_financialins_id")
	private String bas_financialins_id = "";
	
	/**
	 * 编码
	 */
	@XmlElement(name = "financialins_code")
	private String financialins_code = "";

	/**
	 * 名称
	 */
	@XmlElement(name = "financialins_name")
	private String financialins_name = "";

	/**
	 * 地址
	 */
	@XmlElement(name = "financialins_addr")
	private String financialins_addr = "";

	/**
	 * 电话
	 */
	@XmlElement(name = "tel")
	private String tel = "";

	/**
	 * 传真
	 */
	@XmlElement(name = "tax")
	private String tax = "";

	/**
	 * 联系人
	 */
	@XmlElement(name = "link_man")
	private String link_man = "";

	/**
	 * 上级ID
	 */
	@XmlElement(name = "parentid")
	private String parentid = "";

	/**
	 * 上级名称
	 */
	@XmlElement(name = "parentname")
	private String parentname = "";

	/**
	 * 境内外 （境内，境外）
	 */
	@XmlElement(name = "in_flag")
	private String in_flag = "";

	/**
	 * 是否银行
	 */
	@XmlElement(name = "is_bank")
	private String is_bank = "";

	/**
	 * 集团内金融
	 */
	@XmlElement(name = "record_version")
	private String record_version = "";

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
	 * 更新时间
	 */
	@XmlElement(name = "updated_time_zone")
	private String updated_time_zone = "";

	/**
	 * 更新人
	 */
	@XmlElement(name = "updated_by_user")
	private String updated_by_user = "";

	/**
	 * 删除标志，0表示否，1表示是
	 */
	@XmlElement(name = "del_flag")
	private String del_flag = "";

	/**
	 * 有效标识，1表示有效，0表示无效
	 */
	@XmlElement(name = "useflag")
	private String useflag = "";

	/**
	 * 备注
	 */
	@XmlElement(name = "memo")
	private String memo = "";

	/**
	 * @return the bas_financialins_id
	 */
	public String getBas_financialins_id() {
		return bas_financialins_id;
	}

	/**
	 * @param bas_financialins_id the bas_financialins_id to set
	 */
	public void setBas_financialins_id(String bas_financialins_id) {
		this.bas_financialins_id = bas_financialins_id;
	}

	/**
	 * @return the financialins_code
	 */
	public String getFinancialins_code() {
		return financialins_code;
	}

	/**
	 * @param financialins_code the financialins_code to set
	 */
	public void setFinancialins_code(String financialins_code) {
		this.financialins_code = financialins_code;
	}

	/**
	 * @return the financialins_name
	 */
	public String getFinancialins_name() {
		return financialins_name;
	}

	/**
	 * @param financialins_name the financialins_name to set
	 */
	public void setFinancialins_name(String financialins_name) {
		this.financialins_name = financialins_name;
	}

	/**
	 * @return the financialins_addr
	 */
	public String getFinancialins_addr() {
		return financialins_addr;
	}

	/**
	 * @param financialins_addr the financialins_addr to set
	 */
	public void setFinancialins_addr(String financialins_addr) {
		this.financialins_addr = financialins_addr;
	}

	/**
	 * @return the tel
	 */
	public String getTel() {
		return tel;
	}

	/**
	 * @param tel the tel to set
	 */
	public void setTel(String tel) {
		this.tel = tel;
	}

	/**
	 * @return the tax
	 */
	public String getTax() {
		return tax;
	}

	/**
	 * @param tax the tax to set
	 */
	public void setTax(String tax) {
		this.tax = tax;
	}

	/**
	 * @return the link_man
	 */
	public String getLink_man() {
		return link_man;
	}

	/**
	 * @param link_man the link_man to set
	 */
	public void setLink_man(String link_man) {
		this.link_man = link_man;
	}

	/**
	 * @return the parentid
	 */
	public String getParentid() {
		return parentid;
	}

	/**
	 * @param parentid the parentid to set
	 */
	public void setParentid(String parentid) {
		this.parentid = parentid;
	}

	/**
	 * @return the parentname
	 */
	public String getParentname() {
		return parentname;
	}

	/**
	 * @param parentname the parentname to set
	 */
	public void setParentname(String parentname) {
		this.parentname = parentname;
	}

	/**
	 * @return the in_flag
	 */
	public String getIn_flag() {
		return in_flag;
	}

	/**
	 * @param in_flag the in_flag to set
	 */
	public void setIn_flag(String in_flag) {
		this.in_flag = in_flag;
	}

	/**
	 * @return the is_bank
	 */
	public String getIs_bank() {
		return is_bank;
	}

	/**
	 * @param is_bank the is_bank to set
	 */
	public void setIs_bank(String is_bank) {
		this.is_bank = is_bank;
	}

	/**
	 * @return the record_version
	 */
	public String getRecord_version() {
		return record_version;
	}

	/**
	 * @param record_version the record_version to set
	 */
	public void setRecord_version(String record_version) {
		this.record_version = record_version;
	}

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
	 * @return the updated_time_zone
	 */
	public String getUpdated_time_zone() {
		return updated_time_zone;
	}

	/**
	 * @param updated_time_zone the updated_time_zone to set
	 */
	public void setUpdated_time_zone(String updated_time_zone) {
		this.updated_time_zone = updated_time_zone;
	}

	/**
	 * @return the updated_by_user
	 */
	public String getUpdated_by_user() {
		return updated_by_user;
	}

	/**
	 * @param updated_by_user the updated_by_user to set
	 */
	public void setUpdated_by_user(String updated_by_user) {
		this.updated_by_user = updated_by_user;
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
