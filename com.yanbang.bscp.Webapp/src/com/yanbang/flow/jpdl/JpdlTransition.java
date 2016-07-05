package com.yanbang.flow.jpdl;

import java.awt.Point;
import java.util.ArrayList;
import java.util.List;

/**
 * XML转化为图片
 * 
 * 连接线
 * 
 * 描述两个功能图标之间的线的坐标
 * 
 * @author 徐春福
 * 
 */
public class JpdlTransition {
	private Point labelPosition;
	private List<Point> lineTrace = new ArrayList<Point>();
	private String label;
	private String to;

	public JpdlTransition(String label, String to) {
		this.label = label;
		this.to = to;
	}

	public Point getLabelPosition() {
		return labelPosition;
	}

	public void setLabelPosition(Point labelPosition) {
		this.labelPosition = labelPosition;
	}

	public List<Point> getLineTrace() {
		return lineTrace;
	}

	public void setLineTrace(List<Point> lineTrace) {
		this.lineTrace = lineTrace;
	}

	public void addLineTrace(Point lineTrace) {
		if (lineTrace != null) {
			this.lineTrace.add(lineTrace);
		}
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

}
