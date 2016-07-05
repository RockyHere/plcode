package com.yanbang.flow.jpdl;

import java.util.HashMap;
import java.util.Map;

import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

/**
 * JPDL XML 文件的解析
 * 
 * 读取文件的内容，或者获取流程的配置的基本信息
 * 
 * @author 徐春福
 * 
 */
public class JpdlXMLParser {
	/**
	 * 流程版本
	 */
	public static final String FLOW_VERSTION = "version";
	/**
	 * 流程关键字
	 */
	public static final String FLOW_KEY = "key";
	/**
	 * 流程名称
	 */
	public static final String FLOW_NAME = "name";
	/**
	 * 流程描述
	 */
	public static final String FLOW_DESCRIPTION = "description";
	/**
	 * 流程所属单位
	 */
	public static final String FLOW_UNIT_ID = "flowUnitId";
	/**
	 * 流程类型
	 */
	public static final String FLOW_TYPE = "flowtype";

	/**
	 * 获取流程的定义信息
	 * 
	 * @param jpdlFilePath
	 *            流程文件的存储路径
	 * @return
	 */
	public static Map<String, Object> getFlowInfo(String jpdlFilePath) {
		Map<String, Object> map = new HashMap<String, Object>();
		try {
			SAXReader reader = new SAXReader();
			Document document = reader.read(jpdlFilePath);
			Element root = document.getRootElement();
			map.put(FLOW_VERSTION, root.attributeValue("version"));
			map.put(FLOW_KEY, root.attributeValue("key"));
			map.put(FLOW_NAME, root.attributeValue("name"));
			map.put(FLOW_DESCRIPTION, root.attributeValue("description"));
			map.put(FLOW_UNIT_ID, root.attributeValue("flowUnitId"));
			map.put(FLOW_TYPE,root.attributeValue("flowtype"));
			return map;
		} catch (Exception ex) {
			throw new RuntimeException("解析流程文件失败");
		}
	}

	/**
	 * 获取流程文件内容信息
	 * 
	 * @param jpdlFilePath
	 *            流程文件的存储路径
	 * @return
	 */
	public static String getFlowFileContent(String jpdlFilePath) {
		try {
			SAXReader reader = new SAXReader();
			Document document = reader.read(jpdlFilePath);
			return document.asXML();
		} catch (Exception ex) {
			throw new RuntimeException("解析流程文件失败");
		}
	}
}
