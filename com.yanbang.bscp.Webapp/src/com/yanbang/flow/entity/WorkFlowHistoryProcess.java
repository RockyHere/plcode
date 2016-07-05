package com.yanbang.flow.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * 历史实例的过程信息
 * 
 * @author 徐春福
 * 
 *         对应数据库表：soa_flow__HIST_PROCINST
 */
@XmlRootElement(name = "WorkFlowHistoryProcesss")
@XmlType(name = "WorkFlowHistoryProcess")
@XmlAccessorType(XmlAccessType.FIELD)
public class WorkFlowHistoryProcess implements Serializable {
	private static final long serialVersionUID = -1898665432432309953L;
	/**
	 * 结束活动名称
	 */
	@XmlElement(name = "endActivityName")
	private String endActivityName;
	/**
	 * 开始时间
	 */
	@XmlElement(name = "startTime")
	private String startTime;
	/**
	 * 结束时间
	 */
	@XmlElement(name = "endTime")
	private String endTime;
	/**
	 * 间隔时间 单位天
	 */
	@XmlElement(name = "duration")
	private String duration;
	/**
	 * 实例编号
	 */
	@XmlElement(name = "instanceId")
	private String instanceId;
	/**
	 * 流程关键字
	 */
	@XmlElement(name = "key")
	private String key;
	/**
	 * 流程名称
	 */
	@XmlElement(name = "flowName")
	private String flowName;
	/**
	 * 流程部署编号
	 */
	@XmlElement(name = "definitionId")
	private String definitionId;
	/**
	 * 流程实例状态
	 * 
	 * STATE_ACTIVE 活动|STATE_ENDED 结束
	 */
	@XmlElement(name = "state")
	private String state;
	/**
	 * 流程类型编号
	 */
	@XmlElement(name = "flowTypeId")
	private String flowTypeId;
	/**
	 * 流程类型名称
	 */
	@XmlElement(name = "flowTypeName")
	private String flowTypeName;

	/**
	 * 流程版本
	 */
	@XmlElement(name = "version")
	private String version;

	public String getEndActivityName() {
		return endActivityName;
	}

	public void setEndActivityName(String endActivityName) {
		this.endActivityName = endActivityName;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getInstanceId() {
		return instanceId;
	}

	public void setInstanceId(String instanceId) {
		this.instanceId = instanceId;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public String getDefinitionId() {
		return definitionId;
	}

	public void setDefinitionId(String definitionId) {
		this.definitionId = definitionId;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getFlowTypeId() {
		return flowTypeId;
	}

	public void setFlowTypeId(String flowTypeId) {
		this.flowTypeId = flowTypeId;
	}

	public String getFlowTypeName() {
		return flowTypeName;
	}

	public void setFlowTypeName(String flowTypeName) {
		this.flowTypeName = flowTypeName;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public String getFlowName() {
		return flowName;
	}

	public void setFlowName(String flowName) {
		this.flowName = flowName;
	}

}
