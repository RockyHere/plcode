package com.yanbang.flow.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * 历史记录信息
 * 
 * @author 徐春福
 * 
 *         对应数据库表：soa_flow_hist_form
 */
@XmlRootElement(name = "WorkFLowHistoryForms")
@XmlType(name = "WorkFLowHistoryForm")
@XmlAccessorType(XmlAccessType.FIELD)
public class WorkFLowHistoryForm implements Serializable {
	private static final long serialVersionUID = 737544276187113271L;
	@XmlElement(name = "flowInstanceId")
	private String flowInstanceId;
	@XmlElement(name = "unitCode")
	private String unitCode;
	@XmlElement(name = "flowId")
	private String flowId;
	@XmlElement(name = "flowDBID")
	private String flowDBID;
	@XmlElement(name = "lastTaskId")
	private long lastTaskId;
	@XmlElement(name = "lastNodeRoleKey")
	private String lastNodeRoleKey;
	@XmlElement(name = "lastNodeUserNickName")
	private String lastNodeUserNickName;
	@XmlElement(name = "lastNodeName")
	private String lastNodeName;
	@XmlElement(name = "dbVersion")
	private String dbVersion;
	@XmlElement(name = "hisactinst")
	private String hisactinst;

	public String getFlowInstanceId() {
		return flowInstanceId;
	}

	public void setFlowInstanceId(String flowInstanceId) {
		this.flowInstanceId = flowInstanceId;
	}

	public String getUnitCode() {
		return unitCode;
	}

	public void setUnitCode(String unitCode) {
		this.unitCode = unitCode;
	}

	public String getFlowId() {
		return flowId;
	}

	public void setFlowId(String flowId) {
		this.flowId = flowId;
	}

	public String getFlowDBID() {
		return flowDBID;
	}

	public void setFlowDBID(String flowDBID) {
		this.flowDBID = flowDBID;
	}

	public long getLastTaskId() {
		return lastTaskId;
	}

	public void setLastTaskId(long lastTaskId) {
		this.lastTaskId = lastTaskId;
	}

	public String getLastNodeRoleKey() {
		return lastNodeRoleKey;
	}

	public void setLastNodeRoleKey(String lastNodeRoleKey) {
		this.lastNodeRoleKey = lastNodeRoleKey;
	}

	public String getLastNodeUserNickName() {
		return lastNodeUserNickName;
	}

	public void setLastNodeUserNickName(String lastNodeUserNickName) {
		this.lastNodeUserNickName = lastNodeUserNickName;
	}

	public String getLastNodeName() {
		return lastNodeName;
	}

	public void setLastNodeName(String lastNodeName) {
		this.lastNodeName = lastNodeName;
	}

	public String getDbVersion() {
		return dbVersion;
	}

	public void setDbVersion(String dbVersion) {
		this.dbVersion = dbVersion;
	}

	public String getHisactinst() {
		return hisactinst;
	}

	public void setHisactinst(String hisactinst) {
		this.hisactinst = hisactinst;
	}

}
