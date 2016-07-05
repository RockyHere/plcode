package com.yanbang.flow.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * 历史任务信息
 * 
 * @author 徐春福
 * 
 *         对应数据库表：soa_flow__HIST_TASK
 */
@XmlRootElement(name = "WorkFlowHistoryTasks")
@XmlType(name = "WorkFlowHistoryTask")
@XmlAccessorType(XmlAccessType.FIELD)
public class WorkFlowHistoryTask implements Serializable {
	private static final long serialVersionUID = -1898665432432309953L;
	/**
	 * 任务分配人
	 */
	@XmlElement(name = "assignee")
	private String assignee;
	/**
	 * 创建时间
	 */
	@XmlElement(name = "createTime")
	private String createTime;
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
	 * 任务编号
	 */
	@XmlElement(name = "taskId")
	private String taskId;
	/**
	 * 关联
	 */
	@XmlElement(name = "outcome")
	private String outcome;
	/**
	 * 任务状态
	 * 
	 * STATE_COMPLETED 完成|STATE_OBSOLETE 废弃
	 */
	@XmlElement(name = "state")
	private String state;

	public String getAssignee() {
		return assignee;
	}

	public void setAssignee(String assignee) {
		this.assignee = assignee;
	}

	public String getCreateTime() {
		return createTime;
	}

	public void setCreateTime(String createTime) {
		this.createTime = createTime;
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

	public String getTaskId() {
		return taskId;
	}

	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}

	public String getOutcome() {
		return outcome;
	}

	public void setOutcome(String outcome) {
		this.outcome = outcome;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

}
