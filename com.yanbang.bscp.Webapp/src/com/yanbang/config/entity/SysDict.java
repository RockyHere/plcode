package com.yanbang.config.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * 数据字典实体
 * 
 * @author Tong Baojun
 * 
 */
@XmlRootElement(name = "SysDicts")
@XmlType(name = "SysDict")
@XmlAccessorType(XmlAccessType.FIELD)
public class SysDict implements Serializable {
	private static final long serialVersionUID = -3603844444881060279L;
	/**
	 * 词条编号
	 */
	@XmlElement(name = "dictCode")
	private Long dictCode;
	/**
	 * 词条关键字
	 */
	@XmlElement(name = "dictKey")
	private String dictKey;
	/**
	 * 词条名称
	 */
	@XmlElement(name = "dictName")
	private String dictName;
	/**
	 * 词条描述
	 */
	@XmlElement(name = "dictDesc")
	private String dictDesc;
	/**
	 * 词条等级
	 */
	@XmlElement(name = "dictGrade")
	private Integer dictGrade;
	/**
	 * 上级词条编号
	 */
	@XmlElement(name = "dictParentId")
	private Long dictParentId;
	/**
	 * 排序字段
	 */
	@XmlElement(name = "orderKey")
	private Integer orderKey;
	/**
	 * 使用状态（0:未使用；1:已使用）
	 */
	@XmlElement(name = "useStatus")
	private Integer useStatus;

	public Long getDictCode() {
		return dictCode;
	}

	public void setDictCode(Long dictCode) {
		this.dictCode = dictCode;
	}

	public String getDictKey() {
		return dictKey;
	}

	public void setDictKey(String dictKey) {
		this.dictKey = dictKey;
	}

	public String getDictName() {
		return dictName;
	}

	public void setDictName(String dictName) {
		this.dictName = dictName;
	}

	public String getDictDesc() {
		return dictDesc;
	}

	public void setDictDesc(String dictDesc) {
		this.dictDesc = dictDesc;
	}

	public Integer getDictGrade() {
		return dictGrade;
	}

	public void setDictGrade(Integer dictGrade) {
		this.dictGrade = dictGrade;
	}

	public Long getDictParentId() {
		return dictParentId;
	}

	public void setDictParentId(Long dictParentId) {
		this.dictParentId = dictParentId;
	}

	public Integer getOrderKey() {
		return orderKey;
	}

	public void setOrderKey(Integer orderKey) {
		this.orderKey = orderKey;
	}

	public Integer getUseStatus() {
		return useStatus;
	}

	public void setUseStatus(Integer useStatus) {
		this.useStatus = useStatus;
	}

}
