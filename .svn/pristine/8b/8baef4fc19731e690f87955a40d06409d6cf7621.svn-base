package com.yanbang.flow.entity;

import java.io.Serializable;
import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * 历史活动实例信息
 * 
 * @author 徐春福
 * 
 *         对应数据库表：soa_flow_hist_actinst
 */
@XmlRootElement(name = "WorkFlowHistoryActivitys")
@XmlType(name = "WorkFlowHistoryActivity")
@XmlAccessorType(XmlAccessType.FIELD)
public class WorkFlowHistoryActivity implements Serializable {
	private static final long serialVersionUID = -1898665432432309953L;
	/**
	 * 活动名称
	 */
	@XmlElement(name = "activityName")
	private String activityName;
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
	@XmlElement(name = "executionId")
	private String executionId;
	/**
	 * 关联名称
	 */
	@XmlElement(name = "transitionName")
	private List<String> transitionName;

	public String getActivityName() {
		return activityName;
	}

	public void setActivityName(String activityName) {
		this.activityName = activityName;
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

	public String getExecutionId() {
		return executionId;
	}

	public void setExecutionId(String executionId) {
		this.executionId = executionId;
	}

	public List<String> getTransitionName() {
		return transitionName;
	}

	public void setTransitionName(List<String> transitionName) {
		this.transitionName = transitionName;
	}

}
