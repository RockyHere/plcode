package com.yanbang.flow.jpdl;

import java.io.File;
import java.io.FileWriter;

import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.io.OutputFormat;
import org.dom4j.io.XMLWriter;

/**
 * 将XML文件流转化为XML文件
 * 
 * 通过JBPM Web设计器得到生成的XML内容,转化为JPDL文件 *
 * 
 * @author 徐春福
 * 
 */
public class JpdlFileBuilder {

	/**
	 * 生成XML文件
	 * 
	 * @param strXML
	 *            需要写入的XML格式文件内容
	 * @param targetPath
	 *            生成的文件存储位置
	 * @return true :保存成功 false:保存失败
	 * @throws Exception
	 */
	public static boolean builderXMLFile(String strXML, String targetPath)
			throws Exception {
		try {
			Document doc = DocumentHelper.parseText(strXML);
			OutputFormat format = OutputFormat.createPrettyPrint();
			format.setEncoding("GB2312");
			XMLWriter writer = new XMLWriter(new FileWriter(
					new File(targetPath)), format);
			writer.write(doc);
			writer.close();
			return true;
		} catch (Exception ex) {
			throw new Exception(ex.getMessage());
		}
	}
}
