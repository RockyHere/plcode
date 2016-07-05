package com.yanbang.config.service;

/**
 * 服务层接口
 * 
 * 系统参数服务接口
 * 
 * @author Tong Baojun
 * 
 */
public interface ISysConfigService {
	/**
	 * 系统授权码
	 */
	public static final String SOFT_LICENCES = "SYS_LICENCES";
	/**
	 * 服务器地址
	 */
	public static final String SERVER_ADDRESS = "SERVER_ADDRESS";

	/**
	 * 根据键查询对应值
	 * 
	 * @param key
	 * @return
	 */
	public String findValueBykey(String key);
}
