package com.yanbang.flow.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * 历史记录细节信息
 * 
 * @author 徐春福
 * 
 *         对应数据库表：soa_flow__HIST_DETAIL
 */
@XmlRootElement(name = "WorkFlowHistoryDetails")
@XmlType(name = "WorkFlowHistoryDetail")
@XmlAccessorType(XmlAccessType.FIELD)
public class WorkFlowHistoryDetail implements Serializable {
	private static final long serialVersionUID = -1898665432432309953L;
	/**
	 * 编号
	 */
	@XmlElement(name = "id")
	private String id;
	/**
	 * 时间
	 */
	@XmlElement(name = "time")
	private String time;
	/**
	 * 用户编号
	 */
	@XmlElement(name = "userId")
	private String userId;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

}
