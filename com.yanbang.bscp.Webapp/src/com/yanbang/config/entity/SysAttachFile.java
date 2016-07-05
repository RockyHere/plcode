package com.yanbang.config.entity;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * 附件对象
 * 
 * @author Tong Baojun
 * 
 */
@XmlRootElement(name = "AttachFiles")
@XmlType(name = "AttachFile")
@XmlAccessorType(XmlAccessType.FIELD)
public class SysAttachFile implements Serializable {
	private static final long serialVersionUID = -1964985799654101508L;
	/**
	 * 附件流水号
	 */
	@XmlElement(name = "attachFileId")
	private Long attachFileId;
	/**
	 * 附件原始名称
	 */
	@XmlElement(name = "origFileName")
	private String origFileName;
	/**
	 * 目标相对路径
	 */
	@XmlElement(name = "relativeURL")
	private String relativeURL;
	/**
	 * 备注
	 */
	@XmlElement(name = "attachfileComment")
	private String attachfileComment;
	/**
	 * 上传人
	 */
	@XmlElement(name = "attachfileUser")
	private String attachfileUser;
	/**
	 * 上传时间
	 */
	@XmlElement(name = "attachfileTime")
	private String attachfileTime;

	public Long getAttachFileId() {
		return attachFileId;
	}

	public void setAttachFileId(Long attachFileId) {
		this.attachFileId = attachFileId;
	}

	public String getOrigFileName() {
		return origFileName;
	}

	public void setOrigFileName(String origFileName) {
		this.origFileName = origFileName;
	}

	public String getRelativeURL() {
		return relativeURL;
	}

	public void setRelativeURL(String relativeURL) {
		this.relativeURL = relativeURL;
	}

	public String getAttachfileComment() {
		return attachfileComment;
	}

	public void setAttachfileComment(String attachfileComment) {
		this.attachfileComment = attachfileComment;
	}

	public String getAttachfileUser() {
		return attachfileUser;
	}

	public void setAttachfileUser(String attachfileUser) {
		this.attachfileUser = attachfileUser;
	}

	public String getAttachfileTime() {
		return attachfileTime;
	}

	public void setAttachfileTime(String attachfileTime) {
		this.attachfileTime = attachfileTime;
	}

}
