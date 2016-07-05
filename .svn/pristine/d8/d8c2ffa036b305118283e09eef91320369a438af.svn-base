package org.jasig.cas.client;

import java.util.ResourceBundle;

/**
 * 属性文件
 * 
 * @author Tong Baojun
 * 
 */
public class ResourceProperties {
	/**
	 * 根据属性的键读取属性文件值
	 * 
	 * @param path
	 *            属性文件的路径<br>
	 * 
	 *            <pre>
	 *           例如:getPropValues("xx/xx/XXX");
	 *           注意:路径一定要用/表示,或者\\表示路径;属性文件不能XXX.properties,直接写属性的文件名称
	 * </pre>
	 * @return 值数据
	 */
	public static String getPropValueByKey(String path, String key) {
		ResourceBundle rb = ResourceBundle.getBundle(path);
		return rb.getString(key).toString();
	}
}
