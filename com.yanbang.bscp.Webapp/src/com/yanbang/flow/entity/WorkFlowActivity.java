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
 *        工作流活动
 * @version 1.0
 * @author 徐春福
 * 
 */
@XmlRootElement(name = "WorkFlowActivitys")
@XmlType(name = "WorkFlowActivity")
@XmlAccessorType(XmlAccessType.FIELD)
public class WorkFlowActivity implements Serializable {
	private static final long serialVersionUID = -8273316661699790064L;
	/**
	 * X坐标
	 */
	@XmlElement(name = "x")
	private int x;
	/**
	 * Y坐标
	 */
	@XmlElement(name = "y")
	private int y;
	/**
	 * 宽度
	 */
	@XmlElement(name = "width")
	private int width;
	/**
	 * 高度
	 */
	@XmlElement(name = "height")
	private int height;
	/**
	 * 节点类型
	 */
	@XmlElement(name = "nodeType")
	private String nodeType;
	/**
	 * 节点名称
	 */
	private String activeName;

	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public String getNodeType() {
		return nodeType;
	}

	public void setNodeType(String nodeType) {
		this.nodeType = nodeType;
	}

	public String getActiveName() {
		return activeName;
	}

	public void setActiveName(String activeName) {
		this.activeName = activeName;
	}

}
