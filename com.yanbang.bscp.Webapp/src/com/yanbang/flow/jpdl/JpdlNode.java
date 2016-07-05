package com.yanbang.flow.jpdl;

import java.awt.Rectangle;
import java.util.ArrayList;
import java.util.List;

/**
 * XML转化为图片 XML中的结点
 * 
 * 解析JPDL XML文件中每个结点
 * 
 * @author 徐春福
 * 
 */
public class JpdlNode {
	private String name;
	private String type;
	private Rectangle rectangle;
	private List<JpdlTransition> transitions = new ArrayList<JpdlTransition>();

	public JpdlNode(String name, String type) {
		this.name = name;
		this.type = type;
	}

	public JpdlNode(String name, String type, int x, int y, int w, int h) {
		this.name = name;
		this.type = type;
		this.rectangle = new Rectangle(x, y, w, h);
	}

	public Rectangle getRectangle() {
		return rectangle;
	}

	public void setRectangle(Rectangle rectangle) {
		this.rectangle = rectangle;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void addTransition(JpdlTransition transition) {
		transitions.add(transition);
	}

	public List<JpdlTransition> getTransitions() {
		return transitions;
	}

	public void setTransitions(List<JpdlTransition> transitions) {
		this.transitions = transitions;
	}

	public int getX() {
		return rectangle.x;
	}

	public int getY() {
		return rectangle.y;
	}

	public int getCenterX() {
		return (int) rectangle.getCenterX();
	}

	public int getCenterY() {
		return (int) rectangle.getCenterY();
	}

	public int getWitdth() {
		return rectangle.width;
	}

	public int getHeight() {
		return rectangle.height;
	}
}
