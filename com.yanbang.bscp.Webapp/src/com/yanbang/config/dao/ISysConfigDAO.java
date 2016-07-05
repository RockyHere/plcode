package com.yanbang.config.dao;

/**
 * 持久层接口
 * 
 * 系统参数DAO接口
 * 
 * @author Tong Baojun
 * 
 */
public interface ISysConfigDAO {
	/**
	 * 根据键查询对应值
	 * 
	 * @param key
	 * @return
	 */
	public String findValueBykey(String key);
}
