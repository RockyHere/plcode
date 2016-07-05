package com.yanbang.flow.entity;

import java.io.Serializable;

/**
 * 流程设计记录<br>
 * 
 * 存储流程设计的模板
 * 
 * @author 徐春福
 * 
 */
public class FlowDesign implements Serializable {
	private static final long serialVersionUID = 2070064107539480475L;
	/**
	 * 流程关键字（不指定关键字，默认是流程的名称）
	 */
	private String key;
	/**
	 * 流程名称
	 */
	private String name;
	/**
	 * 流程版本(如果没有版本，系统会自动在部署的时候向上增加版本号)
	 */
	private Integer version;
	/**
	 * 流程的描述(在JBPM4.4中似乎不能直接保存流程的描述)
	 */
	private String description;
	/**
	 * 流程创建时间
	 */
	private String createdatetime;
	/**
	 * 流程设计者
	 */
	private String createusername;
	/**
	 * 流程状态（部署=1，未部署=0）
	 */
	private Integer status;
	/**
	 * 流程文件的存储路径
	 */
	private String path;
	/**
	 * 流程文件的内容
	 */
	private String content;

	/**
	 * 流程的备注信息（在本项目中存储是流程的创建信息）
	 */
	private String remark;
	/**
	 * 流程类型
	 */
	private String flowType;

	/**
	 * 流程部署编号
	 */
	private String deployId;

	/**
	 * 流程部署时间
	 */
	private String deployDatetime;

	/**
	 * 流程部署人
	 */
	private String deployUsername;

	public FlowDesign() {
	}

	public FlowDesign(String key) {
		this.key = key;
	}

	public FlowDesign(String key, String name, Integer version,
			String description, String createdatetime, String createusername,
			Integer status, String path, String content, String remark) {
		this.key = key;
		this.name = name;
		this.version = version;
		this.description = description;
		this.createdatetime = createdatetime;
		this.createusername = createusername;
		this.status = status;
		this.path = path;
		this.content = content;
		this.remark = remark;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getVersion() {
		return version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCreatedatetime() {
		return createdatetime;
	}

	public void setCreatedatetime(String createdatetime) {
		this.createdatetime = createdatetime;
	}

	public String getCreateusername() {
		return createusername;
	}

	public void setCreateusername(String createusername) {
		this.createusername = createusername;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getFlowType() {
		return flowType;
	}

	public void setFlowType(String flowType) {
		this.flowType = flowType;
	}

	public String getDeployId() {
		return deployId;
	}

	public void setDeployId(String deployId) {
		this.deployId = deployId;
	}

	public String getDeployDatetime() {
		return deployDatetime;
	}

	public void setDeployDatetime(String deployDatetime) {
		this.deployDatetime = deployDatetime;
	}

	public String getDeployUsername() {
		return deployUsername;
	}

	public void setDeployUsername(String deployUsername) {
		this.deployUsername = deployUsername;
	}

}
