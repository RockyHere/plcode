package com.yanbang.flow.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * @title 流程模型
 * 
 *        工作流实例
 * @version 1.0
 * @author 徐春福
 * 
 */
@XmlRootElement(name = "WorkFlowInstances")
@XmlType(name = "WorkFlowInstance")
@XmlAccessorType(XmlAccessType.FIELD)
public class WorkFlowInstance implements Serializable {
	private static final long serialVersionUID = -4941219880958777127L;

	/**
	 * 自动产生业务编号
	 */
	@XmlElement(name = "processId")
	private String processId;
	/**
	 * 流程编号
	 */
	@XmlElement(name = "flowId")
	private String flowId;
	/**
	 * 流程名称
	 */
	@XmlElement(name = "flowName")
	private String flowName;
	/**
	 * 流程关键字
	 */
	@XmlElement(name = "flowKey")
	private String flowKey;
	/**
	 * 流程的部署编号
	 */
	@XmlElement(name = "deployId")
	private String deployId;
	/**
	 * 启动时间
	 */
	@XmlElement(name = "startDate")
	private String startDate;
	/**
	 * 流程启动人
	 */
	@XmlElement(name = "startUsr")
	private String startUsr;
	/**
	 * 流程类型
	 */
	@XmlElement(name = "flowType")
	private String flowType;
	/**
	 * 当前流程节点名称
	 */
	private String curFlowNodeName;
	/**
	 * 当前任务编号
	 */
	private String curTaskId;
	/**
	 * 当前任务执行者
	 */
	private String curTaskUserNickName;

	/**
	 * 流程实例状态
	 */
	private String status;
	/**
	 * 业务表单流水号
	 */
	private String bussiessId;
	/**
	 * 扩展字段1
	 */
	private String extendsField1;

	/**
	 * 扩展字段2
	 */
	private String extendsField2;
	/**
	 * 流程版本
	 */
	private String flowVersion;

	public String getProcessId() {
		return processId;
	}

	public void setProcessId(String processId) {
		this.processId = processId;
	}

	public String getFlowId() {
		return flowId;
	}

	public void setFlowId(String flowId) {
		this.flowId = flowId;
	}

	public String getFlowName() {
		return flowName;
	}

	public void setFlowName(String flowName) {
		this.flowName = flowName;
	}

	public String getDeployId() {
		return deployId;
	}

	public void setDeployId(String deployId) {
		this.deployId = deployId;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getStartUsr() {
		return startUsr;
	}

	public void setStartUsr(String startUsr) {
		this.startUsr = startUsr;
	}

	public String getFlowType() {
		return flowType;
	}

	public void setFlowType(String flowType) {
		this.flowType = flowType;
	}

	public String getCurFlowNodeName() {
		return curFlowNodeName;
	}

	public void setCurFlowNodeName(String curFlowNodeName) {
		this.curFlowNodeName = curFlowNodeName;
	}

	public String getCurTaskId() {
		return curTaskId;
	}

	public void setCurTaskId(String curTaskId) {
		this.curTaskId = curTaskId;
	}

	public String getCurTaskUserNickName() {
		return curTaskUserNickName;
	}

	public void setCurTaskUserNickName(String curTaskUserNickName) {
		this.curTaskUserNickName = curTaskUserNickName;
	}

	public String getFlowKey() {
		return flowKey;
	}

	public void setFlowKey(String flowKey) {
		this.flowKey = flowKey;
	}

	public String getBussiessId() {
		return bussiessId;
	}

	public void setBussiessId(String bussiessId) {
		this.bussiessId = bussiessId;
	}

	public String getExtendsField1() {
		return extendsField1;
	}

	public void setExtendsField1(String extendsField1) {
		this.extendsField1 = extendsField1;
	}

	public String getExtendsField2() {
		return extendsField2;
	}

	public void setExtendsField2(String extendsField2) {
		this.extendsField2 = extendsField2;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getFlowVersion() {
		return flowVersion;
	}

	public void setFlowVersion(String flowVersion) {
		this.flowVersion = flowVersion;
	}

}
