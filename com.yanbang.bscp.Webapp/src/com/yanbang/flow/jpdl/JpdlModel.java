package com.yanbang.flow.jpdl;

import java.awt.Point;
import java.io.InputStream;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.dom4j.Element;
import org.dom4j.io.SAXReader;

/**
 * XML转化为图片 JPDL XML文件模型
 * 
 * 利用SAX 解析整个XML文件
 * 
 * @author 徐春福
 * 
 */
public class JpdlModel {
	private Map<String, JpdlNode> nodes = new LinkedHashMap<String, JpdlNode>();
	public static final int RECT_OFFSET_X = -7;
	public static final int RECT_OFFSET_Y = -8;
	public static final int DEFAULT_PIC_SIZE = 48;

	private final static Map<String, Object> nodeInfos = new HashMap<String, Object>();
	static {
		nodeInfos.put("start", "start_empty.png");
		nodeInfos.put("end", "end.png");
		nodeInfos.put("end-cancel", "end-cancel.png");
		nodeInfos.put("end-error", "end-error.png");
		nodeInfos.put("decision", "decision.png");
		nodeInfos.put("fork", "fork.png");
		nodeInfos.put("join", "join.png");
		nodeInfos.put("state", "state.png");
		nodeInfos.put("hql", "hql.png");
		nodeInfos.put("sql", "sql.png");
		nodeInfos.put("java", "java.png");
		nodeInfos.put("script", "script.png");
		nodeInfos.put("task", "task.png");
		nodeInfos.put("sub-process", "sub-process.png");
		nodeInfos.put("custom", "custom.png");
		nodeInfos.put("foreach", "foreach.png");
		nodeInfos.put("jms", "jms.png");
		nodeInfos.put("mail", "jms.png");
		nodeInfos.put("rules", "rules.png");
		nodeInfos.put("rule-decision", "rule-decision.png");
		nodeInfos.put("stage", "stage.png"); 
	}

	public JpdlModel(InputStream is) throws Exception {
		this(new SAXReader().read(is).getRootElement());
	}

	@SuppressWarnings("unchecked")
	private JpdlModel(Element rootEl) throws Exception {
		for (Element el : (List<Element>) rootEl.elements()) {
			String type = el.getQName().getName();
			if (!nodeInfos.containsKey(type)) {
				continue;
			}
			String name = null;
			if (el.attribute("name") != null) {
				name = el.attributeValue("name");
			}
			String[] location = el.attributeValue("g").split(",");
			int x = Integer.parseInt(location[0]);
			int y = Integer.parseInt(location[1]);
			int w = Integer.parseInt(location[2]);
			int h = Integer.parseInt(location[3]);

			if (nodeInfos.get(type) != null) {
				w = DEFAULT_PIC_SIZE;
				h = DEFAULT_PIC_SIZE;
			} else {
				x -= RECT_OFFSET_X;
				y -= RECT_OFFSET_Y;
				w += (RECT_OFFSET_X + RECT_OFFSET_X);
				h += (RECT_OFFSET_Y + RECT_OFFSET_Y);
			}
			JpdlNode node = new JpdlNode(name, type, x, y, w, h);
			parserTransition(node, el);
			nodes.put(name, node);
		}
	}

	@SuppressWarnings("unchecked")
	private void parserTransition(JpdlNode node, Element nodeEl) {
		for (Element el : (List<Element>) nodeEl.elements("transition")) {
			String label = el.attributeValue("name");
			String to = el.attributeValue("to");
			JpdlTransition transition = new JpdlTransition(label, to);
			String g = el.attributeValue("g");
			if (g != null && g.length() > 0) {
				if (g.indexOf(":") < 0) {
					transition.setLabelPosition(getPoint(g));
				} else {
					String[] p = g.split(":");
					transition.setLabelPosition(getPoint(p[1]));
					String[] lines = p[0].split(";");
					for (String line : lines) {
						transition.addLineTrace(getPoint(line));
					}
				}
			}
			node.addTransition(transition);
		}
	}

	private Point getPoint(String exp) {
		if (exp == null || exp.length() == 0) {
			return null;
		}
		String[] p = exp.split(",");
		return new Point(Integer.valueOf(p[0]), Integer.valueOf(p[1]));
	}

	public Map<String, JpdlNode> getNodes() {
		return nodes;
	}

	public static Map<String, Object> getNodeInfos() {
		return nodeInfos;
	}
}
