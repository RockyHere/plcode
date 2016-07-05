package com.yanbang.config.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * 系统参数配置
 * 
 * @author Tong Baojun
 * 
 */
@XmlRootElement(name = "SysConfigs")
@XmlType(name = "SysConfig")
@XmlAccessorType(XmlAccessType.FIELD)
public class SysConfig implements Serializable {
	private static final long serialVersionUID = -1497328251020285335L;
	/**
	 * 参数键
	 */
	@XmlElement(name = "syskey")
	private String syskey;
	/**
	 * 参数值
	 */
	@XmlElement(name = "sysValue")
	private String sysValue;
	/**
	 * 参数描述
	 */
	@XmlElement(name = "sysDesc")
	private String sysDesc;

	public String getSyskey() {
		return syskey;
	}

	public void setSyskey(String syskey) {
		this.syskey = syskey;
	}

	public String getSysValue() {
		return sysValue;
	}

	public void setSysValue(String sysValue) {
		this.sysValue = sysValue;
	}

	public String getSysDesc() {
		return sysDesc;
	}

	public void setSysDesc(String sysDesc) {
		this.sysDesc = sysDesc;
	}

}
